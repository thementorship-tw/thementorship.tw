import { FC, PropsWithChildren } from "react";

const ScheduleDetails: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};

export default ScheduleDetails;
