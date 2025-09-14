import Image from "next/image";

export const Team = () => {
  return (
    <section className="ik-section-bottom">
      <div className="ik-container">
        <div className="ik-misc--tagline text-primary-light-blue mb-3">
          About us
        </div>
        <h2 className="ik-heading--h2 mb-20 text-primary-dark-blue text-balance">
          The People Behind Invicta <br /> Kent Management
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div>
            <figure className="ik-figure rounded-sm pt-[100%] mb-8">
              <Image
                alt=""
                src={"https://picsum.photos/600/600"}
                width={500}
                height={500}
                className="ik-image"
              />
            </figure>

            <h5 className="mb-1 ik-heading--h3">Prakash Maden</h5>

            <span>Head of Operation</span>
          </div>

          <div>
            <figure className="ik-figure rounded-sm pt-[100%] mb-8">
              <Image
                alt=""
                src={"https://picsum.photos/600/601"}
                width={500}
                height={500}
                className="ik-image"
              />
            </figure>

            <h5 className="mb-1 ik-heading--h3">Santos Limbu</h5>

            <span>Lead of Maintenance</span>
          </div>

          <div>
            <figure className="ik-figure rounded-sm pt-[100%] mb-8">
              <Image
                alt=""
                src={"https://picsum.photos/600/602"}
                width={500}
                height={500}
                className="ik-image"
              />
            </figure>

            <h5 className="mb-1 ik-heading--h3">Reshma Limbu</h5>

            <span>Client Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
