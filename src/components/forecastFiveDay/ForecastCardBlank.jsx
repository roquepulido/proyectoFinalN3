function ForecastCardBlank() {
  return (
    <div className="col d-flex justify-content-center">
      <div className="forecast__card d-flex justify-content-center align-items-center">
        <div
          className="spinner-border text-light"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  );
}

export default ForecastCardBlank;
