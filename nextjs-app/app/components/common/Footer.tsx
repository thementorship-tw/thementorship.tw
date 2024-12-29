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
      <div className="absolute right-7 top-5">
        <BackToTopButton />
      </div>
      <div className="w-full [aspect-ratio:10.6/1] bg-[url('/images/footer-wave.png')] bg-no-repeat bg-center bg-[length:100%_100%]" />
      <div className="bg-[#090E3E] w-full p-7">
        <div className="flex flex-col items-center md:-mt-[74px]">
          <Image
            src="/images/program-logo-with-white-text.png"
            alt="program-logo"
            width={285}
            height={60}
          />
          <div className="flex gap-5 mt-4 mb-9">
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
        <div className="border-t border-b border-[#7E7059] mb-5 flex justify-center gap-8 py-6 text-white">
          {PAGE_NAV_ITEMS.map((item) => (
            <NavItem
              key={item.enTitle}
              href={item.href}
              enTitle={item.enTitle}
              zhTitle={item.zhTitle}
            />
          ))}
        </div>
        <div className="flex justify-between items-end min-h-[52px]">
          <div className="flex-1" />
          <p className="text-white text-center text-body-md">
            © MentorShip All Rights Reserved
          </p>
          <div className="flex-1 flex justify-end">
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
