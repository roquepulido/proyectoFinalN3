import React from "react";
import ForecastCardBlank from "./forecastFiveDay/ForecastCardBlank";

function ForecastFiveDayBlank() {
  return (
    <div className="forecast__cards row row-cols-2 row-cols-sm-2 row-cols-md-5 mx-auto g-2">
      <ForecastCardBlank />
      <ForecastCardBlank />
      <ForecastCardBlank />
      <ForecastCardBlank />
      <ForecastCardBlank />
    </div>
  );
}

export default ForecastFiveDayBlank;
