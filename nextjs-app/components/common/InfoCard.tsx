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
        <div className="absolute -left-[13px] -top-5 flex h-[52px] w-[52px] items-center justify-center rounded-2 bg-yellow-6 text-h5 text-white">
          {serial}
        </div>
      )}
      <div className="flex h-full flex-col items-center px-7 py-8 text-center">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={80}
            height={80}
            className="mb-6 h-[80px] w-[80px] object-cover"
          />
        )}
        <h3 className="mb-3 whitespace-pre-line text-h5 text-yellow-6">
          {title}
        </h3>
        <p className="flex-1 whitespace-pre-line text-body-lg text-neutral-10">
          {description}
        </p>
        {buttonText &&
          (externalLink ? (
            <Link href={externalLink} target="_blank" className="w-full">
              <Button
                className={twMerge(
                  "mt-6 w-full justify-center md:w-auto",
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
                "mt-6 w-full justify-center md:w-auto",
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
