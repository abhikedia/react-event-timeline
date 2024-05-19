import { ICard } from "./card";
import TimelineMobile from "./timeline-mobile";
import TimelineFull from "./timeline-full";

export interface IReactTimeline {
  items: Omit<ICard, "index" | "align">[];
  colorStart?: string;
  colorEnd?: string;
}

function ReactTimeline({ items, colorStart, colorEnd }: IReactTimeline) {
  return (
    <>
      <TimelineMobile items={items} colorStart={colorStart} />
      <TimelineFull items={items} colorEnd={colorEnd} />
    </>
  );
}

export default ReactTimeline;
