import { ButtonColor } from "@/components/common/Button/Button";
import {
  IScheduleDetail,
  IScheduleStep,
  ScheduleType,
} from "@/types/schedule";
import { getSchedulePhaseByDateTimeIndex } from "@/utils/schedule";

type IScheduleDetailWithoutPhase = Omit<IScheduleDetail, "phase"> & {
  dateTimeIndex: number[];
};

const SCHEDULE_DETAIL_DATA_NAVIGATOR_RAW: IScheduleDetailWithoutPhase[] = [
  {
    dateTimeIndex: [2, 3],
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "2月 - 3月",
      description: "(書面審核)",
    },
    event: {
      date: (
        <span>
          2026/02/09 (Mon) - <del>2026/03/08 (Sun)</del> 2026/03/22 (Sun)
        </span>
      ),
      tag: "好評延長 ❤️",
      title: "計劃開放報名",
      description: "於招募期間，選定參加之組別，填寫並繳報名文件",
    },
  },
  {
    dateTimeIndex: [3],
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "3 月",
      description: "(面試複審)",
    },
    event: [
      {
        date: "2026/03/30 (Mon)",
        title: "面試名單揭曉",
        description: "屆時將寄信通知第一階段審核結果",
      },
    ],
  },
  {
    dateTimeIndex: [4],
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "4 月",
      description: "(面試複審)",
    },
    event: [
      {
        date: "2026/04/13 (Mon) - 2026/04/17 (Fri)",
        title: "線上面試",
        description: "進行第二階段面試複審",
      },
      {
        date: "2026/04/19 (Sun)",
        title: "面試結果揭曉",
        description: "屆時將寄信通知第二階段審核結果，通過者得以進入海選",
      },
    ],
  },
  {
    dateTimeIndex: [5],
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "5月",
      description: "(公佈錄取名單)",
    },
    event: [
      {
        date: "2026/05/09 (Sat)",
        tag: "請務必出席",
        title: "開幕式暨海選日",
        description: "各職能屆時將分組帶開，由各組船長主導進行海選",
      },
      {
        date: "2026/05/16 (Sat)",
        title: "第八屆曼陀號領航計劃 航海士錄取名單揭曉",
        description:
          "屆時將寄信通知海選結果，最終錄取者可參與第八屆曼陀號領航計劃",
        note: "(註：篩選條件為各組船長經過多方因素考量而定，與報名者能力優劣無直接關聯)",
      },
    ],
  },
  {
    dateTimeIndex: [6, 9],
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "6月 - 9月",
      description: "(計劃主要活動)",
    },
    event: {
      date: "2026/06 - 2026/09",
      tag: "日期地點依各組公布為主",
      title: "第八屆曼陀號領航計劃 主要活動期間",
      description:
        "包含 (各組月會四場 + 通識主題講座四場 + 不定期跨職能與跨屆交流) x 無限可能！",
    },
  },
  {
    dateTimeIndex: [11],
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "11月",
      description: "(閉幕式暨結業日)",
    },
    event: {
      date: "",
      title: "閉幕式暨結業日",
      description:
        "將會頒發結業證書、紀念品，並預計安排船長分享、學員交流等精彩環節，劃下美好航程的句號，精彩生涯的逗號",
    },
  },
];

export const SCHEDULE_DETAIL_DATA_NAVIGATOR: IScheduleDetail[] =
  SCHEDULE_DETAIL_DATA_NAVIGATOR_RAW.map((detail) => {
    const { dateTimeIndex, ...scheduleDetail } = detail;

    return {
      ...scheduleDetail,
      phase: getSchedulePhaseByDateTimeIndex(dateTimeIndex),
    };
  });

