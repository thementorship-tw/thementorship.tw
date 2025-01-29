import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import InfoCard from "@/components/common/InfoCard";
import Wave from "@/components/common/Wave";

const joinUsData = [
  {
    title: "主動交流",
    description:
      "人格測驗無法限制你想認識他人的熱忱，在群體中願意主動與人建立關係",
    imageUrl: "/images/icon-connect.png",
  },
  {
    title: "積極學習",
    description: "好奇心沒有極限，懷著成長心態，如同海綿一般渴望吸收新知",
    imageUrl: "/images/icon-sailor.png",
  },
  {
    title: "樂於分享",
    description:
      "對於自己已有的知識、經驗、資源不藏私，樂意分享給身邊可能需要的人",
    imageUrl: "/images/icon-duck.png",
  },
];

const JoinUs = () => {
  return (
    <section className="w-full bg-white relative">
      <Wave color="white" />
      <div className="container px-5 py-[72px] md:px-10 md:py-[120px]">
        <SectionTitle
          title="邀請這樣的你加入"
          description={
            "如果你符合以下特質，我們熱切邀請你加入曼陀號，因為你一定會在這裡有所成長！"
          }
          serial="02"
          variant="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 mt-11">
          {joinUsData.map((item) => (
            <InfoCard key={item.title} {...item} border="bordered" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
