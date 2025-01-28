import Image from "next/image";
import { WHAT_WE_DO } from "@/constants/what-we-do";
import Wave from "@/components/common/Wave";

const WhatWeDoPhilosophy = () => (
  <section className="px-5 md:px-10 w-full relative py-[72px] md:py-[120px] bg-blue-8">
    <Wave color="blue8" />

    <div className="mx-auto text-center space-y-11">
      <div className="flex flex-col items-center space-y-7">
        <div className="space-y-3 text-h1 text-white">
          <div>{WHAT_WE_DO.zhTitle}</div>
          <div>{WHAT_WE_DO.enTitle}</div>
        </div>
        <Image
          src={WHAT_WE_DO.logo.src}
          alt={WHAT_WE_DO.logo.alt}
          width={120}
          height={120}
        />
        <div className="max-w-[684px] text-subtitle-lg text-white whitespace-break-spaces">
          {WHAT_WE_DO.description}
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeDoPhilosophy;
