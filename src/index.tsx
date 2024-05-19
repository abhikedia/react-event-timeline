import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import ReactTimeline from "./components/App";

const TestComponent = () => {
  return <ReactTimeline items={[]}/>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>
);
