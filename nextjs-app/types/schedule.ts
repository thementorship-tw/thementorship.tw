import { ButtonColor, ButtonVariant } from "@/components/common/Button";

export enum IScheduleType {
  ACTIVE = "active",
  ONGOING = "ongoing",
  HIGHLIGHTED = "highlighted",
  EXPIRED = "expired",
}

export interface IScheduleEvent {
  date: string;
  tag?: string;
  title: string;
  description: string;
  note?: string;
}

export interface IScheduleDetail {
  type: IScheduleType;
  timeline: {
    title: string;
    description: string;
  };
  event: IScheduleEvent[] | IScheduleEvent;
}

export interface IScheduleRole {
  imageSrc: string;
  imageAlt: string;
  enTitle: string;
  zhTitle: string;
  descList: string[];
  button: {
    variant: ButtonVariant;
    color: ButtonColor;
    text: string;
    href: string;
  };
}

export interface IScheduleStep {
  imageSrc: string;
  desc: string;
}
