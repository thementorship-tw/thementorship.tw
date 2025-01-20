import { twMerge } from "tailwind-merge";
import RegisterSailorButton from "./RegisterSailorButton";
import RegisterNavigatorButton from "./RegisterNavigatorButton";

const FloatingButtons = () => (
  <>
    <div
      className={twMerge(
        "fixed bottom-[144px] -right-[160px] inline-flex flex-col space-y-3 z-50",
        "hover:right-0 transition-[right] duration-300"
      )}
    >
      <RegisterSailorButton
        className={twMerge(
          "hover:bg-blue-8 hover:border-neutral-8",
          "[&>*]:hover:text-white [&>span]:hover:border-white hover:transition duration-300"
        )}
      />
    </div>
    <div
      className={twMerge(
        "fixed bottom-[72px] -right-[160px] inline-flex flex-col space-y-3 z-50",
        "hover:right-0 transition-[right] duration-300"
      )}
    >
      <RegisterNavigatorButton
        className={twMerge(
          "hover:bg-yellow-6 hover:border-neutral-8",
          "[&>*]:hover:text-white [&>span]:hover:border-white hover:transition duration-300"
        )}
      />
    </div>
  </>
);

export default FloatingButtons;
