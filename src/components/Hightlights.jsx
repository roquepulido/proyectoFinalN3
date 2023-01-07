import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../css/Hightlights.css";

function Hightlights() {
  return (
    <div className="container Hightlights mt-5">
      <span className="hightlights__title ms-4">Today’s Hightlights</span>
      <div className=" hightlights__cards container">
        <div className="row m-auto row-cols-1 row-cols-sm-2 g-xl-5 g-md-2">
          <div className="col">
            <div className="hightlights__card my-2">
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
          </div>
          <div className="col">
            <div className="hightlights__card my-2">
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
          <div className="col">
            <div className="hightlights__card my-2">
              <span>Visibility</span>
              <div className="visibility">
                <span className="number">6,4</span>
                <span className="unit">miles</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hightlights__card my-2">
              <span>Air Pressure</span>
              <div className="airPressure">
                <span className="number">998</span>
                <span className="unit">mb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hightlights;
