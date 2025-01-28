import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import InfoCard from "@/components/common/InfoCard";
import Wave from "@/components/common/Wave";

const joinUsData = [
  {
    title: "主動交流",
    description:
      "如果你已經接觸過 UI/UX 或相關課程，未來想往產品設計師、研究員、產品經理等職位發展並加強協作經驗",
    imageUrl: "/images/icon-connect.png",
  },
  {
    title: "積極學習",
    description:
      "如果你想要訓練扎實產品設計流程 (從研究、探索、設計、測試等)，並將成果以完整的產品設計作品呈現",
    imageUrl: "/images/icon-sailor.png",
  },
  {
    title: "樂於分享",
    description: "未來有興趣回饋ＯＯＯＯ",
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
