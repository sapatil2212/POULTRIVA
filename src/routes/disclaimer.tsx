import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/disclaimer")({
  head: () => seo("Disclaimer | POULTRIVA", "Important information about product content on the POULTRIVA website."),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Disclaimer" crumbs={[{ label: "Disclaimer" }]} />
      <section className="py-20">
        <div className="container-x prose-article max-w-3xl">
          <h2>General information only</h2>
          <p>Product descriptions are for general reference and are not a substitute for the approved product label.</p>
          <h2>Professional guidance</h2>
          <p>Consult a qualified veterinarian or poultry nutrition professional before using any supplement.</p>
          <h2>No guaranteed outcomes</h2>
          <p>Results depend on many factors including management, environment and nutrition. No specific outcome is guaranteed.</p>
        </div>
      </section>
    </>
  );
}
