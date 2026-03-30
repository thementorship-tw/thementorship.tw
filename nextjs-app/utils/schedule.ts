import { SchedulePhase } from "@/types/schedule";

const getCurrentMonthInTaipei = (now: Date): number =>
  Number(
    now.toLocaleDateString("en-US", {
      month: "numeric",
      timeZone: "Asia/Taipei",
    })
  );

export const getSchedulePhaseByMonth = (
  {
    startMonth,
    endMonth,
  }: {
    startMonth: number;
    endMonth: number;
  },
): SchedulePhase => {
  const now = new Date();
  const currentMonth = getCurrentMonthInTaipei(now);

  if (currentMonth < startMonth) return SchedulePhase.ACTIVE;
  if (currentMonth > endMonth) return SchedulePhase.EXPIRED;
  return SchedulePhase.ONGOING;
};
