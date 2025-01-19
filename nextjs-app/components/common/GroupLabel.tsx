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
  <div className="flex items-stretch bg-blue-8 rounded-3 w-full h-[96px] border-yellow-6 border-2">
    <div className="w-[92px] flex items-center justify-center bg-yellow-6 rounded-tr-circle rounded-br-circle shrink-0">
      <Image
        src={imageUrl}
        alt={`group-${enGroupName}`}
        width={56}
        height={56}
        className="object-contain w-[56px] h-[56px]"
      />
    </div>
    <div className="flex flex-col justify-center text-white px-5 flex-1">
      <h2 className="text-h6 mb-1">{zhGroupName}</h2>
      <h3 className="text-subtitle-md">{enGroupName}</h3>
    </div>
  </div>
);

export default GroupLabel;
