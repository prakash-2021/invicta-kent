const steps = [
  {
    id: "01",
    title: "Let’s Get Started",
    description:
      "An experienced Invicta Kent staff member will carry out a professional property valuation. Once completed, a high-quality video, floorplan, photographs, and a tailored advert will be prepared and launched to the market.",
  },
  {
    id: "02",
    title: "Opening Doors",
    description:
      "Our team at Invicta Kent will begin conducting property viewings with potential tenants, ensuring your home is presented at its very best.",
  },
  {
    id: "03",
    title: "Receiving Offer",
    description:
      "When a tenant wishes to proceed, they submit an application form along with identification and a holding deposit. The application is then discussed with you, the landlord, for approval.",
  },
  {
    id: "04",
    title: "Reference Checks",
    description:
      "After the offer is accepted, Invicta Kent undertakes all the necessary checks. This includes right-to-rent verification, credit assessments, and obtaining references from both employers and previous landlords.",
  },
  {
    id: "05",
    title: "Pre-Tenancy Checks",
    description:
      "Before move-in, we complete a detailed property inventory with supporting photographs, set up utilities, and confirm that all compliance checks are in place, including EPC, Gas Safety, and Electrical certificates.",
  },
  {
    id: "06",
    title: "Legal Documents & Welcome Pack",
    description:
      "We prepare and issue the tenancy agreement (AST) and provide the tenant with a welcome pack that includes safety certificates and all the required documentation.",
  },
  {
    id: "07",
    title: "Time to Pay",
    description:
      "At this stage, rent is collected, the deposit is securely protected, and all relevant paperwork is served to the tenant electronically for full transparency.",
  },
  {
    id: "08",
    title: "Moving Day",
    description:
      "On the agreed date, we meet the tenant at the property, hand over the keys, and guide them through the property manuals to ensure they feel at home from day one.",
  },
  {
    id: "09",
    title: "Done!",
    description:
      "You receive your rental payment while your tenant settles comfortably into their new home with Invicta Kent managing the process seamlessly.",
  },
];

export const Detail = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 col-start-3">
            <h3 className="ik-heading--h3 text-primary-dark-blue mb-6">
              Preparing to Let
            </h3>

            <p className="mb-3 ik-body--md--400 text-primary-dark-blue">
              At Invicta Kent Management, we bring together years of proven
              expertise across every aspect of property management—from
              marketing and finance to legal compliance and maintenance.
            </p>

            <p className="ik-body--md--400 text-primary-dark-blue mb-32">
              This depth of professional knowledge, combined with our strong
              local insight, allows us to deliver a complete, end-to-end service
              for landlords. Whether you own a single investment property or
              manage a portfolio, we ensure your letting experience is
              efficient, secure, and stress-free.
            </p>

            <h3 className="ik-heading--h3 text-primary-dark-blue mb-12">
              Roadmap to letting your home
            </h3>

            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="px-10 py-8 border border-border rounded-sm"
                >
                  <div className="flex gap-21">
                    <div className="ik-body--md--600 text-primary-dark-blue">
                      {step.id}
                    </div>
                    <div>
                      <h5 className="ik-body--md--600 text-primary-dark-blue mb-3">
                        {step.title}
                      </h5>
                      <p className="ik-body--md--400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
