import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SearchMenu from "./components/SearchMenu";
import PrincipalWidget from "./components/PrincipalWidget";
import ForecastFiveDay from "./components/ForecastFiveDay";
import Hightlights from "./components/Hightlights";
import UnitSwitch from "./components/UnitSwitch";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("London");
  const [unit, setUnit] = useState("metric");
  const [forecast, setForecast] = useState([]);

  const handleChangeUnit = (e) => {
    e.target.checked ? setUnit("imperial") : setUnit("metric");
  };

  const handleChangeCity = (newCity) => {
    setCity(newCity);
  };
  const getForecast = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${
      import.meta.env.VITE_API_WEATHER_KEY
    }`;
    const res = await fetch(url).then((ans) => ans.json());
    console.log(res);
  };

  //USEEFECT de prueva de cambio de states
  useEffect(() => {
    console.log(`Change City to ${city}`);
  }, [city]);
  useEffect(() => {
    console.log(`You now are using the ${unit} System`);
  }, [unit]);
  ///////////////////////////////////////
  useEffect(() => {
    getForecast();
  }, [city, unit]);

  return (
    <div className="App overflow-hidden">
      <div className="row">
        <div className="left__panel col-12 col-md-5 d-flex flex-column justify-content-between overflow-hidden">
          <SearchMenu handleChangeCity={handleChangeCity} />
          <PrincipalWidget city={city} /> {/*pasar datos de weatehr ese dia */}
        </div>
        <div className="right__panel col">
          <div className="forecast_container container mx-auto w-100 h-100">
            <UnitSwitch handleChangeUnit={handleChangeUnit} />
            <ForecastFiveDay /> {/*pasar forecast de 5 dias */}
            <Hightlights />
            {/*pasar daots generales del dia*/}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// async (city) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
//     import.meta.env.VITE_API_WEATHER_KEY
//   }`;

//   const res = await fetch(url).then((ans) => ans.json());
// }
