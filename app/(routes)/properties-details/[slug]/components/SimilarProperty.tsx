"use client";

import { Property } from "@/app/(routes)/(home)/data/query";
import { Button, FeatureCard } from "@/app/components";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

interface FeatureProps {
  data: Property[];
}

export function SimilarProperty({ data }: FeatureProps) {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });
  const [containerOffset, setContainerOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const container = document.querySelector(".ik-container");
      if (container) {
        const rect = container.getBoundingClientRect();
        setContainerOffset(rect.left);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <section className="ik-section-bottom">
      {/* Title inside container */}
      <div className="ik-container">
        <h2 className="ik-heading--h2 mb-14">Similar Properties</h2>
      </div>

      {/* Full-width slider */}
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div
          className="flex"
          style={{
            marginLeft: containerOffset + 16,
            paddingRight: containerOffset,
          }}
        >
          {data.slice(0, 3).map((item, index) => (
            <div
              className="min-w-[300px] lg:min-w-[384px] mr-8 lg:mr-6 flex-shrink-0"
              key={index}
            >
              <FeatureCard
                key={index}
                id={item.documentId || ""}
                imageUrl={item.property_images[0]?.url || ""}
                beds={item.bedrooms}
                baths={item.bathrooms}
                title={item.title}
                address={item.location}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button inside container again */}
      <div className="ik-container">
        <Button
          label="Explore All Listings"
          size="small"
          variant="outlined"
          className="lg:mx-auto mt-10"
        />
      </div>
    </section>
  );
}
