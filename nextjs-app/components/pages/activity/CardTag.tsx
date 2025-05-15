import { FC } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ActivityStatus } from "@/types/activity";

const tagStyle = cva("px-4 py-2 rounded-3", {
  variants: {
    status: {
      upcoming: "bg-blue-6 text-white",
      registrationOpen: "bg-yellow-6 text-white",
      registrationClosed: "bg-neutral-2 text-neutral-5",
    },
  },
});

const activityStatusLabelMapping: Record<ActivityStatus, string> = {
  upcoming: "敬請期待",
  registrationOpen: "報名中",
  registrationClosed: "報名結束",
};

interface ICardTagProps {
  status: ActivityStatus;
}

const CardTag: FC<ICardTagProps> = ({ status }) => {
  return (
    <div className={twMerge(tagStyle({ status }))}>
      {activityStatusLabelMapping[status]}
    </div>
  );
};

export default CardTag;
