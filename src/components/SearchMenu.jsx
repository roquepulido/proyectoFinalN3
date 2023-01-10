import { useState } from "react";
import "../css/searchMenu.css";
import { isoToCountry } from "../js/helpers";

function CityOptions({ city, handleChangeCity }) {
  return (
    <button
      className="button__pais texto__claro"
      onClick={() => {
        handleChangeCity(city);
      }}
      data-bs-dismiss="offcanvas"
    >
      {`${city.name}, ${isoToCountry(city.country)}`}
    </button>
  );
}
function CityOptionsError({ city }) {
  return (
    <button className="button__pais texto__claro">
      {`No info for "${city.toUpperCase()}"`}
    </button>
  );
}

function SearchMenu({ handleChangeCity }) {
  const [ansBusqueda, setAnsBusqueda] = useState([
    { name: "Cancun", country: "MX" },
  ]);
  const [cityQuery, setCityQuery] = useState("");
  const [cityIsLoading, setCityIsLoading] = useState(false);

  const getLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const success = async (pos) => {
      const { latitude, longitude, accuracy } = pos.coords;

      console.log("Tu ubicación actual es:");
      console.log(`Latitud : ${latitude}`);
      console.log(`Longitud: ${longitude}`);
      console.log(`Más o menos ${accuracy} metros.`);
      const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${
        import.meta.env.VITE_API_WEATHER_KEY
      }`;
      const res = await fetch(url).then((ans) => ans.json());
      handleChangeCity(res[0]);
    };
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  const handleChangeCountryQuery = (e) => {
    setCityQuery(e.target.value);
  };
  const searchCity = async (e) => {
    setCityIsLoading(true);
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityQuery}&limit=5&appid=${
      import.meta.env.VITE_API_WEATHER_KEY
    }`;
    const res = await fetch(url).then((ans) => ans.json());
    setAnsBusqueda(res);
    setCityIsLoading(false);
  };
  return (
    <>
      <div className="container__buttons d-flex justify-content-between p-3">
        <button
          className="button__search"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#searchMenu"
          aria-controls="searchMenu"
        >
          <span className="texto__claro">Seach for places</span>
        </button>
        <button className="button__localitation" onClick={getLocation}>
          <span className="material-symbols-outlined">my_location</span>
        </button>
      </div>

      <div
        className="offcanvas offcanvas-start offcanvas__search"
        data-bs-scroll="true"
        tabIndex="-1"
        id="searchMenu"
        aria-labelledby="searchMenuLabel"
      >
        <div className="offcanvas-header d-flex flex-row-reverse">
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body h-100">
          <div className="row g-0 form__search">
            <input
              className="col-8 me-2"
              type="search"
              placeholder="search location"
              aria-label="Search"
              onChange={handleChangeCountryQuery}
            />

            {cityIsLoading ? (
              <button className="col" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            ) : (
              <button className="col" onClick={searchCity}>
                Search
              </button>
            )}
          </div>

          {ansBusqueda.length != 0 ? (
            ansBusqueda.map((city, i) => (
              <CityOptions
                key={i}
                city={city}
                handleChangeCity={handleChangeCity}
              />
            ))
          ) : (
            <CityOptionsError city={cityQuery} />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchMenu;
