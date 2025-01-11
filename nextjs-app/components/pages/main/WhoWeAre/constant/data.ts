import { Team, Role } from "@/types";
import type { StaticImageData } from "next/image";

import AvatarForAlice from "../assets/Alice.jpg";
import AvatarForClaire from "../assets/Claire.jpg";
import AvatarForHarper from "../assets/Harper.jpg";
import AvatarForJoann from "../assets/Joann.jpg";
import AvatarForJudy from "../assets/Judy.jpg";
import AvatarForKyle from "../assets/Kyle.jpg";
import AvatarForMila from "../assets/Mila.jpg";
import AvatarForPatty from "../assets/Patty.jpg";

interface ITeamMember {
  avatar: StaticImageData;
  team: Team;
  role: Role;
  lastName: string;
  firstName: string;
}

export const TEAM_MEMBER_DATA: ITeamMember[] = [
  {
    avatar: AvatarForJoann,
    team: Team.BD,
    role: Role.HARBOUR_PILOT,
    lastName: "Joann",
    firstName: "Chen",
  },
  {
    avatar: AvatarForMila,
    team: Team.DATA,
    role: Role.HARBOUR_PILOT,
    lastName: "Mila",
    firstName: "Chang",
  },
  {
    avatar: AvatarForJudy,
    team: Team.ENGINEER,
    role: Role.HARBOUR_PILOT,
    lastName: "Judy",
    firstName: "Tsai",
  },
  {
    avatar: AvatarForKyle,
    team: Team.ENGINEER,
    role: Role.HARBOUR_PILOT,
    lastName: "Kyle",
    firstName: "Mo",
  },
  {
    avatar: AvatarForAlice,
    team: Team.MKT,
    role: Role.HARBOUR_PILOT,
    lastName: "Alice",
    firstName: "Chiu",
  },
  {
    avatar: AvatarForClaire,
    team: Team.PM,
    role: Role.HARBOUR_PILOT,
    lastName: "Claire",
    firstName: "Hsieh",
  },
  {
    avatar: AvatarForPatty,
    team: Team.UIUX,
    role: Role.HARBOUR_PILOT,
    lastName: "Patty",
    firstName: "Hsu",
  },
  {
    avatar: AvatarForHarper,
    team: Team.LEADERSHIP,
    role: Role.HARBOUR_PILOT,
    lastName: "Harper",
    firstName: "Liu",
  },
];
