import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Team, Role } from "@/types";
import { roleDisplayTextMap } from "@/constants/role-display-text-map";

import AvatarForAlice from "@/public/images/member-avatar/Alice.jpg";
import AvatarForClaire from "@/public/images/member-avatar/Claire.jpg";
import AvatarForHarper from "@/public/images/member-avatar/Harper.jpg";
import AvatarForJoann from "@/public/images/member-avatar/Joann.jpg";
import AvatarForJudy from "@/public/images/member-avatar/Judy.jpg";
import AvatarForKyle from "@/public/images/member-avatar/Kyle.jpg";
import AvatarForMila from "@/public/images/member-avatar/Mila.jpg";
import AvatarForPatty from "@/public/images/member-avatar/Patty.jpg";

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
    avatar: AvatarForJoann,
    team: Team.BD,
    role: Role.HARBOUR_PILOT,
    lastName: "Joann",
    firstName: "Chen",
    slogan: `世界上最大的悲哀，\n不是我不行，\n而是我本可以。`,
  },
  {
    avatar: AvatarForMila,
    team: Team.DATA,
    role: Role.HARBOUR_PILOT,
    lastName: "Mila",
    firstName: "Chang",
    slogan: `學會站在別人的角度，\n才能成就更好的自己。`,
  },
  {
    avatar: AvatarForJudy,
    team: Team.ENGINEER,
    role: Role.HARBOUR_PILOT,
    lastName: "Judy",
    firstName: "Tsai",
    slogan: `天賦決定下限，\n好奇心決定上限。`,
  },
  {
    avatar: AvatarForKyle,
    team: Team.ENGINEER,
    role: Role.HARBOUR_PILOT,
    lastName: "Kyle",
    firstName: "Mo",
    slogan: "如果你希望周遭環境改變，\n答案或許是從\n「改變自己」開始。",
  },
  {
    avatar: AvatarForAlice,
    team: Team.MKT,
    role: Role.HARBOUR_PILOT,
    lastName: "Alice",
    firstName: "Chiu",
    slogan: "不怕失去才是擁有的開始。",
  },
  {
    avatar: AvatarForClaire,
    team: Team.PM,
    role: Role.HARBOUR_PILOT,
    lastName: "Claire",
    firstName: "Hsieh",
    slogan: "把每次挑戰都變成\n學習與成長的機會。",
  },
  {
    avatar: AvatarForPatty,
    team: Team.UIUX,
    role: Role.HARBOUR_PILOT,
    lastName: "Patty",
    firstName: "Hsu",
    slogan: "用設計改變世界，\n用體驗溫暖人心。",
  },
  {
    avatar: AvatarForHarper,
    team: Team.LEADERSHIP,
    role: Role.HARBOUR_PILOT,
    lastName: "Harper",
    firstName: "Liu",
    slogan: "你打算怎麼渡過這\n瘋狂又珍貴的人生？",
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
                          position="left"
                          className="lg:hidden max-h-[272px] -top-6 -left-3 tracking-[4px]"
                        />

                        <SloganPopup
                          slogan={slogan}
                          position="right"
                          className=" hidden lg:block h-auto max-h-[272px] -top-9 -right-10 lg:max-h-[200px] xl:max-h-[272px] xl:-right-8 tracking-[4px]"
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
