import "./index.scss";

import Timeline from "../../assets/svg/timeline";
import Card, { ICard } from "../card";

export interface ITimeline {
  items: Omit<ICard, "index" | "align">[];
  colorStart?: string;
  colorEnd?: string;
}

const TimelineFull = ({
  items,
  colorStart = "white",
  colorEnd = "#F87E28",
}: ITimeline) => {
  return (
    <div id="app" className="App">
      {items.map((item, index) => (
        <div
          key={index}
          className={`cards ${index % 2 === 0 ? "align-right" : "align-left"}`}
        >
          <Card
            index={index + 1}
            heading={item.heading}
            description={item.description}
            type="card1"
            align={index % 2 ? "right" : "left"}
          />

          {index !== items.length - 1 && (
            <Timeline
              height={201}
              width={197}
              colorStart={colorStart}
              colorEnd={colorEnd}
              className={`img ${index % 2 ? "flip" : ""}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TimelineFull;
