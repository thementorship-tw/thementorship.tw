import Image from "next/image";
import {
  ZEABUR_PARTNER_URL,
  SANGUINE_PARTNER_URL,
  POPOP_TAIPEI_PARTNER_URL,
  GIS_GROUP_PARTNER_URL,
  FABLE_PARTNER_URL,
} from "@/constants/partners";
import Wave from "@/components/common/Wave";
import SectionTitle from "./SectionTitle";

const programPartners = [
  {
    name: "Fable",
    imageSrc: "/images/partners/fable.png",
    href: FABLE_PARTNER_URL,
  },
  {
    name: "Popop Taipei",
    imageSrc: "/images/partners/popop-taipei.png",
    href: POPOP_TAIPEI_PARTNER_URL,
  },
  {
    name: "GIS Group",
    imageSrc: "/images/partners/gis-group.png",
    href: GIS_GROUP_PARTNER_URL,
  },
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
    <div className="w-full bg-neutral-1 relative">
      <Wave color="neutral" />
      <section className="container py-[72px] md:py-[120px]">
        <div className="mx-auto text-center">
          <SectionTitle
            className="mb-11"
            title="合作夥伴"
            subTitle="Our Partners"
          />
          <div className="w-full px-5 md:px-10">
            <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 justify-center">
              {programPartners.map((partner, idx) => (
                <a
                  key={idx}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3 flex items-center justify-center h-[108px] lg:h-[98px] lg:max-w-[270px]"
                >
                  <div className="relative w-auto h-auto px-7">
                    <Image
                      src={partner.imageSrc}
                      alt={`${partner.name} logo`}
                      width={158}
                      height={30}
                      className="object-contain w-auto h-auto"
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
