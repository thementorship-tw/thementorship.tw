import {
  SCHEDULE_DETAIL_DATA_NAVIGATOR,
  SCHEDULE_STEPS_DATA_NAVIGATOR,
} from "@/constants/schedules";
import DetailCard from "./DetailCard";
import StepDetails from "./StepDetails";

const TabContentNavigator = () => {
  return (
    <div className="">
      <StepDetails steps={SCHEDULE_STEPS_DATA_NAVIGATOR} />
      <div className="flex flex-col gap-6">
        {SCHEDULE_DETAIL_DATA_NAVIGATOR.map((detail, index) => (
          <DetailCard
            key={`${detail.timeline.title}-${index.toString()}`}
            phase={detail.phase}
            type={detail.type}
            timeline={detail.timeline}
            event={detail.event}
          />
        ))}
      </div>
    </div>
  );
};

export default TabContentNavigator;
