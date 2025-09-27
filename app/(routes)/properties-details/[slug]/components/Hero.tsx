import { Property } from "@/app/(routes)/(home)/data/query";
import { Button } from "@/app/components";
import Image from "next/image";
import Link from "next/link";
import { BiMap } from "react-icons/bi";

interface Props {
  data: Property;
}

export const Hero = ({ data }: Props) => {
  return (
    <>
      <section className="ik-section-top mb-16 lg:mb-20">
        <div className="ik-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-5 h-full flex flex-col justify-between bg-white-smoke p-6 rounded-sm order-2 lg:order-1">
              <div>
                {/* Availability */}
                <span className="px-3 py-1 bg-[#58C38F] ik-misc--label rounded-full mb-4 block w-fit">
                  {data?.available ? "Available" : "Not Available"}
                </span>

                {/* Title */}
                {data?.title && (
                  <h3 className="ik-heading--h3 mb-8">{data.title}</h3>
                )}

                {/* Location */}
                {data?.location && (
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                      <BiMap color="#5790E1" size={16} />
                    </div>
                    <div className="ik-body--md">{data.location}</div>
                  </div>
                )}

                {/* Price */}
                {data?.monthly_price && (
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="ik-heading--h3">{data.monthly_price}</span>
                    <span className="ik-body--lg--500">monthly</span>
                  </div>
                )}

                {data?.deposit_price && (
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="ik-heading--h3">{data.deposit_price}</span>
                    <span className="ik-body--lg--500">deposit</span>
                  </div>
                )}

                {/* Bedrooms & Bathrooms */}
                {data?.bedrooms && (
                  <div className="flex items-center justify-between h-13 border-t border-border">
                    <span className="ik-body--lg--500">Bedrooms</span>
                    <span className="ik-body--lg--500 text-light-gray">
                      {data.bedrooms}
                    </span>
                  </div>
                )}

                {data?.bathrooms && (
                  <div className="flex items-center justify-between h-13 border-t border-border">
                    <span className="ik-body--lg--500">Bathrooms</span>
                    <span className="ik-body--lg--500 text-light-gray">
                      {data.bathrooms}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-20 lg:mt-0">
                <Link href={"/contact?type=property"}>
                  <Button
                    size="small"
                    label="Request for more info"
                    variant="filled"
                    className="w-full"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT CONTENT (Images) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              {data?.property_images?.length > 0 && (
                <>
                  {/* Main image */}
                  <figure className="ik-figure rounded-sm pt-[75%] mb-3 lg:mb-6">
                    <Image
                      alt="property image"
                      src={
                        "https://invicta-kent-admin.xyz" +
                          data.property_images[0]?.url || ""
                      }
                      width={1200}
                      height={1000}
                      className="ik-image"
                    />
                  </figure>

                  {/* Sub images */}
                  <div className="grid grid-cols-3 gap-3 lg:gap-6">
                    {data.property_images.slice(1, 4).map((img, index) => (
                      <figure
                        key={index}
                        className="ik-figure rounded-sm pt-[66%] mb-5"
                      >
                        <Image
                          alt={`property image ${index + 2}`}
                          src={"https://invicta-kent-admin.xyz" + img?.url}
                          width={1200}
                          height={1000}
                          className="ik-image"
                        />
                      </figure>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* DESCRIPTION + EXTRA INFO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {data?.description && (
              <div className="lg:col-span-5">
                <h4 className="ik-heading--h4 mb-4">Description</h4>
                <p>{data.description}</p>
              </div>
            )}

            <div className="lg:col-span-6 lg:col-start-7">
              {data?.floors && (
                <div className="flex items-center justify-between h-13 border-t border-border">
                  <span className="ik-body--lg--500">Floors</span>
                  <span className="ik-body--lg--500 text-light-gray">
                    {data.floors}
                  </span>
                </div>
              )}

              {data?.size && (
                <div className="flex items-center justify-between h-13 border-t border-border">
                  <span className="ik-body--lg--500">Size (sqft)</span>
                  <span className="ik-body--lg--500 text-light-gray">
                    {data.size}
                  </span>
                </div>
              )}

              {data?.property_type && (
                <div className="flex items-center justify-between h-13 border-t border-border">
                  <span className="ik-body--lg--500">Property Type</span>
                  <span className="ik-body--lg--500 text-light-gray">
                    {data.property_type}
                  </span>
                </div>
              )}

              {data?.heating && (
                <div className="flex items-center justify-between h-13 border-t border-border">
                  <span className="ik-body--lg--500">Heating</span>
                  <span className="ik-body--lg--500 text-light-gray">
                    {data.heating}
                  </span>
                </div>
              )}

              {data?.parking_spots && (
                <div className="flex items-center justify-between h-13 border-t border-border">
                  <span className="ik-body--lg--500">Parking Spots</span>
                  <span className="ik-body--lg--500 text-light-gray">
                    {data.parking_spots}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FLOOR PLAN */}
      {data?.floor_plan?.url && (
        <section className="ik-section-bottom">
          <div className="ik-container">
            <h3 className="mb-4 lg:mb-14 ik-heading--h4">Floor Plan</h3>
            <figure className="max-w-2/3 mx-auto lg:max-w-none">
              <Image
                alt="floor plan"
                src={"https://invicta-kent-admin.xyz" + data.floor_plan.url}
                width={653}
                height={675}
                className="mx-auto"
              />
            </figure>
          </div>
        </section>
      )}
    </>
  );
};
