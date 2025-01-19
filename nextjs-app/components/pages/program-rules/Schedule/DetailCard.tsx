import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import {
  IScheduleEvent,
  IScheduleDetail,
  IScheduleType,
} from "@/types/schedule";

const detailCard = {
  title: cva(
    [
      "min-w-[190px] flex flex-col items-center justify-center py-4 px-6",
      "text-subtitle-md text-white",
      "rounded-t-3 md:rounded-none md:rounded-l-3",
    ],
    {
      variants: {
        type: {
          active: "bg-blue-8",
          ongoing: "bg-blue-8",
          highlighted: "bg-yellow-6",
          expired: "bg-neutral-7",
        },
      },
    }
  ),
  event: cva(
    [
      "flex flex-col flex-wrap grow gap-2 py-5 px-7",
      "rounded-b-3 md:rounded-none md:rounded-r-3",
    ],
    {
      variants: {
        type: {
          active: "bg-blue-1",
          ongoing: "bg-yellow-1",
          highlighted: "bg-yellow-1 border-[2px] border-yellow-6",
          expired: "bg-neutral-2",
        },
      },
    }
  ),
  tag: cva(["px-3 py-1 rounded-2"], {
    variants: {
      type: {
        active: "bg-yellow-2",
        ongoing: "bg-yellow-2",
        highlighted: "bg-yellow-2",
        expired: "bg-neutral-3",
      },
    },
  }),
};

const ActiveIcon = () => (
  <div className="relative size-[48px] shrink-0">
    <Image
      src="/images/icon-ship.png"
      alt="icon-ship"
      fill
      className="w-full h-full object-cover"
    />
  </div>
);

interface IDetailContent {
  e: IScheduleEvent;
  type: IScheduleType;
  isDivider?: boolean;
}

const DetailContent: FC<IDetailContent> = ({ type, e, isDivider }) => (
  <div className="w-full lg:w-fit flex flex-col">
    <div className="flex flex-wrap justify-center md:justify-start items-center text-subtitle-md text-neutral-10 text-center md:text-left mb-2">
      <div className="mr-3">{e.date}</div>
      {e.tag && (
        <div className={twMerge(detailCard.tag({ type }))}>{e.tag}</div>
      )}
    </div>
    <div className="flex flex-col text-center md:text-left">
      <div className="text-h6">{e.title}</div>
      <div className="text-body-md">{e.description}</div>
    </div>
    {isDivider && <hr className="mt-6 border-neutral-2 lg:hidden" />}
  </div>
);

const DetailCard: FC<IScheduleDetail> = ({ type, timeline, event }) => {
  const renderEvent = () => {
    if (Array.isArray(event)) {
      return (
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
          {event.map((e, index) => (
            <DetailContent
              key={`${e.title}-${index.toString()}`}
              e={e}
              type={type}
              isDivider={index + 1 !== event.length}
            />
          ))}
        </div>
      );
    } else {
      return <DetailContent type={type} e={event} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch rounded-3">
      <div className={twMerge(detailCard.title({ type }))}>
        <div className="text-h5">{timeline.title}</div>
        <div className="text-body-md">{timeline.description}</div>
      </div>
      <div className={twMerge(detailCard.event({ type }))}>
        <div className="flex flex-col items-center md:flex-row md:items-start justify-between gap-6">
          {renderEvent()}
          {type === IScheduleType.ONGOING && <ActiveIcon />}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
