import { SchedulePhase } from "@/types/schedule";

const getCurrentMonthInTaipei = (now: Date): number =>
  Number(
    now.toLocaleDateString("en-US", {
      month: "numeric",
      timeZone: "Asia/Taipei",
    })
  );

export const getSchedulePhaseByDateTimeIndex = (
  dateTimeIndex: number[],
  now = new Date()
): SchedulePhase => {
  const currentMonth = getCurrentMonthInTaipei(now);
  const validMonths = dateTimeIndex.filter(
    (month) => Number.isInteger(month) && month >= 1 && month <= 12
  );

  if (validMonths.length === 0) {
    throw new Error("dateTimeIndex should include at least one month between 1 and 12");
  }

  const start = Math.min(...validMonths);
  const end = Math.max(...validMonths);

  if (currentMonth < start) return SchedulePhase.ACTIVE;
  if (currentMonth > end) return SchedulePhase.EXPIRED;
  return SchedulePhase.ONGOING;
};
