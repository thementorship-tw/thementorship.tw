import Image from "next/image";
import NavItem from "@/app/components/common/NavItem";
import { PAGE_NAV_ITEMS } from "@/constants/page-nav-list";
import {
  MENTORSHIP_MEDIUM_URL,
  MENTORSHIP_INSTAGRAM_URL,
  MENTORSHIP_LINKEDIN_URL,
  MENTORSHIP_FACEBOOK_URL,
} from "@/constants/contact-info";
import BackToTopButton from "@/app/components/common/BackToTopButton";

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="absolute right-7 -top-4 md:-top-ˊ">
        <BackToTopButton />
      </div>
      <div
        className="w-full h-[136px]
        bg-[url('/images/footer-wave.png')] 
        bg-no-repeat bg-center
        bg-[length:auto_100%] xl:bg-[length:100%_100%]"
      />
      <div className="bg-[#090E3E] w-full p-7">
        <div className="flex flex-col items-center mt-[-76px]">
          <Image
            src="/images/program-logo-with-white-text.png"
            alt="program-logo"
            width={285}
            height={60}
          />
          <div className="flex gap-5 mt-4 mb-10">
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
            <Image
              src="/images/email-logo.png"
              alt="email-logo"
              width={32}
              height={32}
              className="cursor-pointer transition-transform duration-300 hover:scale-[1.2]"
            />
          </div>
        </div>
        <div className="border-t border-b border-[#7E7059] mb-5 hidden md:flex flex-wrap justify-center gap-8 py-6 text-white w-full">
          {PAGE_NAV_ITEMS.map((item, idx) => (
            <NavItem
              key={idx}
              href={item.href}
              enTitle={item.enTitle}
              zhTitle={item.zhTitle}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-end min-h-[52px]">
          <div className="hidden lg:block lg:flex-1" />
          <p className="text-white text-center text-body-md mb-4 lg:mb-0 md:mt-8">
            © MentorShip All Rights Reserved
          </p>
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
