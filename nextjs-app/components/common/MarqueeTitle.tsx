import { FC } from "react";
import Image from "next/image";

interface MarqueeTitleProps {
  zhTitle: string;
  enTitle: string;
}

const MarqueeTitle: FC<MarqueeTitleProps> = ({ zhTitle, enTitle }) => {
  const repeatedArray: number[] = Array.from(
    { length: 20 },
    (_, index) => index
  );

  return (
    <section className="relative overflow-hidden py-[64px] md:py-[112px]">
      <div className="absolute inset-0 w-full overflow-hidden top-2 md:top-4">
        <div className="flex">
          <div className="flex shrink-0 items-center animate-marquee-1">
            {repeatedArray.map((_, index) => (
              <span
                key={`first-${index.toString()}`}
                className="inline-block mx-4 text-[64px] md:text-[96px] font-eb-garamond text-yellow-1"
              >
                {enTitle}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center animate-marquee-2 [animation-delay:-40s]">
            {repeatedArray.map((_, index) => (
              <span
                key={`second-${index.toString()}`}
                className="inline-block mx-4 text-[64px] md:text-[96px] font-eb-garamond text-yellow-1"
              >
                {enTitle}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-h5 md:text-h4 text-yellow-6 mb-2 md:mb-3">
          {zhTitle}
        </h2>
        <h3 className="text-h1-title font-eb-garamond mb-8 text-blue-8">
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
