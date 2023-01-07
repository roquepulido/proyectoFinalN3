import React from "react";
import "../../css/mainStatus.css";

function MainStatus() {
  return (
    <div className="img__clima d-flex justify-content-center align-items-center position-relative w-100 ">
      <img
        className="img__bgClima "
        src="./img/Cloud-background.png"
        alt="background Image"
      />
      <img style={{"zIndex":"2"}} className="" src="./img/Clear.png" alt="" />
    </div>
  );
}

export default MainStatus;
