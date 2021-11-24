## Objectives

- [x] Run through server
- [x] Planning your app (todo list)
- [x] Building a component
- [x] Passing props
- [x] Handling state
- [x] Side effects and ajax
- [x] Custom hooks
- [] Cleanup discussion --likely on Thursday
- [] CORS

## Trouble with React

- visual mode
- complexity of custom hooks
- setting state using deconstruction
- passing objects wrapped vs unwrapped

## Recap - Components, Props & State

### Components

Components are the building blocks of react
Take a functionality of a small piece of your application and encapsulated its own isolated container
A component encapsulate or hide the underlying complexity of what's going on(state, events, etc)
You build a large app out of multiple smaller apps

### Props

Props are to components what attributes are to an HTML element (the 'src' tag in an is needed to make the image work)
Props are arguments given to the component so that it can do it's job properly
Props are accessible in an object in the first argument of a functional component

### State

State is information that our app uses and modifies
State is built to be changed during the course of our app
Using state with functional components needs the useState hook

## Recap - Express Backend

Express is a framework built for Node.js, and it's main purpose is to manage routes easily and add quick and easy support for middleware.

Example route:

```
  app.get('/hello', (req, res) => {
    res.send('Hello world!');
  });
```

Express can be used as an API server, like the scheduler-api.

```
  app.get('/api/posts', (req, res) => {
    res.json(someObject);
  });

```

### Custom Hooks

On paper they seem scary, but really we are just moving them out of our components and into their own file. Let's sat you are calling your `useState` from App.js like this:

```
const App () => {
  const [something, setSomething] = useState({data: {}, isThing: false});

  const updateSomething = () => {
      setSomething((prev) => ({ ...prev, data: something, isThing: true}));
    };

  return (etc)
}

export default App;
```

All we need to do is pull this part into `hook/useSomethingData` <or insert name that makes sense and starts with `use` here>

so our custom hook looks something like this:

```
const useSomethingData = () => {

// I've literally copied and pasted the code from above in here:

     const [something, setSomething] = useState({data: {}, isThing: false});

  const updateSomething = () => {
      setSomething((prev) => ({ ...prev, data: something, isThing: true}));
    };

    return { updateSomething };
};

export default useSomethingData;
```

Then you just need to update your App.js with the import from your new custom hook:

```
import useSomethingData from './hooks/useSomethingData'

function App() {
    const {updateSomething} = useSomethingData();
}
```

## Helpful Links

- (understanding CORS)[https://medium.com/@baphemot/understanding-cors-18ad6b478e2b]