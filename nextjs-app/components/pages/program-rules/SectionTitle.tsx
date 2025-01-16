import type { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const sectionTitleVariants = {
  container: cva("text-center flex flex-col", {
    variants: {
      variant: {
        light: "",
        dark: "",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }),
  serial: cva("text-subtitle-md mb-1", {
    variants: {
      variant: {
        light: "text-yellow-6",
        dark: "text-white",
      },
    },
  }),
  title: cva("text-h3 md:text-h2 mb-6", {
    variants: {
      variant: {
        light: "text-blue-8",
        dark: "text-white",
      },
    },
  }),
  description: cva("text-body-md whitespace-pre-line", {
    variants: {
      variant: {
        light: "text-neutral-10",
        dark: "text-white",
      },
    },
  }),
  note: cva("text-body-sm mt-3 whitespace-pre-line", {
    variants: {
      variant: {
        light: "text-neutral-10",
        dark: "text-white",
      },
    },
  }),
};

interface ISectionTitleProps
  extends VariantProps<typeof sectionTitleVariants.container> {
  className?: string;
  serial: string;
  title: string;
  description?: string;
  note?: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({
  className,
  title,
  serial,
  description,
  note,
  variant = "light",
}) => {
  return (
    <div className={twMerge(className)}>
      <div className={sectionTitleVariants.container({ variant })}>
        <p className={sectionTitleVariants.serial({ variant })}>{serial}</p>
        <h2 className={sectionTitleVariants.title({ variant })}>{title}</h2>
        {description && (
          <p className={sectionTitleVariants.description({ variant })}>
            {description}
          </p>
        )}
        {note && (
          <p className={sectionTitleVariants.note({ variant })}>{note}</p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