const SCHEDULE_DETAIL_DATA_SAILOR_RAW: IScheduleDetailWithoutPhase[] = [
  {
    dateTimeIndex: [2, 3],
    type: ScheduleType.DEFAULT,
    timeline: {
      title: "2月 - 3月",
      description: "(書面審核)",
    },
    event: {
      date: (
        <span>
          2026/02/09 (Mon) - <del>2026/03/08 (Sun)</del> 2026/03/22 (Sun)
        </span>
      ),
      tag: "好評延長 ❤️",
      title: "計劃開放報名",
      description: "於招募期間，選定參加之組別，填寫並繳報名文件",
    },
  },
  {
    dateTimeIndex: [4],
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "4月",
      description: "(書面審核結果揭曉\n開幕式海選)",
    },
    event: [
      {
        date: <span>2026/04/12 (Sun)</span>,
        title: "海選名單揭曉",
        description: "屆時將寄信通知第一階段審核結果，通過者得以進入海選",
      },
    ],
  },
  {
    dateTimeIndex: [5],
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "5月",
      description: "(公佈錄取名單)",
    },
    event: [
      {
        date: "2026/05/09 (Sat)",
        tag: "請務必出席",
        title: "開幕式暨海選日",
        description: "各職能屆時將分組帶開，由各組船長主導進行海選",
      },
      {
        date: "2026/05/16 (Sat)",
        title: "第八屆曼陀號領航計劃 水手錄取名單揭曉",
        description:
          "屆時將寄信通知海選結果，最終錄取者可參與第八屆曼陀號領航計劃",
        note: "(註：篩選條件為各組船長經過多方因素考量而定，與報名者能力優劣無直接關聯)",
      },
    ],
  },
  {
    dateTimeIndex: [6, 9],
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "6月 - 9月",
      description: "(計劃主要活動)",
    },
    event: {
      date: "2026/06 - 2026/09",
      tag: "日期地點依各組公布為主",
      title: "第八屆曼陀號領航計劃 主要活動期間",
      description:
        "包含 (各組月會四場 + 通識主題講座四場 + 不定期跨職能與跨屆交流) x 無限可能！",
    },
  },
  {
    dateTimeIndex: [11],
    type: ScheduleType.HIGHLIGHT,
    timeline: {
      title: "11月",
      description: "(閉幕式暨結業日)",
    },
    event: {
      date: "",
      title: "閉幕式暨結業日",
      description:
        "將會頒發結業證書、紀念品，並預計安排船長分享、學員交流等精彩環節，劃下美好航程的句號，精彩生涯的逗號",
    },
  },
];

export const SCHEDULE_DETAIL_DATA_SAILOR: IScheduleDetail[] =
  SCHEDULE_DETAIL_DATA_SAILOR_RAW.map((detail) => {
    const { dateTimeIndex, ...scheduleDetail } = detail;

    return {
      ...scheduleDetail,
      phase: getSchedulePhaseByDateTimeIndex(dateTimeIndex),
    };
  });

export const SCHEDULE_ROLE_DATA = [
  {
    title: "Sailor\n水手 (職場新人)",
    description:
      "• 申請組別領域實務經驗 1 - 3 年的新鮮人（包含實習經驗）\n• 未來有興趣回饋社群",
    imageUrl: "/images/icon-sailor.png",
    buttonText: "馬上報名水手",
    buttonColor: "blue" as ButtonColor,
    buttonClassName: "px-7",
    externalLink: undefined,
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
    externalLink: undefined,
    buttonDisabled: true,
  },
];

export const SCHEDULE_STEPS_DATA_NAVIGATOR: IScheduleStep[] = [
  {
    imageSrc: "/images/icon-letter.png",
    desc: "第一階段\n書面報名",
  },
  {
    imageSrc: "/images/icon-assist.png",
    desc: "第二階段\n面試複審",
  },
  {
    imageSrc: "/images/icon-spyglass.png",
    desc: "第三階段\n開幕式海選",
  },
  {
    imageSrc: "/images/icon-navigator.png",
    desc: "錄取\n成為航海士",
  },
  {
    imageSrc: "/images/icon-captain.png",
    desc: "參加半年\n計劃活動",
  },
  {
    imageSrc: "/images/icon-scroll.png",
    desc: "閉幕式暨\n結業日",
  },
];

export const SCHEDULE_STEPS_DATA_SAILOR: IScheduleStep[] = [
  {
    imageSrc: "/images/icon-letter.png",
    desc: "第一階段\n書面審核",
  },
  {
    imageSrc: "/images/icon-spyglass.png",
    desc: "第二階段\n開幕式海選",
  },
  {
    imageSrc: "/images/icon-sailor.png",
    desc: "錄取\n成為水手",
  },
  {
    imageSrc: "/images/icon-captain.png",
    desc: "參加半年\n計劃活動",
  },
  {
    imageSrc: "/images/icon-scroll.png",
    desc: "閉幕式暨\n結業日",
  },
];
