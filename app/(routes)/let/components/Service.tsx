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
      "Our comprehensive service covers everything from tenant sourcing to day-to-day management, ensuring peace of mind for landlords and excellent service for tenants.",
  },
];

export const Service = () => {
  return (
    <section className="ik-section-bottom bg-primary-dark-blue py-30">
      <div className="ik-container">
        <div className="ik-misc--tagline text-white mb-3">Our Services</div>

        <h2 className="ik-heading--h2 mb-20 text-white">
          Tailored Solutions for <br /> Tenants & Landlords
        </h2>

        <div className="flex items-center gap-16">
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
