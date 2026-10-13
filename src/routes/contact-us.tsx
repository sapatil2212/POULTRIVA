import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/EnquiryForm";
import { SITE } from "@/data/site";
import { ContactPanel } from "@/components/site/ContactPanel";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact-us")({
  head: () =>
    seo("Contact POULTRIVA — Nashik, Maharashtra", `Call ${SITE.phone} or email ${SITE.email} to reach the POULTRIVA team.`),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's"
        accent="Connect."
        inlineAccent
        intro="Have a question about our poultry nutrition products or want to discuss your business requirements? We're here to help."
        crumbs={[{ label: "Contact Us" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7"><ContactForm /></div>
          <ContactPanel />
        </div>
      </section>
    </>
  );
}

