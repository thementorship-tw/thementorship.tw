import { Team } from "@/types";

export const teamDisplayTextMap: Record<
  Team,
  {
    zhGroupName: string;
    enGroupName: string;
    shortName?: string;
  }
> = {
  [Team.BD]: {
    zhGroupName: "商業開發",
    enGroupName: "Business Development",
    shortName: "BD",
  },
  [Team.DATA]: {
    zhGroupName: "資料應用",
    enGroupName: "Data Application (Data)",
    shortName: "DATA",
  },
  [Team.ENGINEER]: {
    zhGroupName: "技術開發",
    enGroupName: "Engineering",
  },
  [Team.MKT]: {
    zhGroupName: "行銷",
    enGroupName: "Marketing",
    shortName: "MKT",
  },
  [Team.PM]: {
    zhGroupName: "產品管理",
    enGroupName: "Product Management",
    shortName: "PM",
  },
  [Team.UIUX]: {
    zhGroupName: "使用者體驗設計",
    enGroupName: "User Interface & Experience",
    shortName: "UIUX",
  },
  [Team.LEADERSHIP]: {
    zhGroupName: "領導力小學堂",
    enGroupName: "Leadership Academy",
  },
};
