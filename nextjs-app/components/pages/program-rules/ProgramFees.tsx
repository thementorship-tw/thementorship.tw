import { FC } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Wave from "@/components/common/Wave/Wave";
import SectionTitle from "./SectionTitle";

const FEE_DATA = [
  {
    imageSrc: "/images/icon-hat.png",
    title: "海選參加費",
    subtitle: "含海選當日場地與器材費用",
    fee: 350,
  },
  {
    imageSrc: "/images/icon-ship.png",
    title: "計劃報名費",
    subtitle: "含職能月會、通識講座費用",
    fee: 3500,
  },
];

interface IFeeInfo {
  imageSrc: string;
  title: string;
  subtitle: string;
  fee: number;
}

const FeeCard: FC<IFeeInfo> = ({ imageSrc, title, subtitle, fee }) => (
  <div
    className={twMerge(
      "py-8 px-7 bg-white rounded-3",
      "flex flex-col md:flex-row grow items-center md:items-end justify-between gap-3 md:gap-7"
    )}
  >
    <div className="flex flex-col md:flex-row items-center gap-5">
      <Image
        src={imageSrc}
        alt="program-fee-icon"
        width={80}
        height={80}
        className="shrink-0"
      />
      <div className="text-center md:text-left">
        <div className="text-h3 text-yellow-6">{title}</div>
        <div className="text-body-md text-neutral-10">{subtitle}</div>
      </div>
    </div>
    <div className="flex items-baseline">
      <h4 className="text-h4 text-yellow-6">$ </h4>
      <h1 className="text-h1 text-yellow-6 ml-1">{fee.toLocaleString()}</h1>
      <p className="text-body-lg text-neutral-10 ml-1">/人</p>
    </div>
  </div>
);

const ProgramFees = () => (
  <section className="w-full bg-blue-8 relative">
    <Wave color="blue8" />
    <div className="container px-5 py-[72px] md:px-10 md:py-[120px]">
      <SectionTitle
        title="計劃參加費用"
        description={`「收到海選通知信」始需繳納「海選參加費」\n「收到錄取通知信」始需繳納「計劃報名費」`}
        serial="06"
        variant="dark"
      />
      <div className="mt-11 grid grid-cols-1 xl:grid-cols-2 justify-center gap-4 md:gap-7">
        {FEE_DATA.map((item) => (
          <FeeCard
            key={item.title}
            imageSrc={item.imageSrc}
            title={item.title}
            subtitle={item.subtitle}
            fee={item.fee}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProgramFees;
