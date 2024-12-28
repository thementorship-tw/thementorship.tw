import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full">
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
            <Image
              src="/images/medium-logo.png"
              alt="medium-logo"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <Image
              src="/images/instagram-logo.png"
              alt="instagram-logo"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <Image
              src="/images/linkedin-logo.png"
              alt="linkedin-logo"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <Image
              src="/images/facebook-logo.png"
              alt="facebook-logo"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <Image
              src="/images/email-logo.png"
              alt="email-logo"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="border-t border-b border-[#7E7059] mb-5">test</div>
        <div className="flex justify-between items-end min-h-[52px]">
          <div className="flex-1" />
          <p className="text-white text-center">
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
