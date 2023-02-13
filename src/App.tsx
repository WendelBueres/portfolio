import "./App.css";
import BarComponent from "./components/bar.components";
import BodyComponent from "./components/body.components";
import BoxComponent from "./components/box.components";
import BoxToolsComponent from "./components/box.tools.components";
import FooterComponent from "./components/footer.components";

function App() {
  return (
    <div className="App">
      <BarComponent />
      <BoxComponent />
      <BoxToolsComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
