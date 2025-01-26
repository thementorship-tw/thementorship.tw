import { IReview } from "@/types/review";
import { REVIEW_LIST } from "@/constants/review-list";
import { expandArray } from "@/utils/marquee";
import { splitArray } from "@/utils/marquee";
import MarqueeContainer from "./MarqueeContainer";
import ReviewCard from "./ReviewCard";
import type { FC } from "react";

const ParticipantTestimonials: FC = () => {
  const { firstRow, secondRow } = splitArray(REVIEW_LIST);
  const repeatedFirstRow = expandArray(firstRow);
  const repeatedSecondRow = expandArray(secondRow);

  return (
    <div className="space-y-4 md:space-y-7">
      <MarqueeContainer>
        {repeatedFirstRow.map((review: IReview, index) => (
          <ReviewCard
            key={`${review.name}-${review.team}${review.role}-${index.toString()}`}
            imageSrc={review.imageSrc}
            name={review.name}
            team={review.team}
            role={review.role}
            review={review.review}
          />
        ))}
      </MarqueeContainer>

      <MarqueeContainer direction="to-right">
        {repeatedSecondRow.map((review: IReview, index) => (
          <ReviewCard
            key={`${review.name}-${review.team}${review.role}-${index.toString()}}`}
            imageSrc={review.imageSrc}
            name={review.name}
            team={review.team}
            role={review.role}
            review={review.review}
          />
        ))}
      </MarqueeContainer>
    </div>
  );
};

export default ParticipantTestimonials;
