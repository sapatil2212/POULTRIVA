import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import { getProduct, PRODUCTS } from "@/data/products";
import { productWaMessage, waLink } from "@/data/site";
import { Reveal, MaskImage } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo(loaderData.product.seoTitle, loaderData.product.seoDescription)
      : { meta: [{ title: "Product not found | POULTRIVA" }, { name: "robots", content: "noindex" }] },
  component: ProductPage,
});

const PENDING = "Available on request";

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  const specs: [string, string | null][] = [
    ["Product", p.name],
    ["Category", p.category],
    ["Form", p.form],
    ["Composition", p.composition],
    ["Pack sizes", p.packSizes],
    ["Dosage", p.dosage],
    ["Storage", p.storage],
  ];
  return (
    <>
      <section className="pt-28 md:pt-36">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-navy">Home</Link>
            <span className="mx-2 text-gold">/</span>
            <Link to="/products" className="hover:text-navy">Products</Link>
            <span className="mx-2 text-gold">/</span>
            <span className="text-foreground">{p.name}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow">{p.index} · {p.category}</p>
              <h1 className="display-xl mt-5">{p.name}</h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">{p.shortDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/business-enquiries" className="btn-primary">Enquire Now <ArrowRight className="h-4 w-4" /></Link>
                <a href={waLink(productWaMessage(p.name))} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
                </a>
              </div>
            </Reveal>
            <div className="lg:col-span-6">
              <MaskImage src={p.image} alt={p.imageAlt} width={1280} height={960} eager className="aspect-[4/3] rounded-[var(--radius-photo)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Overview</p>
            <p className="mt-6 text-lg leading-relaxed text-foreground">{p.detailedDescription}</p>
            <h2 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em]">Applications</h2>
            <ul className="mt-6 space-y-4">
              {p.applications.map((a) => (
                <li key={a} className="flex gap-3 text-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold-cta" /> {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-md border border-border bg-card">
              <h2 className="border-b border-border px-7 py-5 text-sm font-semibold uppercase tracking-[0.2em]">Technical specifications</h2>
              <dl>
                {specs.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-5 gap-4 border-b border-border px-7 py-4 last:border-0">
                    <dt className="col-span-2 text-sm text-muted-foreground">{k}</dt>
                    <dd className={`col-span-3 text-sm ${v ? "font-medium text-navy" : "italic text-muted-foreground"}`}>{v ?? PENDING}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-6 rounded-md bg-surface p-7">
              <h3 className="text-base font-semibold">Product brochure</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Detailed composition, dosage and pack information is shared on request.
              </p>
              <a href={waLink(`Hello POULTRIVA, please share the product brochure for ${p.name}.`)} target="_blank" rel="noopener noreferrer" className="link-underline mt-4 inline-flex items-center gap-2 pb-0.5 text-sm font-medium text-navy">
                Request brochure on WhatsApp <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{p.disclaimer}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x">
          <p className="eyebrow">Related products</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-md bg-border md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="group bg-card p-8 transition-colors hover:bg-ivory">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-cta">{r.category}</span>
                <h3 className="mt-3 text-2xl font-semibold transition-transform group-hover:translate-x-1">{r.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{r.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA title={`Interested in`} accent={`${p.name}?`} copy="Request specifications, availability or commercial supply details from our team." />
    </>
  );
}
