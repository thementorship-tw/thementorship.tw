import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import InfoCard from "@/components/common/InfoCard";

const benefitsData = [
  {
    serial: "01",
    title: "主題月會",
    description: "和不同職能的產品設計夥伴共創，在有限時間內得到共識並產出成果",
    imageUrl: "/images/icon-hat.png",
  },
  {
    serial: "02",
    title: "主題講座",
    description:
      "邀請到深耕產品設計業界的多年的講師們來分享主題工作坊、主題講座、主題對談等來幫助參賽者獲得更多靈",
    imageUrl: "/images/icon-license.png",
  },
  {
    serial: "03",
    title: "跨職能＆跨界交流",
    description: "從研究一路到測試、最終提案，並結合企業主題解決真實性問題",
    imageUrl: "/images/icon-sailor-hat.png",
  },
  {
    serial: "04",
    title: "曼陀號社群互動",
    description: "從研究一路到測試、最終提案，並結合企業主題解決真實性問題",
    imageUrl: "/images/icon-lighthouse.png",
  },
];

const Benefits = () => {
  return (
    <div className="w-full bg-blue-8">
      <section className="container px-5 py-[72px] md:px-10 md:py-[120px]">
        <SectionTitle
          title="參加曼陀號，你將會收穫"
          description={
            "我們提供豐富的活動、資源與交流機會，不怕活動太多，只怕你參與不夠"
          }
          serial="01"
          variant="dark"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-11">
          {benefitsData.map((benefit) => (
            <InfoCard key={benefit.serial} {...benefit} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Benefits;
