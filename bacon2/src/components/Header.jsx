import { useState } from "react";

const Header = () => {
  const state = useState(0);
//   console.log("STATE!", state);

  const [count, setCount] = useState(20);

  const increment = () => {
    setCount(count + 5);
    console.log("COUNT", count);
  };
  return (
    <header>
      <h2>This is the count: {count}</h2>
      <button onClick={increment}>Click Me!</button>
    </header>
  );
};

export default Header;
