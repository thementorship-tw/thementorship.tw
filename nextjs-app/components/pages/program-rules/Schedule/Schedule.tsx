import { SCHEDULE_ROLE_DATA } from "@/constants/schedules";
import InfoCard from "@/components/common/InfoCard";
import SectionTitle from "../SectionTitle";
import ScheduleTabs from "./ScheduleTabs";

const Schedule = () => (
  <section className="bg-blue-8">
    <div className="container px-5 py-[72px] md:px-10 md:py-[120px]">
      <SectionTitle
        title="曼陀號領航計劃重要日程"
        description={
          "一旦通過書面審核與實體海選，你將展開半年曼陀號航程\n在知識、經驗、人脈匯流處，享受豐盛的學習體驗"
        }
        note="*主辦單位保有調整日程之權力"
        serial="03"
        variant="dark"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 mt-11">
        {SCHEDULE_ROLE_DATA.map((role) => (
          <InfoCard key={role.title} {...role} />
        ))}
      </div>
      <ScheduleTabs />
    </div>
  </section>
);

export default Schedule;
