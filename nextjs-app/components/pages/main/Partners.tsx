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
    <section className="py-[72px] bg-[#F4F4F4] md:py-[120px]">
      <div className="mx-auto text-center">
        <h2 className="text-h4 text-[#7E7059]">合作夥伴</h2>
        <h3 className="text-[48px] leading-11 font-semibold font-eb-garamond mb-6 text-[#090E3E]">
          Our Partners
        </h3>
        <Image
          src="/images/title-symbol-line.png"
          alt="title-symbol-line"
          width={57}
          height={5}
          className="mx-auto mb-9"
        />
        <div className="mx-auto w-fit">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7">
            {programPartners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg"
              >
                <Image
                  src={partner.imageSrc}
                  alt={`${partner.name} logo`}
                  width={324}
                  height={108}
                  className="object-contain w-[165.5px] h-[108px] md:w-[324px] lg:w-[271px]"
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
