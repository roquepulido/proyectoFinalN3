import React from "react";

function UnitSwitch() {
  return (
    <div className="form-check form-switch py-3">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        Imperial Units
      </label>
    </div>
  );
}

export default UnitSwitch;
