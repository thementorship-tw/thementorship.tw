import { cva } from "class-variance-authority";
import { SchedulePhase, ScheduleType } from "@/types/schedule";

export const detailCard = {
  title: cva(
    [
      "min-w-[190px] flex flex-col items-center justify-center py-4 px-6",
      "text-subtitle-md text-white",
      "rounded-t-3 md:rounded-none md:rounded-l-3",
    ],
    {
      variants: {
        phase: {
          [SchedulePhase.ACTIVE]: "",
          [SchedulePhase.ONGOING]: "",
          [SchedulePhase.EXPIRED]: "",
        },
        type: {
          [ScheduleType.DEFAULT]: "",
          [ScheduleType.HIGHLIGHT]: "",
        },
      },
      compoundVariants: [
        {
          type: [ScheduleType.DEFAULT],
          phase: [SchedulePhase.ACTIVE],
          class: "bg-blue-8",
        },
        {
          type: [ScheduleType.HIGHLIGHT],
          phase: [SchedulePhase.ACTIVE],
          class: "bg-yellow-6",
        },
        {
          type: [ScheduleType.DEFAULT],
          phase: [SchedulePhase.ONGOING],
          class: "bg-blue-8",
        },
        {
          type: [ScheduleType.HIGHLIGHT],
          phase: [SchedulePhase.ONGOING],
          class: "bg-yellow-6",
        },
        {
          type: [ScheduleType.DEFAULT],
          phase: [SchedulePhase.EXPIRED],
          class: "bg-neutral-7",
        },
        {
          type: [ScheduleType.HIGHLIGHT],
          phase: [SchedulePhase.EXPIRED],
          class: "bg-neutral-7",
        },
      ],
    }
  ),
  event: cva(
    [
      "flex flex-col flex-wrap grow gap-2 py-5 px-7",
      "rounded-b-3 md:rounded-none md:rounded-r-3",
    ],
    {
      variants: {
        phase: {
          [SchedulePhase.ACTIVE]: "",
          [SchedulePhase.ONGOING]: "",
          [SchedulePhase.EXPIRED]: "",
        },
        type: {
          [ScheduleType.DEFAULT]: "",
          [ScheduleType.HIGHLIGHT]: "",
        },
      },
      compoundVariants: [
        {
          type: [ScheduleType.DEFAULT],
          phase: [SchedulePhase.ACTIVE],
          class: "bg-blue-1",
        },
        {
          type: [ScheduleType.HIGHLIGHT],
          phase: [SchedulePhase.ACTIVE],
          class: "bg-yellow-1 border-[2px] border-yellow-6",
        },
        {
          type: [ScheduleType.DEFAULT],
          phase: [SchedulePhase.ONGOING],
          class: "bg-yellow-1",
        },
        {
          type: [ScheduleType.HIGHLIGHT],
          phase: [SchedulePhase.ONGOING],
          class: "bg-yellow-1 border-[2px] border-yellow-6",
        },
        {
          type: [ScheduleType.DEFAULT],
          phase: [SchedulePhase.EXPIRED],
          class: "bg-neutral-2",
        },
        {
          type: [ScheduleType.HIGHLIGHT],
          phase: [SchedulePhase.EXPIRED],
          class: "bg-neutral-2",
        },
      ],
    }
  ),
  contentContainer: cva(["flex flex-col"], {
    variants: {
      isSingleMessage: {
        true: "lg:w-fit",
        false: "lg:w-full",
      },
    },
  }),
  tag: cva(["px-3 py-1 rounded-2"], {
    variants: {
      phase: {
        [SchedulePhase.ACTIVE]: "bg-yellow-2",
        [SchedulePhase.ONGOING]: "bg-yellow-2",
        [SchedulePhase.EXPIRED]: "bg-neutral-3",
      },
    },
  }),
};
