import Link from "next/link";
import Image from "next/image";
import { default as MediumIcon } from "@/public/images/medium-logo.svg";
import { default as FacebookIcon } from "@/public/images/facebook-logo.svg";
import { default as LinkedInIcon } from "@/public/images/linkedin-logo.svg";
import { default as InstagramIcon } from "@/public/images/instagram-logo.svg";
import {
  MENTORSHIP_FACEBOOK_URL,
  MENTORSHIP_INSTAGRAM_URL,
  MENTORSHIP_LINKEDIN_URL,
  MENTORSHIP_MEDIUM_URL,
} from "@/constants/contact-info";

// Note: to change color of icon, here is the example class name: [&>path]:fill-[#fcba03]
const socialLinks = [
  {
    name: "Medium",
    icon: (
      <MediumIcon
        className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full md:w-10 md:h-10"
        viewBox="0 0 48 49"
      />
    ),
    href: MENTORSHIP_MEDIUM_URL,
  },
  {
    name: "Instagram",
    icon: (
      <InstagramIcon
        className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full md:w-10 md:h-10"
        viewBox="0 0 48 49"
      />
    ),
    href: MENTORSHIP_INSTAGRAM_URL,
  },
  {
    name: "linkedin",
    icon: (
      <LinkedInIcon
        className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full md:w-10 md:h-10"
        viewBox="0 0 48 49"
      />
    ),
    href: MENTORSHIP_LINKEDIN_URL,
  },
  {
    name: "Facebook",
    icon: (
      <FacebookIcon
        className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full md:w-10 md:h-10"
        viewBox="0 0 48 49"
      />
    ),
    href: MENTORSHIP_FACEBOOK_URL,
  },
];

const StayUpdated = () => {
  return (
    <section className="py-16">
      <div className="mx-auto text-center">
        <h2 className="text-h4 text-[#7E7059]">關注第一手消息</h2>
        <h3 className="text-[48px] leading-11 font-semibold font-eb-garamond mb-6 text-[#090E3E]">
          Stay Updated
        </h3>
        <Image
          src="/images/title-symbol-line.png"
          alt="title-symbol-line"
          width={57}
          height={5}
          className="mx-auto mb-9"
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
                <span className="text-xl font-semibold text-[#1F2630] font-['PingFang_TC']">
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
