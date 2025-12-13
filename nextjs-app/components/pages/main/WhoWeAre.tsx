import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Team, Role } from "@/types";
import { roleDisplayTextMap } from "@/constants/role-display-text-map";

import AvatarForAndrea from "@/public/images/member-avatar/eighth/Andrea.jpg";
import AvatarForBenson from "@/public/images/member-avatar/eighth/Benson.jpg";
import AvatarForBill from "@/public/images/member-avatar/eighth/Bill.jpg";
import AvatarForEmily from "@/public/images/member-avatar/eighth/Emily.jpg";
import AvatarForJill from "@/public/images/member-avatar/eighth/Jill.jpg";
import AvatarForLukas from "@/public/images/member-avatar/eighth/Lukas.jpg";
import AvatarForLena from "@/public/images/member-avatar/eighth/Lena.jpg";
import AvatarForPeterLi from "@/public/images/member-avatar/eighth/PeterLi.jpg";

import Button from "@/components/common/Button/Button";
import Wave from "@/components/common/Wave";
import { SloganContainer, SloganPopup } from "@/components/common/SloganPopup";
import Routes from "@/constants/routes";
import SectionTitle from "./SectionTitle";

interface ITeamMember {
  avatar: StaticImageData;
  team: Team;
  role: Role;
  lastName: string;
  firstName: string;
  slogan: string;
}

const TEAM_MEMBER_DATA: ITeamMember[] = [
  {
    avatar: AvatarForBenson,
    team: Team.BD,
    role: Role.HARBOUR_PILOT,
    lastName: "Benson",
    firstName: "Cheng",
    slogan: `為社會進步添上一塊磚。`,
  },
  {
    avatar: AvatarForBill,
    team: Team.DATA,
    role: Role.HARBOUR_PILOT,
    lastName: "Bill",
    firstName: "Syu",
    slogan: `保有彈性，\n擁抱失敗，\n享受成果。`,
  },
  {
    avatar: AvatarForPeterLi,
    team: Team.DATA,
    role: Role.HARBOUR_PILOT,
    lastName: "Peter",
    firstName: "Li",
    slogan: `面對錯誤，\n並以謙遜的態度向他人求助。`,
  },
  {
    avatar: AvatarForJill,
    team: Team.ENGINEER,
    role: Role.HARBOUR_PILOT,
    lastName: "Jill",
    firstName: "Lee",
    slogan: `沒有白走的路，\n每一步都算數！`,
  },
  {
    avatar: AvatarForLukas,
    team: Team.ENGINEER,
    role: Role.HARBOUR_PILOT,
    lastName: "Lukas",
    firstName: "Chang",
    slogan: `保有對立場與選擇偏頗的權利，\n持客觀以維持對萬物的吸引力。`,
  },
  {
    avatar: AvatarForLena,
    team: Team.MKT,
    role: Role.HARBOUR_PILOT,
    lastName: "Lena",
    firstName: "Zhong",
    slogan: `人生最好的狀態，\n是從未放棄成長。`,
  },
  {
    avatar: AvatarForAndrea,
    team: Team.PM,
    role: Role.HARBOUR_PILOT,
    lastName: "Andrea",
    firstName: "Shieh",
    slogan: `不斷的觀察，\n不斷的學習，\n不斷的進步。`,
  },
  {
    avatar: AvatarForEmily,
    team: Team.UIUX,
    role: Role.HARBOUR_PILOT,
    lastName: "Emily",
    firstName: "Chao",
    slogan: `願能以誠待人、眼底有光。`,
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
    <section className="relative bg-yellow-1 px-5 py-[72px] md:px-10 md:py-[120px]">
      <Wave color="yellow" />
      <div className="max-w-[1344px] mx-auto">
        <SectionTitle
          className="mb-11"
          title="執行團隊"
          subTitle="Who We Are"
        />

        <SloganContainer slogans={TEAM_MEMBER_DATA.map(({ slogan }) => slogan)}>
          <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 lg:grid-cols-4">
            {TEAM_MEMBER_DATA.map(
              ({ avatar, team, role, lastName, firstName, slogan }) => {
                const teamText = teamDisplayTextMap[team];
                const roleText = roleDisplayTextMap[role];

                return (
                  <div
                    className="flex flex-col gap-2 md:gap-4"
                    key={`${lastName} ${firstName}`}
                  >
                    <div className="p-4 border-2 border-yellow-6 rounded-3">
                      <div className="w-full aspect-[319/294] mx-auto relative md:aspect-square">
                        <Image
                          className="object-cover"
                          src={avatar}
                          alt={`${lastName} ${firstName}`}
                          fill
                          sizes="100vw"
                        />

                        <SloganPopup
                          slogan={slogan}
                          className="h-auto max-h-[300px] -top-6 -right-3 lg:-top-9 lg:-right-10 lg:max-h-[220px] xl:max-h-[300px] xl:-right-8 tracking-[4px]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-baseline px-4 pb-4 md:px-0 md:flex-col md:items-center md:gap-2">
                      <p className="text-h4-title font-eb-garamond text-neutral-10 text-center">
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
        </SloganContainer>

        <div className="mt-9 flex justify-center">
          <Link className="grow md:grow-0" href={Routes.ABOUT.TEAM}>
            <Button
              className="w-full justify-center"
              variant="filled"
              color="blue"
            >
              認識執行團隊
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
