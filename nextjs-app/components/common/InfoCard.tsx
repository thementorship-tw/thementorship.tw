import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import Button, {
  ButtonVariant,
  ButtonColor,
  ButtonPaddingSize,
} from "@/components/common/Button/Button";

const infoCardVariants = cva("rounded-3 relative h-full flex flex-col", {
  variants: {
    background: {
      white: "bg-white",
      navy: "bg-blue-1",
    },
    border: {
      none: "border-none",
      bordered: "border border-solid border-[1px] border-yellow-6",
    },
  },
  defaultVariants: {
    background: "white",
    border: "none",
  },
});

interface IInfoCardProps extends VariantProps<typeof infoCardVariants> {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  buttonClassName?: string;
  buttonVariant?: ButtonVariant;
  buttonColor?: ButtonColor;
  buttonPaddingSize?: ButtonPaddingSize;
  serial?: string;
  externalLink?: string;
}

const InfoCard = ({
  background,
  border,
  title,
  description,
  imageUrl,
  buttonText,
  serial,
  externalLink,
  buttonClassName,
  buttonVariant = "filled",
  buttonColor = "blue",
  buttonPaddingSize = "default",
}: IInfoCardProps) => {
  return (
    <div className={infoCardVariants({ background, border })}>
      {serial && (
        <div className="absolute text-h5 -top-5 -left-[13px] bg-yellow-6 text-white w-[52px] h-[52px] flex items-center justify-center rounded-2">
          {serial}
        </div>
      )}
      <div className="flex flex-col items-center h-full text-center py-8 px-7">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-cover mb-6"
          />
        )}
        <h3 className="text-h5 text-yellow-6 mb-3 whitespace-pre-line">
          {title}
        </h3>
        <p className="text-body-lg text-neutral-10 flex-1 whitespace-pre-line">
          {description}
        </p>
        {buttonText &&
          (externalLink ? (
            <Link href={externalLink} target="_blank" className="w-full">
              <Button
                className={twMerge(
                  "mt-6 w-full md:w-auto justify-center",
                  buttonClassName
                )}
                variant={buttonVariant}
                color={buttonColor}
                paddingSize={buttonPaddingSize}
                // TODO: enable when registration is open
                disabled
              >
                {buttonText}
              </Button>
            </Link>
          ) : (
            <Button
              className={twMerge(
                "mt-6 w-full md:w-auto justify-center",
                buttonClassName
              )}
              variant={buttonVariant}
              color={buttonColor}
              paddingSize={buttonPaddingSize}
              // TODO: enable when registration is open
              disabled
            >
              {buttonText}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default InfoCard;
