import { Button, FeatureCard } from "@/app/components";
import Link from "next/link";

const Properties = () => {
  return (
    <main className="ik-section-top ik-section-bottom">
      <section className="mb-20 lg:mb-30">
        <div className="ik-container">
          <div className="max-w-221 mx-auto text-center">
            <div className="ik-misc--tagline text-primary-light-blue mb-3">
              Featured Properties
            </div>
            <h1 className="ik-heading--h2 mb-3 max-w-[795px]">
              Discover Quality Homes Available for Rent Across Kent
            </h1>
            <p className="lg:px-28 mb-7 ik-body--md--400 text-primary-dark-blue">
              Browse our carefully curated listings and find your next home
              quickly and easily. Each property is vetted to ensure a seamless
              renting experience.
            </p>

            <div className="flex justify-center gap-4">
              <Link href={"/let#form"}>
                <Button label="List Your House" size="small" variant="filled" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ik-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-y-16">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>

          <Button
            label="View More"
            size="small"
            variant="outlined"
            className="lg:mx-auto mt-10 lg:mt-12"
          />
        </div>
      </section>
    </main>
  );
};

export default Properties;
