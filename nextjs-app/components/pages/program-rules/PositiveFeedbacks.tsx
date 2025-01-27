import ParticipantTestimonials from "@/components/common/ParticipantTestimonials";
import SectionTitle from "@/components/pages/program-rules/SectionTitle";

const PositiveFeedbacks = () => {
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

      <ParticipantTestimonials />
    </section>
  );
};

export default PositiveFeedbacks;
