import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const RegisterNavigatorButton = () => (
  <Button variant="outline" color="golden" paddingSize="with-icon">
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
