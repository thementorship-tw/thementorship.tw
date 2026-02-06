import { Role, Team } from "@/types";
import { ExecutionGroupType } from "@/types/filter-option";

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
// Assistant
import MartinAvatar from "@/public/images/execution-group/Martin.jpg";
import LizzyAvatar from "@/public/images/execution-group/Lizzy.jpg";
import KevinAvatar from "@/public/images/execution-group/Kevin.jpg";
import ChristineAvatar from "@/public/images/execution-group/Christine.jpg";
import LucasAvatar from "@/public/images/execution-group/Lucas.jpg";
import GallonAvatar from "@/public/images/execution-group/Gallon.jpg";
import SandraAvatar from "@/public/images/execution-group/Sandra.jpg";
import ChiChiAvatar from "@/public/images/execution-group/ChiChi.jpg";
import CherylAvatar from "@/public/images/execution-group/Cheryl.jpg";
import GloriaAvatar from "@/public/images/execution-group/Gloria.jpg";
import NiuAvatar from "@/public/images/execution-group/Niu.jpg";
import EmilyAvatar from "@/public/images/execution-group/Emily.jpg";
import JulianAvatar from "@/public/images/execution-group/Julien.jpg";
import LukeAvatar from "@/public/images/execution-group/Luke.jpg";
import ZonnieAvatar from "@/public/images/execution-group/Zonnie.jpg";

import { roleDisplayTextMap } from "../role-display-text-map";

export const EXECUTION_GROUP_FILTER_OPTIONS: {
  key: ExecutionGroupType | "all";
  name: string;
}[] = [
  { key: "all", name: "全部" },
  { key: Role.HARBOUR_PILOT, name: roleDisplayTextMap[Role.HARBOUR_PILOT] },
  { key: Role.CAPTAIN, name: roleDisplayTextMap[Role.CAPTAIN] },
  { key: Role.ASSISTANT, name: roleDisplayTextMap[Role.ASSISTANT] },
];

export const COMING_SOON_ROLES: ExecutionGroupType[] = [Role.ASSISTANT];

interface IProfileInfo {
  team: Team;
  name: string;
  title: string;
  subTitle: string[];
  quote: string;
  imageUrl: string;
  hashTags?: string[];
}

