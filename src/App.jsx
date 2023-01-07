import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SearchMenu from "./components/SearchMenu";
import PrincipalWidget from "./components/PrincipalWidget";

function App() {
  return (
    <div className="App d-flex flex-column flex-sm-row">
      <div className="left__panel col d-flex flex-column justify-content-between overflow-hidden">
      {/* div className="principal__widget  d-flex justify-content-evenly" */}
        <SearchMenu />
        <PrincipalWidget />
      </div>
      <div className="right__panel col col-sm vh-100">
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa
          quos molestias eum numquam a sit. Nulla rem eaque error excepturi
          dolore sit assumenda maxime repellat natus. Eos blanditiis possimus
          aliquam tempora autem rem velit vitae alias est nesciunt ab magni,
          ullam soluta dolor officiis, excepturi maxime nemo temporibus
          accusamus libero illo. Pariatur vitae quae numquam dolore ducimus iure
          aliquam nam vero itaque beatae in harum, eius quos inventore atque
          nisi animi id minima sunt ad ullam nemo. Delectus expedita quia
          dolorem? Culpa quam minus totam dolorum, dicta reiciendis ea, rem
          eligendi odit delectus, nisi mollitia sit. Cupiditate, ducimus quis.
        </p>
      </div>
    </div>
  );
}

export default App;
