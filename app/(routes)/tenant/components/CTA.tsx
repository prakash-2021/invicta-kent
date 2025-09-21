import { Button } from "@/app/components";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="py-20 lg:py-30 bg-white-smoke">
      <div className="ik-container lg:text-center">
        <h2 className="mb-3 ik-heading--h2 text-primary-dark-blue">
          Let&apos;s Find Your Perfect Property
        </h2>
        <p className="mb-10 ik-body--md--400 text-blue-gray">
          Whether you’re looking to rent, let, or get mortgage support, our team
          is here to help every step of the way.
        </p>
        <Link href={"/contact"}>
          <Button
            label="Contact us"
            size="small"
            variant="filled"
            className="lg:mx-auto"
          />
        </Link>
      </div>
    </section>
  );
};
