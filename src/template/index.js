import React from "react";
import "./index.scss";

const Template = (props) => {
  return (
    <div id="template">
      {props.last ? (
        ""
      ) : (
        <hr
          className="template-line"
          style={{
            right: `${props.linePositionRight}px`,
            top: `${props.linePositionTop}px`,
            borderColor: `${props.lineColor}`,
          }}
        />
      )}
      <div>
        <div className="header">
          <span className="role" style={{ color: props.roleColor }}>
            {props.role}
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="company" style={{ color: props.companyColor }}>
            {props.company}
          </span>
        </div>
        <div className="description" style={{ color: props.descriptionColor }}>
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default Template;
