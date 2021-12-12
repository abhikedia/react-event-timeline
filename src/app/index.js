import React from "react";
import Template from "../template/index";
import "./index.scss";

const renderList = (props) => {
  const data = props.data;
  const circle_color = props.circleColor || "#000";
  const circle_size = props.circleSize > 70 ? props.circleSize : 70;
  const circle_text_color = props.circleTextColor || "#fff";
  const circle_text_size = props.circleTextSize || 20;
  const role_color = props.roleColor || "#000";
  const compnay_color = props.companyColor || "#000";
  const description_color = props.descriptionColor || "#000";

  let list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(
      <div className="individual-template" key={i}>
        <div
          className="circle"
          style={{
            backgroundColor: circle_color,
            width: `${circle_size}px`,
            height: `${circle_size}px`,
            lineHeight: `${circle_size}px`,
            color: `${circle_text_color}`,
            fontSize: `${circle_text_size}px`,
          }}
        >
          {data[i].year}
        </div>

        <div>
          <Template
            role={data[i].role}
            company={data[i].company}
            description={data[i].description}
            last={i == data.length - 1 ? true : false}
            linePositionRight={circle_size / 2 + 20}
            linePositionTop={circle_size - 0.1 * circle_size}
            lineColor={circle_color}
            roleColor={role_color}
            descriptionColor={description_color}
            companyColor={compnay_color}
          />
        </div>
      </div>
    );
  }
  return list;
};

const EventTimeline = (props) => {
  return <div>{renderList(props)}</div>;
};

export default EventTimeline;
