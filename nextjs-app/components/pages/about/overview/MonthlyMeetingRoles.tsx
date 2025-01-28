import InfoCard from "@/components/common/InfoCard";
import Wave from "@/components/common/Wave";

const monthlyMeetingRolesData = [
  {
    title: "Pilot\n引水人 (籌辦團隊)",
    description:
      "統籌整個計劃，包含所有課程、活動、講座等，並協助船長規劃課程，帶給學員最佳的成長體驗",
    imageUrl: "/images/icon-duck.png",
  },
  {
    title: "Captain\n船長 (導師)",
    description:
      "在月會中分享自身經驗，協助航海士、水手開拓視野，給予產業、職涯大方向等建議",
    imageUrl: "/images/icon-captain.png",
  },
  {
    title: "Assistant\n助教",
    description: "協助月會行政事項，使其順利運作、促進學員之間的軟性互動交流",
    imageUrl: "/images/icon-hat.png",
  },
  {
    title: "Navigator\n航海士 (職場前輩)",
    description:
      "傾聽、給予水手職場上的過來人建議，協助水手在職涯初期需要的務實成長，培養自身領導管理能力；在船長的帶領之下，探索未來發展更多可能",
    imageUrl: "/images/icon-navigator.png",
  },
  {
    title: "Sailor\n水手 (導生)",
    description:
      "對自身發展有理想、希望能吸取前輩經驗，往目標更加努力；或對職涯發展略有迷惘，帶著切身問題和其他水手、前輩們交流",
    imageUrl: "/images/icon-sailor.png",
  },
];

const MonthlyMeetingRoles = () => {
  return (
    <div className="w-full bg-yellow-1 relative">
      <Wave color="yellow" />
      <section className="container px-5 py-[72px] md:px-10 md:py-[120px]">
        <h2 className="text-h2 text-blue-8 text-center flex flex-col">
          月會運作方式
        </h2>
        <p className="text-body-md text-neutral-10 text-center mt-6">
          月會是曼陀號領航計劃的主要課程，將於 6 - 9 月每月安排一次 3
          小時實體月會
          <br />
          由以下五種角色促成月會的運作
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-11 md:[&>*:last-child]:translate-x-[50%] lg:[&>*:last-child]:translate-x-0">
          {monthlyMeetingRolesData.map((item) => (
            <InfoCard key={item.title} {...item} border="bordered" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MonthlyMeetingRoles;
