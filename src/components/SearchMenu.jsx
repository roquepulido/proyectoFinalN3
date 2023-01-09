import "../css/searchMenu.css";
//Falta poner funcion de busqueda
function SearchMenu({ handleChangeCity }) {
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
      const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${
        import.meta.env.VITE_API_WEATHER_KEY
      }`;
      const res = await fetch(url).then((ans) => ans.json());
      handleChangeCity(res[0].name);
    };
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
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
            />
            <button className="col" type="">
              Search
            </button>
          </div>

          <button
            className="button__pais texto__claro"
            onClick={() => {
              handleChangeCity("Mexico,MX");
            }}
            data-bs-dismiss="offcanvas"
          >
            Ciudad de M&eacute;xico
          </button>
          <button
            className="button__pais texto__claro"
            onClick={() => {
              handleChangeCity("Lima,PE");
            }}
            data-bs-dismiss="offcanvas"
          >
            Lima
          </button>
          <button
            className="button__pais texto__claro"
            onClick={() => {
              handleChangeCity("Guatemala,GT");
            }}
            data-bs-dismiss="offcanvas"
          >
            Guatemala
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchMenu;
