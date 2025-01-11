"use client";

import type { FC } from "react";
import Image from "next/image";
import { Team, Role } from "@/types";
import Viewport from "@/constants/viewport";
import { useWindowSize } from "@/hooks/useWindowSize";

import { TEAM_MEMBER_DATA } from "./constant/data";
import SectionTitle from "../SectionTitle";

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

const roleDisplayTextMap: Record<Role, string> = {
  [Role.CAPTAIN]: "船長",
  [Role.HARBOUR_PILOT]: "引水人",
  [Role.NAVIGATOR]: "航海士",
  [Role.SAILOR]: "水手",
};

const WhoWeAre: FC = () => {
  const { width: windowWidth } = useWindowSize();

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

              const title =
                !!windowWidth && windowWidth > Viewport.LG
                  ? `${lastName} ${firstName}`
                  : lastName;

              const subTitle = (() => {
                if (!windowWidth) return teamText.fullName;

                if (windowWidth > Viewport.LG) {
                  return `${teamText.fullName} ${roleText}`;
                } else {
                  if (team === Team.LEADERSHIP) {
                    return teamText.name;
                  }

                  return `${teamText.name} ${roleText}`;
                }
              })();

              return (
                <div key={lastName} className="flex flex-col gap-2">
                  <div className="p-4 border-2 border-yellow-6 rounded-3">
                    <div className="w-full aspect-[319/294] mx-auto relative md:aspect-square">
                      <Image src={avatar} alt={title} fill />
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline px-4 pb-4 md:flex-col md:items-center">
                    <p className="text-h4-title font-eb-garamond text-neutral-10">
                      {subTitle}
                    </p>

                    <p className="text-h3-title font-eb-garamond text-neutral-10">
                      {title}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
