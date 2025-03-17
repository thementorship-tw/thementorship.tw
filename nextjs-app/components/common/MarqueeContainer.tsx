import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface IMarqueeContainerProps {
  direction?: "to-left" | "to-right";
  pauseOnHover?: boolean;
}

const MarqueeContainer: React.FC<PropsWithChildren<IMarqueeContainerProps>> = ({
  children,
  direction = "to-left",
  pauseOnHover = true,
}) => {
  const isToLeft = direction === "to-left";

  const firstLayerClasses = twMerge(
    "flex items-start",
    isToLeft
      ? "animate-marquee-container-first-layer"
      : "animate-marquee-container-first-layer-reverse",
    pauseOnHover && "group-hover:motion-paused"
  );

  const secondLayerClasses = twMerge(
    "flex items-start",
    isToLeft
      ? "animate-marquee-container-second-layer"
      : "animate-marquee-container-second-layer-reverse",
    "[animation-delay:-120s]",
    pauseOnHover && "group-hover:motion-paused"
  );

  return (
    <div className="w-full overflow-hidden group">
      <div className="flex">
        <div className={firstLayerClasses}>{children}</div>
        <div className={secondLayerClasses}>{children}</div>
      </div>
    </div>
  );
};

export default MarqueeContainer;
