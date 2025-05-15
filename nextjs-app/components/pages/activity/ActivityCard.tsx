import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { default as LecturerIcon } from "@/public/images/icon-user.svg";
import { default as LocationIcon } from "@/public/images/icon-lighthouse.svg";
import { ActivityInfo } from "@/types/activity";
import { getActivityStatus } from "@/utils/activity";
import Button from "../../common/Button/Button";
import HashTag from "../../common/HashTag";
import CardTag from "./CardTag";

const ActivityCard: FC<ActivityInfo> = ({
  time,
  title,
  lecturer,
  location,
  hashTags,
  imageSrc: imageSrcProp,
  register,
}) => {
  const imageSrc = imageSrcProp ?? "/images/activity-placeholder.png";

  const activityStatus = getActivityStatus(register.start, register.end);

  const renderButton = () => {
    if (!register.href) return null;

    const button = (
      <Button
        className="w-full justify-center"
        disabled={activityStatus !== "registrationOpen"}
      >
        馬上報名
      </Button>
    );

    if (activityStatus !== "registrationOpen") return button;

    return (
      <Link href={register.href} target="_blank">
        {button}
      </Link>
    );
  };

  return (
    <div className="col-span-1 p-6 flex flex-col gap-y-5 rounded-3 justify-between bg-blue-1">
      <div>
        <div className="relative mb-6 rounded-3 w-full h-[183px] overflow-hidden">
          <Image
            fill
            src={imageSrc}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute -bottom-px -right-px border-t-[8px] border-l-[8px] border-neutral-1 bg-neutral-1 rounded-tl-5">
            <CardTag status={activityStatus} />
          </div>
        </div>
        <p className="text-body-md text-neutral-6 mb-3">{time}</p>
        <h6 className="text-h6 text-neutral-10 mb-5">{title}</h6>
        <div className="mb-1 flex items-center gap-2">
          <LecturerIcon className="size-5 shrink-0" />
          <p className="text-subtitle-md text-neutral-8">{lecturer}</p>
        </div>
        <div className="mb-3 flex items-center gap-2">
          <LocationIcon className="size-5 shrink-0" />
          <p className="text-subtitle-md text-neutral-8">{location}</p>
        </div>
        <div className="flex flex-wrap gap-3 items-center mb-5">
          {hashTags.map((tag) => (
            <HashTag key={`${title}-${tag}`}>{tag}</HashTag>
          ))}
        </div>
      </div>
      {renderButton()}
    </div>
  );
};

export default ActivityCard;
