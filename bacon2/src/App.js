import "./App.css";
import Header from "./components/Header"
import Card from "./components/Card"

function App() {
  return (
    <>
    <Header />
      <div className="App">
        <h1>BACON!!!</h1>
      </div>
      <div className="App">
        <h1>BACON!!!</h1>
      </div>
      <Card title="Eggs" />
      <Card title="Toast" subtitle="gross"/>
    </>
  );
}

export default App;
