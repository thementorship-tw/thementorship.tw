import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Button from "@/components/common/Button/Button";
import Wave from "@/components/common/Wave";
import Routes from "@/constants/routes";
import SectionTitle from "./SectionTitle";

const PROGRAM_GOAL_DATA = [
  {
    imageSrc: "/images/icon-map.png",
    title: "人脈鏈結",
    subTitle: "交織彼此的航線",
    description:
      "三人行必有我師，這裡臥虎藏龍，只要願意積極參與，就能結識良師益友，串起人脈網絡",
  },
  {
    imageSrc: "/images/icon-lighthouse.png",
    title: "職涯探索",
    subTitle: "互為迷航的燈塔",
    description:
      "迷惘乃人之常情，但眼前的迷霧也許能折射出別人的光。我們在交流中點亮職涯新的可能性",
  },
  {
    imageSrc: "/images/icon-rudder.png",
    title: "經驗傳承",
    subTitle: "共享掌舵的智慧",
    description:
      "經驗是最好老師，曼陀號有資深前輩不藏私分享經驗，讓我們少走冤枉路，發揮正向影響力",
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
    <div className="z-10 flex flex-col items-center rounded-3 border border-yellow-6 bg-white duration-300">
      <div className="h-[30px]">
        <Image
          src={imageSrc}
          alt={title}
          width={120}
          height={120}
          className="-translate-y-1/2"
        />
      </div>
      <div className="space-y-4 px-7 pb-8 pt-11 text-center">
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
  <section className="relative bg-blue-8 px-5 py-[72px] md:px-10 md:py-[120px]">
    <Wave color="blue8" />
    <div className="container relative mx-auto">
      <SectionTitle
        className="mb-24"
        title="核心精神"
        subTitle="What We Bring"
        variant="dark"
      />
      {/** Rope - md and above */}
      <div className="hidden -translate-x-10 translate-y-[130px] md:block md:w-screen lg:w-full lg:translate-x-0">
        <Image
          src="/images/rope.png"
          alt="rope"
          width={1440}
          height={(1440 / 4106) * 79}
        />
      </div>
      {/** Rope - sm */}
      <div className="absolute left-1/2 h-[20px] w-[760px] -translate-x-1/2 translate-y-[400px] rotate-90 transform md:hidden">
        <Image
          src="/images/rope.png"
          alt="rope"
          fill
          className="h-full w-full object-cover"
        />
      </div>
      {/** Goal Cards */}
      <div className="grid grid-cols-1 gap-[80px] md:grid-cols-3 md:gap-7">
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
        <Link className="grow md:grow-0" href={Routes.ABOUT.OVERVIEW}>
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
