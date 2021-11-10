// import React from 'react';
import { useState } from "react";
import Header from "./components/Header"
import MainBody from "./components/MainBody";

// let num = 0;

function App() {

  console.log("------RERENDERING------")
  const [number, setNumber] = useState(0);
  const [num, setNum] = useState(0);
  // const [state, setState] = useState({num: 0, number:0})


  //NOT REACT
  const setNumClick = () => {
    // num += 1;
    setNum(num)
    console.log(num);
  };

  //REACT-Y
  const setNumberClick = () => {
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <div className="App">
      {/* <h2>{num}</h2>
      <button onClick={setNumClick}>Click Me!</button>

      <h2>{number}</h2>
      <button onClick={setNumberClick}>Click Me!</button> */}

      {/* <Header /> */}
      <MainBody />
    </div>
  );
}

export default App;
