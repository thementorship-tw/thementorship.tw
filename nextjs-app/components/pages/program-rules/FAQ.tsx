import SectionTitle from "@/components/pages/program-rules/SectionTitle";
import FAQItem from "@/components/common/FAQItem";

const FAQ_LIST: { question: string; answer: string }[] = [
  {
    question: "如果對想申請的組別沒有相關實務經驗，還能申請嗎?",
    answer:
      "本計劃建議申請者在申請的職能領域具備 1-3 年相關實務經驗 (包含實習時間)，以便能充分參與並從活動中獲益。然而錄取與否仍主要依據您在申請表中的填答內容、您的期待是否與計劃目標相符，以及我們是否能提供符合您需求的資源與建議。我們鼓勵符合條件的申請者根據自身狀況進行綜合評估並提交申請。詳情請參閱報名表中的內容說明。",
  },
  {
    question: "有機會去旁聽別組的月會嗎？ 如果錄取某組還有機會跟別組交流嗎？",
    answer:
      "月會旁聽的安排，將綜合評估月會主題的適合性、場地大小等因素來決定，並尊重船長考量。在不影響月會品質的前提下，我們會盡量提供機會，讓學員能與其他組的夥伴互相學習。月會以外，我們也將籌劃跨職能交流，確保您有機會拓展不同職能的人脈網絡。",
  },
  {
    question: "如果未錄取水手 / 航海士是否會收到通知?",
    answer: "是的，無論是否錄取，我們都會發出通知，感謝您的耐心等候。",
  },
  {
    question: "可以知道未錄取的原因嗎?",
    answer:
      "每組的篩選結果是由引水人和船長共同討論後所決定。我們最重視的是「計劃是否能真正對您有所幫助」，這包括您的期待是否與曼陀號計劃的目標相符，以及這屆船長的經驗和課程內容是否能為您提供實質建議等。感謝您的理解與支持！",
  },
];

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
