import { SCHEDULE_ROLE_DATA } from "@/constants/schedules";
import SectionTitle from "../SectionTitle";
import ScheduleTabs from "./ScheduleTabs";
import RoleCard from "./RoleCard";

const Schedule = () => (
  <section className="bg-blue-8">
    <div className="container px-5 py-[72px] md:px-10 md:py-[120px]">
      <SectionTitle
        title="曼陀號領航計劃重要日程"
        description={`一旦通過書面審核與實體海選，你將展開半年曼陀號航程
        在知識、經驗、人脈匯流處，享受豐盛的學習體驗`}
        note="*主辦單位保有調整日程之權力"
        serial="03"
        variant="dark"
      />
      <div className="mt-11">
        <div className="flex flex-col md:flex-row gap-7">
          {SCHEDULE_ROLE_DATA.map((role) => (
            <RoleCard
              key={role.enTitle}
              imageSrc={role.imageSrc}
              imageAlt={role.imageAlt}
              enTitle={role.enTitle}
              zhTitle={role.zhTitle}
              descList={role.descList}
              button={role.button}
            />
          ))}
        </div>
        <ScheduleTabs />
      </div>
    </div>
  </section>
);

export default Schedule;
