import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../css/Hightlights.css";
import { wdToLetters } from "../js/helpers";

function Hightlights({ unit, weather }) {
  return (
    <div className="container Hightlights pt-2 pt-md-5">
      <span className="hightlights__title ms-4">Today’s Hightlights</span>
      <div className=" hightlights__cards container">
        <div className="row m-auto row-cols-1 row-cols-sm-2 g-xl-5 g-md-2">
          <div className="col">
            <div className="hightlights__card my-2">
              <span>Wind status</span>
              <div className="speed">
                <span className="number">{weather.wind.speed}</span>
                <span className="unit">
                  {unit === "metric" ? "m/s" : "mph"}
                </span>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ transform: `rotate(${weather.wind.deg}deg)` }}
                >
                  arrow_upward
                </span>
                <span className="wind__direction">
                  {wdToLetters(weather.wind.deg)}
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hightlights__card my-2">
              <span>Humidity</span>
              <div className="Humidity">
                <span className="number">{weather.main.humidity}</span>
                <span className="unit">%</span>
              </div>
              <div className="w-75 mx-auto">
                <ProgressBar
                  variant="warning"
                  now={weather.main.humidity}
                  label={`${weather.main.humidity}%`}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hightlights__card my-2">
              <span>Visibility</span>
              <div className="visibility">
                <span className="number">
                  {unit === "metric"
                    ? (weather.visibility / 1000).toFixed(2)
                    : (weather.visibility / 1609).toFixed(2)}
                </span>
                <span className="unit">{unit === "metric" ? "km" : "mi"}</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hightlights__card my-2">
              <span>Air Pressure</span>
              <div className="airPressure">
                <span className="number">{weather.main.pressure}</span>
                <span className="unit">hPa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hightlights;
