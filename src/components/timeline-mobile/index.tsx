import "./index.scss";

import Card from "../card";
import { ITimeline } from "../timeline-full";
import { useLayoutEffect, useRef, useState } from "react";

const TimelineMobile = ({
  items,
  colorStart = "#F87A1D",
  colorEnd = "#737373",
}: ITimeline) => {
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const _height = ref.current?.clientHeight ?? 0;
    setHeight(_height);
  }, [ref]);

  const lineStyle = {
    height: `${height}px`,
    background: `linear-gradient(180deg, ${colorStart} 0%, ${colorEnd} 100%)`,
  };

  return (
    <div id="timeline-mobile" ref={ref}>
      <div className="timeline__line" style={lineStyle} />
      <div className="timeline__items">
        {items.map((item, index) => (
          <Card
            index={index + 1}
            heading={item.heading}
            description={item.description}
            type="card1"
            align="left"
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineMobile;
