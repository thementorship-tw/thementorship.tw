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
    title: "計畫報名費",
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
      "rounded-3 bg-white px-7 py-8",
      "flex grow flex-col items-center justify-between gap-3 md:flex-row md:items-end md:gap-7"
    )}
  >
    <div className="flex flex-col items-center gap-5 md:flex-row">
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
      <h1 className="ml-1 text-h1 text-yellow-6">{fee.toLocaleString()}</h1>
      <p className="ml-1 text-body-lg text-neutral-10">/人</p>
    </div>
  </div>
);

const ProgramFees = () => (
  <section className="relative w-full bg-blue-8">
    <Wave color="blue8" />
    <div className="container px-5 py-[72px] md:px-10 md:py-[120px]">
      <SectionTitle
        title="計畫參加費用"
        description={`「收到海選通知信」始需繳納「海選參加費」\n「收到錄取通知信」始需繳納「計劃報名費」`}
        serial="06"
        variant="dark"
      />
      <div className="mt-11 grid grid-cols-1 justify-center gap-4 md:gap-7 xl:grid-cols-2">
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
