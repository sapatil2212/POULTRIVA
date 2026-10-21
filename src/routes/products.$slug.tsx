import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import { getProduct, PRODUCTS } from "@/data/products";
import { productWaMessage, waLink } from "@/data/site";
import { Reveal, MaskImage } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FaqAccordion } from "@/components/site/FaqAccordion";
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
              <h1 className="display-xl mt-5">{p.name}</h1>
              {p.heroHeading && (
                <p className="serif-accent mt-3 text-xl text-gold-cta md:text-2xl">{p.heroHeading}</p>
              )}
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">{p.shortDescription}</p>
              {p.highlights && (
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-cta" /> {h}
                    </li>
                  ))}
                </ul>
              )}
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
                    <dd className={`col-span-3 text-sm ${v ? "font-medium text-navy" : "text-muted-foreground"}`}>{v ?? PENDING}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {p.overviewParagraphs && (
        <section className="bg-surface py-16 md:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-7">
              {p.overviewLabel && <p className="eyebrow">{p.overviewLabel}</p>}
              {p.overviewHeading && <h2 className="display-lg mt-6">{p.overviewHeading}</h2>}
              <div className="mt-6 space-y-5">
                {p.overviewParagraphs.map((para, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground">{para}</p>
                ))}
              </div>
            </Reveal>
            {p.quickInfo && (
              <Reveal delay={0.1} className="lg:col-span-5">
                <div className="rounded-md border border-border bg-card">
                  <h3 className="border-b border-border px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em]">Quick information</h3>
                  <dl>
                    {p.quickInfo.map(([k, v]) => (
                      <div key={k} className="grid grid-cols-5 gap-3 border-b border-border px-6 py-3 last:border-0">
                        <dt className="col-span-2 text-xs text-muted-foreground">{k}</dt>
                        <dd className="col-span-3 text-sm font-medium text-navy">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {p.benefits && (
        <section className="py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">Why {p.name}?</p>
              <h2 className="display-lg mt-6 max-w-2xl">Targeted Nutrition for Better Flock Management</h2>
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-2 lg:grid-cols-3">
              {p.benefits.map((b) => (
                <Reveal key={b.index} className="bg-card p-8">
                  <span className="serif-accent text-4xl text-gold-cta">{b.index}</span>
                  <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm font-medium text-gold-cta">{b.heading}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.detailedApplications && (
        <section className="bg-surface py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">Poultry applications</p>
              <h2 className="display-lg mt-6 max-w-2xl">One Nutritional Solution. Multiple Production Stages.</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {p.detailedApplications.map((a) => (
                <Reveal key={a.title} className="rounded-md border border-border bg-card p-8">
                  <h3 className="text-xl font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm font-medium text-gold-cta">{a.heading}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {a.focus.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-cta" /> {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.formula && (
        <section className="py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">Formulation science</p>
              <h2 className="display-lg mt-6 max-w-2xl">A Multi-Component Approach to Poultry Nutrition</h2>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {p.formula.map((f) => (
                <Reveal key={f.title}>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm font-medium text-gold-cta">{f.heading}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.compositionGroups && (
        <section className="bg-surface py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">Product composition</p>
              <h2 className="display-lg mt-6 max-w-2xl">Comprehensive Nutritional Composition</h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Avivita Gold contains a combination of vitamins, minerals, amino acids, enzymes, and additional feed supplement ingredients. Declared composition is per 5 mL.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {p.compositionGroups.map((g) => (
                <Reveal key={g.title} className="rounded-md border border-border bg-card">
                  <h3 className="border-b border-border px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em]">{g.title}</h3>
                  <dl>
                    {g.rows.map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-4 border-b border-border px-6 py-3 last:border-0">
                        <dt className="text-sm text-muted-foreground">{k}</dt>
                        <dd className="text-sm font-medium text-navy">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ))}
            </div>
            {p.compositionNote && (
              <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">{p.compositionNote}</p>
            )}
          </div>
        </section>
      )}

      {p.dosageTable && (
        <section className="py-16 md:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Recommended usage</p>
              <h2 className="display-lg mt-6">Practical Supplementation for Different Poultry Categories</h2>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal>
                <div className="overflow-hidden rounded-md border border-border bg-card">
                  <div className="grid grid-cols-2 gap-4 border-b border-border bg-surface px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Poultry Category</span>
                    <span>Label-Declared Quantity</span>
                  </div>
                  {p.dosageTable.map((d) => (
                    <div key={d.category} className="grid grid-cols-2 gap-4 border-b border-border px-6 py-4 last:border-0">
                      <span className="text-sm font-medium text-navy">{d.category}</span>
                      <span className="text-sm text-foreground">{d.quantity}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              {p.dosageGuidance && (
                <Reveal delay={0.1}>
                  <div className="mt-6 space-y-4">
                    {p.dosageGuidance.map((g, i) => (
                      <p key={i} className="text-sm leading-relaxed text-muted-foreground">{g}</p>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {p.advantages && (
        <section className="bg-surface py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">The POULTRIVA advantage</p>
              <h2 className="display-lg mt-6 max-w-2xl">Purposeful Nutrition. Practical Poultry Support.</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.advantages.map((a) => (
                <Reveal key={a.title} className="rounded-md border border-border bg-card p-7">
                  <h3 className="text-base font-semibold">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.handling && (
        <section className="py-16 md:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Product care</p>
              <h2 className="display-lg mt-6">Storage &amp; Product Information</h2>
              <dl className="mt-8 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Pack Size</dt><dd className="font-medium text-navy">{p.packSizes}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Product Format</dt><dd className="font-medium text-navy">{p.form}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Classification</dt><dd className="font-medium text-navy">Poultry/Animal Liquid Feed Supplement</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Handling instructions</h3>
              <ul className="mt-6 space-y-4">
                {p.handling.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold-cta" /> {h}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm font-semibold text-navy">Not for Human Use. Not for Medical Use.</p>
            </Reveal>
          </div>
        </section>
      )}

      {p.faqs && (
        <section className="bg-surface py-16 md:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Product FAQs</p>
              <h2 className="display-lg mt-6">Everything You Need to Know About {p.name}</h2>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <FaqAccordion items={p.faqs} />
            </div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="container-x">
          <p className="eyebrow">Related products</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="group bg-card p-8 transition-colors hover:bg-surface">
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
