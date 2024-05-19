import "./app.scss";

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
    <div id="app">
      <TimelineMobile items={items} colorStart={colorStart} />
      <TimelineFull items={items} colorEnd={colorEnd} />
    </div>
  );
}

export default ReactTimeline;
