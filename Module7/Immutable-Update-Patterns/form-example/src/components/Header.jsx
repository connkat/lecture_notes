import React from "react";
import { useState } from "react";

let i = 0;

function Header() {
  ///BAD
  const [array, setArray] = useState([]);

  const addNumToArray = () => {
    array.push(i);
    i++;
    setArray(array);
    console.log("array: ", array);
  };

  //GOOD

  const arrayCopy = [...array, i];
  const addNumToArrayCopy = () => {
    array.push(i);
    setArray(arrayCopy);

    i++;
    setArray(arrayCopy);
  };

  return (
    <div className="Header">
      <h2>Array: {array}</h2>
      <button onClick={addNumToArray}>Click Me!</button>

      <h2>ArrayCopy: {arrayCopy}</h2>
      <button onClick={addNumToArrayCopy}>Click Me!</button>
    </div>
  );
}

export default Header;
