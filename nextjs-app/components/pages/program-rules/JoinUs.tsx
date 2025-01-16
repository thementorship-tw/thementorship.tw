import SectionTitle from "@/components/pages/program-rules/SectionTitle";

const JoinUs = () => {
  return (
    <section className="bg-white px-5 py-[72px] md:px-10 md:py-[120px]">
      <SectionTitle
        title="邀請這樣的你加入"
        description={
          "如果你符合以下特質，我們熱切邀請你加入曼陀號，因為你一定會在這裡有所成長！"
        }
        serial="02"
        variant="light"
      />
    </section>
  );
};

export default JoinUs;
