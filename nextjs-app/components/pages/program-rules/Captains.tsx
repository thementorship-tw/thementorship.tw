import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import ProfileCard from "@/components/common/ProfileCard";
import { EXECUTION_GROUP } from "@/constants/pages/team";
import Wave from "@/components/common/Wave";
const PROFILE_LIST = EXECUTION_GROUP.Captain;

const Captains = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-11">
          {PROFILE_LIST.map(
            ({ team, name, title, subTitle, quote, imageUrl, hashTags }) => (
              <ProfileCard
                hasBorder
                key={name}
                team={team}
                name={name}
                title={title}
                subTitle={subTitle}
                quote={quote}
                imageUrl={imageUrl}
                hashTags={hashTags}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Captains;
