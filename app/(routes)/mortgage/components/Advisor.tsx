import Image from "next/image";

export const Advisor = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline text-primary-light-blue mb-3">
          Qualifications and Skills
        </div>

        <h2 className="ik-heading--h2 mb-12 lg:mb-14 text-primary-dark-blue">
          A Mortgage Advisor
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 bg-white-smoke p-4 lg:p-12 rounded-xl items-center">
          <div className="order-2 lg:order-1">
            <h3 className="ik-heading--h3 mb-3">
              Industry Standard Qualification
            </h3>
            <p className="mb-6">
              The profession is regulated by the Financial Conduct Authority
              (FCA). The mandatory qualification required to practice in the UK
              is the Certificate in Mortgage Advice and Practice (CeMAP), or an
              equivalent Level 3 qualification.
            </p>

            <div className="pb-4 border-b border-border">
              <h4 className="ik-heading--h4 py-7">Essential Skills</h4>
              <p>
                CeMAP is considered the industry benchmark, covering UK
                financial regulation, mortgage law, policy, and market
                specifics.
              </p>
            </div>

            <div>
              <h4 className="ik-heading--h4 py-7">Regulatory Standards</h4>
              <p>
                Beyond qualifications, successful advisors possess strong
                communication skills, analytical abilities, high levels of
                organisation, and a commitment to ethical, customer-focused
                service.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <figure className="ik-figure rounded-sm pt-[100%]">
              <Image
                alt=""
                src={"/mortgage-advisor.jpg"}
                width={900}
                height={900}
                className="ik-image"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
