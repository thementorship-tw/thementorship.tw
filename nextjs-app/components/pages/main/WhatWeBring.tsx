import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Button from "@/components/common/Button/Button";
import Wave from "@/components/common/Wave";
import SectionTitle from "./SectionTitle";

const PROGRAM_GOAL_DATA = [
  {
    imageSrc: "/images/icon-map.png",
    title: "人脈連結",
    subTitle: "交織彼此的航線",
    description:
      "三人行必有我師，曼陀號裡臥虎藏龍，只要願意積極參與，就能結識長期良師益友，串起緊密人脈網絡",
  },
  {
    imageSrc: "/images/icon-lighthouse.png",
    title: "職涯探索",
    subTitle: "互為迷航的燈塔",
    description:
      "迷惘乃人之常情，但眼前的迷霧也許能折射出別人的光。在夥伴交流中，我們幫助彼此點亮新的可能性",
  },
  {
    imageSrc: "/images/icon-rudder.png",
    title: "經驗傳承",
    subTitle: "共享掌舵的智慧",
    description:
      "經驗是最好老師，曼陀號有資歷豐富前輩不藏私分享心路歷程，讓我們能少走冤枉路，發揮正向影響力",
  },
];

interface IGoalCardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  description: string;
}

const GoalCard: FC<IGoalCardProps> = ({
  imageSrc,
  title,
  subTitle,
  description,
}) => {
  return (
    <div className="flex flex-col items-center rounded-3 duration-300 border border-yellow-6 bg-white z-10">
      <div className="h-[30px]">
        <Image
          src={imageSrc}
          alt={title}
          width={120}
          height={120}
          className="-translate-y-1/2"
        />
      </div>
      <div className="px-7 pt-11 pb-8 space-y-4 text-center">
        <div className="space-y-2 text-yellow-6">
          <h3 className="text-h4">{title}</h3>
          <h6 className="text-h6">{subTitle}</h6>
        </div>
        <p className="text-body-lg text-neutral-10">{description}</p>
      </div>
    </div>
  );
};

const WhatWeBring: FC = () => (
  <section className="bg-blue-8 px-5 py-[72px] md:px-10 md:py-[120px] relative">
    <Wave color="blue8" />
    <div className="relative mx-auto container">
      <SectionTitle
        className="mb-24"
        title="核心精神"
        subTitle="What We Bring"
        variant="dark"
      />
      {/** Rope - md and above */}
      <div className="hidden md:block md:w-screen lg:w-full -translate-x-10 lg:translate-x-0 translate-y-[130px]">
        <Image
          src="/images/rope.png"
          alt="rope"
          width={1440}
          height={(1440 / 4106) * 79}
        />
      </div>
      {/** Rope - sm */}
      <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 w-[760px] h-[20px] rotate-90 translate-y-[400px]">
        <Image
          src="/images/rope.png"
          alt="rope"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      {/** Goal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[80px] md:gap-7">
        {PROGRAM_GOAL_DATA.map((goal) => (
          <GoalCard
            key={goal.title}
            title={goal.title}
            subTitle={goal.subTitle}
            description={goal.description}
            imageSrc={goal.imageSrc}
          />
        ))}
      </div>
      {/** Button */}
      <div className="mt-9 flex justify-center">
        <Link className="grow md:grow-0" href="/about/overview">
          <Button
            className="w-full justify-center"
            variant="filled"
            color="golden"
          >
            更多曼陀號計劃介紹
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default WhatWeBring;
