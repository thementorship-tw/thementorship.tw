import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface IRegisterNavigatorButtonProps {
  className?: string;
  disabled?: boolean;
}

const RegisterNavigatorButton: FC<IRegisterNavigatorButtonProps> = ({
  className,
  disabled = false,
}) => (
  <Button
    variant="outline"
    color="golden"
    paddingSize="with-icon"
    className={twMerge(className)}
    disabled={disabled}
  >
    <Link
      href="/"
      className="flex w-[230px] items-center justify-start space-x-3"
    >
      <div
        className={twMerge(
          "relative size-10 overflow-hidden rounded-circle",
          disabled ? "bg-neutral-5" : "bg-yellow-6"
        )}
      >
        <Image
          fill
          sizes="48px"
          src="/images/icon-navigator.png"
          alt="icon-navigator"
          className="h-full w-full object-cover p-3"
        />
      </div>
      <div className="text-subtitle-md">馬上報名航海士 (職場前輩)</div>
    </Link>
  </Button>
);

export default RegisterNavigatorButton;
