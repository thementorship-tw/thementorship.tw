import { Role } from ".";

export interface IFilterOption {
  key: string;
  name: string;
}

export type FAQType = "registration" | "monthlyMeeting" | "lecture" | "payment";

export type ExecutionGroupType =
  | Role.CAPTAIN
  | Role.HARBOUR_PILOT
  | Role.ASSISTANT;
