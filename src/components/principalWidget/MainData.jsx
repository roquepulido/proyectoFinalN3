import React from "react";
import "../../css/mainData.css";

function MainData({ temp, weather, place, date, unit }) {
  return (
    <div className="main__data d-flex flex-column align-items-center">
      <div className="temp__main">
        <span className="texto__claro">{temp.toFixed(1)}</span>
        <span>&deg;{unit}</span>
      </div>
      <span className="weather__main mb-3">{weather.main}</span>
      <div className="date__main mb-3">
        <span>Today - {date}</span>
      </div>
      <div className="place_main d-flex gap-2 pb-4 align-items-center">
        <span className="material-symbols-outlined">location_on</span> {place}
      </div>
    </div>
  );
}

export default MainData;
