# React Review
### Tech issues and time stamps on the new video recording

So this lecture ran a bit long, and I had some technical difficulties that ended up erasing the zoom recording. So after we finished lecture, I went and re-recorded the entire thing so that you would have a demo to check back on if needed. For those who had to leave at the 2hour mark in the lesson, you should find the last parts of the lecture (1- creating the addTodoForm and 2- creating a custom hook) around the 1 hour mark of this recording.

- [lecture recording(redux)](https://vimeo.com/649394399/19055ad99a)
- [notes](https://github.com/connkat/lecture_notes/tree/master/Module7/React-Review)

## Objectives

- [x] Run through server
- [x] Planning your app (todo list)
- [x] Building a component
- [x] Passing props
- [x] Handling state
- [x] Side effects and ajax
- [x] Custom hooks
- [] Cleanup discussion --likely on Thursday--> We'll get more into this Thursday
- [] CORS -- We'll get more into this Thursday

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

## Custom Hooks

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

- [understanding CORS](https://medium.com/@baphemot/understanding-cors-18ad6b478e2b)
- [Custom Hooks (React Docs)](https://reactjs.org/docs/hooks-custom.html)
- [Creating a custom hook walkthrough](https://medium.com/@svsh227/create-and-use-the-custom-hook-in-react-app-from-scratch-74801aafb89d)
- [React setState() with prevState and Object Spread Operator](https://www.rockyourcode.com/react-set-state-with-prev-state-and-object-spread-operator/)
- [React useEffect cleanup: How and when to use it](https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm)
