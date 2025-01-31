import GroupLabel from "@/components/common/GroupLabel";
import { groupsInfo } from "@/constants/groups";
import PageNavigationCard from "@/components/common/PageNavigationCard";
import Routes from "@/constants/routes";

const GroupsIntro = () => {
  return (
    <div className="w-full bg-neutral-1">
      <section className="container px-5 py-[72px] md:px-10 md:py-[120px]">
        <h2 className="flex flex-col text-center text-h2 text-blue-8">
          組別介紹
        </h2>
        <p className="mt-6 text-center text-body-md text-neutral-10">
          依照學員職能領域共分為六大組別，月會也將依此分組進行
        </p>
        <div className="mb-4 mt-11 grid grid-cols-1 gap-4 md:mb-7 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
          {groupsInfo.map((group) => (
            <GroupLabel key={group.enGroupName} {...group} />
          ))}
        </div>
        <div className="flex flex-col gap-7 pt-[60px] lg:flex-row lg:pt-[120px]">
          <PageNavigationCard
            imageSrc="/images/icon-lighthouse.png"
            enTitle="Philosophy"
            zhTitle="曼陀號理念"
            buttonText="more"
            buttonLink={Routes.ABOUT.PHILOSOPHY}
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
};

export default GroupsIntro;
