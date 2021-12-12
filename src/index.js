import React from "react";
import EventTimeline from "./app/index";
import ReactDOM from "react-dom";

const data = [
  {
    role: "Project Manager",
    company: "Best Studio",
    year: 2045,
    description:
      "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
  },
  {
    role: "UX Designer",
    company: "Digital Ace",
    year: 2045,
    description:
      "Fusce rutrum augue id orci rhoncus molestie. Nunc auctor dignissim lacus vel iaculis.",
  },
  {
    role: "UI Freelancer",
    company: "",
    year: 2016,
    description:
      "Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    role: "Junior Designer",
    company: "Crafted Co.",
    year: 2014,
    description:
      "Cras scelerisque scelerisque condimentum. Nullam at volutpat mi. Nunc auctor ipsum eget magna consequat viverra.",
  },
  {
    role: "UI Freelancer",
    company: "",
    year: 2016,
    description:
      "Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    role: "Junior Designer",
    company: "Crafted Co.",
    year: 2014,
    description:
      "Cras scelerisque scelerisque condimentum. Nullam at volutpat mi. Nunc auctor ipsum eget magna consequat viverra.",
  },
];

ReactDOM.render(<EventTimeline data={data} />, document.getElementById("root"));
