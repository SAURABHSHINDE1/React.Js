import React from "react";
import "./Naac.css";
import NaacBar from "./NaacBar";
import NaacSlider from "./NaacSlider";
import NaacAbout from "./NaacAbout";
import NaacIqac from "./NaacIqac";
import SsrCriteria from "./SsrCriteria";

function Naac() {
  return (
    <div>
      <NaacBar />
      <div className="below">
        <NaacSlider />
        <div className="right">
          {/* <NaacAbout/>
          <NaacIqac /> */}
          <SsrCriteria />
        </div>
      </div>
    </div>
  );
}

export default Naac;
