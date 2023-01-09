import React from "react";
import "../css/Hightlights.css";

function BlankCard() {
  return (
    <div className="col">
      <div className="hightlights__card my-2 position-relative">
        <div
          className="spinner-border position-absolute"
          style={{ width: "5rem", height: "5rem", left: "39%" }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  );
}

function HightlightsBlank() {
  return (
    <div className="container Hightlights pt-2 pt-md-5">
      <span className="hightlights__title ms-4">Today’s Hightlights</span>
      <div className=" hightlights__cards container">
        <div className="row m-auto row-cols-1 row-cols-sm-2 g-xl-5 g-md-2">
          <BlankCard />
          <BlankCard />
          <BlankCard />
          <BlankCard />
        </div>
      </div>
    </div>
  );
}

export default HightlightsBlank;
