import { Button, FaqAccordion } from "@/app/components";

const faqs = [
  {
    title: "What areas do you cover?",
    content:
      "Tailored for experienced landlords who wish to remain hands-on with their property but need support in securing reliable tenants. We manage tenant sourcing, vetting, and referencing to ensure you find the right match, while handling the entire onboarding process to create a seamless start for both landlord and tenant.",
  },
  {
    title: "What is included in your Let Only service?",
    content:
      "Our Let Only service includes tenant sourcing, thorough vetting, and comprehensive referencing. We ensure you are matched with reliable tenants while managing all the initial onboarding processes.",
  },
  {
    title: "Do you offer full property management?",
    content:
      "Yes, we offer full property management that covers everything from tenant sourcing to ongoing day-to-day management. This service is designed to give landlords complete peace of mind while ensuring tenants receive excellent service.",
  },
  {
    title: "How do you market my property?",
    content:
      "We use a multi-channel approach to marketing, including online listings, social media promotion, and professional photography. This ensures your property gets maximum exposure to attract the right tenants quickly.",
  },
];

export const Faq = () => {
  return (
    <section className="ik-section-bottom">
      <div className="max-w-230 mx-auto">
        <h2 className="mb-14 ik-heading--h2">Frequently asked questions</h2>

        <FaqAccordion items={faqs} />

        <div className="bg-white-smoke py-10 px-14 mt-16 rounded-md">
          <h4 className="ik-heading--h3 mb-3">Still have questions?</h4>
          <p className="mb-8 max-w-161">
            Contact us directly — our team is here to help you with guidance,
            answers, and personalized support every step of the way.
          </p>
          <Button label="Contact Us" size="small" variant="outlined" />
        </div>
      </div>
    </section>
  );
};
