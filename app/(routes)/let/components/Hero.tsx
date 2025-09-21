import { Button } from "@/app/components";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <main className="ik-section-top mb-20">
      <div className="ik-container mb-12 lg:mb-30">
        <div className="max-w-221 mx-auto text-center">
          <div className="ik-misc--tagline text-primary-light-blue mb-3">
            Property Lettings Made Simple
          </div>
          <h1 className="ik-heading--h2 mb-3 max-w-[795px]">
            Expert Letting Services Tailored to You.
          </h1>
          <p className="lg:px-28 mb-7 ik-body--md--400 text-primary-dark-blue">
            We provide a hassle-free letting service, helping landlords find
            tenants and manage with confidence—every step of the way.
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            <Link href={"#form"}>
              <Button
                label="Free Rental Valuation"
                size="small"
                variant="filled"
                className="w-fit"
              />
            </Link>
          </div>
        </div>
      </div>

      <figure className="ik-figure rounded-sm pt-[75%] lg:pt-[57%]">
        <Image
          alt=""
          src={"https://picsum.photos/2000/1400"}
          width={2000}
          height={1400}
          className="ik-image"
        />
      </figure>
    </main>
  );
};
