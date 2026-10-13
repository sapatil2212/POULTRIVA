import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ARTICLES, getArticle } from "@/data/articles";
import { getProduct } from "@/data/products";
import { Reveal } from "@/components/site/Reveal";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo(`${loaderData.article.title} | POULTRIVA`, loaderData.article.excerpt)
      : { meta: [{ title: "Article unavailable | POULTRIVA" }, { name: "robots", content: "noindex" }] },
  component: ArticlePage,
});

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const product = getProduct(a.relatedProduct);
  const others = ARTICLES.filter((x) => x.slug !== a.slug);
  return (
    <article className="pt-32 md:pt-40">
      <div className="container-x max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-10 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-navy">Home</Link>
          <span className="mx-2 text-gold">/</span>
          <Link to="/resources" className="hover:text-navy">Resources</Link>
        </nav>
        <Reveal>
          <p className="eyebrow">{a.category}</p>
          <h1 className="display-lg mt-6">{a.title}</h1>
          <p className="mt-6 text-xl text-muted-foreground">{a.excerpt}</p>
        </Reveal>
      </div>
      <div className="container-x mt-14">
        <div className="aspect-[21/9] overflow-hidden rounded-[var(--radius-photo)]">
          <img src={a.image} alt={a.imageAlt} width={1280} height={960} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="container-x grid max-w-5xl gap-14 py-20 lg:grid-cols-12">
        <div className="prose-article lg:col-span-8">
          {a.body.map((b, i) => (
            <div key={i}>
              {b.heading && <h2>{b.heading}</h2>}
              {b.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {b.list && <ul>{b.list.map((l) => <li key={l}>{l}</li>)}</ul>}
            </div>
          ))}
          <p className="mt-10 rounded-md bg-surface p-6 text-sm text-muted-foreground">
            This article is for general educational purposes and is not veterinary advice. Consult a qualified
            veterinarian or poultry nutrition professional for decisions about your flock.
          </p>
        </div>
        <aside className="lg:col-span-4">
          {product && (
            <div className="sticky top-32 rounded-md border border-border bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-cta">Related product</p>
              <p className="mt-2 text-2xl font-semibold text-navy">{product.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{product.shortDescription}</p>
              <Link to="/products/$slug" params={{ slug: product.slug }} className="link-underline mt-5 inline-flex items-center gap-2 pb-0.5 text-sm font-medium text-navy">
                View product <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </aside>
      </div>
      <section className="bg-surface py-20">
        <div className="container-x">
          <p className="eyebrow">Related articles</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} to="/resources/$slug" params={{ slug: o.slug }} className="group border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-cta">{o.category}</p>
                <h3 className="mt-2 text-2xl font-semibold transition-transform group-hover:translate-x-1">{o.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
