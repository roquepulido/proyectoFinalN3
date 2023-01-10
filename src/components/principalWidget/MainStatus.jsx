import React, { useState, useEffect } from "react";
import "../../css/mainStatus.css";
import { getUrlWeather } from "../../js/helpers";

function MainStatus({ weather }) {
  const [imgWeather, setImgWeather] = useState("");

  useEffect(() => {
    setImgWeather(getUrlWeather(weather.id));
  }, [weather]);

  return (
    <div className="img__clima">
      <div className="img__bgClima">
        <img src={imgWeather} alt={weather.main} />
      </div>
    </div>
  );
}

export default MainStatus;
