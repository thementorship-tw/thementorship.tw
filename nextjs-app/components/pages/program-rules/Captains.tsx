import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import ProfileCard from "@/components/common/ProfileCard";
import { EXECUTION_GROUP } from "@/constants/pages/team";
import Wave from "@/components/common/Wave";
import { SloganContainer, SloganPopup } from "@/components/common/SloganPopup";

const SLOGAN_LIST = [
  "趕快來報名 🙌",
  "錯過要再等一年 🥲",
  "別讓猶豫成遺憾 💪",
  "成長機會不等人 💪 ",
  "明年船長就換人囉 😏",
  "船要開了快上船 🛳️",
];

const PROFILE_LIST = EXECUTION_GROUP.Captain.map((captainInfo, index) => ({
  ...captainInfo,
  slogan: SLOGAN_LIST[index],
}));

const Captains = () => {
  return (
    <section className="relative w-full bg-yellow-1">
      <Wave color="yellow" />
      <div className="container px-5 py-[72px] md:px-10 md:py-[120px]">
        <SectionTitle
          title="導師齊聚，即將傾囊相授"
          description={`本屆曼陀號領航計劃的各組船長，將在四次月會中不藏私分享\n認同曼陀號使命願景、樂於分享，是他們的共通點`}
          serial="05"
          variant="light"
        />
        <SloganContainer slogans={PROFILE_LIST.map(({ slogan }) => slogan)}>
          <div className="mt-11 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {PROFILE_LIST.map(
              ({
                team,
                name,
                title,
                subTitle,
                quote,
                imageUrl,
                hashTags,
                slogan,
              }) => (
                <div key={name} className="relative">
                  <ProfileCard
                    hasBorder
                    team={team}
                    name={name}
                    title={title}
                    subTitle={subTitle}
                    quote={quote}
                    imageUrl={imageUrl}
                    hashTags={hashTags}
                  />
                  <SloganPopup
                    className="right-[10px] top-[116px]"
                    slogan={slogan}
                  />
                </div>
              )
            )}
          </div>
        </SloganContainer>
      </div>
    </section>
  );
};

export default Captains;
