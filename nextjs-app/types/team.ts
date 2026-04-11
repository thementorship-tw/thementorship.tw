import { Team } from "@/types";

export interface IProfileInfo {
  team: Team;
  name: string;
  title: string;
  subTitle: string[];
  quote: string;
  imageUrl: string;
  hashTags?: string[];
  session: string;
}

export type AssistantCohort = "seventh" | "eighth";
