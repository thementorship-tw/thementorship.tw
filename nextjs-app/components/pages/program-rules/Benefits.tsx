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
    title: "專業導師指導",
    description: "一對一專業導師指導，幫助你更快成長",
    imageUrl: "/images/icon-hat.png",
  },
  {
    serial: "02",
    title: "社群交流",
    description: "與志同道合的夥伴一起學習與成長",
    imageUrl: "/images/icon-license.png",
  },
  {
    serial: "03",
    title: "實戰項目",
    description: "參與真實項目開發，累積實戰經驗",
    imageUrl: "/images/icon-sailor-hat.png",
  },
  {
    serial: "04",
    title: "資源共享",
    description: "獲得豐富的學習資源與工具",
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
    <div className="bg-white rounded-lg relative">
      {/* 序號標籤 - 調整大小和位置 */}
      <div className="absolute text-h5 -top-5 -left-[13px] bg-yellow-6 text-white w-[52px] h-[52px] flex items-center justify-center rounded-2">
        {serial}
      </div>

      {/* 內容垂直置中 */}
      <div className="flex flex-col items-center justify-center text-center pt-8 px-7">
        {/* 圖片 */}
        <Image
          src={imageUrl}
          alt={title}
          width={80}
          height={80}
          className="w-[80px] h-[80px] object-cover mb-6"
        />

        {/* 文字內容 */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {benefitsData.map((benefit) => (
          <BenefitCard key={benefit.serial} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
