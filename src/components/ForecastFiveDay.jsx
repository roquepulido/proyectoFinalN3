import React, { useEffect, useState } from "react";
import ForecastCard from "./forecastFiveDay/ForecastCard";

function ForecastFiveDay({ forecast, unit }) {
  const [forecastList, setForecastList] = useState([]);

  function getDaysForecast(forecastList) {
    const forecastDays = [];
    for (let x = 8; x < 40; x += 8) {
      forecastDays.push(forecastList[x]);
    }
    forecastDays.push(forecastList[39]);

    setForecastList(forecastDays);
  }
  useEffect(() => {
    getDaysForecast(forecast.list);
  }, [forecast]);

  return (
    <div className="forecast__cards row row-cols-2 row-cols-sm-2 row-cols-md-5 mx-auto g-2">
      {forecastList.map(({ dt, main, weather }, i) => {
        return (
          <ForecastCard
            key={i}
            date={new Date(dt * 1000)}
            max={main.temp_max}
            min={main.temp_min}
            weather={weather[0]}
            unit={unit === "metric" ? "C" : "F"}
          />
        );
      })}
    </div>
  );
}

export default ForecastFiveDay;
