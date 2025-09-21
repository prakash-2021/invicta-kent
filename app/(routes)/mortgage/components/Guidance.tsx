import { BiBullseye } from "react-icons/bi";
import {
  MdAnalytics,
  MdArticle,
  MdHandshake,
  MdPersonSearch,
  MdShield,
} from "react-icons/md";

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    icon: <MdAnalytics color="#172747" size={24} />,
    title: "Market Analysis",
    description:
      "We search and compare mortgage products from a wide range of lenders, including high-street banks, building societies, and specialist lenders.",
  },
  {
    icon: <MdPersonSearch color="#172747" size={24} />,
    title: "Fact-Finding & Assessment",
    description:
      "In-depth interviews to understand your financial circumstances, including income, expenses, credit history, and deposit size.",
  },
  {
    icon: <BiBullseye color="#172747" size={24} />,
    title: "Tailored Recommendations",
    description:
      "We present the most appropriate mortgage products and explain terms, interest rates, fees, and repayment structures clearly.",
  },
  {
    icon: <MdArticle color="#172747" size={24} />,
    title: "Application Management",
    description:
      "Complete assistance with application forms, gathering documentation, and submitting to lenders for smooth processing.",
  },
  {
    icon: <MdHandshake color="#172747" size={24} />,
    title: "Liaison & Progression",
    description:
      "We act as your main contact between lender, estate agents, and solicitors to ensure a smooth process to completion.",
  },
  {
    icon: <MdShield color="#172747" size={24} />,
    title: "Protection Advice",
    description:
      "Assessment of your need for life insurance, critical illness cover, and income protection to secure your mortgage.",
  },
];

export const Guidance = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline text-primary-light-blue mb-3">
          Clear guidance, smarter choices
        </div>

        <h2 className="ik-heading--h2 mb-16 lg:mb-20 text-primary-dark-blue">
          Comprehensive Mortgage <br /> Advisory Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-30 gap-y-20 lg:gap-y-24">
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
