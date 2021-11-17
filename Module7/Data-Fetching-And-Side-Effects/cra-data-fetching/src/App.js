import "./App.css";
import MapComponent from "./components/Map";
import Appointment from "./components/Appointment";
import Effect from "./components/Effect";

function App() {
  return (
    <div className="App">
      <MapComponent />
      <Effect />
      <Appointment />
    </div>
  );
}

export default App;
