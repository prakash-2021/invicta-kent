import { Button } from "@/app/components";

export const Hero = () => {
  return (
    <section className="ik-section-top ik-section-bottom h-screen bg-[url(/homepage-bg.png)] bg-no-repeat bg-cover">
      <div className="ik-container">
        <div className="max-w-221 mx-auto text-center">
          <h1 className="ik-heading--h1 mb-4">Your Perfect Home Awaits.</h1>
          <p className="px-28 mb-7 ik-body--md--400">
            Discover well-maintained, affordable properties across Kent — where
            comfort, quality, and care come first.
          </p>

          <div className="flex justify-center gap-4">
            <Button
              label="View listing"
              size="small"
              variant="filled-light-hover"
            />
            <Button label="List Your House" size="small" variant="outlined" />
          </div>
        </div>
      </div>
    </section>
  );
};
