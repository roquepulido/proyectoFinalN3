import React, { useState, useEffect } from "react";
import "../../css/mainStatus.css";
import { getUrlWeather } from "../../js/helpers";

function MainStatus({ weather }) {
  const [imgWeather, setImgWeather] = useState("");

  useEffect(() => {
    setImgWeather(getUrlWeather(weather.id));
  }, [weather]);

  return (
    <div className="img__clima d-flex justify-content-center align-items-center position-relative w-100 ">
      <img
        className="img__bgClima "
        src="./img/Cloud-background.png"
        alt="background Image"
      />
      <img style={{ zIndex: "2" }} src={imgWeather} alt={weather.main} />
    </div>
  );
}

export default MainStatus;
