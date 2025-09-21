import { Button, FaqAccordion } from "@/app/components";
import Link from "next/link";

const faqs = [
  {
    title: "What services do you offer and what do they cost?",
    content:
      "We offer two main services: Tenant Find Only, where we find you a great tenant, and Full Management, where we handle everything for you. Our fees are a clear percentage of the rent, with no hidden costs.",
  },
  {
    title: "How do you find and check tenants?",
    content:
      "We advertise on major property websites to attract lots of applicants. We then perform full checks, including credit history, employer references, and previous landlord references, to ensure they're reliable.",
  },
  {
    title: "How do you handle my money and legal paperwork?",
    content:
      "Your money is fully protected in a government-approved Client Money Protection (CMP) scheme. We handle all legal duties, including Right to Rent checks, safety certificates, and protecting the tenant's deposit in a proper scheme.",
  },
  {
    title: "How do you manage the property and repairs?",
    content:
      "With our Full Management service, we inspect the property regularly and send you a report. Tenants report repairs to us, and we use our network of trusted local tradespeople to fix issues promptly and cost-effectively.",
  },
  {
    title: "What happens if a tenant doesn't pay rent?",
    content:
      "We collect the rent and have a clear process for chasing any late payments immediately. We'll keep you informed every step of the way.",
  },
  {
    title: "What happens at the end of a tenancy?",
    content:
      "We manage the entire check-out process, including a final inspection against the initial inventory. We handle the deposit return and mediate any disputes fairly.",
  },
];

export const Faq = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="max-w-230 mx-auto">
          <h2 className="mb-14 ik-heading--h2">Frequently asked questions</h2>

          <FaqAccordion items={faqs} />

          <div className="bg-white-smoke py-8 lg:py-10 px-4 lg:px-14 mt-16 rounded-md">
            <h4 className="ik-heading--h3 mb-3">Still have questions?</h4>
            <p className="mb-8 max-w-161">
              Contact us directly — our team is here to help you with guidance,
              answers, and personalized support every step of the way.
            </p>
            <Link href={"/contact"}>
              <Button label="Contact Us" size="small" variant="outlined" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
