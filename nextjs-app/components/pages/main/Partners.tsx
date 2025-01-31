import Image from "next/image";
import { ZEABUR_PARTNER_URL, SANGUINE_PARTNER_URL } from "@/constants/partners";
import Wave from "@/components/common/Wave";
import SectionTitle from "./SectionTitle";

const programPartners = [
  {
    name: "Zeabur",
    imageSrc: "/images/partners/zeabur.png",
    href: ZEABUR_PARTNER_URL,
  },
  {
    name: "Sanguine",
    imageSrc: "/images/partners/sanguine.png",
    href: SANGUINE_PARTNER_URL,
  },
];

const Partners = () => {
  return (
    <div className="relative w-full bg-neutral-1">
      <Wave color="neutral" />
      <section className="container py-[72px] md:py-[120px]">
        <div className="mx-auto text-center">
          <SectionTitle
            className="mb-11"
            title="合作夥伴"
            subTitle="Our Partners"
          />
          <div className="w-full px-5 md:px-10">
            <div className="mx-auto grid max-w-[588px] grid-cols-2 justify-center gap-4 md:gap-7">
              {programPartners.map((partner, idx) => (
                <a
                  key={idx}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[108px] items-center justify-center rounded-3 bg-white lg:h-[98px] lg:max-w-[270px]"
                >
                  <div className="relative h-auto w-auto px-7">
                    <Image
                      src={partner.imageSrc}
                      alt={`${partner.name} logo`}
                      width={158}
                      height={30}
                      className="h-auto w-auto object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
