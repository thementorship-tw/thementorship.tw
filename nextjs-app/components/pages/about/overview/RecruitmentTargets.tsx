import InfoCard from "@/components/common/InfoCard";
import { ButtonColor } from "@/components/common/Button/Button";
import Wave from "@/components/common/Wave";
import { MENTORSHIP_EMAIL_ADDRESS_MAILTO } from "@/constants/contact-info";

const recruitmentTargetsData = [
  {
    title: "Sailor\n水手 (職場新人)",
    description:
      "• 申請組別領域實務經驗 1-3 年的新鮮人（包含實習經驗）\n• 未來有興趣回饋社群",
    imageUrl: "/images/icon-sailor.png",
    buttonText: "馬上報名水手",
    buttonColor: "blue" as ButtonColor,
    buttonClassName: "px-7",
    externalLink: "",
    buttonDisabled: true,
  },
  {
    title: "Navigator\n航海士 (職場前輩)",
    description:
      "• 申請組別領域實務經驗超過 3 年\n• 具備提拔後進熱忱，樂意提供實務協助輔導",
    imageUrl: "/images/icon-navigator.png",
    buttonText: "馬上報名航海士",
    buttonColor: "golden" as ButtonColor,
    buttonClassName: "px-7",
    externalLink: "",
    buttonDisabled: true,
  },
  {
    title: "Captain\n船長 (導師)",
    description:
      "• 申請組別領域實務經驗 7 年以上\n• 具有團隊領導經驗\n• 懷有傳承經驗的使命感，渴望擴大影響力",
    imageUrl: "/images/icon-captain.png",
    buttonText: "馬上聯絡我們",
    buttonColor: "golden" as ButtonColor,
    buttonClassName: "px-7",
    externalLink: MENTORSHIP_EMAIL_ADDRESS_MAILTO,
  },
];

const RecruitmentTargets = () => {
  return (
    <div className="w-full bg-white relative">
      <Wave color="white" />
      <section className="container px-5 py-[72px] md:px-10 md:py-[120px]">
        <h2 className="text-h2 text-blue-8 text-center flex flex-col">
          計劃招募對象
        </h2>
        <p className="text-body-md text-neutral-10 text-center mt-6">
          依據實務經驗的深度分為三大角色，歡迎有志者報名
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-11 md:[&>*:last-child]:translate-x-[50%] lg:[&>*:last-child]:translate-x-0">
          {recruitmentTargetsData.map((item) => (
            <InfoCard key={item.title} {...item} background="navy" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecruitmentTargets;
