import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SearchMenu from "./components/SearchMenu";
import PrincipalWidget from "./components/PrincipalWidget";
import ForecastFiveDay from "./components/ForecastFiveDay"

function App() {
  return (
    <div className="App d-flex flex-column flex-sm-row">
      <div className="left__panel col d-flex flex-column justify-content-between overflow-hidden">
      {/* div className="principal__widget  d-flex justify-content-evenly" */}
        <SearchMenu />
        <PrincipalWidget />
      </div>
      <div className="right__panel col vh-100">
        <ForecastFiveDay />
      </div>
    </div>
  );
}

export default App;
