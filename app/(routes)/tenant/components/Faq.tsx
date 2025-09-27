import { Button, FaqAccordion } from "@/app/components";
import Link from "next/link";

const faqs = [
  {
    title: "What's the application process?",
    content:
      "You fill out an application form and we'll run credit and reference checks. To reserve the property, you'll pay a small holding deposit, which goes towards your first month's rent.",
  },
  {
    title: "How much money do I need to move in?",
    content:
      "You'll need to pay your first month's rent and a security deposit (usually equal to five weeks' rent). Your deposit is protected in a government-approved scheme.",
  },
  {
    title: "What am I responsible for?",
    content:
      "You're responsible for paying rent on time and all utility bills, like gas, electricity, water, and council tax. You must also keep the property clean and tidy.",
  },
  {
    title: "How do I report a repair?",
    content:
      "Just call or email us. We have a simple process for reporting issues and an emergency number for urgent problems like a major leak.",
  },
  {
    title: "Can I decorate or have a pet?",
    content:
      "Any decorating, like painting, needs the landlord's permission first. You'll need to ask if pets are allowed for this specific property.",
  },
  {
    title: "How do I end the tenancy and get my deposit back?",
    content:
      "You need to give us the correct amount of written notice as stated in your agreement. We'll do a check-out inspection, and as long as the property is in good condition, your deposit will be returned promptly.",
  },
];

export const Faq = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="max-w-230 mx-auto">
          <h2 className="mb-12 lg:mb-14 ik-heading--h2">
            Frequently asked questions
          </h2>

          <FaqAccordion items={faqs} />

          <div className="bg-white-smoke py-8 lg:py-10 px-4 lg:px-14 mt-16 rounded-md">
            <h4 className="ik-heading--h3 mb-3">Still have questions?</h4>
            <p className="mb-8 max-w-161">
              Contact us directly — our team is here to help you with guidance,
              answers, and personalized support every step of the way.
            </p>
            <Link href={"/contact?type=tenant"}>
              <Button label="Contact Us" size="small" variant="outlined" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
