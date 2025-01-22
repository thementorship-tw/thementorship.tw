import { useEffect, useState, RefObject } from "react";

interface IUseInViewOptions {
  threshold?: number;
  once?: boolean;
}

export function useInView<T extends Element>(
  elementRef: RefObject<T>,
  { threshold = 0.1, once = true }: IUseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, once]);

  return isInView;
}
