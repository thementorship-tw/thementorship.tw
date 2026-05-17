import { Role } from "@/types";
import { ExecutionGroupType } from "@/types/filter-option";
import { roleDisplayTextMap } from "../role-display-text-map";

export const EXECUTION_GROUP_FILTER_OPTIONS: {
  key: ExecutionGroupType | "all";
  name: string;
}[] = [
  { key: "all", name: "全部" },
  { key: Role.CAPTAIN, name: roleDisplayTextMap[Role.CAPTAIN] },
  { key: Role.HARBOUR_PILOT, name: roleDisplayTextMap[Role.HARBOUR_PILOT] },
  { key: Role.ASSISTANT, name: roleDisplayTextMap[Role.ASSISTANT] },
  { key: Role.VOLUNTEER, name: roleDisplayTextMap[Role.VOLUNTEER] },
];

export type SessionFilterOptionType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8";

export const CURRENT_SESSION: SessionFilterOptionType = "8";

export const SESSION_FILTER_OPTIONS: {
  name: string;
  value: SessionFilterOptionType;
}[] = [
  { name: "第八屆", value: "8" },
  { name: "第七屆", value: "7" },
  { name: "第六屆", value: "6" },
  { name: "第五屆", value: "5" },
  { name: "第四屆", value: "4" },
  { name: "第三屆", value: "3" },
  { name: "第二屆", value: "2" },
  { name: "第一屆", value: "1" },
];

export const COMING_SOON_ROLES: ExecutionGroupType[] = [];
