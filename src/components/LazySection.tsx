"use client";

import {
  ComponentType,
  createElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

// project
import Loader from "@/components/Loader";

interface SectionConfig {
  importFunc: () => Promise<{ default: ComponentType<any> }>;

  props?: Record<string, any>;
}

interface LazySectionProps {
  sections: SectionConfig | SectionConfig[];
  fallback?: ReactNode;
  offset?: string;
  placeholderHeight?: number;
}

//  ------------------------------ | COMPONENT - LAZY SECTION | ------------------------------  //

export default function LazySection({
  sections,
  fallback = <Loader />,
  offset = "0px",
  placeholderHeight = 400
}: LazySectionProps) {
  const sectionList = useMemo(
    () => (Array.isArray(sections) ? sections : [sections]),
    [sections]
  );
  const [isVisible, setIsVisible] = useState(false);
  const [loadedComponents, setLoadedComponents] = useState<
    (ComponentType | null)[]
  >(Array(sectionList.length).fill(null));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          Promise.all(
            sectionList.map((section) =>
              section.importFunc().then((module) => module.default)
            )
          ).then((components) => setLoadedComponents(components));
        }
      },
      { rootMargin: offset, threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [sectionList, offset, isVisible]);

  return (
    <div ref={ref} style={{ minHeight: placeholderHeight }}>
      {isVisible && loadedComponents.every((component) => component)
        ? sectionList.map((section, index) =>
            createElement(loadedComponents[index]!, {
              key: index,
              ...section.props
            })
          )
        : isVisible && fallback}
    </div>
  );
}
