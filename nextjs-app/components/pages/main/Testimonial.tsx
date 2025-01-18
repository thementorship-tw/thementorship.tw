import Image from "next/image";
import ReviewCard from "@/components/common/ReviewCard";
import MarqueeContainer from "@/components/common/MarqueeContainer";
import { REVIEW_LIST } from "@/constants/review-list";
import { splitArray, expandArray } from "@/utils/marquee";
import { IReview } from "@/types/review";

const Testimonial = () => {
  const { firstRow, secondRow } = splitArray(REVIEW_LIST);
  const repeatedFirstRow = expandArray(firstRow);
  const repeatedSecondRow = expandArray(secondRow);
  return (
    <section className="py-[72px] md:py-[120px]">
      <div className="mx-auto text-center space-y-11">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-h4 font-semibold text-yellow-6">參加者心得</h2>
            <h3 className="text-h1-title font-eb-garamond text-blue-8">
              Testimonial
            </h3>
          </div>
          <Image
            src="/images/title-symbol-line.png"
            alt="title-symbol-line"
            width={57}
            height={5}
            className="mx-auto mb-9"
          />
        </div>
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
      </div>
    </section>
  );
};

export default Testimonial;
