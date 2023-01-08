import React from "react";
import MainData from "./principalWidget/MainData";
import MainStatus from "./principalWidget/MainStatus";
import "../css/principalWidget.css";

function PrincipalWidget({ city }) {
  const todayDate = new Date();

  return (
    <>
      <MainStatus />
      <MainData
        temp="15"
        weather="Shower"
        place={city}
        date={todayDate.toDateString()}
        unit="C"
      />
    </>
  );
}

export default PrincipalWidget;
// div className="principal__widget  d-flex justify-content-evenly"
