import { Accordion } from "@/app/components";
import Image from "next/image";

const items = [
  {
    title: "Let Only",
    content:
      "Tailored for experienced landlords who wish to remain hands-on with their property but need support in securing reliable tenants. We manage tenant sourcing, vetting, and referencing to ensure you find the right match, while handling the entire onboarding process.",
  },
  {
    title: "Full Property Management",
    content:
      "A comprehensive solution that includes everything from maintenance coordination and tenant communications to mid-term property inspections. This service also encompasses our Let Only and Rent Collection packages, providing complete peace of mind and professional oversight of your rental property.",
  },
];

export const Service = () => {
  return (
    <section className="ik-section-bottom bg-primary-dark-blue py-16 lg:py-30">
      <div className="ik-container">
        <div className="ik-misc--tagline text-white mb-3">Our Services</div>

        <h2 className="ik-heading--h2 mb-12 lg:mb-20 text-white">
          Tailored Solutions for <br /> Tenants & Landlords
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="max-w-142 w-full">
            <figure className="ik-figure rounded-sm pt-[100%]">
              <Image
                alt=""
                src={"https://picsum.photos/1000/1000"}
                width={800}
                height={900}
                className="ik-image"
              />
            </figure>
          </div>

          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
};
