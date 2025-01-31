"use client";

import { useEffect, type FC } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { default as CloseIcon } from "@/public/images/close-icon.svg";

import { navigationMenu } from "@/constants/header";
import {
  MENTORSHIP_MEDIUM_URL,
  MENTORSHIP_INSTAGRAM_URL,
  MENTORSHIP_LINKEDIN_URL,
  MENTORSHIP_FACEBOOK_URL,
  MENTORSHIP_EMAIL_ADDRESS_MAILTO,
} from "@/constants/contact-info";
import { default as MediumIcon } from "@/public/images/medium-outline.svg";
import { default as FacebookIcon } from "@/public/images/facebook-outline.svg";
import { default as LinkedInIcon } from "@/public/images/linkedin-outline.svg";
import { default as InstagramIcon } from "@/public/images/instagram-outline.svg";
import { default as EnvelopeIcon } from "@/public/images/envelope-outline.svg";

import Accordion from "./Accordion";

const socialLinks = [
  {
    icon: <MediumIcon />,
    href: MENTORSHIP_MEDIUM_URL,
  },
  {
    icon: <InstagramIcon />,
    href: MENTORSHIP_INSTAGRAM_URL,
  },
  {
    icon: <LinkedInIcon />,
    href: MENTORSHIP_LINKEDIN_URL,
  },
  {
    icon: <FacebookIcon />,
    href: MENTORSHIP_FACEBOOK_URL,
  },
  {
    icon: <EnvelopeIcon />,
    href: MENTORSHIP_EMAIL_ADDRESS_MAILTO,
  },
];

const NavigationMenuItem: FC<{
  title: string;
  subtitle: string;
  onClick: () => void;
}> = ({ title, subtitle, onClick }) => {
  return (
    <div
      className="flex cursor-pointer items-center gap-3 border-b-[1px] border-neutral-8 px-7 py-5 text-white"
      onClick={onClick}
    >
      <p className="font-eb-garamond text-h4-title">{title}</p>
      <p className="text-body-md">{subtitle}</p>
    </div>
  );
};

interface IMobileCollapseMenuProps {
  show: boolean;
  onClose: () => void;
}

const MobileCollapseMenu: FC<IMobileCollapseMenuProps> = ({
  show,
  onClose,
}) => {
  const router = useRouter();

  // Prevent scrolling when mobile collapse menu is open
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  const handleNavigation = (href: string) => {
    router.push(href);
    onClose();
  };

  return createPortal(
    <div
      className={twMerge(
        show ? "motion-opacity-in-50" : "hidden",
        "fixed left-0 right-0 top-0 z-50 h-screen w-full bg-blue-7"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex justify-between p-7">
          <Link href="/">
            <div className="h-[30px] w-[140px] bg-[url('/images/mobile-collapse-menu-logo.png')] bg-contain bg-no-repeat" />
          </Link>

          <CloseIcon
            className="h-8 w-8 cursor-pointer text-white"
            onClick={onClose}
          />
        </div>

        <div className="grow">
          {navigationMenu.map(({ title, subtitle, subMenu, href }) =>
            !!subMenu && subMenu.length > 0 ? (
              <Accordion
                key={title}
                title={title}
                subtitle={subtitle}
                subMenu={subMenu}
                onMenuItemClick={handleNavigation}
              />
            ) : (
              <NavigationMenuItem
                key={title}
                title={title}
                subtitle={subtitle}
                onClick={() => {
                  if (href) {
                    handleNavigation(href);
                  }
                }}
              />
            )
          )}

          <div className="flex flex-col gap-4 px-7 py-8">
            <p className="text-body-sm text-neutral-2">FOLLOW US</p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  target="_blank"
                  className="h-7 w-7 text-white"
                  href={link.href}
                  key={link.href}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MobileCollapseMenu;
