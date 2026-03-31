import { SchedulePhase } from "@/types/schedule";

const CURRENT_YEAR = 2026;

const getCurrentDate = (now: Date): {
  year: number;
  month: number;
} => {
  const date = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    timeZone: "Asia/Taipei",
  });
  const [monthString, yearString] = date.split("/");
  
  return {
    year: Number(yearString),
    month: Number(monthString),
  };
};

export const getSchedulePhaseByMonth = (
  {
    year = CURRENT_YEAR,
    startMonth,
    endMonth,
  }: {
    year?: number;
    startMonth: number;
    endMonth: number;
  },
): SchedulePhase => {
  const now = new Date();
  const currentDate = getCurrentDate(now);
  if (currentDate.year > year) return SchedulePhase.EXPIRED;

  if (currentDate.month < startMonth) return SchedulePhase.ACTIVE;
  if (currentDate.month > endMonth) return SchedulePhase.EXPIRED;
  return SchedulePhase.ONGOING;
};
