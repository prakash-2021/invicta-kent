import { Button } from "@/app/components";
import Image from "next/image";
import { BiDownload, BiMap } from "react-icons/bi";

export const Hero = () => {
  return (
    <>
      <section className="ik-section-top mb-20">
        <div className="ik-container">
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-5 h-full flex flex-col justify-between bg-white-smoke p-6 rounded-sm">
              <div>
                <div>
                  <span className="px-3 py-1 bg-[#58C38F] ik-misc--label rounded-full mb-4 block w-fit">
                    Available
                  </span>

                  <h3 className="ik-heading--h3 mb-8">
                    Spacious 3-Bedroom Family Home in Ashford, Kent
                  </h3>

                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                      <BiMap color="#5790E1" size={16} />
                    </div>
                    <div className="ik-body--md">
                      St. Mark’s Close, Ashford TN23 5LF, UK
                    </div>
                  </div>

                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="ik-heading--h3">£1,250</span>
                    <span className="ik-body--lg--500">monthly</span>
                  </div>

                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="ik-heading--h3">£625</span>
                    <span className="ik-body--lg--500">monthly</span>
                  </div>

                  <div className="flex items-center justify-between h-13 border-t border-border">
                    <span className="ik-body--lg--500">Bedrooms</span>
                    <span className="ik-body--lg--500 text-light-gray">3</span>
                  </div>
                  <div className="flex items-center justify-between h-13 border-t border-border">
                    <span className="ik-body--lg--500">Bathrooms</span>
                    <span className="ik-body--lg--500 text-light-gray">2</span>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  size="small"
                  label="Request for more info"
                  variant="filled"
                  className="w-full"
                />
              </div>
            </div>

            <div className="col-span-7">
              <div>
                <figure className="ik-figure rounded-sm pt-[75%] mb-6">
                  <Image
                    alt=""
                    src={"https://picsum.photos/801/800"}
                    width={600}
                    height={600}
                    className="ik-image"
                  />
                </figure>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <figure className="ik-figure rounded-sm pt-[66%] mb-5">
                  <Image
                    alt=""
                    src={"https://picsum.photos/805/800"}
                    width={600}
                    height={600}
                    className="ik-image"
                  />
                </figure>

                <figure className="ik-figure rounded-sm pt-[66%] mb-5">
                  <Image
                    alt=""
                    src={"https://picsum.photos/802/800"}
                    width={600}
                    height={600}
                    className="ik-image"
                  />
                </figure>

                <figure className="ik-figure rounded-sm pt-[66%] mb-5">
                  <Image
                    alt=""
                    src={"https://picsum.photos/802/802"}
                    width={600}
                    height={600}
                    className="ik-image"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-5">
              <h4 className="ik-heading--h4 mb-4">Description</h4>
              <p>
                This modern 3-bedroom semi-detached home offers comfort,
                convenience, and plenty of space for family living. Situated in
                a quiet residential neighborhood, the property is close to
                schools, local shops, and excellent transport links.
              </p>
            </div>

            <div className="col-span-6 col-start-7">
              <div className="flex items-center justify-between h-13 border-t border-border">
                <span className="ik-body--lg--500">Floor Plan</span>
                <div className="flex gap-2">
                  <span className="ik-body--lg--500 text-light-gray">
                    Download
                  </span>

                  <button>
                    <BiDownload size={24} color="#6C7075" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between h-13 border-t border-border">
                <span className="ik-body--lg--500">Floors</span>
                <span className="ik-body--lg--500 text-light-gray">2</span>
              </div>
              <div className="flex items-center justify-between h-13 border-t border-border">
                <span className="ik-body--lg--500">Size (sqft)</span>
                <span className="ik-body--lg--500 text-light-gray">
                  3900 sq. ft.
                </span>
              </div>
              <div className="flex items-center justify-between h-13 border-t border-border">
                <span className="ik-body--lg--500">Property Type</span>
                <span className="ik-body--lg--500 text-light-gray">
                  Detached
                </span>
              </div>
              <div className="flex items-center justify-between h-13 border-t border-border">
                <span className="ik-body--lg--500">Bedrooms</span>
                <span className="ik-body--lg--500 text-light-gray">3</span>
              </div>
              <div className="flex items-center justify-between h-13 border-t border-border">
                <span className="ik-body--lg--500">Bathrooms</span>
                <span className="ik-body--lg--500 text-light-gray">2</span>
              </div>
              <div className="flex items-center justify-between h-13 border-t border-border">
                <span className="ik-body--lg--500">Heating</span>
                <span className="ik-body--lg--500 text-light-gray">
                  Electric
                </span>
              </div>
              <div className="flex items-center justify-between h-13 border-t border-border">
                <span className="ik-body--lg--500">Parking Spots</span>
                <span className="ik-body--lg--500 text-light-gray">1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ik-section-bottom">
        <div className="ik-container">
          <h3 className="mb-14 ik-heading--h4">Floor Plan</h3>

          <figure>
            <Image
              alt="floor plan"
              src={"/floor-plan.png"}
              width={653}
              height={675}
              className="mx-auto"
            />
          </figure>
        </div>
      </section>
    </>
  );
};
