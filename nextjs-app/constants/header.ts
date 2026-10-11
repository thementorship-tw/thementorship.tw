import Routes from "@/constants/routes";

interface IMenuItem {
  title: string;
  subtitle: string;
  href?: string;
  // 技能交換平台是另一個 app（透過 rewrite 掛在 /exchange），需要整頁跳轉，不能用站內切換
  isExternalApp?: boolean;
  subMenu?: {
    title: string;
    href: string;
  }[];
}

export const navigationMenu: IMenuItem[] = [
  {
    title: "About",
    subtitle: "關於曼陀號",
    subMenu: [
      {
        href: Routes.ABOUT.PHILOSOPHY,
        title: "曼陀號理念",
      },
      {
        href: Routes.ABOUT.OVERVIEW,
        title: "計劃介紹",
      },
      {
        href: Routes.ABOUT.TEAM,
        title: "執行團隊",
      },
    ],
  },
  {
    href: Routes.PROGRAM_RULES,
    title: "Program",
    subtitle: "活動辦法",
  },
  {
    href: Routes.ACTIVITY,
    title: "Activity",
    subtitle: "活動內容",
  },
  {
    href: Routes.FAQ,
    title: "FAQ",
    subtitle: "常見問題",
  },
  {
    href: Routes.EXCHANGE,
    title: "Exchange",
    subtitle: "技能交換",
    isExternalApp: true,
  },
];
