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

export type Staff = {
  _id: string;
  name: string;
  role: ExecutionGroupType;
  team: string;
  quote: string;
  photo?: string;
  title: string;
  subtitle: string[];
  session: number;
};
