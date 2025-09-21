import Image from "next/image";

export const Advisor = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline text-primary-light-blue mb-3">
          Qualifications and Skills
        </div>

        <h2 className="ik-heading--h2 mb-14 text-primary-dark-blue">
          A Mortgage Advisor
        </h2>

        <div className="grid grid-cols-2 gap-16 bg-white-smoke p-12 rounded-xl items-center">
          <div>
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

          <div>
            <figure className="ik-figure rounded-sm pt-[100%]">
              <Image
                alt=""
                src={"https://picsum.photos/700/700"}
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
