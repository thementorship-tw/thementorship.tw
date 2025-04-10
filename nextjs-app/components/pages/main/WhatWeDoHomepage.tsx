import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button/Button";
import { WHAT_WE_DO } from "@/constants/what-we-do";
import Wave from "@/components/common/Wave";
import Routes from "@/constants/routes";
import SectionTitle from "./SectionTitle";

const WhatWeDoHomepage = () => (
  <section className="relative px-5 md:px-10  py-[72px] md:py-[120px]">
    <Wave color="white" />
    <div className="mx-auto text-center space-y-11">
      <SectionTitle
        className="mb-11"
        title={WHAT_WE_DO.zhTitle}
        subTitle={WHAT_WE_DO.enTitle}
      />
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
          <Link href={Routes.ABOUT.PHILOSOPHY}>{WHAT_WE_DO.buttonText}</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default WhatWeDoHomepage;
