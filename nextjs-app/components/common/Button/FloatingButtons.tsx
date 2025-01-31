import { twMerge } from "tailwind-merge";
import RegisterSailorButton from "./RegisterSailorButton";
import RegisterNavigatorButton from "./RegisterNavigatorButton";

const FloatingButtons = () => (
  <>
    <div
      className={twMerge(
        "fixed -right-[215px] bottom-[144px] z-50 inline-flex flex-col space-y-3",
        "transition-[right] duration-300 hover:right-0 active:right-0"
      )}
    >
      <RegisterSailorButton
        className={twMerge(
          "hover:border-neutral-8 hover:bg-blue-8 active:border-neutral-8 active:bg-blue-8",
          "[&>*]:hover:text-white [&>*]:active:text-white",
          "[&>span]:hover:border-white [&>span]:active:border-white",
          "duration-300 hover:transition active:transition"
        )}
      />
    </div>
    <div
      className={twMerge(
        "fixed -right-[215px] bottom-[72px] z-50 inline-flex flex-col space-y-3",
        "transition-[right] duration-300 hover:right-0 active:right-0"
      )}
    >
      <RegisterNavigatorButton
        className={twMerge(
          "hover:border-neutral-8 hover:bg-yellow-6 active:border-neutral-8 active:bg-yellow-6",
          "[&>*]:hover:text-white [&>*]:active:text-white",
          "[&>span]:hover:border-white [&>span]:active:border-white",
          "duration-300 hover:transition active:transition"
        )}
      />
    </div>
  </>
);

export default FloatingButtons;
