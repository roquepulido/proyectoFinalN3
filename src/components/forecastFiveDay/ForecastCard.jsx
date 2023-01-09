import React, { useEffect, useState } from "react";
import "../../css/forecastCard.css";
import { getUrlWeather } from "../../js/helpers";

function ForecastCard({ date, max, min, weather, unit }) {
  const [urlImg, setUrlImg] = useState("./img/Clear.png");
  useEffect(() => {
    setUrlImg(getUrlWeather(weather.id));
  }, [weather]);

  const getDayName = (day) => {
    return day.toLocaleDateString("en-EN", { weekday: "long" });
  };
  return (
    <div className="col d-flex justify-content-center">
      <div className="forecast__card d-flex flex-column justify-content-between pt-2 pb-1">
        <span className="text-center">{getDayName(date)}</span>
        <div className="forecast__img w-100 pe-3">
          <img src={urlImg} alt={weather.main} />
        </div>
        <div className="temp__maxmin__card d-flex gap-3 justify-content-center">
          <span className="max__card">
            {max.toFixed(1)}&deg;{unit}
          </span>
          <span className="min__card">
            {min.toFixed(1)}&deg;{unit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
