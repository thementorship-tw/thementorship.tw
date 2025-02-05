import { cva } from "class-variance-authority";
import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonVariant = "filled" | "outline";

export type ButtonColor = "blue" | "golden";

export type ButtonPaddingSize = "default" | "with-icon";

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
  "group inline-flex items-center gap-4 rounded-pill text-2",
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
        default: "py-5 px-7",
        "with-icon": "py-3 pl-4 pr-5",
      },
      disabled: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        color: "blue",
        class:
          "bg-blue-7 hover:bg-blue-9 transition-[background-color] duration-300",
      },
      {
        variant: "filled",
        color: "golden",
        class:
          "bg-yellow-6 hover:bg-yellow-8 transition-[background-color] duration-300",
      },
      {
        variant: "outline",
        color: "blue",
        class:
          "text-blue-7 border-blue-7 hover:text-blue-9 hover:border-blue-9 transition duration-300",
      },
      {
        variant: "outline",
        color: "golden",
        class:
          "text-yellow-6 border-yellow-6 hover:text-yellow-8 hover:border-yellow-8 transition duration-300",
      },
      {
        disabled: true,
        class: "bg-neutral-2 pointer-events-none text-neutral-5 border-none",
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
    disabled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      color: "blue",
      class:
        "border-blue-7 group-hover:border-blue-9 transition-[border] duration-300",
    },
    {
      variant: "outline",
      color: "golden",
      class:
        "border-yellow-6 group-hover:border-yellow-8 transition-[border] duration-300",
    },
    { disabled: true, class: "border-neutral-5" },
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
        buttonClasses({ variant, color, paddingSize, disabled }),
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      <span
        className={twMerge(dotClasses({ variant, color, disabled }))}
      ></span>
    </button>
  );
};

export default Button;
