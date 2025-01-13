import type { FC } from "react";

interface ISectionTitleProps {
  className?: string;
  serial: string;
  title: string;
  description?: string;
  note?: string;
  variant?: "light" | "dark";
}

const SectionTitle: FC<ISectionTitleProps> = ({
  className = "",
  title,
  serial,
  description,
  note,
  variant = "light",
}) => {
  return (
    <div className={className}>
      <div className="text-center flex flex-col">
        <p
          className={`text-subtitle-md ${variant === "dark" ? "text-white" : "text-yellow-6"} mb-1`}
        >
          {serial}
        </p>
        <h2
          className={`text-h3 md:text-h2 ${
            variant === "dark" ? "text-white" : "text-blue-8"
          } mb-6`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-body-md whitespace-pre-line ${variant === "dark" ? "text-white" : "text-neutral-10"}`}
          >
            {description}
          </p>
        )}
        {note && (
          <p
            className={`text-body-sm mt-3 whitespace-pre-line ${variant === "dark" ? "text-white" : "text-neutral-10"}`}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
