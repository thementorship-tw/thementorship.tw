import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button/Button";
import { WHAT_WE_DO } from "@/constants/what-we-do";

const WhatWeDoHomepage = () => (
  <section className="px-5 md:px-10  py-[72px] md:py-[120px]">
    <div className="mx-auto text-center space-y-11">
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-h4 font-semibold text-yellow-6">
            {WHAT_WE_DO.zhTitle}
          </h2>
          <h3 className="text-h1-title font-eb-garamond text-blue-8">
            {WHAT_WE_DO.enTitle}
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
          src={WHAT_WE_DO.logo.src}
          alt={WHAT_WE_DO.logo.alt}
          width={120}
          height={120}
        />
        <div className="max-w-[684px] text-subtitle-lg text-neutral-10 whitespace-break-spaces">
          {WHAT_WE_DO.description}
        </div>
        <Button variant="filled" color="blue">
          <Link href="/about/philosophy">{WHAT_WE_DO.buttonText}</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default WhatWeDoHomepage;
