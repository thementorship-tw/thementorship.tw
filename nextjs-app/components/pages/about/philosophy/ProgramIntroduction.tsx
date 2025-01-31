import Image from "next/image";
import Routes from "@/constants/routes";
import PageNavigationCard from "@/components/common/PageNavigationCard";
import Wave from "@/components/common/Wave";

const content = [
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
  <div className="relative w-full bg-yellow-1">
    <Wave color="yellow" />
    <section className="container relative px-5 py-[72px] md:px-10 md:py-[120px]">
      <div className="mb-11 text-center text-h2 text-blue-8">
        曼陀號領航計劃簡介
      </div>
      <Image
        src="/images/icon-ship.png"
        alt="icon-ship"
        width={48}
        height={48}
        className="absolute right-[96px] hidden -translate-y-1/2 lg:block"
      />
      <div className="mb-11 flex w-full flex-col justify-center rounded-3 bg-white p-7 md:p-11">
        <div className="mx-auto w-full">
          {content.map((row) => (
            <div
              key={row.title}
              className="flex w-full flex-col items-start gap-x-7 gap-y-2 border-t border-yellow-2 py-7 text-left md:flex-row md:py-9"
            >
              <div className="w-[212px] flex-none shrink-0 text-body-lg">
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
      <div className="flex flex-col gap-7 pt-[60px] lg:flex-row lg:pt-[120px]">
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
