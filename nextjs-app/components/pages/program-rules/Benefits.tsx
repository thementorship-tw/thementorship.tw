import Image from "next/image";
import SectionTitle from "@/components/pages/program-rules/SectionTitle";

interface IBenefitCardProps {
  serial: string;
  title: string;
  description: string;
  imageUrl: string;
}

const benefitsData: IBenefitCardProps[] = [
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

const BenefitCard = ({
  serial,
  title,
  description,
  imageUrl,
}: IBenefitCardProps) => {
  return (
    <div className="bg-white rounded-3 relative h-full flex flex-col">
      <div className="absolute text-h5 -top-5 -left-[13px] bg-yellow-6 text-white w-[52px] h-[52px] flex items-center justify-center rounded-2">
        {serial}
      </div>
      <div className="flex flex-col items-center h-full text-center py-8 px-7">
        <Image
          src={imageUrl}
          alt={title}
          width={80}
          height={80}
          className="w-[80px] h-[80px] object-cover mb-6"
        />
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="bg-blue-8 px-5 py-[72px] md:px-10 md:py-[120px]">
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
          <BenefitCard key={benefit.serial} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
