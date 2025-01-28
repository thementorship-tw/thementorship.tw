import ParticipantTestimonials from "@/components/common/ParticipantTestimonials";
import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import Wave from "@/components/common/Wave";

const PositiveFeedbacks = () => {
  return (
    <section className="w-full bg-neutral-1 relative py-[72px] md:py-[120px]">
      <Wave color="neutral" />

      <SectionTitle
        className="mb-11"
        title="學員的好評回饋"
        description="這些學員走過的路，或許就是你夢寐以求的改變契機"
        serial="07"
        variant="light"
      />

      <ParticipantTestimonials />
    </section>
  );
};

export default PositiveFeedbacks;
