import { FC } from "react";
import Image from "next/image";

interface MarqueeTitleProps {
  zhTitle: string;
  enTitle: string;
}

/**
 * Determines the number of times to repeat the marquee text based on text length
 * @param text The text to be displayed
 * @returns {number} Number of repetitions
 * - text length >= 20 chars: repeat 4 times
 * - text length >= 8 chars: repeat 8 times
 * - text length < 8 chars:  repeat 15 times
 */
const getRepeatCount = (text: string) => {
  if (text.length >= 20) return 4;
  if (text.length >= 8) return 8;
  return 15;
};

const MarqueeTitle: FC<MarqueeTitleProps> = ({ zhTitle, enTitle }) => {
  const repeatedArray = Array.from(
    { length: getRepeatCount(enTitle) },
    (_, index) => index
  );

  return (
    <section className="relative overflow-hidden py-[64px] md:py-[112px]">
      <div className="absolute inset-0 w-full overflow-hidden md:top-5">
        <div className="flex">
          <div className="flex shrink-0 animate-marquee-first-layer items-center">
            {repeatedArray.map((_, index) => (
              <span
                key={`first-${index.toString()}`}
                className="mx-4 inline-block font-eb-garamond text-[64px] text-yellow-1 md:text-[96px]"
              >
                {enTitle}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee-second-layer items-center [animation-delay:-90s]">
            {repeatedArray.map((_, index) => (
              <span
                key={`second-${index.toString()}`}
                className="mx-4 inline-block font-eb-garamond text-[64px] text-yellow-1 md:text-[96px]"
              >
                {enTitle}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center px-5 text-center">
        <h2 className="mb-2 text-h5 text-yellow-6 md:mb-3 md:text-h4">
          {zhTitle}
        </h2>
        <h3 className="mb-8 font-eb-garamond text-h1-title text-blue-8">
          {enTitle}
        </h3>
        <Image
          src="/images/title-symbol-line.png"
          alt="title-symbol-line"
          width={57}
          height={5}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default MarqueeTitle;
