import { FC, PropsWithChildren } from "react";

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

const getClassNames = (
  variant: ButtonVariant,
  color: ButtonColor,
  paddingSize: ButtonPaddingSize
) => {
  const baseButtonClasses =
    "inline-flex items-center gap-4 rounded-pill text-2";

  const baseDotClasses = "w-[14px] h-[14px] border-[5px] rounded-circle";

  const buttonPaddingSizeClasses: Record<ButtonPaddingSize, string> = {
    default: "p-5",
    "with-icon": "py-3 pl-4 pr-5",
  };

  const buttonVariantClasses = {
    filled: {
      blue: "bg-blue-8 text-white",
      golden: "bg-yellow-6 text-white",
    },
    outline: {
      blue: "bg-white text-blue-8 font-semibold border border-blue-8",
      golden: "bg-white text-yellow-6 font-semibold border border-yellow-6",
    },
  };

  const dotVariantClasses = {
    filled: {
      blue: "border-white",
      golden: "border-white",
    },
    outline: {
      blue: "border-blue-8",
      golden: "border-yellow-6",
    },
  };

  const buttonClasses = buttonVariantClasses[variant][color] || "";
  const dotClasses = dotVariantClasses[variant][color] || "";

  return {
    buttonClasses:
      `${baseButtonClasses} ${buttonPaddingSizeClasses[paddingSize]} ${buttonClasses}`.trim(),
    dotClasses: `${baseDotClasses} ${dotClasses}`.trim(),
  };
};

const Button: FC<PropsWithChildren<ICallToActionLinkProps>> = ({
  className = "",
  variant = "filled",
  color = "blue",
  paddingSize = "default",
  disabled = false,
  onClick,
  children,
}) => {
  const { buttonClasses, dotClasses } = getClassNames(
    variant,
    color,
    paddingSize
  );

  return (
    <button
      className={`${buttonClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      <span className={dotClasses}></span>
    </button>
  );
};

export default Button;
