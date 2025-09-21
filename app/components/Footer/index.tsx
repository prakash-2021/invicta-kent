import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-10 lg:pt-20 pb-4">
      <div className="ik-container">
        {/* Logo */}
        <Link href={"/"} className="block mb-8">
          <figure className="w-46">
            <Image src="/logo.svg" alt="Invicta Logo" width={128} height={56} />
          </figure>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <h4 className="ik-heading--h4 text-primary-dark-blue mb-3">
              Invicta Kent Management
            </h4>
            <p className="ik-body--nd--400 text-blue-gray">
              Trusted property management and real estate services across the
              UK, helping tenants find homes and landlords manage properties
              with ease.
            </p>
          </div>
          <div className="mb-10 lg:mb-0 lg:col-span-2 lg:col-start-9">
            <h6 className="ik-body--md--600 text-primary-dark-blue mb-4">
              Quick Links
            </h6>

            <Link
              href={"/properties"}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Listings
            </Link>
            <Link
              href={"/company"}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Company
            </Link>
            <Link
              href={"/contact"}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Contact
            </Link>
          </div>
          <div className="mb-10 lg:mb-0 lg:col-span-2 lg:col-start-11">
            <h6 className="ik-body--md--600 text-primary-dark-blue mb-4">
              Services
            </h6>

            <Link
              href={"/tenant"}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Tenant Services
            </Link>
            <Link
              href={"/let"}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Let
            </Link>
            <Link
              href={"/mortgage"}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Mortgage Services
            </Link>
          </div>
          {/* <div className="lg:col-span-2">
            <h6 className="ik-body--md--600 text-primary-dark-blue mb-4">
              Follow us
            </h6>

            <Link
              href={""}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              LinkedIn
            </Link>
            <Link
              href={""}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Instagram
            </Link>
            <Link
              href={""}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Facebook
            </Link>
          </div> */}
        </div>

        <div className="py-6 lg:py-8 flex flex-col lg:flex-row  gap-4 lg:items-center justify-between border-t border-border mt-12 lg:mt-20">
          <span className="text-indigo-dye ik-body--sm--400">
            © 2025 Invicta Kent Management.
          </span>

          <div className="flex items-center gap-10">
            <Link
              href={""}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Terms
            </Link>

            <Link
              href={""}
              className="block mb-3 ik-misc--nav-link text-blue-gray"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
