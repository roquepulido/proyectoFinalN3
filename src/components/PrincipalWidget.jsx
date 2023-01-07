import React from "react";
import MainData from "./principalWidget/MainData";
import MainStatus from "./principalWidget/MainStatus";
import "../css/principalWidget.css"

function PrincipalWidget() {
  const todayDate = new Date();

  return (
    <div className="principal__widget h-100 d-flex justify-content-evenly">
      <MainStatus />
      <MainData temp="15" weather="Shower" place="Helsinki" date={todayDate.toDateString()} unit="C" />
    </div>
  );
}

export default PrincipalWidget;
