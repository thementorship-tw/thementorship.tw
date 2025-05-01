import {
  ActivityInfo,
  ActivityFilterOptionType,
  ActivityStatus,
} from "@/types/activity";

export const filterActivityByType = (
  type: ActivityFilterOptionType,
  activities: ActivityInfo[]
): ActivityInfo[] => {
  if (type === "all") return activities;
  return activities.filter((activity) => activity.type === type);
};

export const getActivityStatus = (
  start: string,
  end: string
): ActivityStatus => {
  const now = new Date();
  const startTime = new Date(start);
  const endTime = new Date(end);

  if (now < startTime) return "upcoming";
  if (now >= startTime && now <= endTime) return "registrationOpen";
  return "registrationClosed";
};
