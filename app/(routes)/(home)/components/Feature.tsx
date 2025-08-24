import { Button, FeatureCard } from "@/app/components";

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

        <div className="grid grid-cols-3 gap-x-6 gap-y-16 mb-12">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>

        <Button
          label="Explore All Listing"
          size="small"
          variant="outlined"
          className="mx-auto"
        />
      </div>
    </section>
  );
};