export const EXECUTION_GROUP: Record<ExecutionGroupType, IProfileInfo[]> = {
  [Role.CAPTAIN]: [
    {
      team: Team.BD,
      name: "范永銀 Nathan Fan",
      title: "COMMEET",
      subTitle: ["首席增長官 CGO"],
      quote: "Don't prove yourself, Improve yourself.",
      imageUrl: NathanAvatar.src,
      hashTags: [
        "商業開發",
        "新商機挖掘",
        "渠道銷售",
        "直接銷售",
        "客戶關係管理",
        "售前技術支持",
      ],
    },
    {
      team: Team.DATA,
      name: "姜乃文 Naiwen Chiang",
      title: "媒體集團",
      subTitle: ["主任分析師"],
      quote: "Life’s best insights only appear after enough iterations.",
      imageUrl: NaiwenAvatar.src,
      hashTags: [
        "產品分析",
        "用戶行為分析",
        "資料視覺化",
        "Storytelling",
        "跨團隊溝通",
        "建立數據指標體系",
        "跨產業經驗 (金融、社群、電商)",
      ],
    },
    {
      team: Team.ENGINEER,
      name: "劉奕為 John Liu",
      title: "Netskope",
      subTitle: ["工程經理"],
      quote: "精益求精，孜孜不倦，大家互相學習，一起成長!",
      imageUrl: JohnAvatar.src,
      hashTags: [
        "軟體架構與開發",
        "後端與資料系統設計",
        "DevOps",
        "軟體專案管理",
      ],
    },
    {
      team: Team.MKT,
      name: "陳嘉孟  Andy Chen",
      title: "OWNDAYS Taiwan",
      subTitle: ["總經理"],
      quote:
        "Your time is limited, so don't waste it living someone else's life. And most importantly, have the courage to follow your heart and intuition. \n — Steve Jobs",
      imageUrl: AndyAvatar.src,
      hashTags: [
        "資源整合",
        "跨部門及產業協作",
        "溝通協調",
        "行銷公關",
        "媒體訊息策略",
        "品牌定位",
      ],
    },
    {
      team: Team.PM,
      name: "張錦炘 Jack Chang",
      title: "Kleis Commerce",
      subTitle: ["CEO"],
      quote: "If You're Not Growing You're Dying.",
      imageUrl: JackAvatar.src,
      hashTags: [
        "產品策略規劃",
        "產品開發流程",
        "用戶需求挖掘",
        "產品規格撰寫",
        "OKR 制定落實",
        "領導力與團隊文化",
      ],
    },
    {
      team: Team.UIUX,
      name: "鍾念庭 Carolyn Chung",
      title: "Trend Micro",
      subTitle: ["資深 UX 主管"],
      quote:
        "UX 是高強度的同理心輸出，但不該是單向的消耗。最棒的設計狀態，是當你解決了使用者的痛點，那份價值也回流滋養了你的熱情。",
      imageUrl: CarolynAvatar.src,
      hashTags: [
        "產品體驗設計策略",
        "創意工作坊規劃",
        "原型概念設計",
        "介面設計與設計系統",
        "跨職能設計溝通",
      ],
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
  [Role.ASSISTANT]: [
    {
      team: Team.ENGINEER,
      name: "林政儀 Martin Lin",
      title: "第七屆 官網組 助理",
      subTitle: ["第六屆 Engineer 航海士"],
      quote: "開拓視野，看見世界，貼近彼此，感受生活，這就是生活的目的。",
      imageUrl: MartinAvatar.src,
    },
    {
      team: Team.ENGINEER,
      name: "梁資芸 Lizzy Liang",
      title: "第七屆 官網組 助理",
      subTitle: ["第六屆 Engineer 水手"],
      quote: "現在放棄的話，比賽就結束了。",
      imageUrl: LizzyAvatar.src,
    },
    {
      team: Team.DATA,
      name: "李岳洲 Kevin Lee",
      title: "第七屆 活動組 助理",
      subTitle: ["第五屆 Data 水手"],
      quote: "曼陀號將會帶給各位意想不到的航程",
      imageUrl: KevinAvatar.src,
    },
    {
      team: Team.BD,
      name: "王玟樺 Christine Wang",
      title: "第七屆 BD組 助教",
      subTitle: ["第四屆 BD 水手"],
      quote:
        "沒有做不到，只有想不到。人生要有登上諾曼第的野心；也要有挺過滑鐵盧的勇氣。",
      imageUrl: ChristineAvatar.src,
    },
    {
      team: Team.BD,
      name: "周經倫 Lucas Chou",
      title: "第七屆 BD組 助教",
      subTitle: ["第六屆 BD 水手"],
      quote: "能否骰到六，繫於機緣及命運；如何擊中球，全憑膽識與耕耘。",
      imageUrl: LucasAvatar.src,
    },
    {
      team: Team.DATA,
      name: "施佳綸 Gallon Shih",
      title: "第七屆 Data組 助教",
      subTitle: ["第六屆 Data 航海士"],
      quote: "認真且快樂過好每一天，珍惜每一次的相遇。",
      imageUrl: GallonAvatar.src,
    },
    {
      team: Team.DATA,
      name: "吳怡慧 Sandra Wu",
      title: "第七屆 Data組 助教",
      subTitle: ["第六屆 Data 水手"],
      quote: "一起徜徉於數據之海嗎？",
      imageUrl: SandraAvatar.src,
    },
    {
      team: Team.ENGINEER,
      name: "董元琪 Chichi Tung",
      title: "第七屆 Engineer組 助教",
      subTitle: ["第六屆 Engineer 水手"],
      quote: "思路決定出路，格局決定結局。",
      imageUrl: ChiChiAvatar.src,
    },
    {
      team: Team.ENGINEER,
      name: "邱思蓉 Cheryl Chiu",
      title: "第七屆 Engineer組 助教",
      subTitle: ["第六屆 Engineer 水手"],
      quote: "在自己的時區中，一切準時。",
      imageUrl: CherylAvatar.src,
    },
    {
      team: Team.MKT,
      name: "林靖容 Gloria Lin",
      title: "第七屆 MKT組 助教",
      subTitle: ["第六屆 MKT 水手"],
      quote: "在人生的米字路口，學會當隻靈活的八爪章魚！",
      imageUrl: GloriaAvatar.src,
    },
    {
      team: Team.MKT,
      name: "蘇紐 Niu Su",
      title: "第七屆 MKT組 助教",
      subTitle: ["第五屆 MKT 水手"],
      quote: "享受當下，追求結果。",
      imageUrl: NiuAvatar.src,
    },
    {
      team: Team.PM,
      name: "陳槿蓉 Emily Chen",
      title: "第七屆 PM組 助教",
      subTitle: ["第五屆 PM 水手"],
      quote: "成長的秘訣就是多快速嘗試、快速失敗。",
      imageUrl: EmilyAvatar.src,
    },
    {
      team: Team.PM,
      name: "陳璿文 Julien Chen",
      title: "第七屆 PM組 助教",
      subTitle: ["第六屆 PM 航海士"],
      quote: "I came, I saw, I contributed.",
      imageUrl: JulianAvatar.src,
    },
    {
      team: Team.UIUX,
      name: "謝昌達 Luke Hsieh",
      title: "第七屆 UIUX組 助教",
      subTitle: ["第三屆 UX 航海士"],
      quote: "開始跑，離終點就不遠了。",
      imageUrl: LukeAvatar.src,
    },
    {
      team: Team.UIUX,
      name: "林依柔 Zonnie Lin",
      title: "第七屆 UIUX組 助教",
      subTitle: ["第六屆 UX 水手"],
      quote: "沒有人可以代替你經歷自己的人生，你的人生體驗由你來設計。",
      imageUrl: ZonnieAvatar.src,
    },
  ],
};
