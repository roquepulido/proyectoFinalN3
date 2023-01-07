import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SearchMenu from "./components/SearchMenu";
import PrincipalWidget from "./components/PrincipalWidget";
import ForecastFiveDay from "./components/ForecastFiveDay";
import Hightlights from "./components/Hightlights";
import UnitSwitch from "./components/UnitSwitch";

function App() {
  return (
    <div className="App overflow-hidden">
      <div className="row">
        <div className="left__panel col-12 col-md-5 d-flex flex-column justify-content-between overflow-hidden">
          <SearchMenu />
          <PrincipalWidget />
        </div>
        <div className="right__panel col">
          <div className="forecast_container container mx-auto w-100 h-100">
            <UnitSwitch />
            <ForecastFiveDay />
            <Hightlights />
            <footer className="w-100 text-center">
              created by <b>roque.pulido</b> - devChallenges.io
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
