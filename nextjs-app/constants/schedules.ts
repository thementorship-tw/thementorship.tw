import {
  IScheduleRole,
  IScheduleDetail,
  IScheduleType,
  IScheduleStep,
} from "@/types/schedule";

export const SCHEDULE_DETAIL_DATA_NAVIGATOR: IScheduleDetail[] = [
  {
    type: IScheduleType.EXPIRED,
    timeline: {
      title: "2月",
      description: "(書面審核)",
    },
    event: {
      date: "2025/02/10 (Mon) - 2025/03/03 (Mon)",
      title: "計劃開放報名",
      description: "於招募期間，選定參加之組別，填寫並繳報名文件",
    },
  },
  {
    type: IScheduleType.ONGOING,
    timeline: {
      title: "3月",
      description: "(書面審核結果揭曉)",
    },
    event: [
      {
        date: "2025/03/23 (Sun)",
        title: "海選名單揭曉",
        description: "屆時將寄信通知第一階段審核結果，通過者得以進入海選",
      },
      {
        date: "2025/03/30 (Sun) - 2025/04/06 (Sun)",
        title: "線上面談",
        description: "進行第二階段面談複審",
      },
    ],
  },
  {
    type: IScheduleType.HIGHLIGHTED,
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
    type: IScheduleType.ACTIVE,
    timeline: {
      title: "5月",
      description: "(公佈錄取名單)",
    },
    event: {
      date: "2025/05/11 (Sun)",
      title: "第七屆曼陀號領航計劃 航海士 錄取名單揭曉",
      description:
        "屆時將寄信通知海選結果，最終錄取者可參與第七屆曼陀號領航計劃",
      note: "(註：篩選條件為各組船長經過多方因素考量而定，與報名者能力優劣無直接關聯)",
    },
  },
  {
    type: IScheduleType.HIGHLIGHTED,
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
    type: IScheduleType.HIGHLIGHTED,
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
    type: IScheduleType.EXPIRED,
    timeline: {
      title: "2月",
      description: "(書面審核)",
    },
    event: {
      date: "2025/02/10 (Mon) - 2025/03/03 (Mon)",
      title: "計劃開放報名",
      description: "於招募期間，選定參加之組別，填寫並繳報名文件",
    },
  },
  {
    type: IScheduleType.ONGOING,
    timeline: {
      title: "3月",
      description: "(書面審核結果揭曉)",
    },
    event: {
      date: "2025/03/23 (Sun)",
      title: "海選名單揭曉",
      description: "屆時將寄信通知第一階段審核結果，通過者得以進入海選",
    },
  },
  {
    type: IScheduleType.HIGHLIGHTED,
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
    type: IScheduleType.ACTIVE,
    timeline: {
      title: "5月",
      description: "(公佈錄取名單)",
    },
    event: {
      date: "2025/05/11 (Sun)",
      title: "第七屆曼陀號領航計劃 水手錄取名單揭曉",
      description:
        "屆時將寄信通知海選結果，最終錄取者可參與第七屆曼陀號領航計劃",
      note: "(註：篩選條件為各組船長經過多方因素考量而定，與報名者能力優劣無直接關聯)",
    },
  },
  {
    type: IScheduleType.HIGHLIGHTED,
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
    type: IScheduleType.HIGHLIGHTED,
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

export const SCHEDULE_ROLE_DATA: IScheduleRole[] = [
  {
    imageSrc: "/images/icon-sailor.png",
    imageAlt: "icon-sailor",
    enTitle: "Sailors",
    zhTitle: "水手 (導生)",
    descList: [
      "申請組別領域工作經驗 1-3 年內 (含實習經驗)",
      "未來有興趣回饋社群",
    ],
    button: {
      variant: "filled",
      color: "blue",
      text: "馬上報名水手",
      href: "/",
    },
  },
  {
    imageSrc: "/images/icon-navigator.png",
    imageAlt: "icon-navigator",
    enTitle: "Navigators",
    zhTitle: "航海士 (職場前輩)",
    descList: [
      "申請組別領域工作經驗 4-6 年以上",
      "具備提拔後進熱忱，樂意提供實務協助輔導",
    ],
    button: {
      variant: "filled",
      color: "golden",
      text: "馬上報名航海士",
      href: "/",
    },
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
