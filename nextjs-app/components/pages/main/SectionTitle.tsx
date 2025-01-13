import type { FC } from "react";
import Image from "next/image";

interface ISectionTitleProps {
  className?: string;
  title: string;
  subTitle: string;
  variant?: "light" | "dark";
}

const SectionTitle: FC<ISectionTitleProps> = ({
  className = "",
  title,
  subTitle,
  variant = "light",
}) => {
  return (
    <div className={`flex flex-col gap-6 md:gap-8 ${className}`}>
      <div className="text-center flex flex-col gap-2 md:gap-3">
        <h2
          className={`text-h5 md:text-h4 ${
            variant === "dark" ? "text-white" : "text-yellow-6"
          }`}
        >
          {title}
        </h2>
        <h3
          className={`text-h3-title font-eb-garamond md:text-h1-title ${variant === "dark" ? "text-white" : "text-blue-8"}`}
        >
          {subTitle}
        </h3>
      </div>

      <Image
        src="/images/title-symbol-line.png"
        alt="title-symbol-line"
        width={57}
        height={5}
        className="mx-auto"
      />
    </div>
  );
};

export default SectionTitle;
