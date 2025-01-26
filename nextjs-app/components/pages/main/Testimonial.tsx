import ParticipantTestimonials from "@/components/common/ParticipantTestimonials";
import SectionTitle from "./SectionTitle";

const Testimonial = () => {
  return (
    <section className="py-[72px] md:py-[120px]">
      <SectionTitle
        className="mb-11"
        title="參加者心得"
        subTitle="Testimonial"
      />

      <ParticipantTestimonials />
    </section>
  );
};

export default Testimonial;
