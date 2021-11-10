// import React from 'react';
import { useState } from "react";

let i = 1;
function MainBody() {
  const [list, setList] = useState({});

  const listCopy = { ...list };

  const addItem = () => {
    let item = "apple"
    listCopy[i] = item;
    setList(listCopy);
    i++;
    console.log(listCopy)
  };

  return (
    <div className="MainBody">
      <h3>MainBody</h3>
      <p>{JSON.stringify(listCopy)}</p>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default MainBody;
