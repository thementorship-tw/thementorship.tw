import Image from "next/image";
import { FC } from "react";
import { IReview } from "@/types/review";
import { default as ReviewStar } from "@/public/images/review-star.svg";

const ReviewCard: FC<IReview> = ({ imageSrc, name, team, role, review }) => (
  <div className="mx-[6px] md:mx-4 p-6 flex flex-col items-start space-y-3 border-2 border-neutral-2 rounded-3">
    <div className="flex gap-x-4">
      <div className="relative size-[42px] rounded-2 overflow-hidden border-yellow-2">
        <Image
          src={imageSrc}
          alt="profile"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start space-y-1">
        <div className="text-h6 text-neutral-10 gap-x-3">{name}</div>
        <div className="text-left text-body-md text-neutral-6">{`${team} ${role}`}</div>
        <div className="flex">
          <ReviewStar />
          <ReviewStar />
          <ReviewStar />
          <ReviewStar />
          <ReviewStar />
        </div>
      </div>
    </div>
    <div className="w-[225px] md:w-[216px] lg:w-[400px] text-left text-body-md text-neutral-10">
      {review}
    </div>
  </div>
);

export default ReviewCard;
