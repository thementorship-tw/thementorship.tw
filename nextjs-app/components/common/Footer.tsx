import Image from "next/image";
import {
  MENTORSHIP_MEDIUM_URL,
  MENTORSHIP_INSTAGRAM_URL,
  MENTORSHIP_LINKEDIN_URL,
  MENTORSHIP_FACEBOOK_URL,
  MENTORSHIP_EMAIL_ADDRESS_MAILTO,
} from "@/constants/contact-info";
import BackToTopButton from "@/components/common/BackToTopButton";

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="absolute right-5 -top-[25px]">
        <BackToTopButton />
      </div>
      <div className="bg-blue-8 w-full p-7 pt-11">
        <div className="flex flex-col items-center border-b border-neutral-8 mb-4">
          <Image
            src="/images/program-logo-with-white-text.png"
            alt="program-logo"
            width={264}
            height={50}
            className="w-[187px] h-[40px] md:w-[264px] md:h-[50px]"
          />
          <div className="flex gap-5 mt-5 pb-8">
            <a
              href={MENTORSHIP_MEDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/medium-logo.png"
                alt="medium-logo"
                width={32}
                height={32}
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.2]"
              />
            </a>
            <a
              href={MENTORSHIP_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/instagram-logo.png"
                alt="instagram-logo"
                width={32}
                height={32}
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.2]"
              />
            </a>
            <a
              href={MENTORSHIP_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/linkedin-logo.png"
                alt="linkedin-logo"
                width={32}
                height={32}
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.2]"
              />
            </a>
            <a
              href={MENTORSHIP_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/facebook-logo.png"
                alt="facebook-logo"
                width={32}
                height={32}
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.2]"
              />
            </a>
            <a
              href={MENTORSHIP_EMAIL_ADDRESS_MAILTO}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/email-logo.png"
                alt="email-logo"
                width={32}
                height={32}
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.2]"
              />
            </a>
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
