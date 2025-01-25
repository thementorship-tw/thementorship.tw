import GroupLabel from "@/components/common/GroupLabel";
import { groupsInfo } from "@/constants/groups";
import PageNavigationCard from "@/components/common/PageNavigationCard";
import Routes from "@/constants/routes";

const GroupsIntro = () => {
  return (
    <div className="w-full bg-neutral-1">
      <section className="container px-3 py-[72px] md:px-10 md:py-[120px]">
        <h2 className="text-h2 text-blue-8 text-center flex flex-col">
          組別介紹
        </h2>
        <p className="text-body-md text-neutral-10 text-center mt-6">
          依照學員職能領域共分為六大組別，月會也將依此分組進行
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-7 mt-11 mb-4 md:mb-7">
          {groupsInfo.map((group) => (
            <GroupLabel key={group.enGroupName} {...group} />
          ))}
        </div>
        <div className="pt-[60px] lg:pt-[120px] flex flex-col lg:flex-row gap-7">
          <PageNavigationCard
            imageSrc="/images/icon-lighthouse.png"
            enTitle="Philosophy"
            zhTitle="曼陀號理念"
            buttonText="了解曼陀號理念"
            buttonLink={Routes.ABOUT.PHILOSOPHY}
            className="flex-1"
          />
          <PageNavigationCard
            imageSrc="/images/icon-duck.png"
            enTitle="Team"
            zhTitle="執行團隊"
            buttonText="認識執行團隊"
            buttonLink={Routes.ABOUT.TEAM}
            className="flex-1"
          />
        </div>
      </section>
    </div>
  );
};

export default GroupsIntro;
