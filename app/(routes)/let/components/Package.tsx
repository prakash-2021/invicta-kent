"use client";

import { Button } from "@/app/components";
import Link from "next/link";
import { MdBolt, MdHome, MdPerson, MdStar } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: <MdPerson size={24} />,
    title: "Let Only",
    description: "Find the right tenant and set up your tenancy with ease.",
  },
  {
    id: 2,
    icon: <MdHome size={24} />,
    title: "Property Management – Basic",
    description: "Hassle-free rent collection, maintenance, and compliance.",
  },
  {
    id: 3,
    icon: <MdBolt size={24} />,
    title: "Property Management – Pro",
    description: "All Basic services plus heating cover and extra support.",
  },
  {
    id: 4,
    icon: <MdStar size={24} />,
    title: "Property Management – Ultra",
    description:
      "Our premium cover plan including repairs, assessments, and 24/7 support.",
  },
];

export const Package = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Landlord Packages.html"; // file inside public/
    link.download = "Landlord Packages.html"; // suggested filename
    link.click();
  };

  return (
    <section className="bg-[#EEF1F5] py-20 lg:py-30 ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline mb-3 text-primary-light-blue">
          Landlord Packages
        </div>

        <h2 className="ik-heading--h2 mb-12 lg:mb-14">
          Choose the Right Package for Your Property
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {services.map((service) => (
            <div key={service.id} className=" bg-white rounded-sm">
              <div className="flex flex-col justify-between h-78 lg:h-90 p-6">
                <div>
                  <div className="mb-6 w-12 h-12 flex items-center justify-center bg-offwhite rounded-md">
                    {service.icon}
                  </div>
                  <h4 className="ik-heading--h4 text-balance">
                    {service.title}
                  </h4>
                </div>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 ">
          <Button
            label="Download Full Comparison"
            size="small"
            variant="filled"
            className="w-fit"
            onClick={handleDownload}
          />

          <Link href={"/contact?type=let"}>
            <Button
              label="Contact Us"
              size="small"
              variant="outlined"
              className="w-fit"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
