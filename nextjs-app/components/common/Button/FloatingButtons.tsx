import RegisterSailorButton from "./RegisterSailorButton";
import RegisterNavigatorButton from "./RegisterNavigatorButton";
import { twMerge } from "tailwind-merge";

const FloatingButtons = () => {
  return (
    <>
      <div
        className={twMerge(
          "fixed bottom-[144px] -right-[160px] inline-flex flex-col space-y-3 z-50",
          "hover:right-0 transition-all duration-300"
        )}
      >
        <RegisterSailorButton
          className={twMerge(
            "hover:bg-blue-8 hover:border-neutral-8",
            "[&>*]:hover:text-white [&>span]:hover:border-white"
          )}
        />
      </div>
      <div
        className={twMerge(
          "fixed bottom-[72px] -right-[160px] inline-flex flex-col space-y-3 z-50",
          "hover:right-0 transition-all duration-300"
        )}
      >
        <RegisterNavigatorButton
          className={twMerge(
            "hover:bg-yellow-6 hover:border-neutral-8",
            "[&>*]:hover:text-white [&>span]:hover:border-white"
          )}
        />
      </div>
    </>
  );
};

export default FloatingButtons;
