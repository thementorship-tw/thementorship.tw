import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="px-5 md:px-10  py-[72px] md:py-[120px] bg-blue-8">
      <div className="mx-auto text-center space-y-11">
        <div className="flex flex-col items-center space-y-7">
          <div className="space-y-3 text-h1 text-white">
            <div>曼陀號領航計劃</div>
            <div>The MentorShip Program</div>
          </div>
          <Image
            src="/images/program-logo-without-border.png"
            alt="program-logo"
            width={120}
            height={120}
          />
          <div className="max-w-[684px] text-subtitle-lg text-white">
            「曼陀號領航計劃」源自英文單字「Mentorship」，象徵我們共同乘坐一艘船，
            在職涯這片茫茫大海中，成為彼此良師益友，航向更理想的未來。
            <br />
            我們致力打造水平與垂直的交流互動，提供橫跨職能、縱貫經驗的參加者跨出舒適圈的機會，
            激盪職涯、甚至人生的不同可能性。
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
