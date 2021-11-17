# Module7W18 - Data Fetching and Other Side Effects

- [lecture recording](https://vimeo.com/646753851/040c5073d4)
- [notes](https://github.com/connkat/lecture_notes/edit/master/Module7/Data-Fetching-And-Side-Effects)

## TODO

- [x] Why do we use components?
- [x] .map
- [x] Rules for hooks
- [x] Pure functions and side effects
- [x] `useEffect` hook
- [x] Cleanup
- [x] useEffect Flow
- [x] Dependencies
- [x] Data Fetching

### Why Components?

A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI.

### .map

The `map()` function is used to iterate over an array and manipulate or change data items. In React, the `map()` function is most commonly used for rendering a list of data to the DOM.

To use the `map()` function, attach it to an array you want to iterate over. The `map()` function expects a callback as the argument and executes it once for each element in the array. From the callback parameters, you can access the current element, the current index, and the array itself. The `map()` function also takes in an optional second argument, which you can pass to use as this inside the callback. Each time the callback executes, the returned value is then added to a new array.

### Rules for Hooks

1- called in the same order every time a component renders
2- must be called inside a react functional component or react functions
3(ish)- a hook must be named starting with use

### Pure Functions

- A function is said to be pure if:
  1- It produces no side-effects
  2- It will return the same value if called with the same arguments

```
// simple pure functions
const add = (num1, num2) => {
  return num1 + num2;
};

const sayHello = (name) => {
  return `Hello there ${name}!`;
};
```

### Side Effects

- Any operation that modifies the state of the computer or interacts with something outside of your program is said to have a side effect
- Common side effects:
  - Writing to standard out (eg. `console.log`)
  - Modifying the DOM directly (instead of relying on React)
  - Establishing socket connections (eg. `ws` or `Socket.io`)
  - Retrieving data from an API (eg. `axios`, `jQuery`, or the `fetch API`)
  - Setting timers or intervals

### useEffect

- useEffect is a Hook we can use to deal with side effects in our components
- The effect hook fires after the browser has painted the DOM
- Multiple effect hooks can be used inside of a single component to group similar operations together

```
const MyComponent = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // retrieve user information from an API and update local state with the response
    fetch(`/users/${props.userId}`)
      .then(res => res.json())
      .then(json => setUser(json));
  });

  return (
    <div className="my-component">
      <p>You are logged in as { user.username }</p>
    </div>
  );
};
```

### Cleanup

- Sometimes side effects need to be cleaned up (eg. socket connections terminated)
- To perform cleanup, return a function from your

```
const [timer, setTimer] = useState(0);

useEffect(() => {
  // set up an interval to increment a timer
  const myInterval = setInterval(() => {
    setTimer(timer => timer + 1);
  }, 1000);

  // declare a cleanup function
  const cleanup = () => {
    clearInterval(myInterval);
  };

  return cleanup;
}, []);
```

### useEffect Flow
- [useEffectFlow Slide](https://docs.google.com/presentation/d/1OasEv9j7gNeECgEZTyqWlyyujXn52NMZqfbzMOB4_ws/edit#slide=id.g193b6ff73d_0_33)
1. React turns your JSX into HTML (client-side rendering) and updates the DOM
2. The browser responds to the change by updating the UI
3. Any cleanup for effects from the previous render are performed
4. New effects for the current render are performed

### Dependencies

- The second argument to useEffect is a dependency array that lets you specify when you want the hook to run
- The hook will run again anytime the value of a dependency changes
- **NOTE**: It is possible to get stuck in an infinite loop if the effect hook updates a value in the dependency array

```
// will run every time the value of user.firstName changes
useEffect(() => {
  document.title = `${user.firstName}'s Home Page`;
}, [user.firstName]);

// infinite loop because it runs every time count gets updated
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

### Data Fetching
Apologies for the demo issues on this one. Here is a screen recording of what the the UI looks like when the schedule-api is up and running--if you want to try it yourself then clone this repo and make sure `<Appointment />` is being called in your `App.jsx` file: 

https://user-images.githubusercontent.com/38962736/142144645-1199b95d-def3-437f-92ec-b68e08508aab.mp4


## Helpful Links

- [React Hook Rules](https://reactjs.org/docs/hooks-rules.html)
- [Wikipedia: Side Effect](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>)
- [React Developer Tools Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [useEffect--React Docs](https://reactjs.org/docs/hooks-effect.html)
