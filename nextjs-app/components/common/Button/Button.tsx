import { cva } from "class-variance-authority";
import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonVariant = "filled" | "outline";

export type ButtonColor = "blue" | "golden";

type ButtonPaddingSize = "default" | "with-icon";

interface ICallToActionLinkProps {
  className?: string;
  /**
   * @default "filled"
   */
  variant?: ButtonVariant;
  /**
   * @default "blue"
   */
  color?: ButtonColor;
  /**
   * @default "default"
   */
  paddingSize?: ButtonPaddingSize;
  disabled?: boolean;
  onClick?: () => void;
}

const buttonClasses = cva(
  "inline-flex items-center gap-4 rounded-pill text-2",
  {
    variants: {
      variant: {
        filled: "text-white",
        outline: "font-semibold bg-white border",
      },
      color: {
        blue: "",
        golden: "",
      },
      paddingSize: {
        default: "p-5",
        "with-icon": "py-3 pl-4 pr-5",
      },
    },
    compoundVariants: [
      { variant: "filled", color: "blue", class: "bg-blue-8" },
      { variant: "filled", color: "golden", class: "bg-yellow-6" },
      {
        variant: "outline",
        color: "blue",
        class: "text-blue-8 border-blue-8",
      },
      {
        variant: "outline",
        color: "golden",
        class: "text-yellow-6 border-yellow-6",
      },
    ],
  }
);

const dotClasses = cva("size-[14px] border-[5px] rounded-circle", {
  variants: {
    variant: {
      filled: "border-white",
      outline: "",
    },
    color: {
      blue: "",
      golden: "",
    },
  },
  compoundVariants: [
    { variant: "outline", color: "blue", class: "border-blue-8" },
    { variant: "outline", color: "golden", class: "border-yellow-6" },
  ],
});

const Button: FC<PropsWithChildren<ICallToActionLinkProps>> = ({
  className = "",
  variant = "filled",
  color = "blue",
  paddingSize = "default",
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={twMerge(
        buttonClasses({ variant, color, paddingSize }),
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      <span className={dotClasses({ variant, color })}></span>
    </button>
  );
};

export default Button;
