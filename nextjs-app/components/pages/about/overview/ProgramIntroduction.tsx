import Wave from "@/components/common/Wave";

const ProgramIntroduction = () => {
  return (
    <section className="px-5 md:px-10 py-[72px] md:py-[120px] bg-blue-1 relative">
      <Wave color="blue1" />
      <div className="mx-auto text-center flex flex-col items-center space-y-7">
        <div className="text-h2 text-blue-8">曼陀號領航計劃介紹</div>
        <div className="max-w-[684px] text-subtitle-lg text-neutral-10">
          本計劃所有籌辦人員皆為志工，由引水人
          (主辦團隊)策劃，每年舉辦一次，為期約半年，
          邀請各領域知名專家擔任小組船長 (導師)，分組舉行實體月會。
          透過導師的專業分享與經驗傳承，幫助水手與航海士 (學員) 縮短摸索的成本，
          突破職涯上的瓶頸與挑戰。
          <br />
          曼陀號學員們來自各個產業與職能，帶著各自的職涯目標與碰到的問題，透過計劃分享與串聯，幫助彼此互相學習成長。
        </div>
      </div>
    </section>
  );
};

export default ProgramIntroduction;
