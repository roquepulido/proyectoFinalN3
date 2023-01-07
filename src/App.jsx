import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SearchMenu from "./components/SearchMenu";
import PrincipalWidget from "./components/PrincipalWidget";
import ForecastFiveDay from "./components/ForecastFiveDay";
import Hightlights from "./components/Hightlights";


function App() {
  return (
    <div className="App d-flex flex-column flex-sm-row">
      <div className="left__panel col d-flex flex-column justify-content-between overflow-hidden">
        {/* div className="principal__widget  d-flex justify-content-evenly" */}
        <SearchMenu />
        <PrincipalWidget />
      </div>
      <div className="right__panel col vh-100">
        <div className="forecast_container border border-5 mx-auto">
        <ForecastFiveDay />
        <Hightlights />

        </div>
        <footer className="w-100 d-flex justify-content-center my-4">
          created by <span className="fw-bold mx-1">roque.pulido</span> -
          devChallenges.io
        </footer>
      </div>
    </div>
  );
}

export default App;
