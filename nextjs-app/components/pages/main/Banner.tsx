import Image from "next/image";
import { twMerge } from "tailwind-merge";
import RegisterNavigatorButton from "@/components/common/Button/RegisterNavigatorButton";
import RegisterSailorButton from "@/components/common/Button/RegisterSailorButton";
import CountdownTimer from "@/components/common/CountdownTimer";

const Banner = () => (
  <div
    className={twMerge(
      "relative pt-11",
      "w-full h-[calc(100vh-80px)] md:h-[calc(100vh-88px)] lg:h-[calc(100vh-94px)] lg:min-h-[780px]",
      "lg:bg-[#e6f4ff] lg:-z-50"
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
          <RegisterSailorButton disabled />
          <RegisterNavigatorButton disabled />
        </div>
      </div>
    </div>
    {/** Animation elements for desktop */}
    <div className="absolute w-full bottom-[-15px] overflow-hidden -z-10">
      <div className="relative w-[calc(100vw+40px)] h-[136px]">
        <Image
          src="/images/index-banner/wave-1.png"
          alt="wave"
          fill
          className={twMerge(
            "hidden lg:block",
            "w-full h-full object-cover object-top",
            "motion-translate-x-loop-[-20px] motion-duration-1000 motion-ease-in-out"
          )}
        />
      </div>
    </div>
    <div className="absolute w-full bottom-[-5px] overflow-hidden -z-20">
      <div className="relative w-[calc(100vw+60px)] h-[136px]">
        <Image
          src="/images/index-banner/wave-2.png"
          alt="wave"
          fill
          className={twMerge(
            "hidden lg:block",
            "w-full h-full object-cover object-top",
            "motion-translate-x-loop-[-40px] motion-duration-1500 motion-ease-in-out"
          )}
        />
      </div>
    </div>
    <div className="absolute w-full bottom-[5px] overflow-hidden -z-30">
      <div className="relative w-[calc(100vw+60px)] h-[136px]">
        <Image
          src="/images/index-banner/wave-3.png"
          alt="wave"
          fill
          className={twMerge(
            "hidden lg:block",
            "w-full h-full object-cover object-top",
            "motion-translate-x-loop-[-60px] motion-duration-2000 motion-ease-in-out"
          )}
        />
      </div>
    </div>
    <div
      className={twMerge(
        "hidden lg:block",
        "absolute bottom-8 right-0 -z-30",
        "w-[60vw] h-[calc(60vw/1003*614)]"
      )}
    >
      <Image
        src="/images/index-banner/boat.png"
        alt="boat"
        fill
        loading="eager"
        sizes="auto"
        className={twMerge(
          "hidden lg:block translate-y-[-50px]",
          "w-full h-full object-contain object-right-bottom",
          "motion-translate-y-loop-[8px] motion-duration-[3000ms] motion-ease-in-out"
        )}
      />
    </div>
    {/** Background Image */}
    <Image
      src="/images/index-banner/background-lg.jpg"
      alt="background-image"
      fill
      priority
      sizes="auto"
      className={twMerge(
        "hidden lg:block",
        "absolute w-full h-full object-cover object-[left_90%] -z-40"
      )}
    />
    <Image
      src="/images/index-banner/background-md.png"
      alt="background-image"
      fill
      sizes="auto"
      className={twMerge(
        "hidden md:block lg:hidden",
        "absolute w-full h-full object-cover object-left-bottom -z-40"
      )}
    />
    <Image
      src="/images/index-banner/background-sm.png"
      alt="background-image"
      fill
      sizes="auto"
      className={twMerge(
        "md:hidden",
        "absolute w-full h-full object-cover object-left-bottom -z-40"
      )}
    />
  </div>
);

export default Banner;
