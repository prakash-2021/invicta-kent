import Image from "next/image";
import { MdOutlineBed, MdOutlineShower } from "react-icons/md";
import style from "./index.module.scss";

export const FeatureCard = () => {
  return (
    <div className={style.projectCard}>
      <figure className="ik-figure rounded-sm pt-[100%] mb-5">
        <Image
          alt=""
          src={"https://picsum.photos/id/1/802/800"}
          width={600}
          height={600}
          className="ik-image"
        />
      </figure>

      <div className="flex gap-5 mb-4">
        <div className="flex items-center gap-1.5">
          <MdOutlineBed size={20} color="#172747" />
          <span className="ik-misc--label text-primary-dark-blue">5 Beds</span>
        </div>

        <div className="flex items-center gap-1.5">
          <MdOutlineShower size={20} color="#172747" />
          <span className="ik-misc--label text-primary-dark-blue">2 Baths</span>
        </div>
      </div>

      <p className="ik-body--lg--500 text-primary-dark-blue">
        3 bed terraced house for sale
      </p>
      <p className="ik-body--lg--500 text-primary-dark-blue">
        Islandsmead, Swindon SN3
      </p>
    </div>
  );
};
