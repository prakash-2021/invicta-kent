import { Button } from "@/app/components";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="py-30 bg-white-smoke">
      <div className="ik-container text-center">
        <h2 className="mb-3 ik-heading--h2 text-primary-dark-blue">
          Find the Right Mortgage for You
        </h2>
        <p className="mb-10 ik-body--md--400 text-blue-gray">
          Expert advisors in Ashford compare deals and guide you every <br />{" "}
          step of the way.
        </p>
        <Link href={"/mortgage"}>
          <Button
            label="Get Mortgage Advice"
            size="small"
            variant="filled"
            className="mx-auto"
          />
        </Link>
      </div>
    </section>
  );
};
