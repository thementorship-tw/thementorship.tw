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
        "flex items-center rounded-3 bg-white px-7 py-8 md:py-[44px]",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={enTitle}
        width={80}
        height={80}
        className="h-[80px] w-[80px] md:h-[64px] md:w-[64px]"
      />
      <div className="ml-7 flex-1 flex-wrap gap-4 md:ml-5 md:flex md:items-center md:justify-between">
        <div>
          <h3 className="font-eb-garamond text-h3-title text-yellow-6">
            {enTitle}
          </h3>
          <p className="text-subtitle-md">{zhTitle}</p>
        </div>
        <Link href={buttonLink}>
          <Button className="mt-4 px-7 md:mt-0">{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNavigationCard;
