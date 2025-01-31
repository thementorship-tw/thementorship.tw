import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
  IScheduleEvent,
  IScheduleDetail,
  SchedulePhase,
} from "@/types/schedule";
import { detailCard } from "./detailCardStyles";

const ActiveIcon = () => (
  <div className="relative size-[48px] shrink-0 motion-translate-y-loop-[4px] motion-duration-2000 motion-ease-in-out">
    <Image
      src="/images/icon-ship.png"
      alt="icon-ship"
      fill
      className="h-full w-full object-cover"
    />
  </div>
);

interface IDetailContent {
  phase: SchedulePhase;
  event: IScheduleEvent;
  isDivider?: boolean;
}

const DetailContent: FC<IDetailContent> = ({ phase, event, isDivider }) => (
  <div className="flex w-full flex-col lg:w-fit">
    <div className="mb-2 flex flex-wrap items-center justify-center text-center text-subtitle-md text-neutral-10 md:justify-start md:text-left">
      <div className="mr-3">{event.date}</div>
      {event.tag && (
        <div className={twMerge(detailCard.tag({ phase }))}>{event.tag}</div>
      )}
    </div>
    <div className="flex flex-col text-center md:text-left">
      <div className="text-h6">{event.title}</div>
      <div className="text-body-md">{event.description}</div>
      {event.note && (
        <div className="text-body-md text-neutral-6">{event.note}</div>
      )}
    </div>
    {isDivider && <hr className="mt-6 border-neutral-2 lg:hidden" />}
  </div>
);

const DetailCard: FC<IScheduleDetail> = ({ phase, type, timeline, event }) => {
  const renderEvent = () => {
    if (Array.isArray(event)) {
      return (
        <div className="flex flex-wrap justify-center gap-5 lg:justify-start lg:gap-9">
          {event.map((e, index) => (
            <DetailContent
              key={`${e.title}-${index.toString()}`}
              event={e}
              phase={phase}
              isDivider={index + 1 !== event.length}
            />
          ))}
        </div>
      );
    } else {
      return <DetailContent phase={phase} event={event} />;
    }
  };

  return (
    <div className="flex flex-col items-stretch rounded-3 md:flex-row">
      <div className={twMerge(detailCard.title({ type, phase }))}>
        <div className="text-h5">{timeline.title}</div>
        <div className="text-body-md">{timeline.description}</div>
      </div>
      <div className={twMerge(detailCard.event({ type, phase }))}>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {renderEvent()}
          {phase === SchedulePhase.ONGOING && <ActiveIcon />}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
