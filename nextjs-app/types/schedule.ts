import { ReactNode } from "react";
import { ButtonColor, ButtonVariant } from "@/components/common/Button/Button";

export enum SchedulePhase {
  ACTIVE = "ACTIVE",
  ONGOING = "ONGOING",
  EXPIRED = "EXPIRED",
}

export enum ScheduleType {
  DEFAULT = "DEFAULT",
  HIGHLIGHT = "HIGHLIGHT",
}

export interface IScheduleEvent {
  date: string | ReactNode;
  tag?: string;
  title: string;
  description: string;
  note?: string;
}

export interface IScheduleDetail {
  phase: SchedulePhase;
  type: ScheduleType;
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
