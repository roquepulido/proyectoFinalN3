import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../css/Hightlights.css";

function Hightlights() {
  return (
    <div className="container Hightlights mt-5">
      <span className="hightlights__title ms-4">Today’s Hightlights</span>
      <div className=" hightlights__cards">
        {/* <div className=" hightlights__cards d-flex flex-column align-items-center gap-4 my-4 "> */}
        <div className="row m-auto">
          <div className="hightlights__card mx-auto my-3">
            <span>Wind status</span>
            <div className="speed">
              <span className="number">7</span>
              <span className="unit">mph</span>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <span className="material-symbols-outlined">arrow_upward</span>
              <span className="wind__direction">WSW</span>
            </div>
          </div>
          <div className="hightlights__card mx-auto my-3">
            <span>Humidity</span>
            <div className="Humidity">
              <span className="number">84</span>
              <span className="unit">%</span>
            </div>
            <div className="w-75 mx-auto">
              <ProgressBar variant="warning" now={84} label={`${84}%`} />
            </div>
          </div>
        </div>
        <div className="row m-auto">
          <div className="hightlights__card mx-auto my-3">
            <span>Visibility</span>
            <div className="visibility">
              <span className="number">6,4</span>
              <span className="unit">miles</span>
            </div>
          </div>
          <div className="hightlights__card mx-auto my-3">
            <span>Air Pressure</span>
            <div className="airPressure">
              <span className="number">998</span>
              <span className="unit">mb</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hightlights;
