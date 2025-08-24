import {
  MdAccountBalanceWallet,
  MdLightbulb,
  MdOutlineSupport,
  MdWork,
} from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    icon: <MdWork color="#172747" size={24} />,
    title: "Expert Team",
    description:
      "Experienced professionals with in-house expertise to manage every aspect of your property.",
  },
  {
    icon: <MdOutlineSupport color="#172747" size={24} />,
    title: "Local Support",
    description:
      "Our team provides prompt, responsive assistance tailored to the Kent area.",
  },
  {
    icon: <MdAccountBalanceWallet color="#172747" size={24} />,
    title: "Transparent Pricing",
    description:
      "Clear, fair pricing with no hidden fees, delivering real value to our clients.",
  },
  {
    icon: <RiDiscountPercentFill color="#172747" size={24} />,
    title: "Flexible Packages",
    description:
      "Services designed to meet the unique needs of both landlords and tenants.",
  },
  {
    icon: <MdLightbulb color="#172747" size={24} />,
    title: "Innovative Solutions",
    description:
      "Leveraging modern tools and strategies to make property management and rentals efficient and hassle-free.",
  },
];

export const WhyChoose = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline text-primary-light-blue mb-3">
          Our Services
        </div>

        <h2 className="ik-heading--h2 mb-20 text-primary-dark-blue">
          What Makes Invicta Kent <br /> Management Different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-30 gap-y-24">
          {services.map((service, index) => (
            <div key={index}>
              <div className="w-12 h-12 flex items-center justify-center bg-offwhite rounded-md mb-8">
                {service.icon}
              </div>

              <h4 className="ik-heading--h4 text-primary-dark-blue mb-3">
                {service.title}
              </h4>

              <p className="ik-body--md--400 text-blue-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
