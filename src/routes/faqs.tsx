import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SITE } from "@/data/site";
import { seo } from "@/lib/seo";
import faqSupportImg from "@/assets/biotech-lab.jpg";

export const Route = createFileRoute("/faqs")({
  head: () =>
    seo("FAQs — Poultry Supplements | POULTRIVA", "Answers to common questions about POULTRIVA poultry supplements, enquiries and storage."),
  component: Faqs,
});

const FAQS = [
  ["What is POULTRIVA?", `POULTRIVA is a poultry nutrition and feed supplement brand associated with ${SITE.company}, Nashik, Maharashtra.`],
  ["Which poultry supplements do you offer?", "Our current portfolio includes Aminova Gold (nutritional support), Calconova (calcium supplement), Aquacyd (liquid acidifier) and Gutmax (powder acidifier)."],
  ["What is Aminova Gold?", "Aminova Gold is a nutritional supplement positioned to support poultry metabolic and productive nutrition programs."],
  ["What is Calconova?", "Calconova is a high-potency poultry calcium supplement for calcium-related nutritional support."],
  ["What is the difference between Aquacyd and Gutmax?", "Aquacyd is a water-miscible liquid acidifier for drinking-water pH management, while Gutmax is a powder acidifier positioned for digestive-environment management."],
  ["Are your supplements suitable for broilers and layers?", "Suitability depends on the specific product, bird type and production stage. Please refer to the approved product label and consult a poultry nutrition professional."],
  ["Where can I find product composition information?", "Composition details are shared on request. Contact our team or send an enquiry for the relevant product."],
  ["How do I obtain product dosage guidance?", "Always follow the approved product label. For specific guidance, contact our team and consult a qualified veterinarian."],
  ["Can I request bulk supply information?", "Yes. Use the Business Enquiry form and select “Bulk Enquiry” to share your requirements."],
  ["Do you accept dealership or distribution enquiries?", "Yes, we welcome dealership and distribution enquiries through the Business Enquiry page."],
  ["How should poultry supplements be stored?", "Store products as directed on the label — typically in a cool, dry place, away from direct sunlight, with containers kept closed."],
  ["How can I contact your team?", `Call ${SITE.phone}, email ${SITE.email}, or message us on WhatsApp.`],
];

function Faqs() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Questions," accent="answered." inlineAccent crumbs={[{ label: "FAQs" }]} />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground">
              Can't find what you need?{" "}
              <Link to="/contact-us" className="font-medium text-navy underline underline-offset-4">Contact our team</Link>.
            </p>
            <div className="mt-8 overflow-hidden rounded-[var(--radius-photo)]">
              <img
                src={faqSupportImg}
                alt="POULTRIVA team ready to answer poultry nutrition questions"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          <Accordion type="single" collapsible className="lg:col-span-8">
            {FAQS.map(([q, a], i) => (
              <AccordionItem key={q} value={`q${i}`}>
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-navy hover:no-underline">
                  <span className="flex gap-5"><span className="text-xs font-semibold text-gold-cta">{String(i + 1).padStart(2, "0")}</span>{q}</span>
                </AccordionTrigger>
                <AccordionContent className="pl-10 text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
