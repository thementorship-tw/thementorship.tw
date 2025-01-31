import Image from "next/image";
import { twMerge } from "tailwind-merge";
import RegisterNavigatorButton from "@/components/common/Button/RegisterNavigatorButton";
import RegisterSailorButton from "@/components/common/Button/RegisterSailorButton";
import CountdownTimer from "@/components/common/CountdownTimer";

const Banner = () => (
  <div
    className={twMerge(
      "relative pt-11",
      "h-[calc(100vh-80px)] w-full md:h-[calc(100vh-88px)] lg:h-[calc(100vh-94px)] lg:min-h-[780px]"
    )}
  >
    {/** Text Area */}
    <div className="flex justify-center lg:justify-start">
      <div className="flex flex-col items-center lg:ml-[144px] lg:items-start">
        <div className="mb-4 text-center text-h1 text-neutral-10 lg:text-start">
          <div>在職涯地圖上</div>
          <div>點亮自己的航線</div>
        </div>
        <div>
          <CountdownTimer />
        </div>
        <div className="mt-7 flex w-fit flex-col justify-center gap-4">
          <RegisterSailorButton disabled />
          <RegisterNavigatorButton disabled />
        </div>
      </div>
    </div>
    {/** Animation elements for desktop */}
    <div className="absolute bottom-[-15px] -z-10 w-full overflow-hidden">
      <div className="relative h-[136px] w-[calc(100vw+40px)]">
        <Image
          src="/images/index-banner/wave-1.png"
          alt="wave"
          fill
          className={twMerge(
            "hidden lg:block",
            "h-full w-full object-cover object-top",
            "motion-translate-x-loop-[-20px] motion-duration-1000 motion-ease-in-out"
          )}
        />
      </div>
    </div>
    <div className="absolute bottom-[-5px] -z-20 w-full overflow-hidden">
      <div className="relative h-[136px] w-[calc(100vw+60px)]">
        <Image
          src="/images/index-banner/wave-2.png"
          alt="wave"
          fill
          className={twMerge(
            "hidden lg:block",
            "h-full w-full object-cover object-top",
            "motion-translate-x-loop-[-40px] motion-duration-1500 motion-ease-in-out"
          )}
        />
      </div>
    </div>
    <div className="absolute bottom-[5px] -z-30 w-full overflow-hidden">
      <div className="relative h-[136px] w-[calc(100vw+60px)]">
        <Image
          src="/images/index-banner/wave-3.png"
          alt="wave"
          fill
          className={twMerge(
            "hidden lg:block",
            "h-full w-full object-cover object-top",
            "motion-translate-x-loop-[-60px] motion-duration-2000 motion-ease-in-out"
          )}
        />
      </div>
    </div>
    <div
      className={twMerge(
        "hidden lg:block",
        "absolute bottom-8 right-0 -z-30",
        "h-[calc(60vw/1003*614)] w-[60vw]"
      )}
    >
      <Image
        src="/images/index-banner/boat.png"
        alt="boat"
        fill
        sizes="auto"
        className={twMerge(
          "hidden translate-y-[-50px] lg:block",
          "h-full w-full object-contain object-right-bottom",
          "motion-translate-y-loop-[8px] motion-duration-[3000ms] motion-ease-in-out"
        )}
      />
    </div>
    {/** Background Image */}
    <Image
      src="/images/index-banner/background-lg.png"
      alt="background-image"
      fill
      priority
      sizes="auto"
      className={twMerge(
        "hidden lg:block",
        "absolute -z-40 h-full w-full object-cover object-[left_90%]"
      )}
    />
    <Image
      src="/images/index-banner/background-md.png"
      alt="background-image"
      fill
      priority
      sizes="auto"
      className={twMerge(
        "hidden md:block lg:hidden",
        "absolute -z-40 h-full w-full object-cover object-left-bottom"
      )}
    />
    <Image
      src="/images/index-banner/background-sm.png"
      alt="background-image"
      fill
      priority
      sizes="auto"
      className={twMerge(
        "md:hidden",
        "absolute -z-40 h-full w-full object-cover object-left-bottom"
      )}
    />
  </div>
);

export default Banner;
