import Link from "next/link";
import Image from "next/image";
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

// Note: to change color of icon, here is the example class name: [&>path]:fill-[#fcba03]
const socialLinks = [
  {
    name: "Medium",
    icon: <MediumIcon className="text-yellow-6 w-8 h-8 md:w-10 md:h-10" />,
    href: MENTORSHIP_MEDIUM_URL,
  },
  {
    name: "Instagram",
    icon: <InstagramIcon className="text-yellow-6 w-8 h-8 md:w-10 md:h-10" />,
    href: MENTORSHIP_INSTAGRAM_URL,
  },
  {
    name: "linkedin",
    icon: <LinkedInIcon className="text-yellow-6 w-8 h-8 md:w-10 md:h-10" />,
    href: MENTORSHIP_LINKEDIN_URL,
  },
  {
    name: "Facebook",
    icon: <FacebookIcon className="text-yellow-6 w-8 h-8 md:w-10 md:h-10" />,
    href: MENTORSHIP_FACEBOOK_URL,
  },
  {
    name: "Email",
    icon: (
      <EmailIcon
        className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full md:w-10 md:h-10"
        viewBox="0 0 48 49"
      />
    ),
    href: MENTORSHIP_EMAIL_ADDRESS_MAILTO as string,
  },
];

const StayUpdated = () => {
  return (
    <section className="pt-[72px] pb-[90px] md:py-[120px]">
      <div className="mx-auto text-center">
        <h2 className="text-h5 md:text-h4 text-yellow-6 mb-2">
          關注第一手消息
        </h2>
        <h3 className="text-h3-title md:text-h1-title font-eb-garamond mb-6 text-blue-8">
          Stay Updated
        </h3>
        <Image
          src="/images/title-symbol-line.png"
          alt="title-symbol-line"
          width={57}
          height={5}
          className="mx-auto mb-6 md:mb-9"
        />
        <div className="flex flex-wrap justify-center gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border w-[156px] h-[92px] md:w-[212px] md:h-[212px] rounded-3 hover:bg-[#F8F5F2] transition-all duration-300 border-[#7E7059] flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-2 md:gap-4">
                <span className="text-xl font-semibold text-[#1F2630]">
                  {link.name}
                </span>
                <span className="text-3xl">{link.icon}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
