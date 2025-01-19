import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import { IScheduleRole } from "@/types/schedule";

const RoleCard: FC<IScheduleRole> = ({
  imageSrc,
  imageAlt,
  enTitle,
  zhTitle,
  descList,
  button,
}) => (
  <div className="w-full flex flex-col items-center bg-white px-7 py-8 rounded-3 gap-y-6">
    <Image src={imageSrc} alt={imageAlt} width={80} height={80} />
    <div className="">
      <div className="text-center text-h5 text-yellow-6 mb-3">
        <div>{enTitle}</div>
        <div>{zhTitle}</div>
      </div>
      <div className="grid place-content-center">
        <ul className="text-center list-inside list-disc">
          {descList.map((desc: string) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
    <Button variant={button.variant} color={button.color}>
      <Link href={button.href}> {button.text}</Link>
    </Button>
  </div>
);

export default RoleCard;
