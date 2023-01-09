import React from "react";
import "../css/principalWidget.css";

function PrincipalWidgetBlank({ city, weather, unit }) {
  const todayDate = new Date();

  return (
    <>
      <div
        className="spinner-border position-absolute"
        style={{ width: "10rem", height: "10rem", top: "40%", left: "30%" }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </>
  );
}

export default PrincipalWidgetBlank;
