import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => seo("Privacy Policy | POULTRIVA", "How POULTRIVA handles information you share through enquiries."),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="py-20">
        <div className="container-x prose-article max-w-3xl">
          <h2>Information you share</h2>
          <p>When you use our enquiry forms, the details are prepared in your device and sent only when you choose to open WhatsApp or your email app. This website does not store form submissions.</p>
          <h2>How we use it</h2>
          <p>Information you send us is used solely to respond to your enquiry and related business communication.</p>
          <h2>Third-party services</h2>
          <p>WhatsApp and your email provider process messages under their own privacy policies.</p>
          <h2>Contact</h2>
          <p>For privacy questions, email sagllifescience@gmail.com.</p>
        </div>
      </section>
    </>
  );
}
