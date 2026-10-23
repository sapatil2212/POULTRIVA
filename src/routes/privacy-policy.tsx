import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    seo(
      "Privacy Policy | POULTRIVA",
      "How POULTRIVA handles information you share through enquiries.",
    ),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="py-20">
        <div className="container-x prose-article max-w-3xl">
          <h2>Information you share</h2>
          <p>
            When you submit a contact, business, or product-information form, we collect the details
            you enter, which may include your name, email address, phone or WhatsApp number,
            business information, city, state, selected product, and message.
          </p>
          <h2>How we use it</h2>
          <p>
            We use this information to respond to your enquiry, provide relevant product support,
            send a submission confirmation, and manage related business communication.
            Product-information requests may be recorded in a restricted Google Sheet for follow-up.
          </p>
          <h2>Local preferences</h2>
          <p>
            After a product-information form is submitted, the browser stores a small local
            preference so the same visitor does not need to submit the form repeatedly. This
            preference contains no contact information.
          </p>
          <h2>Third-party services</h2>
          <p>
            Google services and our email provider process submitted information to record enquiries
            and deliver email notifications. Their handling of information is also governed by their
            respective privacy policies.
          </p>
          <h2>Contact</h2>
          <p>For privacy questions, email poultriva.in@gmail.com.</p>
        </div>
      </section>
    </>
  );
}
