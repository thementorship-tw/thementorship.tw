import { AllActivitiesQueryResult } from "@/sanity.types";
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

const formatDate = (date: Date) =>
  date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Taipei",
  });

const formatTime = (date: Date) =>
  date.toLocaleTimeString("zh-TW", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Taipei",
  });

const lectureTimeToString = (
  time: {
    start: string;
    end: string;
  } | null
) => {
  if (!time || !time.start || !time.end) return "";

  const startDate = new Date(time.start);
  const endDate = new Date(time.end);

  const isSameDate = startDate.toDateString() === endDate.toDateString();

  return isSameDate
    ? `${formatDate(startDate)} ${formatTime(startDate)} - ${formatTime(endDate)}`
    : `${formatDate(startDate)} ${formatTime(startDate)} - ${formatDate(endDate)} ${formatTime(endDate)}`;
};

export const toActivitiesUI = (
  activities: AllActivitiesQueryResult
): ActivityInfo[] => {
  return activities
    .slice()
    .sort((a, b) => {
      const aStart = new Date(a.time?.start ?? "").getTime();
      const bStart = new Date(b.time?.start ?? "").getTime();
      return bStart - aStart;
    })
    .map((activity) => ({
      ...activity,
      type: activity.type as ActivityInfo["type"],
      hashTags: activity.hashTags ?? [],
      time: lectureTimeToString(activity.time),
      imageSrc: activity.imageUrl ?? null,
      register: {
        start: activity.register?.registerTime?.start ?? "",
        end: activity.register?.registerTime?.end ?? "",
        href: activity.register?.href ?? null,
      },
    }));
};
