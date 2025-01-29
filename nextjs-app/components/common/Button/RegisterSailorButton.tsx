import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface IRegisterSailorButtonProps {
  className?: string;
  disabled?: boolean;
}

const RegisterSailorButton: FC<IRegisterSailorButtonProps> = ({
  className,
  disabled = false,
}) => (
  <Button
    variant="outline"
    color="blue"
    paddingSize="with-icon"
    className={twMerge(className)}
    disabled={disabled}
  >
    <Link
      href="/"
      className="w-[230px] flex justify-start items-center space-x-3"
    >
      <div
        className={twMerge(
          "relative size-10 rounded-circle overflow-hidden",
          disabled ? "bg-neutral-5" : "bg-blue-8"
        )}
      >
        <Image
          fill
          sizes="48px"
          src="/images/icon-sailor.png"
          alt="icon-navigator"
          className="w-full h-full p-3 object-cover"
        />
      </div>
      <div className="text-subtitle-md">馬上報名水手 (導生)</div>
    </Link>
  </Button>
);

export default RegisterSailorButton;
