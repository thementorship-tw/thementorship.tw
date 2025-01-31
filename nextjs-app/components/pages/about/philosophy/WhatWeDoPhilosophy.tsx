import Image from "next/image";
import { WHAT_WE_DO } from "@/constants/what-we-do";
import Wave from "@/components/common/Wave";

const WhatWeDoPhilosophy = () => (
  <section className="relative w-full bg-blue-8 px-5 py-[72px] md:px-10 md:py-[120px]">
    <Wave color="blue8" />

    <div className="mx-auto space-y-11 text-center">
      <div className="flex flex-col items-center space-y-7">
        <div className="space-y-3 text-h3 text-white md:text-h1">
          <div>{WHAT_WE_DO.zhTitle}</div>
          <div>{WHAT_WE_DO.enTitle}</div>
        </div>
        <Image
          src={WHAT_WE_DO.logo.src}
          alt={WHAT_WE_DO.logo.alt}
          width={120}
          height={120}
        />
        <div className="max-w-[684px] whitespace-break-spaces text-subtitle-lg text-white">
          {WHAT_WE_DO.description}
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoPhilosophy;
