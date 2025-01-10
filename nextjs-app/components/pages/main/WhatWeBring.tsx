import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

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
    <div className="flex flex-col items-center rounded-3 transition-all duration-300 border border-yellow-6 bg-white z-10">
      <div className="h-[30px]">
        <Image
          src={imageSrc}
          alt={title}
          width={120}
          height={120}
          className="-translate-y-1/2"
        />
      </div>
      <div className="px-7 pt-11 pb-8 space-y-4">
        <div className="space-y-2 text-yellow-6">
          <h3 className="text-h4">{title}</h3>
          <h6 className="text-h6">{subTitle}</h6>
        </div>
        <p className="text-body-lg text-neutral-10">{description}</p>
      </div>
    </div>
  );
};

const WhatWeBring = () => {
  return (
    <section className="py-[72px] md:py-[120px] bg-blue-8">
      <div className="max-w-[343px] md:max-w-[672px] lg:max-w-[1156px] mx-auto text-center">
        <div className="mb-24 space-y-8">
          <div className="space-y-3">
            <h2 className="text-h4 font-semibold text-white">核心精神</h2>
            <h3 className="text-h1-title text-white font-eb-garamond">
              What We Bring
            </h3>
          </div>
          <Image
            src="/images/title-symbol-line-white.png"
            alt="title-symbol-line"
            width={57}
            height={5}
            className="mx-auto"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-[80px] md:gap-7 place-content-center mb-9">
          <GoalCard
            title="人脈連結"
            subTitle="交織彼此的航線"
            description="三人行必有我師，曼陀號裡臥虎藏龍，只要願意積極參與，就能結識長期良師益友，串起緊密人脈網絡"
            imageSrc="/images/icon-map.png"
          />
          <GoalCard
            title="職涯探索"
            subTitle="互為迷航的燈塔"
            description="迷惘乃人之常情，但眼前的迷霧也許能折射出別人的光。在夥伴交流中，我們幫助彼此點亮新的可能性"
            imageSrc="/images/icon-lighthouse.png"
          />
          <GoalCard
            title="經驗傳承"
            subTitle="共享掌舵的智慧"
            description="經驗是最好老師，曼陀號有資歷豐富前輩不藏私分享心路歷程，讓我們能少走冤枉路，發揮正向影響力"
            imageSrc="/images/icon-rudder.png"
          />
        </div>
        <Button variant="filled" color="golden">
          <Link href="/about/overview">更多曼陀號計劃介紹</Link>
        </Button>
      </div>
    </section>
  );
};

export default WhatWeBring;
