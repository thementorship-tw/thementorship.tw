import Image from "next/image";
import { Team } from "@/types";
import { teamDisplayTextMap } from "@/constants/team-display-text-map";
import type { FC } from "react";

interface IProfileCardProps {
  team: Team;
  name: string;
  title: string;
  subTitle: string[];
  quote: string;
  imageUrl: string;
  hashTags?: string[];
}

const ProfileCard: FC<IProfileCardProps> = ({
  name,
  quote,
  title,
  subTitle,
  imageUrl,
  hashTags = [],
  team,
}) => {
  const hasTags = hashTags.length > 0;
  const { zhGroupName, enGroupName } = teamDisplayTextMap[team];

  return (
    <div className="px-5 py-9 rounded-3 bg-blue-1 flex flex-col gap-7 text-center">
      <div>
        <p className="text-neutral-10 text-h5">{zhGroupName}</p>
        <p className="text-neutral-10 text-subtitle-lg">{enGroupName}</p>
      </div>

      <div className="px-2">
        <div className="w-full h-[330px] rounded-circle relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <p className="text-h5 text-neutral-10">{title}</p>
          <div className="flex flex-col">
            {subTitle.map((sub) => (
              <p
                key={`${name}-${sub}`}
                className="text-subtitle-lg text-neutral-10"
              >
                {sub}
              </p>
            ))}
          </div>
        </div>

        <p className="py-3 border-t-[1px] border-b-[1px] border-yellow-6 text-h3 text-yellow-6">
          {name}
        </p>

        <p className="px-5 py-2 text-subtitle-lg text-yellow-6">{quote}</p>

        {hasTags && (
          <div className="pt-3 flex flex-wrap justify-center items-center gap-3">
            {hashTags.map((tag) => (
              <p
                key={`${name}-${tag}`}
                className="px-4 py-2 rounded-pill bg-blue-2 text-body-sm"
              >
                {"#" + tag}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
