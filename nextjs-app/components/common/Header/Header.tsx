import Link from "next/link";

import { navigationMenu } from "@/constants/header";
import {
  MENTORSHIP_FACEBOOK_URL,
  MENTORSHIP_INSTAGRAM_URL,
  MENTORSHIP_LINKEDIN_URL,
  MENTORSHIP_MEDIUM_URL,
} from "@/constants/contact-info";
import { default as MediumIcon } from "@/public/images/medium-logo.svg";
import { default as FacebookIcon } from "@/public/images/facebook-logo.svg";
import { default as LinkedInIcon } from "@/public/images/linkedin-logo.svg";
import { default as InstagramIcon } from "@/public/images/instagram-logo.svg";
import { default as CompassIcon } from "@/public/images/compass.svg";
import HamburgerButton from "./HamburgerButton";
import type { FC } from "react";

const socialLinks = [
  {
    shouldHideInMobile: false,
    icon: <MediumIcon />,
    href: MENTORSHIP_MEDIUM_URL,
  },
  {
    shouldHideInMobile: false,
    icon: <InstagramIcon />,
    href: MENTORSHIP_INSTAGRAM_URL,
  },
  {
    shouldHideInMobile: true,
    icon: <LinkedInIcon />,
    href: MENTORSHIP_LINKEDIN_URL,
  },
  {
    shouldHideInMobile: true,
    icon: <FacebookIcon />,
    href: MENTORSHIP_FACEBOOK_URL,
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-40 w-full bg-white border-b-[1px] border-b-transparent md:border-b-neutral-2">
      <div className="px-5 py-7 flex justify-between items-center md:px-7 lg:py-0">
        <Link href="/">
          <div className="bg-contain bg-no-repeat w-[153px] h-[30px] bg-[url('/images/header-mobile-logo.png')] md:w-[182px] md:h-[40px] md:bg-[url('/images/header-logo.png')]"></div>
        </Link>

        <div className="flex">
          <nav className="hidden lg:block mr-8">
            <ul className="flex gap-8">
              {navigationMenu.map(({ title, subtitle, subMenu, href }) => {
                const hasSubMenu = !!subMenu && subMenu.length > 0;

                const MenuItem: FC = () => (
                  <>
                    <div className="flex flex-col justify-center items-center gap-1 py-7 text-blue-8 ">
                      <p className="text-h4-title font-eb-garamond">{title}</p>
                      <p className="text-subtitle-md">{subtitle}</p>
                    </div>

                    <span className="hidden absolute left-0 right-0 bottom-0 h-1 bg-yellow-2 group-hover:block" />
                  </>
                );

                return (
                  <li key={title} className="relative group">
                    {href ? (
                      <Link href={href}>
                        <MenuItem />
                      </Link>
                    ) : (
                      <MenuItem />
                    )}

                    {hasSubMenu && (
                      <ul className="absolute left-0 z-10 w-[164px] invisible group-hover:visible group-hover:block">
                        {subMenu.map(({ title, href }) => (
                          <li
                            key={title}
                            className="border-neutral-2 border-[1px] last:border-b-[1px] border-b-0"
                          >
                            <Link href={href}>
                              <div className="flex justify-between px-7 py-5 bg-white hover:bg-yellow-1">
                                <p className="text-subtitle-md text-neutral-10">
                                  {title}
                                </p>

                                <CompassIcon className="w-6 h-6 text-neutral-10" />
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <ul className="flex items-center gap-3">
            {socialLinks.map(({ icon, href, shouldHideInMobile }) => (
              <li
                key={href}
                className={`w-8 h-8 text-neutral-10 hover:text-yellow-6 ${shouldHideInMobile ? "hidden md:block" : "block"}`}
              >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  {icon}
                </Link>
              </li>
            ))}

            <li className="block lg:hidden">
              <HamburgerButton />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
