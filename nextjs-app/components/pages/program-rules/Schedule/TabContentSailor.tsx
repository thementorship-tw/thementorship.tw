import {
  SCHEDULE_DETAIL_DATA_SAILOR,
  SCHEDULE_STEPS_DATA_SAILOR,
} from "@/constants/schedules";
import DetailCard from "./DetailCard";
import StepDetails from "./StepDetails";

const TabContentSailor = () => (
  <div className="">
    <StepDetails steps={SCHEDULE_STEPS_DATA_SAILOR} />
    <div className="flex flex-col gap-6">
      {SCHEDULE_DETAIL_DATA_SAILOR.map((detail, index) => (
        <DetailCard
          key={`${detail.timeline.title}-${index.toString()}`}
          type={detail.type}
          phase={detail.phase}
          timeline={detail.timeline}
          event={detail.event}
        />
      ))}
    </div>
  </div>
);

export default TabContentSailor;
