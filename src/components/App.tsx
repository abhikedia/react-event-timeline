import { ICard } from "./card";
import TimelineMobile from "./timeline-mobile";
import { useLayoutEffect, useRef, useState } from "react";
import TimelineFull from "./timeline-full";

const timelineItems: Omit<ICard, "index" | "align">[] = [
  {
    description:
      "We probe into the problem statement through analysis and interviews for deep insights into goals. This lays a foundation for a successful project that focuses on the user.",
    heading: "Project Understanding & Interviews",
  },
  {
    description:
      "We probe into the problem statement through analysis and interviews for deep insights into goals. This lays a foundation for a successful project that focuses on the user.",
    heading: "Project Understanding & Interviews",
  },
  {
    description:
      "We probe into the problem statement through analysis and interviews for deep insights into goals. This lays a foundation for a successful project that focuses on the user.",
    heading: "Project Understanding & Interviews",
  },
  {
    description:
      "We probe into the problem statement through analysis and interviews for deep insights into goals. This lays a foundation for a successful project that focuses on the user.",
    heading: "Project Understanding & Interviews",
  },
  {
    description:
      "We probe into the problem statement through analysis and interviews for deep insights into goals. This lays a foundation for a successful project that focuses on the user.",
    heading: "Project Understanding & Interviews",
  },
  {
    description:
      "We probe into the problem statement through analysis and interviews for deep insights into goals. This lays a foundation for a successful project that focuses on the user.",
    heading: "Project Understanding & Interviews",
  },
];

function ReactTimeline() {
  const [showMobileVersion, setShowMobileVersion] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const width = ref.current?.offsetWidth ?? 475;
    if (width < 475) {
      setShowMobileVersion(true);
    }
  }, [ref]);

  return (
    <div ref={ref}>
      {showMobileVersion ? (
        <TimelineMobile items={timelineItems} />
      ) : (
        <TimelineFull items={timelineItems} />
      )}
    </div>
  );
}

export default ReactTimeline;
