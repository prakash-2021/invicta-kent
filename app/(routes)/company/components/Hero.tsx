import Image from "next/image";

export const Hero = () => {
  return (
    <main className="ik-section-top ik-section-bottom">
      <div className="ik-container">
        <div className="max-w-200 mx-auto text-center">
          <div className="ik-misc--tagline text-primary-light-blue mb-3">
            About us
          </div>
          <h1 className="ik-heading--h2 mb-20 text-primary-dark-blue">
            Making property management simple, efficient, and reliable across
            Ashford.
          </h1>
        </div>
      </div>

      <figure className="ik-figure rounded-sm pt-[55%] ik-section-bottom">
        <Image
          alt=""
          src={"https://picsum.photos/2001/1400"}
          width={2000}
          height={1400}
          className="ik-image"
        />
      </figure>

      <div className="max-w-147 mx-auto">
        <p className="ik-heading--h4">
          Founded with a commitment to quality and transparency, Invicta Kent
          Management provides comprehensive property services across Ashford.
          Our team is passionate about connecting tenants with homes and
          supporting landlords in managing their properties with confidence.
        </p>
      </div>
    </main>
  );
};
