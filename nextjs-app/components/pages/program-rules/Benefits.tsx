import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import InfoCard from "@/components/common/InfoCard";
import Wave from "@/components/common/Wave";

const benefitsData = [
  {
    serial: "01",
    title: "職能月會",
    description:
      "由各職能組別船長分享工作經驗，幫助學員培養軟實力、突破職涯瓶頸",
    imageUrl: "/images/icon-hat.png",
  },
  {
    serial: "02",
    title: "通識講座",
    description:
      "邀請各領域業界講師針對現今趨勢、學員敲碗主題分享帶得走的知識技能",
    imageUrl: "/images/icon-license.png",
  },
  {
    serial: "03",
    title: "跨職能 & 跨屆交流",
    description:
      "卸下工作包袱，與不同職能、年資的夥伴交流工作與生活，激盪不同的火花",
    imageUrl: "/images/icon-sailor-hat.png",
  },
  {
    serial: "04",
    title: "社群連結",
    description:
      "透過 LinkedIn、Facebook 社團、LINE 群組等媒介維繫長期穩定的人脈資產",
    imageUrl: "/images/icon-lighthouse.png",
  },
];

const Benefits = () => {
  return (
    <div className="w-full bg-blue-8 relative">
      <Wave color="blue8" />
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
