import { Role, Team } from "@/types";
import { ExecutionGroupType } from "@/types/filter-option";

// Captain
import SteveAvatar from "@/public/images/execution-group/Steve.jpg";
import BrownAvatar from "@/public/images/execution-group/Brown.jpg";
import BryanAvatar from "@/public/images/execution-group/Bryan.jpg";
import SidneyAvatar from "@/public/images/execution-group/Sidney.jpg";
import GordonAvatar from "@/public/images/execution-group/Gordon.jpg";
import DukiAvatar from "@/public/images/execution-group/Duki.jpg";
// Navigator
import JoannAvatar from "@/public/images/execution-group/Joann.jpg";
import MilaAvatar from "@/public/images/execution-group/Mila.jpg";
import JudyAvatar from "@/public/images/execution-group/Judy.jpg";
import KyleAvatar from "@/public/images/execution-group/Kyle.jpg";
import AliceAvatar from "@/public/images/execution-group/Alice.jpg";
import ClaireAvatar from "@/public/images/execution-group/Claire.jpg";
import PattyAvatar from "@/public/images/execution-group/Patty.jpg";
import HarperAvatar from "@/public/images/execution-group/Harper.jpg";
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
      name: "蘇書平 Steve Sue",
      title: "先行智庫",
      subTitle: ["董事長暨執行長"],
      quote:
        "現在你是誰並不重要，重要的是未來你想成為誰。 讓我們一起成為更好的自己。",
      imageUrl: SteveAvatar.src,
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
      name: "賴柏龍 Brown Lai",
      title: "電商平台",
      subTitle: ["首席商業分析師"],
      quote:
        "You can’t connect the dots looking forward; you can only connect them looking backwards.",
      imageUrl: BrownAvatar.src,
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
      name: "布萊恩 Bryan Yang",
      title: "顧職",
      subTitle: ["外商資深軟體工程師 & 顧職創辦人"],
      quote: "Be kind.",
      imageUrl: BryanAvatar.src,
      hashTags: [
        "軟體架構與開發",
        "後端與資料系統設計",
        "DevOps",
        "軟體專案管理",
      ],
    },
    {
      team: Team.MKT,
      name: "黃馨儀 Sidney Huang",
      title: "TutorABC",
      subTitle: ["Marketing VP"],
      quote: "每天都比昨天進步一點點。",
      imageUrl: SidneyAvatar.src,
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
      name: "張智翔 Gordon Chang",
      title: "漸強實驗室",
      subTitle: ["產品長"],
      quote: "Change is inevitable. Growth is optional.",
      imageUrl: GordonAvatar.src,
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
      name: "姜虹伊 Duki Chiang",
      title: "Gamania",
      subTitle: ["Product Design Lead"],
      quote:
        "以假設驗證的思維，從未知中找尋解決問題的秩序，並讓有序的事物變得有趣好玩！",
      imageUrl: DukiAvatar.src,
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
      name: "陳孟真 Joann Chen",
      title: "第七屆 BD 引水人",
      subTitle: ["第六屆 BD 水手"],
      quote: "世界上最大的悲哀，不是我不行，而是我本可以。",
      imageUrl: JoannAvatar.src,
    },
    {
      team: Team.DATA,
      name: "張若兪 Mila Chang  ",
      title: "第七屆 Data 引水人",
      subTitle: ["第六屆 Data 航海士"],
      quote: "學會站在別人的角度，才能成就更好的自己。",
      imageUrl: MilaAvatar.src,
    },
    {
      team: Team.ENGINEER,
      name: "蔡珮歆 Judy Tsai",
      title: "第七屆 Engineering 引水人",
      subTitle: ["第六屆 Engineering 水手"],
      quote: "天賦決定下限，好奇心決定上限。",
      imageUrl: JudyAvatar.src,
    },
    {
      team: Team.ENGINEER,
      name: "莫力全 Kyle Mo",
      title: "第七屆 Engineering 引水人",
      subTitle: ["第六屆 Engineering 水手"],
      quote: "如果你希望周遭環境改變，答案或許是從「改變自己」開始。",
      imageUrl: KyleAvatar.src,
    },
    {
      team: Team.MKT,
      name: "邱姵璇 Alice Chiu",
      title: "第七屆 Marketing 引水人",
      subTitle: ["第六屆 PM 助教"],
      quote: "不怕失去才是擁有的開始。",
      imageUrl: AliceAvatar.src,
    },
    {
      team: Team.PM,
      name: "謝慧霖 Claire Hsieh",
      title: "第七屆 PM 引水人",
      subTitle: ["第六屆 PM 航海士"],
      quote: "把每次挑戰都變成學習與成長的機會。",
      imageUrl: ClaireAvatar.src,
    },
    {
      team: Team.UIUX,
      name: "許珮甄 Patty Hsu",
      title: "第七屆 UIUX 引水人",
      subTitle: ["第六屆 UIUX 航海士"],
      quote: "用設計改變世界，用體驗溫暖人心。",
      imageUrl: PattyAvatar.src,
    },
    {
      team: Team.LEADERSHIP,
      name: "劉芷吟 Harper Liu",
      title: "第七屆 領導力小學堂 引水人",
      subTitle: ["第六屆 BD 助教"],
      quote: "你打算怎麼渡過這瘋狂又珍貴的人生？",
      imageUrl: HarperAvatar.src,
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
