import React from "react";
import "./index.scss";

const Template = (props) => {
  return (
    <div id="template">
      {props.last ? "" : <hr className="template-line" />}
      <div>
        <div className="header">
          <span className="role">{props.role}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="company">{props.company}</span>
        </div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
};

export default Template;
