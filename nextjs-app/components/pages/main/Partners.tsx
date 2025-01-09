import Image from "next/image";
import { FABLE_PARTNER_URL } from "@/constants/partners";

const programPartners = [
  {
    name: "Fable",
    imageSrc: "/images/partner-fable.png",
    href: FABLE_PARTNER_URL,
  },
  {
    name: "Fable",
    imageSrc: "/images/partner-fable.png",
    href: FABLE_PARTNER_URL,
  },
  {
    name: "Fable",
    imageSrc: "/images/partner-fable.png",
    href: FABLE_PARTNER_URL,
  },
  {
    name: "Fable",
    imageSrc: "/images/partner-fable.png",
    href: FABLE_PARTNER_URL,
  },
  {
    name: "Fable",
    imageSrc: "/images/partner-fable.png",
    href: FABLE_PARTNER_URL,
  },
  {
    name: "Fable",
    imageSrc: "/images/partner-fable.png",
    href: FABLE_PARTNER_URL,
  },
  {
    name: "Fable",
    imageSrc: "/images/partner-fable.png",
    href: FABLE_PARTNER_URL,
  },
  {
    name: "Fable",
    imageSrc: "/images/partner-fable.png",
    href: FABLE_PARTNER_URL,
  },
];

const Partners = () => {
  return (
    <section className="py-[72px] bg-neutral-1 md:py-[120px]">
      <div className="mx-auto text-center">
        <h2 className="text-h5 md:text-h4 text-yellow-6 mb-2">合作夥伴</h2>
        <h3 className="text-h3-title md:text-h1-title font-eb-garamond mb-6 md:mb-8 text-blue-8">
          Our Partners
        </h3>
        <Image
          src="/images/title-symbol-line.png"
          alt="title-symbol-line"
          width={57}
          height={5}
          className="mx-auto mb-11"
        />
        <div className="w-full px-5 md:px-10 xl:px-[142px]">
          <div className="flex flex-wrap gap-4 md:gap-7 justify-center">
            {programPartners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3 w-[calc(50%-6px)] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <Image
                  src={partner.imageSrc}
                  alt={`${partner.name} logo`}
                  width={324}
                  height={108}
                  className="object-contain h-[108px] w-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
