import { MdAccountBalance, MdHandshake } from "react-icons/md";

export const Support = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline text-primary-light-blue mb-3">
          Expert Support
        </div>

        <h2 className="ik-heading--h2 mb-12 lg:mb-14 text-primary-dark-blue">
          Why Choose a Mortgage Advisor?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="border border-border py-6 lg:py-16 px-4 lg:px-12 rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-[#58C38F] flex items-center justify-center mb-12">
              <MdHandshake size={24} color="white" />
            </div>

            <h3 className="ik-heading--h4 mb-6">Using a Mortgage Advisor</h3>

            <div className="mb-4">
              <h5 className="mb-3 ik-body--md--600">Access to More Deals</h5>
              <p>
                Advisors often have access to a broader range of products,
                including exclusive deals not available directly to the public.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="mb-3 ik-body--md--600">Expertise and Guidance</h5>
              <p>
                We can navigate complex lending criteria, particularly valuable
                for clients with non-standard income (e.g., self-employed) or
                challenging credit histories.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="mb-3 ik-body--md--600">Time and Hassle Savings</h5>
              <p>
                An advisor handles the paperwork and liaises with all parties,
                streamlining a time-consuming process so you can focus on other
                priorities.
              </p>
            </div>

            <div>
              <h5 className="mb-3 ik-body--md--600">Ongoing Support</h5>
              <p>
                Continued relationship throughout the mortgage term, including
                remortgaging advice and protection reviews.
              </p>
            </div>
          </div>

          <div className="border border-border py-6 lg:py-16 px-4 lg:px-12 rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-[#D43A20] flex items-center justify-center mb-12">
              <MdAccountBalance size={24} color="white" />
            </div>

            <h3 className="ik-heading--h4 mb-6">Applying Directly to Lender</h3>

            <div className="mb-4">
              <h5 className="mb-3 ik-body--md--600">No Adviser Fees</h5>
              <p>
                Direct applications eliminate adviser fees, though this may be
                offset by higher interest rates or less suitable products.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="mb-3 ik-body--md--600">Direct Relationship</h5>
              <p>
                Build a direct relationship with your lender, which may be
                beneficial for future financial needs.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="mb-3 ik-body--md--600">Limited Options</h5>
              <p>
                You&apos;ll only see that lender&apos;s products, potentially
                missing better deals available elsewhere in the market.
              </p>
            </div>

            <div>
              <h5 className="mb-3 ik-body--md--600">Time Investment</h5>
              <p>
                Requires significant time to research, compare, and manage the
                application process yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
