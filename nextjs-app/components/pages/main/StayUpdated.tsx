import Link from "next/link";
import { default as MediumIcon } from "@/public/images/medium-logo.svg";
import { default as FacebookIcon } from "@/public/images/facebook-logo.svg";
import { default as LinkedInIcon } from "@/public/images/linkedin-logo.svg";
import { default as InstagramIcon } from "@/public/images/instagram-logo.svg";
import { default as EmailIcon } from "@/public/images/email-logo.svg";
import {
  MENTORSHIP_FACEBOOK_URL,
  MENTORSHIP_INSTAGRAM_URL,
  MENTORSHIP_LINKEDIN_URL,
  MENTORSHIP_MEDIUM_URL,
  MENTORSHIP_EMAIL_ADDRESS_MAILTO,
} from "@/constants/contact-info";
import Wave from "@/components/common/Wave";
import SectionTitle from "./SectionTitle";

const socialLinks = [
  {
    name: "Medium",
    icon: <MediumIcon className="h-8 w-8 text-yellow-6 md:h-10 md:w-10" />,
    href: MENTORSHIP_MEDIUM_URL,
  },
  {
    name: "Instagram",
    icon: <InstagramIcon className="h-8 w-8 text-yellow-6 md:h-10 md:w-10" />,
    href: MENTORSHIP_INSTAGRAM_URL,
  },
  {
    name: "linkedin",
    icon: <LinkedInIcon className="h-8 w-8 text-yellow-6 md:h-10 md:w-10" />,
    href: MENTORSHIP_LINKEDIN_URL,
  },
  {
    name: "Facebook",
    icon: <FacebookIcon className="h-8 w-8 text-yellow-6 md:h-10 md:w-10" />,
    href: MENTORSHIP_FACEBOOK_URL,
  },
  {
    name: "Email",
    icon: (
      <EmailIcon
        className="h-8 w-8 lg:h-10 lg:w-10 [&>svg]:h-full [&>svg]:w-full"
        viewBox="0 0 48 49"
      />
    ),
    href: MENTORSHIP_EMAIL_ADDRESS_MAILTO as string,
  },
];

const StayUpdated = () => {
  return (
    <section className="relative pb-[90px] pt-[72px] md:py-[120px]">
      <Wave color="white" />
      <div className="mx-auto text-center">
        <SectionTitle
          className="mb-11"
          title="關注第一手消息"
          subTitle="Stay Updated"
        />
        <div className="w-full px-6 md:px-10">
          <div className="flex flex-wrap justify-start gap-4 md:justify-center md:gap-7">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[108px] w-[calc(50%-6px)] items-center justify-center rounded-3 border border-yellow-6 transition-[background-color] duration-300 hover:bg-yellow-1 md:w-[calc(33.333%-16px)] lg:h-[212px] lg:w-[212px]"
              >
                <div className="flex flex-col items-center gap-2 lg:gap-4">
                  <span className="text-h6 text-neutral-10 lg:text-h5">
                    {link.name}
                  </span>
                  <span>{link.icon}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
