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

export type SessionFilterOptionType = "all" | "7" | "8";

export const CURRENT_SESSION: Exclude<SessionFilterOptionType, "all"> = "8";

export const SESSION_FILTER_OPTIONS: {
  name: string;
  value: SessionFilterOptionType;
}[] = [
  { name: "全部", value: "all" },
  { name: "第七屆", value: "7" },
  { name: "第八屆", value: "8" },
];

export const COMING_SOON_ROLES: ExecutionGroupType[] = [];
