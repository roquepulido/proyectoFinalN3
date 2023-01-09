import React, { useState } from "react";
import "../../css/mainStatus.css";

function MainStatus({ weather }) {
  const [imgWeather, setImgWeather] = useState("");

  useEffect(() => {}, [weather]);

  return (
    <div className="img__clima d-flex justify-content-center align-items-center position-relative w-100 ">
      <img
        className="img__bgClima "
        src="./img/Cloud-background.png"
        alt="background Image"
      />
      <img
        style={{ zIndex: "2" }}
        className=""
        src="./img/Clear.png"
        alt={weather}
      />
    </div>
  );
}

export default MainStatus;
