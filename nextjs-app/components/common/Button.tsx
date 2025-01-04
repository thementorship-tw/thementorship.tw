type ButtonVariant = "filled" | "outline";

type ButtonColor = "blue" | "golden";

interface CallToActionLinkProps {
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
  children: React.ReactNode;
}

const getClassNames = (variant: ButtonVariant, color: ButtonColor) => {
  const baseButtonClasses = "inline-flex items-center gap-4 p-5 rounded-pill";

  const baseDotClasses = "w-[14px] h-[14px] border-[5px] rounded-circle";

  const buttonVariantStyles = {
    filled: {
      blue: "bg-[#090E3E] text-white",
      golden: "bg-[#7E7059] text-white",
    },
    outline: {
      blue: "bg-white text-[#090E3E] font-semibold border border-[#090E3E]",
      golden: "bg-white text-[#7E7059] font-semibold border border-[#7E705]",
    },
  };

  const dotVariantStyles = {
    filled: {
      blue: "border-white",
      golden: "border-white",
    },
    outline: {
      blue: "border-[#090E3E]",
      golden: "border-[#7E705]",
    },
  };

  const buttonStyles = buttonVariantStyles[variant][color] || "";
  const dotStyles = dotVariantStyles[variant][color] || "";

  return {
    buttonClasses: `${baseButtonClasses} ${buttonStyles}`.trim(),
    dotClasses: `${baseDotClasses} ${dotStyles}`.trim(),
  };
};

const Button = (props: CallToActionLinkProps) => {
  const {
    variant = "filled",
    color = "blue",
    disabled = false,
    onClick,
    children,
  } = props;

  const { buttonClasses, dotClasses } = getClassNames(variant, color);

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
      <span className={dotClasses}></span>
    </button>
  );
};

export default Button;
