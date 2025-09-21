"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "../Button";
import style from "./index.module.scss";

gsap.registerPlugin(useGSAP, CustomEase);

const { desktop } = style;
const NAV_CLASS =
  "absolute top-full left-0 transition-all duration-200 origin-top-left z-10 pt-2";
const NAV_ITEM_CLASS =
  "ik-misc--nav-link h-10 flex items-center px-3 hover:bg-alt-blue rounded-sm";

export const Navbar = () => {
  const navRef = useRef(null);
  const listRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef(null);
  const upperLineRef = useRef<HTMLDivElement>(null);
  const lowerLineRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const openTimers = useRef<{ [key: string]: NodeJS.Timeout | null }>({});
  const matches = useMediaQuery(`(min-width: ${desktop})`, {
    defaultValue: true,
    initializeWithValue: false,
  });
  // const ref = useRef<HTMLElement>(null);
  const ref = useRef(null);

  const menuRefs = {
    services: useRef<HTMLDivElement>(null),
    products: useRef<HTMLDivElement>(null),
    company: useRef<HTMLDivElement>(null),
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Desktop hover open
  const handleMouseEnter = (menu: string) => {
    if (!matches) return; // Only for desktop
    openTimers.current[menu] = setTimeout(() => {
      setActiveMenu(menu);
    }, 75);
  };

  const handleMouseLeave = (menu: string) => {
    if (!matches) return;
    if (openTimers.current[menu]) clearTimeout(openTimers.current[menu]!);
    setActiveMenu(null);
  };

  // Mobile click toggle
  const toggleSubmenu = (menu: string) => {
    if (matches) return; // Don't toggle on desktop clicks
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  // Close dropdowns on outside click for desktop
  useEffect(() => {
    if (!matches) return; // Only for desktop
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideAny =
        menuRefs.services.current?.contains(target) ||
        menuRefs.products.current?.contains(target) ||
        menuRefs.company.current?.contains(target);

      if (!clickedInsideAny) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [matches]);

  useGSAP(
    () => {
      if (isOpen) {
        gsap
          .timeline()
          .to(navRef.current, {
            duration: 0.8,
            translateY: "0%",
            ease: CustomEase.create("custom", "0.645, 0.045, 0.355, 1.0"),
          })
          .to(
            listRefs.current,
            {
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
            },
            "-=0.2"
          )
          .to(
            buttonRef.current,
            {
              opacity: 1,
              duration: 0.2,
              stagger: 0.1,
            },
            "-=0.6"
          );
      } else {
        gsap
          .timeline()
          .to([buttonRef.current, listRefs.current], {
            opacity: 0,
            duration: 0.2,
          })
          .to(
            navRef.current,
            {
              duration: 0.6,
              translateY: "-100%",
              ease: CustomEase.create("custom", "0.645, 0.045, 0.355, 1.0"),
            },
            "-=0.1"
          );
      }
    },
    { dependencies: [isOpen] }
  );

  useGSAP(() => {
    if (isOpen) {
      gsap
        .timeline()
        .to(upperLineRef.current, { y: 5, duration: 0.15 }, "openMenu")
        .to(lowerLineRef.current, { y: -5, duration: 0.15 }, "openMenu")
        .to(upperLineRef.current, { rotate: 45, duration: 0.15 }, ">openMenu")
        .to(lowerLineRef.current, { rotate: -45, duration: 0.15 }, "<");
    } else {
      gsap
        .timeline()
        .to(upperLineRef.current, { rotate: 0, duration: 0.15 }, "closeMenu")
        .to(lowerLineRef.current, { rotate: 0, duration: 0.15 }, "closeMenu")
        .to(upperLineRef.current, { y: 0, duration: 0.15 }, ">closeMenu")
        .to(lowerLineRef.current, { y: 0, duration: 0.15 }, "<");
    }
  }, [isOpen]);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const diff = currentScrollY - lastScrollY;

          if (diff > 5 && currentScrollY > 30) {
            // scrolling down
            setIsVisible(false);
          } else if (diff < -5) {
            // scrolling up
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useGSAP(
    () => {
      if (isVisible) {
        gsap.to(ref.current, {
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      } else {
        gsap.to(ref.current, {
          y: "-100%",
          duration: 0.6,
          ease: "power3.in",
        });
      }
    },
    { dependencies: [isVisible] }
  );

  const pathname = usePathname();

  const nav = (
    <nav
      className={twMerge(
        "w-full h-16 lg:h-20 flex items-center z-50 translate-y-0 fixed",
        lastScrollY > 300 ? "bg-white" : "transparent"
      )}
      ref={ref}
    >
      <div
        className={twMerge(
          "px-4 lg:px-16 mx-auto max-w-[1440px] w-full relative h-full",
          style.container
        )}
      >
        <div className="mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <Link href={"/"}>
            <figure className="w-46">
              <Image
                src="/logo.svg"
                alt="Invicta Logo"
                width={128}
                height={56}
              />
            </figure>
          </Link>

          {/* Desktop Menu */}
          <div
            className={twMerge(
              style.desktopMenu,
              "items-center space-x-8 text-[#0e2040]"
            )}
          >
            <Link
              href="/properties"
              className={twMerge(
                "ik-misc--nav-link opacity-80 hover:opacity-100 transition-opacity",
                pathname === "/properties" && "text-primary-light-blue"
              )}
            >
              Properties
            </Link>
            <div
              className="relative"
              ref={menuRefs.services}
              onMouseEnter={() => handleMouseEnter("tenant")}
              onMouseLeave={() => handleMouseLeave("tenant")}
            >
              <button className="flex items-center gap-0.5 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <span
                  className={twMerge(
                    "ik-misc--nav-link",
                    pathname === "/tenant" && "text-primary-light-blue"
                  )}
                >
                  Tenant Services
                </span>
                <BiChevronDown
                  size={20}
                  color="var(--color-deep-blue)"
                  className={twMerge(
                    "transition-transform duration-200",
                    activeMenu === "tenant" ? "rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={twMerge(
                  "w-[15.37rem]",
                  NAV_CLASS,
                  activeMenu === "tenant"
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-90 pointer-events-none"
                )}
              >
                <div className="p-1 bg-white rounded-lg shadow-lg">
                  <Link href={"/tenant"} className={NAV_ITEM_CLASS}>
                    Tenant Services
                  </Link>

                  <Link href={"/contact"} className={NAV_ITEM_CLASS}>
                    Report Maintenance
                  </Link>
                </div>
              </div>
            </div>

            {/* Products */}
            <div
              className="relative"
              ref={menuRefs.products}
              onMouseEnter={() => handleMouseEnter("landlord")}
              onMouseLeave={() => handleMouseLeave("landlord")}
            >
              <button className="flex items-center gap-0.5 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <span
                  className={twMerge(
                    "ik-misc--nav-link",
                    (pathname === "/mortgage" || pathname === "/let") &&
                      "text-primary-light-blue"
                  )}
                >
                  Landlord Services
                </span>
                <BiChevronDown
                  size={20}
                  color="var(--color-deep-blue)"
                  className={twMerge(
                    "transition-transform duration-200",
                    activeMenu === "landlord" ? "rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={twMerge(
                  "w-[12.5rem]",
                  NAV_CLASS,
                  activeMenu === "landlord"
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-90 pointer-events-none"
                )}
              >
                <div className="p-1 bg-white rounded-lg shadow-lg">
                  <Link href={"/let"} className={NAV_ITEM_CLASS}>
                    Let
                  </Link>

                  <Link href={"/mortgage"} className={NAV_ITEM_CLASS}>
                    Mortgages
                  </Link>
                </div>
              </div>
            </div>

            {/* Projects */}
            <Link
              href="/company"
              className={twMerge(
                "ik-misc--nav-link opacity-80 hover:opacity-100 transition-opacity",
                pathname === "/company" && "text-primary-light-blue"
              )}
            >
              Company
            </Link>
          </div>

          {/* Contact Button */}
          <div
            className={twMerge(
              style.desktopMenuBtn,
              "w-[13.75rem] justify-end"
            )}
          >
            <Link href={"/contact"}>
              <Button label="Contact" size="nav" variant="outlined" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className={twMerge(style.mobileMenu, "flex items-center")}>
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center size-11"
            >
              <div className="">
                <div
                  className="block w-6 h-0.5 mb-2 bg-deep-blue"
                  ref={upperLineRef}
                />

                <div
                  className="block w-6 h-0.5 bg-deep-blue"
                  ref={lowerLineRef}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={navRef}
          className="xl:hidden fixed top-0 left-0 w-full h-dvh -z-1 border-b border-border overflow-y-auto -translate-y-full bg-white"
        >
          {/* Mobile items */}
          <div className="flex flex-col space-y-2 pt-[88px]">
            <div
              ref={(el) => {
                listRefs.current[0] = el;
              }}
            >
              <Link
                href="/properties"
                className="mx-4 border-b border-border h-14 flex items-center ik-misc--nav-link"
                onClick={toggleMenu}
              >
                Properties
              </Link>
            </div>
            {/* Services */}
            <div
              className="mx-4 border-b border-border"
              ref={(el) => {
                listRefs.current[1] = el;
              }}
            >
              <button
                onClick={() => toggleSubmenu("tenant")}
                className="w-full flex justify-between items-center h-14"
              >
                <span className="ik-misc--nav-link">Tenant Services</span>
                <BiChevronDown
                  className={`transition-transform duration-500 ${
                    activeMenu === "tenant" ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeMenu === "tenant"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 flex flex-col pb-3">
                  <Link
                    href={"/tenant"}
                    className="text-sm h-12 flex items-center ik-misc--nav-link"
                    onClick={toggleMenu}
                  >
                    Tenant Services
                  </Link>

                  <Link
                    href={"/contact"}
                    className="text-sm h-12 flex items-center ik-misc--nav-link"
                    onClick={toggleMenu}
                  >
                    Report Maintenance
                  </Link>
                </div>
              </div>
            </div>

            {/* Products */}
            <div
              className="mx-4 border-b border-border"
              ref={(el) => {
                listRefs.current[2] = el;
              }}
            >
              <button
                onClick={() => toggleSubmenu("landlord")}
                className="w-full flex justify-between items-center h-14"
              >
                <span className="ik-misc--nav-link">Landlord Service</span>
                <BiChevronDown
                  className={`transition-transform duration-500 ${
                    activeMenu === "landlord" ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeMenu === "landlord"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 flex flex-col pb-3">
                  <Link
                    href={"/let"}
                    className="text-sm h-12 flex items-center ik-misc--nav-link"
                    onClick={toggleMenu}
                  >
                    Let
                  </Link>
                  <Link
                    href={"/mortgage"}
                    className="text-sm h-12 flex items-center ik-misc--nav-link"
                    onClick={toggleMenu}
                  >
                    Mortgages
                  </Link>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div
              ref={(el) => {
                listRefs.current[3] = el;
              }}
            >
              <Link
                href="/company"
                className="mx-4 border-b border-border h-14 flex items-center ik-misc--nav-link"
                onClick={toggleMenu}
              >
                Company
              </Link>
            </div>

            {/* Contact */}
            <div className="px-4 mb-4 absolute bottom-4 w-full" ref={buttonRef}>
              <Link href={"/contact"}>
                <Button
                  label="Contact"
                  size="nav"
                  variant="outlined"
                  className="w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

  return <>{nav}</>;
};
