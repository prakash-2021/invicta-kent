"use client";

import { Button, FeatureCard } from "@/app/components";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { Property } from "../data/query";

interface FeatureProps {
  data: Property[];
}

export const Feature = ({ data }: FeatureProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const visibleData = isDesktop ? data.slice(0, 6) : data.slice(0, 3);

  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline text-primary-light-blue mb-3">
          Featured Listings
        </div>
        <h2 className="ik-heading--h2 mb-14 text-primary-dark-blue">
          Homes in Kent
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-y-16 mb-10 lg:mb-12">
          {visibleData.map((item, index) => (
            <FeatureCard
              key={index}
              id={item.documentId || ""}
              imageUrl={item.property_images[0]?.url || ""}
              beds={item.bedrooms}
              baths={item.bathrooms}
              title={item.title}
              address={item.location}
            />
          ))}
        </div>

        <Link href={"/properties"}>
          <Button
            label="Explore All Listing"
            size="small"
            variant="outlined"
            className="mx-auto"
          />
        </Link>
      </div>
    </section>
  );
};
