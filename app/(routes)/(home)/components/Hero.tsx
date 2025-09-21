import { Button } from "@/app/components";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="ik-section-top ik-section-bottom h-[130vh] bg-[url(/homepage-bg.png)] bg-no-repeat bg-cover bg-[42%]">
      <div className="ik-container">
        <div className="max-w-221 lg:mx-auto lg:text-center">
          <h1 className="ik-heading--h1 mb-4 text-balance">
            Your Perfect Home Awaits.
          </h1>
          <p className="lg:px-28 mb-7 ik-body--md--400">
            Discover well-maintained, affordable properties across Kent — where
            comfort, quality, and care come first.
          </p>

          <div className="flex flex-col lg:flex-row justify-center gap-4">
            <Link href={"/properties"}>
              <Button
                label="View listing"
                size="small"
                variant="filled-light-hover"
                className="w-fit"
              />
            </Link>
            <Link href={"/let#form"}>
              <Button
                className="w-fit"
                label="List Your House"
                size="small"
                variant="outlined"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
