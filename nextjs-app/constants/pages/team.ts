import { Role, Team } from "@/types";
import { ExecutionGroupType } from "@/types/filter-option";
import type { AssistantCohort, IProfileInfo } from "@/types/team";

// Captain
import NathanAvatar from "@/public/images/execution-group/eighth/Nathan.jpg";
import NaiwenAvatar from "@/public/images/execution-group/eighth/Naiwen.jpg";
import JohnAvatar from "@/public/images/execution-group/eighth/John.jpg";
import AndyAvatar from "@/public/images/execution-group/eighth/Andy.jpg";
import JackAvatar from "@/public/images/execution-group/eighth/Jack.jpg";
import CarolynAvatar from "@/public/images/execution-group/eighth/Carolyn.jpg";
// Harbour Pilot - 8th Cohort
import BensonAvatar from "@/public/images/execution-group/eighth/Benson.jpg";
import BillAvatar from "@/public/images/execution-group/eighth/Bill.jpg";
import PeterLiAvatar from "@/public/images/execution-group/eighth/PeterLi.jpg";
import JillAvatar from "@/public/images/execution-group/eighth/Jill.jpg";
import LukasAvatar from "@/public/images/execution-group/eighth/Lukas.jpg";
import LenaAvatar from "@/public/images/execution-group/eighth/Lena.jpg";
import AndreaAvatar from "@/public/images/execution-group/eighth/Andrea.jpg";
import EmilyNewAvatar from "@/public/images/execution-group/eighth/Emily.jpg";
import { EIGHTH_ASSISTANTS } from "./assistants/eighth";
import { SEVENTH_ASSISTANTS } from "./assistants/seventh";

import { roleDisplayTextMap } from "../role-display-text-map";

export const EXECUTION_GROUP_FILTER_OPTIONS: {
  key: ExecutionGroupType | "all";
  name: string;
}[] = [
  { key: "all", name: "全部" },
  { key: Role.CAPTAIN, name: roleDisplayTextMap[Role.CAPTAIN] },
  { key: Role.HARBOUR_PILOT, name: roleDisplayTextMap[Role.HARBOUR_PILOT] },
  { key: Role.ASSISTANT, name: roleDisplayTextMap[Role.ASSISTANT] },
  { key: Role.VOLUNTEER, name: roleDisplayTextMap[Role.VOLUNTEER] },
];

export const COMING_SOON_ROLES: ExecutionGroupType[] = [];

export const ACTIVE_ASSISTANT: AssistantCohort = "eighth";

const ASSISTANTS_BY_COHORT: Record<AssistantCohort, IProfileInfo[]> = {
  seventh: SEVENTH_ASSISTANTS,
  eighth: EIGHTH_ASSISTANTS,
};

const genAssistantProfiles = (cohort: AssistantCohort): IProfileInfo[] =>
  [cohort].flatMap((cohort) => ASSISTANTS_BY_COHORT[cohort]);

export const EXECUTION_GROUP: Record<ExecutionGroupType, IProfileInfo[]> = {
  [Role.CAPTAIN]: [
    {
      team: Team.BD,
      name: "范永銀 Nathan Fan",
      title: "COMMEET",
      subTitle: ["首席增長官 CGO"],
      quote: "Don't prove yourself, Improve yourself.",
      imageUrl: NathanAvatar.src,
    },
    {
      team: Team.DATA,
      name: "姜乃文 Naiwen Chiang",
      title: "媒體集團",
      subTitle: ["主任分析師"],
      quote: "Life's best insights only appear after enough iterations.",
      imageUrl: NaiwenAvatar.src,
    },
    {
      team: Team.ENGINEER,
      name: "劉奕為 John Liu",
      title: "Netskope",
      subTitle: ["工程經理"],
      quote: "精益求精，孜孜不倦，大家互相學習，一起成長!",
      imageUrl: JohnAvatar.src,
    },
    {
      team: Team.MKT,
      name: "陳嘉孟  Andy Chen",
      title: "OWNDAYS Taiwan",
      subTitle: ["總經理"],
      quote:
        "Your time is limited, so don't waste it living someone else's life. And most importantly, have the courage to follow your heart and intuition. \n — Steve Jobs",
      imageUrl: AndyAvatar.src,
    },
    {
      team: Team.PM,
      name: "張錦炘 Jack Chang",
      title: "Kleis Commerce",
      subTitle: ["CEO"],
      quote: "If You're Not Growing You're Dying.",
      imageUrl: JackAvatar.src,
    },
    {
      team: Team.UIUX,
      name: "鍾念庭 Carolyn Chung",
      title: "Trend Micro",
      subTitle: ["資深 UX 主管"],
      quote:
        "UX 是高強度的同理心輸出，但不該是單向的消耗。最棒的設計狀態，是當你解決了使用者的痛點，那份價值也回流滋養了你的熱情。",
      imageUrl: CarolynAvatar.src,
    },
  ],
  [Role.HARBOUR_PILOT]: [
    {
      team: Team.BD,
      name: "鄭本源 Benson Cheng",
      title: "第八屆 BD 引水人",
      subTitle: ["第七屆 BD 航海士"],
      quote: "為社會進步添上一塊磚。",
      imageUrl: BensonAvatar.src,
    },
    {
      team: Team.DATA,
      name: "許勝嵐 Bill Hsu",
      title: "第八屆 Data 引水人",
      subTitle: ["第五屆 Data 水手"],
      quote: "保有彈性，擁抱失敗，享受成果。",
      imageUrl: BillAvatar.src,
    },
    {
      team: Team.DATA,
      name: "李賜明 Peter Li",
      title: "第八屆 Data 引水人",
      subTitle: ["第七屆 Data 水手"],
      quote: "面對錯誤，並以謙遜的態度向他人求助。",
      imageUrl: PeterLiAvatar.src,
    },
    {
      team: Team.ENGINEER,
      name: "李季陵 Jill Lee",
      title: "第八屆 Engineering 引水人",
      subTitle: ["第七屆 Engineering 水手"],
      quote: "沒有白走的路，每一步都算數！",
      imageUrl: JillAvatar.src,
    },
    {
      team: Team.ENGINEER,
      name: "張家維 Lukas Chang",
      title: "第八屆 Engineering 引水人",
      subTitle: ["第七屆 Engineering 水手"],
      quote: "保有對立場與選擇偏頗的權利，\n持客觀以維持對萬物的吸引力。",
      imageUrl: LukasAvatar.src,
    },
    {
      team: Team.MKT,
      name: "鍾佩真 Lena Zhong",
      title: "第八屆 Marketing 引水人",
      subTitle: ["第七屆 Marketing 航海士"],
      quote: "人生最好的狀態，是從未放棄成長。",
      imageUrl: LenaAvatar.src,
    },
    {
      team: Team.PM,
      name: "謝采穎 Andrea Hsieh",
      title: "第八屆 PM 引水人",
      subTitle: ["第七屆 PM 航海士"],
      quote: "不斷的觀察，不斷的學習，不斷的進步。",
      imageUrl: AndreaAvatar.src,
    },
    {
      team: Team.UIUX,
      name: "趙庭暄 Emily Chao",
      title: "第八屆 UIUX 引水人",
      subTitle: ["第七屆 Data 水手"],
      quote: "願能以誠待人、眼底有光。",
      imageUrl: EmilyNewAvatar.src,
    },
  ],
  [Role.ASSISTANT]: genAssistantProfiles(ACTIVE_ASSISTANT),
  // TODO: 暫時給空陣列，會在下一個 Session Filter 移除
  [Role.VOLUNTEER]: [],
};
