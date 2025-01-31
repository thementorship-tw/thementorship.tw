import Image from "next/image";
import { FC } from "react";
import { IReview } from "@/types/review";
import { default as ReviewStar } from "@/public/images/review-star.svg";

const ReviewCard: FC<IReview> = ({ imageSrc, name, team, role, review }) => (
  <div className="mx-[6px] flex flex-col items-start space-y-3 rounded-3 border-2 border-neutral-2 bg-white p-6 md:mx-4">
    <div className="flex gap-x-4">
      <div className="relative size-[42px] overflow-hidden rounded-2 border-yellow-2">
        <Image
          src={imageSrc}
          alt="profile"
          fill
          sizes="42px"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start space-y-1">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-3">
          <div className="text-h6 text-neutral-10">{name}</div>
          <div className="text-left text-body-md text-neutral-6">{`${team} ${role}`}</div>
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
    <div className="w-[225px] text-left text-body-md text-neutral-10 md:w-[216px] lg:w-[400px]">
      {review}
    </div>
  </div>
);

export default ReviewCard;
