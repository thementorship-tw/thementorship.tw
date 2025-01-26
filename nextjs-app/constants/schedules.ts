import { ButtonColor } from "@/components/common/Button/Button";
import {
  IScheduleDetail,
  SchedulePhase,
  IScheduleStep,
  ScheduleType,
} from "@/types/schedule";

export const SCHEDULE_DETAIL_DATA_NAVIGATOR: IScheduleDetail[] = [
  {
    phase: SchedulePhase.ACTIVE,
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "2月",
      description: "(書面審核)",
    },
    event: {
      date: "2025/02/10 (Mon) - 2025/03/03 (Mon)",
      tag: "請務必出席",
      title: "計劃開放報名",
      description: "於招募期間，選定參加之組別，填寫並繳報名文件",
    },
  },
  {
    phase: SchedulePhase.ACTIVE,
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "3月",
      description: "(書面審核結果揭曉)",
    },
    event: [
      {
        date: "2025/03/23 (Sun)",
        tag: "請務必出席",
        title: "海選名單揭曉",
        description: "屆時將寄信通知第一階段審核結果，通過者得以進入海選",
      },
      {
        date: "2025/03/30 (Sun) - 2025/04/06 (Sun)",
        tag: "請務必出席",
        title: "線上面談",
        description: "進行第二階段面談複審",
      },
    ],
  },
  {
    phase: SchedulePhase.ONGOING,
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "4月",
      description: "(實體海選)",
    },
    event: {
      date: "2025/04",
      tag: "請務必出席",
      title: "開幕式暨海選日",
      description: "各職能屆時將分組帶開，由各組船長主導進行海選",
    },
  },
  {
    phase: SchedulePhase.ONGOING,
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "5月",
      description: "(公佈錄取名單)",
    },
    event: {
      date: "2025/05/11 (Sun)",
      tag: "請務必出席",
      title: "第七屆曼陀號領航計劃 航海士 錄取名單揭曉",
      description:
        "屆時將寄信通知海選結果，最終錄取者可參與第七屆曼陀號領航計劃",
      note: "(註：篩選條件為各組船長經過多方因素考量而定，與報名者能力優劣無直接關聯)",
    },
  },
  {
    phase: SchedulePhase.EXPIRED,
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "6月 - 9月",
      description: "(半年計劃活動)",
    },
    event: {
      date: "2025/06 - 2025/09",
      tag: "日期地點待定",
      title: "第七屆曼陀號領航計劃 活動期間",
      description:
        "包含 (各組月會 + 通識主題講座 + 不定期跨職能與跨屆交流) x 無限可能！",
    },
  },
  {
    phase: SchedulePhase.EXPIRED,
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "10月",
      description: "(結業式暨閉幕日)",
    },
    event: {
      date: "2025/10",
      tag: "日期地點待定",
      title: "閉幕式暨結業日",
      description:
        "將會頒發結業證書、紀念品，並預計安排船長分享、學員交流等精彩環節，劃下美好航程的句號，精彩生涯的逗號",
    },
  },
];

