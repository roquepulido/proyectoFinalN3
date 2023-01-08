import React from "react";

function UnitSwitch({ handleChangeUnit }) {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <span className="me-2">Metric Units</span>
      <div className="form-check form-switch py-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={handleChangeUnit}
        />
      </div>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        Imperial Units
      </label>
    </div>
  );
}

export default UnitSwitch;
