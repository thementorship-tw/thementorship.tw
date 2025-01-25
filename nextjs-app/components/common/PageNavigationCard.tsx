import { FC } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button/Button";

interface IPageNavigationCardProps {
  imageSrc: string;
  enTitle: string;
  zhTitle: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const PageNavigationCard: FC<IPageNavigationCardProps> = ({
  imageSrc,
  enTitle,
  zhTitle,
  buttonText,
  buttonLink,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "px-7 py-8 md:py-[44px] bg-white rounded-3 flex items-center",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={enTitle}
        width={80}
        height={80}
        className="w-[80px] h-[80px] md:w-[64px] md:h-[64px]"
      />
      <div className="ml-7 md:ml-5 flex-1 xl:flex xl:justify-between xl:items-center">
        <div>
          <h3 className="text-h3-title text-yellow-6 font-eb-garamond">
            {enTitle}
          </h3>
          <p className="text-subtitle-md">{zhTitle}</p>
        </div>
        <Link href={buttonLink}>
          <Button className="mt-4 xl:mt-0 px-7">{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNavigationCard;
