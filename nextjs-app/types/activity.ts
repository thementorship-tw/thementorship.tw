export type ActivityType =
  | "keynoteTalk"
  | "crossFunctionalNetworking"
  | "crossCohortNetworking"
  | "studyGroup"
  | "socialActivity";

export type ActivityFilterOptionType = ActivityType | "all";

export type ActivityStatus =
  | "upcoming"
  | "registrationOpen"
  | "registrationClosed";

export interface ActivityInfo {
  type: ActivityType;
  time: string;
  title: string;
  lecturer: string;
  location: string;
  hashTags: string[];
  imageSrc?: string;
  register: {
    start: string;
    end: string;
    href?: string;
  };
}
