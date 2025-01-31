import Image from "next/image";
import { FC } from "react";

export interface IGroupLabel {
  imageUrl: string;
  zhGroupName: string;
  enGroupName: string;
}

const GroupLabel: FC<IGroupLabel> = ({
  imageUrl,
  zhGroupName,
  enGroupName,
}) => (
  <div className="flex h-[96px] w-full items-stretch rounded-3 border-2 border-yellow-6 bg-blue-8">
    <div className="flex w-[92px] shrink-0 items-center justify-center rounded-br-circle rounded-tr-circle bg-yellow-6">
      <Image
        src={imageUrl}
        alt={`group-${enGroupName}`}
        width={56}
        height={56}
        className="h-[56px] w-[56px] object-contain"
      />
    </div>
    <div className="flex flex-1 flex-col justify-center px-5 text-white">
      <h2 className="mb-1 text-h6">{zhGroupName}</h2>
      <h3 className="text-subtitle-md">{enGroupName}</h3>
    </div>
  </div>
);

export default GroupLabel;
