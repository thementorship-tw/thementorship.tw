import ParticipantTestimonials from "@/components/common/ParticipantTestimonials";
import Wave from "@/components/common/Wave";
import SectionTitle from "./SectionTitle";

const Testimonial = () => {
  return (
    <section className="relative py-[72px] md:py-[120px]">
      <Wave color="white" />
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
