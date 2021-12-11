import React from "react";
import Template from "../template/index";
import "./index.scss";

const renderList = (data) => {
  let list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(
      <div className="individual-template" key={i}>
        <div className="circle">{data[i].year}</div>
  
        <div>
          <Template
            role={data[i].role}
            company={data[i].company}
            description={data[i].description}
            last={i==data.length-1 ? true : false}
          />
        </div>
      </div>
    );
  }
  return list;
};

const EventTimeline = (props) => {
  return <div>{renderList(props.data)}</div>;
};

export default EventTimeline;
