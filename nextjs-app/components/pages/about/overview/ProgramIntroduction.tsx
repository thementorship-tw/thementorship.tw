import Wave from "@/components/common/Wave";

const ProgramIntroduction = () => {
  return (
    <section className="relative bg-blue-1 px-5 py-[72px] md:px-10 md:py-[120px]">
      <Wave color="blue1" />
      <div className="mx-auto flex flex-col items-center space-y-7 text-center">
        <div className="text-h2 text-blue-8">曼陀號領航計劃介紹</div>
        <div className="max-w-[684px] text-subtitle-lg text-neutral-10">
          本計劃所有籌辦人員皆以志工形式參與，每年舉辦一次，為期約半年，
          邀請各領域知名專家擔任小組導師 (Mentor)，分組舉行實體聚會。
          透過導師的專業分享與經驗傳承，幫助學員 (Mentee) 縮短摸索的成本，
          突破職涯上的瓶頸與挑戰。
          曼陀號學員們來自各個產業與職能，帶著各自的職涯目標與碰到的問題，
          透過計劃分享與串聯，幫助彼此互相學習成長。
        </div>
      </div>
    </section>
  );
};

export default ProgramIntroduction;
