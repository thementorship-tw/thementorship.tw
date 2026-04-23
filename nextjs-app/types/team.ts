import { Team } from "@/types";
import { ExecutionGroupType } from "@/types/filter-option";

export type Staff = {
  _id: string;
  name: string;
  role: ExecutionGroupType;
  team: Team;
  quote: string | null;
  photo: string;
  title: string | null;
  subtitle: string[] | null;
  session: number;
};
