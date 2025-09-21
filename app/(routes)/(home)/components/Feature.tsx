import { Button, FeatureCard } from "@/app/components";
import Link from "next/link";

export const Feature = () => {
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
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
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
