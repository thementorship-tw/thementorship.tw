import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Team, Role } from "@/types";
import { roleDisplayTextMap } from "@/constants/roleDisplayTextMap";

import AvatarForAlice from "@/public/images/member-avatar/Alice.jpg";
import AvatarForClaire from "@/public/images/member-avatar/Claire.jpg";
import AvatarForHarper from "@/public/images/member-avatar/Harper.jpg";
import AvatarForJoann from "@/public/images/member-avatar/Joann.jpg";
import AvatarForJudy from "@/public/images/member-avatar/Judy.jpg";
import AvatarForKyle from "@/public/images/member-avatar/Kyle.jpg";
import AvatarForMila from "@/public/images/member-avatar/Mila.jpg";
import AvatarForPatty from "@/public/images/member-avatar/Patty.jpg";

import Button from "@/components/common/Button";
import SectionTitle from "./SectionTitle";
import type { FC } from "react";

interface ITeamMember {
  avatar: StaticImageData;
  team: Team;
  role: Role;
  lastName: string;
  firstName: string;
}

const TEAM_MEMBER_DATA: ITeamMember[] = [
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

const teamDisplayTextMap: Record<Team, { name: string; fullName: string }> = {
  [Team.BD]: {
    name: "BD",
    fullName: "Business Development",
  },
  [Team.DATA]: {
    name: "Data",
    fullName: "Data Application",
  },
  [Team.ENGINEER]: {
    name: "Engineer",
    fullName: "Engineering",
  },
  [Team.LEADERSHIP]: {
    name: "領導力小學堂",
    fullName: "領導力小學堂",
  },
  [Team.MKT]: {
    name: "MKT",
    fullName: "Marketing",
  },
  [Team.PM]: {
    name: "PM",
    fullName: "Product Management",
  },
  [Team.UIUX]: {
    name: "UIUX",
    fullName: "User Interface & Experience",
  },
};

const WhoWeAre: FC = () => {
  return (
    <section className="bg-yellow-1 px-5 py-[72px] md:px-10 md:py-[120px]">
      <div className="mx-auto container">
        <SectionTitle
          className="mb-11"
          title="籌辦團隊"
          subTitle="Who We Are"
        />
        <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 lg:grid-cols-4">
          {TEAM_MEMBER_DATA.map(
            ({ avatar, team, role, lastName, firstName }) => {
              const teamText = teamDisplayTextMap[team];
              const roleText = roleDisplayTextMap[role];

              return (
                <div key={lastName} className="flex flex-col gap-2 md:gap-4">
                  <div className="p-4 border-2 border-yellow-6 rounded-3">
                    <div className="w-full aspect-[319/294] mx-auto relative md:aspect-square">
                      <Image
                        src={avatar}
                        alt={`${lastName} ${firstName}`}
                        fill
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline px-4 pb-4 md:flex-col md:items-center md:gap-2">
                    <p className="text-h4-title font-eb-garamond text-neutral-10">
                      <span className="hidden lg:inline">
                        {`${teamText.fullName} ${roleText}`}
                      </span>
                      <span className="lg:hidden">
                        {team === Team.LEADERSHIP
                          ? teamText.name
                          : `${teamText.name} ${roleText}`}
                      </span>
                    </p>

                    <p className="text-h3-title font-eb-garamond text-neutral-10">
                      <span className="hidden lg:inline">{`${lastName} ${firstName}`}</span>
                      <span className="lg:hidden">{lastName}</span>
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className="mt-9 flex justify-center">
          <Link className="grow md:grow-0" href="/about/team">
            <Button
              className="w-full justify-center"
              variant="filled"
              color="blue"
            >
              認識更多籌辦團隊
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
