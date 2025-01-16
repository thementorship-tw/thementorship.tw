import { PropsWithChildren } from "react";

interface IMarqueeContainerProps {
  direction?: "to-left" | "to-right";
}

const MarqueeContainer: React.FC<PropsWithChildren<IMarqueeContainerProps>> = ({
  children,
  direction = "to-left",
}) => {
  const isToLeft = direction === "to-left";

  const firstLayerClasses = isToLeft
    ? "flex items-start animate-marquee-first-layer"
    : "flex items-start animate-marquee-first-layer-reverse";

  const secondLayerClasses = isToLeft
    ? "flex items-start animate-marquee-second-layer [animation-delay:-90s]"
    : "flex items-start animate-marquee-second-layer-reverse [animation-delay:-90s]";

  return (
    <div className="w-full overflow-hidden">
      <div className="flex">
        <div className={firstLayerClasses}>{children}</div>
        <div className={secondLayerClasses}>{children}</div>
      </div>
    </div>
  );
};

export default MarqueeContainer;
