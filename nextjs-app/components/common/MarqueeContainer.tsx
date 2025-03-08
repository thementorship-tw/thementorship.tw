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
    ? "flex items-start animate-marquee-container-first-layer motion-safe:group-hover:[animation-play-state:paused]"
    : "flex items-start animate-marquee-container-first-layer-reverse motion-safe:group-hover:[animation-play-state:paused]";

  const secondLayerClasses = isToLeft
    ? "flex items-start animate-marquee-container-second-layer [animation-delay:-120s] motion-safe:group-hover:[animation-play-state:paused]"
    : "flex items-start animate-marquee-container-second-layer-reverse [animation-delay:-120s] motion-safe:group-hover:[animation-play-state:paused]";

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
