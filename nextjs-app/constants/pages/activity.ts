import { ActivityType } from "@/types/activity";

export const ACTIVITY_FILTER_OPTIONS: {
  key: ActivityType | "all";
  name: string;
}[] = [
  { key: "all", name: "全部" },
  { key: "keynoteTalk", name: "主題講座" },
  { key: "crossFunctionalNetworking", name: "跨職能交流" },
  { key: "crossCohortNetworking", name: "跨屆交流" },
  { key: "studyGroup", name: "學習小組" },
  { key: "socialActivity", name: "軟性活動" },
];
