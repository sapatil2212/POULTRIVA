import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms-of-use")({
  head: () => seo("Terms of Use | POULTRIVA", "Terms governing the use of the POULTRIVA website."),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" crumbs={[{ label: "Terms of Use" }]} />
      <section className="py-20">
        <div className="container-x prose-article max-w-3xl">
          <h2>Use of this website</h2>
          <p>Content is provided for general information about POULTRIVA products and may change without notice.</p>
          <h2>Intellectual property</h2>
          <p>The POULTRIVA name, logo and website content belong to their respective owners and may not be reused without permission.</p>
          <h2>No offer of sale</h2>
          <p>This website does not constitute an offer for sale. Commercial terms are agreed separately.</p>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India.</p>
        </div>
      </section>
    </>
  );
}
