import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const RegisterNavigatorButton: FC<{ className: string }> = ({ className }) => (
  <Button
    variant="outline"
    color="golden"
    paddingSize="with-icon"
    className={twMerge(className)}
  >
    <Link
      href="/"
      className="w-[172px] flex justify-start items-center space-x-3"
    >
      <div className="relative size-10 rounded-circle bg-yellow-6 overflow-hidden">
        <Image
          fill
          src="/images/icon-navigator.png"
          alt="icon-navigator"
          className="w-full h-full p-3 object-cover"
        />
      </div>
      <div className="text-subtitle-md">馬上報名航海士</div>
    </Link>
  </Button>
);

export default RegisterNavigatorButton;
