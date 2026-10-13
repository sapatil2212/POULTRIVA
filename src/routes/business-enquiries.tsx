import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BusinessForm } from "@/components/site/EnquiryForm";
import { ContactPanel } from "@/components/site/ContactPanel";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/business-enquiries")({
  head: () =>
    seo(
      "Business, Bulk & Dealership Enquiries | POULTRIVA",
      "Enquire about bulk supply, dealership, distribution or technical information for POULTRIVA poultry supplements.",
    ),
  component: Business,
});

function Business() {
  return (
    <>
      <PageHero
        eyebrow="Business enquiries"
        title="Let's Explore"
        accent="Opportunities Together."
        intro="Bulk supply, dealership, distribution partnerships or technical product information — share your requirements below."
        crumbs={[{ label: "Business Enquiries" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7"><BusinessForm /></div>
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
