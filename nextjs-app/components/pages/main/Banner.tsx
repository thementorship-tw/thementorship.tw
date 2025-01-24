import Image from "next/image";
import { twMerge } from "tailwind-merge";
import RegisterNavigatorButton from "@/components/common/Button/RegisterNavigatorButton";
import RegisterSailorButton from "@/components/common/Button/RegisterSailorButton";
import CountdownTimer from "@/components/common/CountdownTimer";

const Banner = () => {
  return (
    <div
      className={twMerge(
        "relative pt-11",
        "w-full h-[calc(100vh-80px)] md:h-[calc(100vh-88px)] lg:h-[calc(100vh-94px)]"
      )}
    >
      {/** Text Area */}
      <div className="flex justify-center lg:justify-start">
        <div className="lg:ml-[144px] flex flex-col items-center lg:items-start">
          <div className="text-center lg:text-start text-h1 text-neutral-10 mb-4">
            <div>在職涯地圖上</div>
            <div>點亮自己的航線</div>
          </div>
          <div>
            <CountdownTimer />
          </div>
          <div className="w-fit flex flex-col justify-center gap-4 mt-7">
            <RegisterSailorButton />
            <RegisterNavigatorButton />
          </div>
        </div>
      </div>
      {/** Animation elements for desktop */}
      <div
        className={twMerge(
          "hidden lg:block",
          "absolute bottom-8 right-0 -z-30",
          "w-[calc(70vh/614*1003)] h-[70vh]"
        )}
      >
        <Image
          src="/images/index-banner/boat.png"
          alt="boat"
          fill
          className={twMerge(
            "hidden lg:block",
            "w-full h-full object-contain object-right-bottom",
            "motion-translate-y-loop-[15px] motion-duration-2000"
          )}
        />
      </div>
      <div className="absolute w-full bottom-0 overflow-hidden -z-20">
        <div className="relative w-[calc(100vw+40px)] h-[136px]">
          <Image
            src="/images/index-banner/wave-1.png"
            alt="wave"
            fill
            className={twMerge(
              "hidden lg:block",
              "w-full h-full object-cover",
              "motion-translate-x-loop-[-25px] motion-duration-1000"
            )}
          />
        </div>
      </div>
      <div className="absolute w-full bottom-[5px] overflow-hidden -z-30">
        <div className="relative w-[calc(100vw+60px)] h-[136px]">
          <Image
            src="/images/index-banner/wave-2.png"
            alt="wave"
            fill
            className={twMerge(
              "hidden lg:block",
              "w-full h-full object-cover",
              "motion-translate-x-loop-[-50px] motion-duration-2000"
            )}
          />
        </div>
      </div>
      {/** Background Image */}
      <Image
        src="/images/index-banner/background-lg.png"
        alt="background-image"
        fill
        className={twMerge(
          "hidden lg:block",
          "absolute w-full h-full object-cover object-left-bottom -z-40"
        )}
      />
      <Image
        src="/images/index-banner/background-md.png"
        alt="background-image"
        fill
        className={twMerge(
          "hidden md:block lg:hidden",
          "absolute w-full h-full object-cover object-left-bottom -z-40"
        )}
      />
      <Image
        src="/images/index-banner/background-sm.png"
        alt="background-image"
        fill
        className={twMerge(
          "md:hidden",
          "absolute w-full h-full object-cover object-left-bottom -z-40"
        )}
      />
    </div>
  );
};

export default Banner;
