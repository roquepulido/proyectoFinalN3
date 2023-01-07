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
    <div className="App d-flex flex-column flex-sm-row">
      <div className="left__panel col d-flex flex-column justify-content-between overflow-hidden">
        {/* div className="principal__widget  d-flex justify-content-evenly" */}
        <SearchMenu />
        <PrincipalWidget />
      </div>
      <div className="right__panel col vh-100">
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
  );
}

export default App;
