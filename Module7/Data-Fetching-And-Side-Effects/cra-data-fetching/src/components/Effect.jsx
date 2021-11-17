import { useEffect, useState } from "react";

function Effect() {
  const [counter, setCounter] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  // const increment = () => {
  //   setCounter(counter +1);
  // }

  // useEffect(()=> {
  //   // document.title=`The count is: ${counter}`
  //   console.log("The title has changed")
  // })

  // useEffect(()=> {
  //   // const interval = setInterval(()=>{
  //     console.log(`The count is: ${counter}`)
  //   // }, 3000)

  //   // return () => {
  //   //   clearInterval(interval)
  //   //   console.log("It is cleared")
  //   // }
  //   console.log("this is a rerender")
  // }, [counter])

  useEffect(() => {
    setCounter((prev) => {
      return prev +1
    })
    console.log("It happened")
  }, []);

  return (
    <div className="Effect">
      <h1>useEffect</h1>
      <h3>The Count is: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Add One</button>

      <p> The Search Term is: {searchTerm}</p>
      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}

export default Effect;
