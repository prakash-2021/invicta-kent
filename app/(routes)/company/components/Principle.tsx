import { MdForum, MdSchool, MdShield } from "react-icons/md";

export const Principle = () => {
  return (
    <section className="py-20 lg:py-30">
      <div className="ik-container">
        <div className="ik-misc--tagline mb-3">guiding principles</div>

        <h2 className="ik-heading--h2 mb-16 lg:mb-20">
          Our Operating Principles
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20">
          <div className="bg-white-smoke rounded-sm p-8 h-86 flex flex-col justify-between">
            <MdShield size={24} />

            <div>
              <h3 className="ik-heading--h4 mb-6">Integrity</h3>
              <p>
                We act honestly and transparently in every interaction, ensuring
                landlords and tenants can rely on us at every stage.
              </p>
            </div>
          </div>

          <div className="bg-white-smoke rounded-sm p-8 h-86 flex flex-col justify-between">
            <MdSchool size={24} />

            <div>
              <h3 className="ik-heading--h4 mb-6">Expertise</h3>
              <p>
                Our team combines local market insight with professional
                property management experience to deliver the best outcomes.
              </p>
            </div>
          </div>

          <div className="bg-white-smoke rounded-sm p-8 h-86 flex flex-col justify-between">
            <MdForum size={24} />

            <div>
              <h3 className="ik-heading--h4 mb-6">Responsiveness</h3>
              <p>
                We priotise timely and effective communication, addressing
                inquiries, maintenance requests, and concerns promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
