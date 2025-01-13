import SectionTitle from "@/components/pages/program-rules/SectionTitle";

const Benefits = () => {
  return (
    <section className="bg-blue-8 px-5 py-[72px] md:px-10 md:py-[120px]">
      <SectionTitle
        title="參加曼陀號，你將會收穫"
        description={
          "我們提供豐富的活動、資源與交流機會，不怕活動太多，只怕你參與不夠"
        }
        serial="01"
        variant="dark"
      />
    </section>
  );
};

export default Benefits;
