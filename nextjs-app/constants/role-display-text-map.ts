import { Role } from "@/types";

export const roleDisplayTextMap: Record<Role, string> = {
  [Role.CAPTAIN]: "船長",
  [Role.HARBOUR_PILOT]: "引水人",
  [Role.NAVIGATOR]: "航海士",
  [Role.SAILOR]: "水手",
  [Role.ASSISTANT]: "助教",
  [Role.VOLUNTEER]: "助理/志工",
};
