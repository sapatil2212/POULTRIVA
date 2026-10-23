import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ClipboardList, FlaskConical, MessageCircle } from "lucide-react";
import { getProduct } from "@/data/products";
import { productWaMessage, waLink } from "@/data/site";
import { Reveal, MaskImage } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { ProductInfoGate } from "@/components/site/ProductInfoGate";
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
      : {
          meta: [
            { title: "Product not found | POULTRIVA" },
            { name: "robots", content: "noindex" },
          ],
        },
  component: ProductPage,
});

const PENDING = "Available on request";
type TableRow = [string, string];

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const specs: TableRow[] = [
    ["Product", p.name],
    ["Category", p.category],
    ["Focus area", p.focusArea],
    ["Form", p.form],
    ["Pack sizes", p.packSizes ?? PENDING],
    ["Dosage", p.dosage ?? PENDING],
    ["Storage", p.storage ?? PENDING],
  ];

  return (
    <>
      {/* 01 — Hero */}
      <section className="pt-28 md:pt-36">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-navy">
              Home
            </Link>
            <span className="mx-2 text-gold">/</span>
            <Link to="/products" className="hover:text-navy">
              Products
            </Link>
            <span className="mx-2 text-gold">/</span>
            <span className="text-foreground">{p.name}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <h1 className="display-xl">{p.name}</h1>
              {p.heroHeading && (
                <p className="serif-accent mt-3 text-xl text-gold-cta md:text-2xl">
                  {p.heroHeading}
                </p>
              )}
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                {p.shortDescription}
              </p>
              {p.highlights && (
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {p.highlights.slice(0, 6).map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-cta" /> {highlight}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/business-enquiries" className="btn-primary">
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={waLink(productWaMessage(p.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
                </a>
              </div>
            </Reveal>
            <div className="lg:col-span-6">
              <MaskImage
                src={p.image}
                alt={p.imageAlt}
                width={1280}
                height={960}
                eager
                className="aspect-[4/3] rounded-[var(--radius-photo)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Concise overview */}
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Product overview</p>
            <h2 className="display-lg mt-6">
              What is <span className="serif-accent text-gold-cta">{p.name}?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-foreground">{p.detailedDescription}</p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              <div className="bg-card p-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-cta">
                  Primary focus
                </p>
                <p className="mt-2 font-semibold text-navy">{p.focusArea}</p>
              </div>
              <div className="bg-card p-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-cta">
                  Product form
                </p>
                <p className="mt-2 font-semibold text-navy">{p.form}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — Benefits */}
      {p.benefits && (
        <section className="bg-surface py-16 md:py-24">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">Why {p.name}?</p>
              <h2 className="display-lg mt-6 max-w-3xl">
                Targeted Nutrition for Better Flock Management
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {p.benefits.map((benefit) => (
                <Reveal
                  key={benefit.index}
                  className="h-full rounded-[var(--radius-card)] border border-border bg-card p-7 transition-colors hover:border-gold/50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold-cta">
                    {benefit.index}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{benefit.title}</h3>
                  <p className="mt-2 text-sm font-medium text-gold-cta">{benefit.heading}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04 — Applications */}
      {p.detailedApplications && (
        <section className="py-16 md:py-24">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">Poultry applications</p>
              <h2 className="display-lg mt-6 max-w-3xl">
                One Nutritional Solution. Multiple Production Stages.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {p.detailedApplications.map((application) => (
                <Reveal
                  key={application.title}
                  className="h-full rounded-[var(--radius-card)] border border-border bg-card p-8"
                >
                  <h3 className="text-xl font-semibold text-navy">{application.title}</h3>
                  <p className="mt-1 text-sm font-medium text-gold-cta">{application.heading}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {application.description}
                  </p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {application.focus.map((focus) => (
                      <li key={focus} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-cta" /> {focus}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 — Advantages (last section visible before the gate) */}
      {p.advantages && (
        <section className="bg-surface py-16 md:py-24">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">The POULTRIVA advantage</p>
              <h2 className="display-lg mt-6 max-w-3xl">
                Purposeful Nutrition. Practical Poultry Support.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.advantages.map((advantage) => (
                <Reveal
                  key={advantage.title}
                  className="h-full rounded-[var(--radius-card)] border border-border bg-card p-7"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-cta">
                    <Check className="h-4 w-4" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-navy">{advantage.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {advantage.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProductInfoGate productName={p.name}>
        {/* 06 — Technical specifications + composition */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow">Technical details</p>
              <h2 className="display-lg mt-6 max-w-3xl">
                Specifications &amp; Declared Composition
              </h2>
            </Reveal>
            <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
              <div className="grid gap-6">
                <DataTable title="Technical specifications" icon="specs" rows={specs} />
                {p.dosageTable && (
                  <DataTable
                    title="Recommended usage"
                    icon="specs"
                    rows={p.dosageTable.map((row) => [row.category, row.quantity])}
                  />
                )}
              </div>
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold-cta">
                    <FlaskConical className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-cta">
                      Product composition
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-navy">
                      Comprehensive Nutritional Composition
                    </h3>
                  </div>
                </div>
                <div className="grid gap-6">
                  {p.compositionGroups?.map((group) => (
                    <DataTable
                      key={group.title}
                      title={group.title}
                      icon="composition"
                      rows={group.rows}
                    />
                  )) ?? (
                    <DataTable
                      title="Composition"
                      icon="composition"
                      rows={[["Details", p.composition ?? PENDING]]}
                    />
                  )}
                </div>
                {p.compositionNote && (
                  <p className="mt-6 rounded-xl border border-gold/25 bg-gold/5 p-5 text-xs leading-relaxed text-muted-foreground">
                    {p.compositionNote}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 07 — Full about section + quick information */}
        <section className="bg-surface py-16 md:py-24">
          <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">{p.overviewLabel ?? `About ${p.name}`}</p>
              <h2 className="display-lg mt-6">
                {p.overviewHeading ?? `${p.name} Product Information`}
              </h2>
              <div className="mt-7 space-y-5">
                {(p.overviewParagraphs ?? [p.detailedDescription]).map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <DataTable title="Quick information" icon="specs" rows={p.quickInfo ?? specs} />
            </Reveal>
          </div>
        </section>

        {/* 08 — FAQs */}
        {p.faqs && (
          <section className="py-16 md:py-24">
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
      </ProductInfoGate>

      <FinalCTA
        title="Interested in"
        accent={`${p.name}?`}
        copy="Request specifications, availability or commercial supply details from our team."
      />
    </>
  );
}

function DataTable({
  title,
  rows,
  icon,
}: {
  title: string;
  rows: TableRow[];
  icon: "specs" | "composition";
}) {
  const Icon = icon === "composition" ? FlaskConical : ClipboardList;
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-card">
      <div className="flex min-h-16 items-center gap-3 border-b border-border bg-surface/60 px-6 py-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-cta">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">{title}</h3>
      </div>
      <dl>
        {rows.map(([label, value]) => (
          <div
            key={`${title}-${label}`}
            className="grid min-h-12 grid-cols-5 items-center gap-4 border-b border-border px-6 py-3 last:border-0"
          >
            <dt className="col-span-2 text-xs leading-relaxed text-muted-foreground">{label}</dt>
            <dd className="col-span-3 text-sm font-medium leading-relaxed text-navy">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
