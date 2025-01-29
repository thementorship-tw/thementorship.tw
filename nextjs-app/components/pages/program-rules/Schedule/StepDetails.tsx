import { FC } from "react";
import { IScheduleStep } from "@/types/schedule";
import { splitArray } from "@/utils";
import StepCard from "./StepCard";

interface IStepDetails {
  steps: IScheduleStep[];
}

const StepDetails: FC<IStepDetails> = ({ steps }) => {
  const { firstRow, secondRow } = splitArray(steps);
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 mb-7 text-center">
      <div className="flex gap-5">
        {firstRow.map((step, index) => (
          <StepCard
            key={`${step.desc}-${index.toString()}`}
            imageSrc={step.imageSrc}
            desc={step.desc}
          />
        ))}
      </div>
      <div className="flex gap-5">
        {secondRow.map((step, index) => (
          <StepCard
            key={`${step.desc}-${index.toString()}`}
            imageSrc={step.imageSrc}
            desc={step.desc}
            hasArrow={secondRow.length !== index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default StepDetails;