export const SCHEDULE_DETAIL_DATA_SAILOR: IScheduleDetail[] = [
  {
    phase: SchedulePhase.ACTIVE,
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "2月",
      description: "(書面審核)",
    },
    event: {
      date: "2025/02/10 (Mon) - 2025/03/03 (Mon)",
      tag: "請務必出席",
      title: "計劃開放報名",
      description: "於招募期間，選定參加之組別，填寫並繳報名文件",
    },
  },
  {
    phase: SchedulePhase.ACTIVE,
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "3月",
      description: "(書面審核結果揭曉)",
    },
    event: {
      date: "2025/03/23 (Sun)",
      tag: "請務必出席",
      title: "海選名單揭曉",
      description: "屆時將寄信通知第一階段審核結果，通過者得以進入海選",
    },
  },
  {
    phase: SchedulePhase.ONGOING,
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "4月",
      description: "(實體海選)",
    },
    event: {
      date: "2025/04",
      tag: "請務必出席",
      title: "開幕式暨海選日",
      description: "各職能屆時將分組帶開，由各組船長主導進行海選",
    },
  },
  {
    phase: SchedulePhase.ONGOING,
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "5月",
      description: "(公佈錄取名單)",
    },
    event: {
      date: "2025/05/11 (Sun)",
      tag: "請務必出席",
      title: "第七屆曼陀號領航計劃 水手錄取名單揭曉",
      description:
        "屆時將寄信通知海選結果，最終錄取者可參與第七屆曼陀號領航計劃",
      note: "(註：篩選條件為各組船長經過多方因素考量而定，與報名者能力優劣無直接關聯)",
    },
  },
  {
    phase: SchedulePhase.EXPIRED,
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "6月 - 9月",
      description: "(半年計劃活動)",
    },
    event: {
      date: "2025/06 - 2025/09",
      tag: "日期地點待定",
      title: "第七屆曼陀號領航計劃 活動期間",
      description:
        "包含 (各組月會 + 通識主題講座 + 不定期跨職能與跨屆交流) x 無限可能！",
    },
  },
  {
    phase: SchedulePhase.EXPIRED,
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "10月",
      description: "(結業式暨閉幕日)",
    },
    event: {
      date: "2025/10",
      tag: "日期地點待定",
      title: "閉幕式暨結業日",
      description:
        "將會頒發結業證書、紀念品，並預計安排船長分享、學員交流等精彩環節，劃下美好航程的句號，精彩生涯的逗號",
    },
  },
];

export const SCHEDULE_ROLE_DATA = [
  {
    title: "Sailor\n水手 (導生)",
    description:
      "• 申請組別領域實務經驗 1-3 年內 (含實習經驗)\n• 未來有興趣回饋社群",
    imageUrl: "/images/icon-sailor.png",
    buttonText: "馬上報名水手",
    buttonColor: "blue" as ButtonColor,
    buttonClassName: "px-7",
    externalLink: "https://example.com",
  },
  {
    title: "Navigator\n航海士 (職場前輩)",
    description:
      "• 申請組別領域實務經驗 4-6 年以上\n• 具備提拔後進熱忱，樂意提供實務協助輔導",
    imageUrl: "/images/icon-navigator.png",
    buttonText: "馬上報名航海士",
    buttonColor: "golden" as ButtonColor,
    buttonClassName: "px-7",
    externalLink: "https://example.com",
  },
];

export const SCHEDULE_STEPS_DATA_NAVIGATOR: IScheduleStep[] = [
  {
    imageSrc: "/images/icon-letter.png",
    desc: "第一階段書面報名",
  },
  {
    imageSrc: "/images/icon-assist.png",
    desc: "第二階段面談複審",
  },
  {
    imageSrc: "/images/icon-spyglass.png",
    desc: "第三階段實體海選",
  },
  {
    imageSrc: "/images/icon-navigator.png",
    desc: "錄取成為航海士",
  },
  {
    imageSrc: "/images/icon-captain.png",
    desc: "參加半年計劃活動",
  },
  {
    imageSrc: "/images/icon-scroll.png",
    desc: "閉幕式暨結業日",
  },
];

export const SCHEDULE_STEPS_DATA_SAILOR: IScheduleStep[] = [
  {
    imageSrc: "/images/icon-letter.png",
    desc: "第一階段書面審核",
  },
  {
    imageSrc: "/images/icon-spyglass.png",
    desc: "第二階段實體海選",
  },
  {
    imageSrc: "/images/icon-sailor.png",
    desc: "錄取成為水手",
  },
  {
    imageSrc: "/images/icon-captain.png",
    desc: "參加半年計劃活動",
  },
  {
    imageSrc: "/images/icon-scroll.png",
    desc: "閉幕式暨結業日",
  },
];
