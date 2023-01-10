import React from "react";
import MainData from "./principalWidget/MainData";
import MainStatus from "./principalWidget/MainStatus";
import "../css/principalWidget.css";

function PrincipalWidget({ city, weather, unit }) {
  const todayDate = new Date();

  return (
    <>
      <MainStatus weather={weather.weather[0]} />
      <MainData
        temp={weather.main.temp}
        weather={weather.weather[0]}
        city={city}
        date={todayDate.toDateString()}
        unit={unit === "metric" ? "C" : "F"}
      />
    </>
  );
}

export default PrincipalWidget;
