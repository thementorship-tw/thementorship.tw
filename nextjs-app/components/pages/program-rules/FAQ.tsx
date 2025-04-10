import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import FAQItem from "@/components/common/FAQItem";
import { FAQ as FAQData } from "@/constants/pages/faq";

const FAQ_LIST = [...FAQData.registration, ...FAQData.monthlyMeeting];

const FAQ = () => {
  return (
    <section className="container bg-white px-5 py-[72px] md:px-10 md:py-[120px]">
      <SectionTitle title="常見問答" serial="08" variant="light" />
      <div className="flex flex-col gap-5 pt-[36px]">
        {FAQ_LIST.map(({ question, answer }) => (
          <FAQItem key={question} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
