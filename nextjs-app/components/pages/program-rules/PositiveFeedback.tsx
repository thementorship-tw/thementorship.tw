import MarqueeContainer from "@/components/common/MarqueeContainer";
import ReviewCard from "@/components/common/ReviewCard";
import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import { REVIEW_LIST } from "@/constants/review-list";
import { IReview } from "@/types/review";

const PositiveFeedback = () => {
  return (
    <section className="bg-neutral-1 py-[72px] md:py-[120px]">
      <div className="container px-5 md:px-10 mb-11">
        <SectionTitle
          title="學員的好評回饋"
          description="這些學員走過的路，或許就是你夢寐以求的改變契機"
          serial="07"
          variant="light"
        />
      </div>

      <div className="space-y-4 md:space-y-7">
        <MarqueeContainer>
          {REVIEW_LIST.map((review: IReview, index) => (
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
          {REVIEW_LIST.map((review: IReview, index) => (
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
    </section>
  );
};

export default PositiveFeedback;
