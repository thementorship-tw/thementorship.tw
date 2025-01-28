import Image from "next/image";
import MarqueeContainer from "@/components/common/MarqueeContainer";
import { expandArray } from "@/utils";

import Wave from "@/components/common/Wave/Wave";
import type { FC } from "react";

const MARQUEE_IMAGE_LIST = [
  "/images/marquee-image/marquee-image-1.jpg",
  "/images/marquee-image/marquee-image-2.jpg",
  "/images/marquee-image/marquee-image-3.jpg",
];

const MarqueeImage: FC = () => {
  const imageList = expandArray(MARQUEE_IMAGE_LIST);

  return (
    <div className="bg-white py-[120px] relative">
      <Wave color="white" />
      <div className="container text-center">
        <h2 className="text-h2 text-blue-8">第七屆引水人們想傳達的話</h2>

        <p className="text-subtitle-lg text-neutral-8 mt-7">
          我們求新求變，不斷打磨
          <br />
          只為打造最值得投入的職涯交流旅程
          <br />
          讓每位參加者收穫想要的成長、支持與人脈
        </p>
      </div>

      <div className="mt-11">
        <MarqueeContainer>
          {imageList.map((image, index) => (
            <div
              key={`${image}-${index.toString()}`}
              className="relative w-[266.66px] aspect-[266.66/200] rounded-3 overflow-hidden mr-7 sm:w-[533.33px] lg:w-[666.66px]"
            >
              <Image src={image} alt="marquee-image" fill sizes="100vw" />
            </div>
          ))}
        </MarqueeContainer>
      </div>
    </div>
  );
};

export default MarqueeImage;
