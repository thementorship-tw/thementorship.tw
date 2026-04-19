"use client";

import { useEffect, useState } from "react";

import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import ProfileCard from "@/components/common/ProfileCard";
import Wave from "@/components/common/Wave";
import { SloganContainer, SloganPopup } from "@/components/common/SloganPopup";
import type { Staff } from "@/types/team";
import { client } from "@/sanity/lib/client";
import { staffQuery } from "@/sanity/lib/queries";
import { CURRENT_SESSION } from "@/constants/pages/team";

const SLOGAN_LIST = [
  "趕快來報名 🙌",
  "錯過要再等一年 🥲",
  "別讓猶豫成遺憾 💪",
  "成長機會不等人 💪 ",
  "明年船長就換人囉 😏",
  "船要開了快上船 🛳️",
];

const Captains = () => {
  const [captains, setCaptains] = useState<Staff[]>([]);

  useEffect(() => {
    async function fetchCaptains() {
      const data = await client.fetch<Staff[]>(staffQuery);
      const filtered = data.filter(
        (staff) =>
          staff.role === "Captain" && String(staff.session) === CURRENT_SESSION
      );
      setCaptains(filtered);
    }
    fetchCaptains();
  }, []);

  return (
    <section className="w-full bg-yellow-1 relative">
      <Wave color="yellow" />
      <div className="container px-5 py-[72px] md:px-10 md:py-[120px]">
        <SectionTitle
          title="導師齊聚，即將傾囊相授"
          description={`本屆曼陀號領航計劃的各組船長，將在四次月會中不藏私分享\n認同曼陀號使命願景、樂於分享，是他們的共通點`}
          serial="05"
          variant="light"
        />
        <SloganContainer slogans={SLOGAN_LIST.slice(0, captains.length)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-11">
            {captains.map((captain, index) => (
              <div key={captain._id} className="relative flex">
                <ProfileCard
                  hasBorder
                  team={captain.team}
                  name={captain.name}
                  title={captain.title}
                  subTitle={captain.subtitle}
                  quote={captain.quote}
                  imageUrl={captain.photo}
                  hashTags={[]}
                />
                <SloganPopup
                  className="top-[116px] right-[10px] tracking-[4px]"
                  slogan={SLOGAN_LIST[index]}
                />
              </div>
            ))}
          </div>
        </SloganContainer>
      </div>
    </section>
  );
};

export default Captains;
