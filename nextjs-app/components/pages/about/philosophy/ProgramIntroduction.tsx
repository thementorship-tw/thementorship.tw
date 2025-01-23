import Image from "next/image";
import Routes from "@/constants/routes";
import PageNavigationCard from "@/components/common/PageNavigationCard";

const content: { title: string; description: string }[] = [
  { title: "計劃名稱", description: "曼陀號領航計劃" },
  { title: "創立年度", description: "2018 年" },
  { title: "執行單位", description: "純志工團隊" },
  {
    title: "學員性質",
    description: "樂於學習交流，積極探索職涯，尋求更多可能性",
  },
  {
    title: "招募類型",
    description: "水手 (領域資歷 3 年以內)、航海士 (領域資歷 3 年以上)",
  },
];

const ProgramIntroduction = () => (
  <div className="w-full bg-yellow-1">
    <section className="container relative px-5 md:px-10 py-[72px] md:py-[120px]">
      <div className="text-center text-h2 text-blue-8 mb-11">
        曼陀號領航計劃簡介
      </div>
      <Image
        src="/images/icon-ship.png"
        alt="icon-ship"
        width={48}
        height={48}
        className="hidden lg:block absolute right-[96px] -translate-y-1/2"
      />
      <div className="w-full flex flex-col justify-center mb-11 p-7 md:p-11 bg-white rounded-3">
        <div className="w-full mx-auto">
          {content.map((row) => (
            <div
              key={row.title}
              className="w-full flex flex-col md:flex-row items-start gap-y-2 gap-x-7 py-7 md:py-9 text-left border-t border-yellow-2"
            >
              <div className="flex-none w-[212px] shrink-0 text-body-lg">
                {row.title}
              </div>
              <div className="flex-1 shrink text-subtitle-lg">
                {row.description}
              </div>
            </div>
          ))}
          <hr className="border-yellow-2" />
        </div>
      </div>
      <div className="pt-[60px] lg:pt-[120px] flex flex-col lg:flex-row gap-7">
        <PageNavigationCard
          imageSrc="/images/icon-ink.png"
          enTitle="Overview"
          zhTitle="計劃介紹"
          buttonText="more"
          buttonLink={Routes.ABOUT.OVERVIEW}
          className="flex-1"
        />
        <PageNavigationCard
          imageSrc="/images/icon-duck.png"
          enTitle="Team"
          zhTitle="執行團隊"
          buttonText="more"
          buttonLink={Routes.ABOUT.TEAM}
          className="flex-1"
        />
      </div>
    </section>
  </div>
);

export default ProgramIntroduction;
