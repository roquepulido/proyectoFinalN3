import React from "react";
import "../../css/forecastCard.css";

function ForecastCard({ day, max, min, forecast, unit }) {
  return (
    <div className="col d-flex justify-content-center mt-4">
      <div className="forecast__card d-flex flex-column justify-content-evenly">
        <span className="text-center">{day}</span>
        <div className="forecast__img w-100 pe-3">
          <img className="" src={`./img/${forecast}.png`} alt="" />
        </div>
        <div className="temp__maxmin__card d-flex gap-3 justify-content-center">
          <span className="max__card">
            {max}°{unit == "metric" ? "C" : "F"}
          </span>
          <span className="min__card">
            {min}°{unit == "metric" ? "C" : "F"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
