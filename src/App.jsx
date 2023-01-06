import "./css/App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App d-flex flex-column flex-sm-row">
      <div className="left__panel col col-sm-4 vh-100">
        <NavBar />
        <div className="imgClima">
          <img src="./img/Clear.png" alt="" />
        </div>
      </div>
      <div className="right__panel col col-sm-8 vh-100">
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          nobis provident modi, quam suscipit sit corrupti repudiandae. Sit,
          perspiciatis!
        </p>
      </div>
    </div>
  );
}

export default App;
459;
981;
