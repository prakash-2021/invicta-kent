import Image from "next/image";
import Link from "next/link";
import { MdOutlineBed, MdOutlineShower } from "react-icons/md";
import style from "./index.module.scss";

interface FeatureProps {
  imageUrl: string;
  beds: number | null;
  baths: number | null;
  title?: string;
  address?: string;
  id: string;
}

export const FeatureCard = ({
  address,
  baths,
  beds,
  imageUrl,
  title,
  id,
}: FeatureProps) => {
  return (
    <Link href={`/properties-details/${id}`}>
      <div className={style.projectCard}>
        <figure className="ik-figure rounded-sm pt-[100%] mb-5">
          <Image
            alt=""
            src={"https://invicta-kent-admin.xyz" + imageUrl}
            width={600}
            height={600}
            className="ik-image"
          />
        </figure>

        <div className="flex gap-5 mb-4">
          {!!beds && (
            <div className="flex items-center gap-1.5">
              <MdOutlineBed size={20} color="#172747" />
              <span className="ik-misc--label text-primary-dark-blue">
                {beds} Beds
              </span>
            </div>
          )}

          {!!baths && (
            <div className="flex items-center gap-1.5">
              <MdOutlineShower size={20} color="#172747" />
              <span className="ik-misc--label text-primary-dark-blue">
                {baths} Baths
              </span>
            </div>
          )}
        </div>

        <p className="ik-body--lg--500 text-primary-dark-blue">{title}</p>
        <p className="ik-body--lg--500 text-primary-dark-blue">{address}</p>
      </div>
    </Link>
  );
};
