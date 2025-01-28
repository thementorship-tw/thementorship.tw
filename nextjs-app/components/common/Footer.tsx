import Image from "next/image";
import {
  MENTORSHIP_MEDIUM_URL,
  MENTORSHIP_INSTAGRAM_URL,
  MENTORSHIP_LINKEDIN_URL,
  MENTORSHIP_FACEBOOK_URL,
  MENTORSHIP_EMAIL_ADDRESS_MAILTO,
} from "@/constants/contact-info";
import BackToTopButton from "@/components/common/BackToTopButton";
import Wave from "@/components/common/Wave";

export const SOCIAL_MEDIA_LINKS = [
  { url: MENTORSHIP_MEDIUM_URL, icon: "medium" },
  { url: MENTORSHIP_INSTAGRAM_URL, icon: "instagram" },
  { url: MENTORSHIP_LINKEDIN_URL, icon: "linkedin" },
  { url: MENTORSHIP_FACEBOOK_URL, icon: "facebook" },
  { url: MENTORSHIP_EMAIL_ADDRESS_MAILTO, icon: "email" },
] as const;

export default function Footer() {
  return (
    <footer className="relative w-full">
      <Wave color="blue8" />
      <div className="absolute right-5 -top-[25px]">
        <BackToTopButton />
      </div>
      <div className="bg-blue-8 w-full p-7 pt-11">
        <div className="flex flex-col items-center border-b border-neutral-8 mb-4">
          <div className="hidden md:block">
            <Image
              src="/images/program-logo-with-white-text-big.png"
              alt="program-logo"
              width={264}
              height={50}
              className="w-[264px] h-[50px]"
            />
          </div>
          <div className="block md:hidden">
            <Image
              src="/images/program-logo-with-white-text.png"
              alt="program-logo"
              width={187}
              height={40}
              className="w-[187px] h-[40px]"
            />
          </div>
          <div className="flex gap-5 mt-5 pb-8">
            {SOCIAL_MEDIA_LINKS.map(({ url, icon }) => (
              <a
                key={icon}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/images/${icon}-logo.png`}
                  alt={`${icon}-logo`}
                  width={32}
                  height={32}
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.2]"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center min-h-11">
          <div className="hidden lg:block lg:flex-1" />
          <div className="lg:flex-1 flex justify-center">
            <p className="text-white text-center text-body-md mb-4 lg:mb-0">
              © MentorShip All Rights Reserved
            </p>
          </div>
          <div className="md:flex-1 md:flex md:justify-end md:items-end flex justify-center">
            <Image
              src="/images/deployed-on-zeabur.png"
              alt="footer-logo"
              width={194}
              height={37}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
