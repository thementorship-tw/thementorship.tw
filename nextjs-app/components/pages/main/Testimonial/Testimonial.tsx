import Image from "next/image";
import { reviewList } from "./review-list";
import ReviewCard, { ReviewType } from "@/components/common/ReviewCard";

const Testimonial = () => {
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
          <div className="flex gap-4 md:gap-7 overflow-hidden">
            {reviewList.map((review: ReviewType) => (
              <ReviewCard
                key={`${review.name}-${review.team}${review.role}`}
                imageSrc={review.imageSrc}
                name={review.name}
                team={review.team}
                role={review.role}
                review={review.review}
              />
            ))}
          </div>
          <div className="flex gap-4 md:gap-7 overflow-hidden">
            {reviewList.map((review: ReviewType) => (
              <ReviewCard
                key={`${review.name}-${review.team}${review.role}`}
                imageSrc={review.imageSrc}
                name={review.name}
                team={review.team}
                role={review.role}
                review={review.review}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
