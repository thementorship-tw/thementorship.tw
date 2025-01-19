import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";

const WhatWeDo = () => {
  return (
    <section className="px-5 md:px-10  py-[72px] md:py-[120px]">
      <div className="mx-auto text-center space-y-11">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-h4 font-semibold text-yellow-6">
              曼陀號領航計劃
            </h2>
            <h3 className="text-h1-title font-eb-garamond text-blue-8">
              The MentorShip Program
            </h3>
          </div>
          <Image
            src="/images/title-symbol-line.png"
            alt="title-symbol-line"
            width={57}
            height={5}
            className="mx-auto mb-9"
          />
        </div>
        <div className="flex flex-col items-center space-y-7">
          <Image
            src="/images/program-logo.png"
            alt="program-logo"
            width={120}
            height={120}
          />
          <div className="max-w-[684px] font-['PingFang_TC'] text-subtitle-lg text-neutral-10">
            「曼陀號領航計畫」源自英文單字「Mentorship」，象徵我們共同乘坐一艘船，在職涯這片茫茫大海中，彼此交流朝理想的航道前進。
            <br />
            我們致力打造水平與垂直的交流互動，提供同職能 / 跨職能、經驗豐富 /
            初出茅廬的參加者跨出舒適圈的機會，激盪職涯、甚至人生的不同可能性。
          </div>
          <Button variant="filled" color="blue">
            <Link href="/about/philosophy">了解曼陀號使命願景</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
