import {
  SCHEDULE_DETAIL_DATA_SAILOR,
  SCHEDULE_STEPS_DATA_SAILOR,
} from "@/constants/schedules";
import ScheduleDetails from "./ScheduleDetails";
import DetailCard from "./DetailCard";
import StepDetails from "./StepDetails";

const TabContentSailor = () => (
  <div className="">
    <StepDetails steps={SCHEDULE_STEPS_DATA_SAILOR} />
    <ScheduleDetails>
      {SCHEDULE_DETAIL_DATA_SAILOR.map((detail, index) => (
        <DetailCard
          key={`${detail.timeline.title}-${index.toString()}`}
          type={detail.type}
          timeline={detail.timeline}
          event={detail.event}
        />
      ))}
    </ScheduleDetails>
  </div>
);

export default TabContentSailor;
