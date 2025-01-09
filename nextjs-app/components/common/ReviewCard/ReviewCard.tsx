import Image from "next/image";
import { default as ReviewStar } from "@/public/images/review-star.svg";
import { FC } from "react";

export interface ReviewType {
  imageSrc: string;
  name: string;
  team: string;
  role: string;
  review: string;
}

interface IReviewCardProps extends ReviewType {
  className?: string;
}

const ReviewCard: FC<IReviewCardProps> = ({
  imageSrc,
  name,
  team,
  role,
  review,
}) => {
  return (
    <div className="p-6 flex flex-col items-start space-y-3 font-['PingFang_TC'] border-2 border-neutral-2 rounded-3">
      <div className="flex space-x-4">
        <div className="relative size-[42px] rounded-2 overflow-hidden border border-yellow-2">
          <Image
            src={imageSrc}
            alt="profile"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start space-y-1">
          <div className=" text-h6 text-neutral-10 gap-x-3">
            {name}
            <span className="ml-3 text-body-md text-neutral-6">
              {`${team} ${role}`}
            </span>
          </div>
          <div className="flex">
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
          </div>
        </div>
      </div>
      <div className="w-[225px] md:w-[216px] h-[120px] lg:w-[400px] lg:h-[60px] text-left text-body-md text-neutral-10 line-clamp-6 lg:line-clamp-3">
        {review}
      </div>
    </div>
  );
};

export default ReviewCard;
