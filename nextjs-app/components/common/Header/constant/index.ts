import Routes from "@/constants/routes";

export const navigationMenu = [
  {
    href: Routes.HOME,
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
        title: "團隊介紹",
      },
    ],
  },
  {
    href: Routes.PROGRAM_RULES,
    title: "Program",
    subtitle: "活動辦法",
  },
  {
    href: Routes.FAQ,
    title: "FAQ",
    subtitle: "常見問題",
  },
];
