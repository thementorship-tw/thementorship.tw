import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { FC } from "react";

const RegisterSailorButton: FC<{ className: string }> = ({ className }) => (
  <Button
    variant="outline"
    color="blue"
    paddingSize="with-icon"
    className={className}
  >
    <Link
      href="/"
      className="w-[172px] flex justify-start items-center space-x-3"
    >
      <div className="relative size-10 rounded-circle bg-blue-8 overflow-hidden">
        <Image
          fill
          src="/images/icon-sailor.png"
          alt="icon-navigator"
          className="w-full h-full p-3 object-cover"
        />
      </div>
      <div className="text-subtitle-md">馬上報名水手</div>
    </Link>
  </Button>
);

export default RegisterSailorButton;
