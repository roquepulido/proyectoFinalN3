import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SearchMenu from "./components/SearchMenu";
import PrincipalWidget from "./components/PrincipalWidget";
import ForecastFiveDay from "./components/ForecastFiveDay";
import ForecastFiveDayBlank from "./components/ForecastFiveDayBlank";
import PrincipalWidgetBlank from "./components/PrincipalWidgetBlank";
import Hightlights from "./components/Hightlights";
import UnitSwitch from "./components/UnitSwitch";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import HightlightsBlank from "./components/HightlightsBlank";

function App() {
  const baseCity = {
    name: "Cancun",
    lat: 21.1617854,
    lon: -86.8510468,
    country: "MX",
    state: "Quintana Roo",
  };
  const [city, setCity] = useState(baseCity);
  const [unit, setUnit] = useState("metric");
  const [forecast, setForecast] = useState([]);
  const [weather, setWeather] = useState([]);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [loadingForecast, setLoadingForecast] = useState(true);

  const handleChangeUnit = (e) => {
    e.target.checked ? setUnit("imperial") : setUnit("metric");
  };

  const handleChangeCity = (newCity) => {
    setCity(newCity);
  };

  const getWeather = async () => {
    setLoadingWeather(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${
      city.lat
    }&lon=${city.lon}&units=${unit}&appid=${
      import.meta.env.VITE_API_WEATHER_KEY
    }`;
    const res = await fetch(url);
    const ans = await res.json();
    console.log("Weather JSON");
    setWeather(ans);
    setLoadingWeather(false);
  };

  const getForecast = async () => {
    setLoadingForecast(true);
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${
      city.lat
    }&lon=${city.lon}&units=${unit}&appid=${
      import.meta.env.VITE_API_WEATHER_KEY
    }`;
    const res = await fetch(url);
    const ans = await res.json();
    console.log("Forecast JSON");
    setForecast(ans);
    setLoadingForecast(false);
  };

  //USEEFECT de prueva de cambio de states
  useEffect(() => {
    console.log(`Change City to ${city.name}`);
  }, [city]);
  useEffect(() => {
    console.log(`You now are using the ${unit} System`);
  }, [unit]);
  ///////////////////////////////////////

  useEffect(() => {
    getWeather();
    getForecast();
  }, [city, unit]);

  return (
    <div className="App overflow-hidden">
      <div className="row">
        <div className="left__panel position-relative col-12 col-md-5 d-flex flex-column justify-content-between overflow-hidden">
          <SearchMenu handleChangeCity={handleChangeCity} />
          {loadingWeather ? (
            <PrincipalWidgetBlank />
          ) : (
            <PrincipalWidget city={city} weather={weather} unit={unit} />
          )}
        </div>
        <div className="right__panel col">
          <div className="forecast_container container mx-auto w-100 h-100">
            <UnitSwitch handleChangeUnit={handleChangeUnit} />
            {loadingForecast ? (
              <ForecastFiveDayBlank />
            ) : (
              <ForecastFiveDay forecast={forecast} unit={unit} />
            )}

            {loadingWeather ? (
              <HightlightsBlank />
            ) : (
              <Hightlights weather={weather} unit={unit} />
            )}

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
