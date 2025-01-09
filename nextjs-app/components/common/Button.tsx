import { FC, PropsWithChildren } from "react";

type ButtonVariant = "filled" | "outline";

type ButtonColor = "blue" | "golden";

interface ICallToActionLinkProps {
  /**
   * @default "filled"
   */
  variant?: ButtonVariant;
  /**
   * @default "blue"
   */
  color?: ButtonColor;
  disabled?: boolean;
  onClick?: () => void;
}

const getClassNames = (variant: ButtonVariant, color: ButtonColor) => {
  const baseButtonClasses =
    "inline-flex items-center gap-4 p-5 rounded-pill text-2";

  const baseDotClasses = "w-[14px] h-[14px] border-[5px] rounded-circle";

  const buttonVariantStyles = {
    filled: {
      blue: "bg-blue-8 text-white",
      golden: "bg-yellow-6 text-white",
    },
    outline: {
      blue: "bg-white text-blue-8 font-semibold border border-blue-8",
      golden: "bg-white text-yellow-6 font-semibold border border-yellow-6",
    },
  };

  const dotVariantStyles = {
    filled: {
      blue: "border-white",
      golden: "border-white",
    },
    outline: {
      blue: "border-blue-8",
      golden: "border-yellow-6",
    },
  };

  const buttonStyles = buttonVariantStyles[variant][color] || "";
  const dotStyles = dotVariantStyles[variant][color] || "";

  return {
    buttonClasses: `${baseButtonClasses} ${buttonStyles}`.trim(),
    dotClasses: `${baseDotClasses} ${dotStyles}`.trim(),
  };
};

const Button: FC<PropsWithChildren<ICallToActionLinkProps>> = ({
  variant = "filled",
  color = "blue",
  disabled = false,
  onClick,
  children,
}) => {
  const { buttonClasses, dotClasses } = getClassNames(variant, color);

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
      <span className={dotClasses}></span>
    </button>
  );
};

export default Button;
