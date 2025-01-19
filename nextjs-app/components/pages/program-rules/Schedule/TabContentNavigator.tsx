import {
  SCHEDULE_DETAIL_DATA_NAVIGATOR,
  SCHEDULE_STEPS_DATA_NAVIGATOR,
} from "@/constants/schedules";
import ScheduleDetails from "./ScheduleDetails";
import DetailCard from "./DetailCard";
import StepDetails from "./StepDetails";

const TabContentNavigator = () => {
  return (
    <div className="">
      <StepDetails steps={SCHEDULE_STEPS_DATA_NAVIGATOR} />
      <ScheduleDetails>
        {SCHEDULE_DETAIL_DATA_NAVIGATOR.map((detail, index) => (
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
};

export default TabContentNavigator;
