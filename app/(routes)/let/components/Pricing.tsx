import { BiKey, BiSolidHome } from "react-icons/bi";

export const Pricing = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline mb-3 text-primary-light-blue">
          Fees & services
        </div>

        <h2 className="ik-heading--h2 mb-14">Simple, Transparent Pricing</h2>

        <div className="grid grid-cols-2 gap-16">
          <div className="px-12 py-16 border border-border">
            <div className="w-12 h-12 flex items-center justify-center bg-offwhite rounded-md mb-8">
              <BiSolidHome size={24} />
            </div>

            <h5 className="ik-heading--h4 mb-4">Initial Setup - £200</h5>
            <p className="mb-3">
              Free consultation including property valuation, market insights,
              and legislative guidance.
            </p>
            <ul className="space-y-3 mb-8 pl-2">
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Safety checks</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>
                  Advice on cost-effective improvements to enhance rental value
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>
                  Professional photography, floorplans, and video walkthroughs
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>
                  Online and social media advertising (Rightmove, Zoopla,
                  Invicta Kent, and more)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Qualifying enquiries prior to arranging viewings</span>
              </li>
            </ul>
          </div>

          <div className="px-12 py-16 border border-border">
            <div className="w-12 h-12 flex items-center justify-center bg-offwhite rounded-md mb-8">
              <BiKey size={28} />
            </div>

            <h5 className="ik-heading--h4 mb-4">Final Setup – £300</h5>
            <p className="mb-3">
              We manage the process from viewings to moving in.
            </p>
            <ul className="space-y-3 mb-8 pl-2">
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Conducting and accompanying viewings</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Weekly performance updates and market analysis</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Negotiating rental terms and tenancy conditions</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>
                  Comprehensive reference checks and Right to Rent compliance
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Drafting Assured Shorthold Tenancies (AST)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>
                  Pre-tenancy inspections and deposit registration with the DPS
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>Notifying the local council of tenancy changes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-0.5 h-0.5 rounded-full bg-primary-dark-blue" />
                <span>
                  Inventory and Schedule of Condition (charged separately)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
