import Link from "next/link";
import {
  MdHome,
  MdKey,
  MdOutlineAccountBalance,
  MdOutlineArrowRightAlt,
} from "react-icons/md";

type ServiceItem = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  href: string;
};

const services: ServiceItem[] = [
  {
    icon: <MdHome color="#172747" size={24} />,
    label: "For Tenants",
    title: "Find Your Next Home",
    description:
      "Browse a wide range of rental properties in Kent that suit your lifestyle and budget.",
    href: "/tenants",
  },
  {
    icon: <MdKey color="#172747" size={24} />,
    label: "For Landlords",
    title: "Let with Ease",
    description:
      "From property marketing to tenant management, we help you rent out with confidence.",
    href: "/landlords",
  },
  {
    icon: <MdOutlineAccountBalance color="#172747" size={24} />,
    label: "Mortgages",
    title: "Smarter Finance Options",
    description:
      "Get expert mortgage advice tailored to landlords and property owners.",
    href: "/mortgages",
  },
];

export const Service = () => {
  return (
    <section className="ik-section-bottom bg-primary-dark-blue py-30">
      <div className="ik-container">
        <div className="ik-misc--tagline text-white-blue mb-3">
          Our Services
        </div>

        <h2 className="ik-heading--h2 mb-20 text-white">
          Tailored Solutions for <br /> Tenants & Landlords
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-30">
          {services.map((service, index) => (
            <div key={index}>
              <div className="w-12 h-12 flex items-center justify-center bg-offwhite rounded-md mb-8">
                {service.icon}
              </div>

              <span className="text-white block ik-misc--label mb-2">
                {service.label}
              </span>

              <h4 className="ik-heading--h4 text-primary-light-blue mb-4">
                {service.title}
              </h4>

              <p className="ik-body--md--400 text-white mb-16">
                {service.description}
              </p>

              <Link href={service.href} className="flex items-center gap-2.5">
                <span className="ik-misc--link text-white">Learn more</span>
                <MdOutlineArrowRightAlt size={24} color="#FFFFFF" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
