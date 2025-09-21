import { Button } from "@/app/components";
import Image from "next/image";
import { BiSolidBriefcase } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";

export const Hero = () => {
  return (
    <main className="ik-section-top ik-section-bottom">
      <div className="ik-container mb-12 lg:mb-30">
        <div className="max-w-221 mx-auto text-center">
          <div className="ik-misc--tagline text-primary-light-blue mb-3">
            Tenant Guide – Renting Made Simple
          </div>
          <h1 className="ik-heading--h2 mb-3">
            Step Into Your New Home with Ease
          </h1>
          <p className="lg:px-28 mb-7 ik-body--md--400 text-primary-dark-blue">
            From application to moving in and beyond, we make the renting
            process transparent, fair, and stress-free. Here’s what you need to
            know.
          </p>

          <div className="flex justify-center gap-4">
            <Button label="View Listing" size="small" variant="filled" />
          </div>
        </div>
      </div>

      <figure className="ik-figure rounded-sm pt-[75%] lg:pt-[57%] mb-16 lg:mb-20">
        <Image
          alt=""
          src={"https://picsum.photos/2000/1400"}
          width={2000}
          height={1400}
          className="ik-image"
        />
      </figure>

      <div className="ik-container">
        <div className="max-w-198 mx-auto lg:text-center mb-20">
          <h3 className="ik-heading--h3 mb-6">The Letting Agent’s Role</h3>
          <p className="mb-3">
            A letting agent is hired by a landlord to manage the rental of their
            property, meaning their primary duty is to the landlord. However,
            they are legally required to treat tenants fairly and adhere to a
            significant body of regulation.  
          </p>
          <p>
            The services a tenant receives depend on whether the property is
            &apos;Let-Only&apos; or &apos;Fully Managed&apos;.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="px-4 lg:px-12 py-6 lg:py-16 border border-border">
            <div className="w-12 h-12 flex items-center justify-center bg-offwhite rounded-md mb-8">
              <MdPersonSearch size={24} />
            </div>

            <h5 className="ik-heading--h4 mb-4">Initial Setup - £200</h5>
            <p>
              The agent&apos;s involvement is limited to the start of the
              tenancy. They market the property, conduct viewings, handle
              referencing, and draw up the tenancy agreement. Once the tenant
              moves in, all further dealings (rent payments, repairs) are
              directly with the landlord.
            </p>
          </div>

          <div className="px-4 lg:px-12 py-6 lg:py-16  border border-border">
            <div className="w-12 h-12 flex items-center justify-center bg-offwhite rounded-md mb-8">
              <BiSolidBriefcase size={24} />
            </div>

            <h5 className="ik-heading--h4 mb-4">Initial Setup - £200</h5>
            <p className="mb-3">
              The agent is the tenant&apos;s main point of contact for the
              entire tenancy. They handle everything from finding the tenant to
              collecting rent, arranging repairs, and managing the move-out
              process.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
