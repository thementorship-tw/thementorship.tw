import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import GroupLabel from "@/components/common/GroupLabel";
import { groupsInfo } from "@/constants/groups";
import Wave from "@/components/common/Wave";
const GroupsIntro = () => {
  return (
    <section className="relative w-full bg-white">
      <Wave color="white" />
      <div className="container px-5 py-[72px] md:px-10 md:py-[120px]">
        <SectionTitle
          title="旅程上，將有這群人相伴"
          description={
            "第七屆計劃包含以下六個職能月會組別\n每組皆由約 4 位航海士與 16-20 位水手組成"
          }
          serial="04"
          variant="light"
          note="*實際參與人數由引水人及船長共同討論調整"
        />
        <div className="mt-11 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
          {groupsInfo.map((group) => (
            <GroupLabel key={group.enGroupName} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupsIntro;
