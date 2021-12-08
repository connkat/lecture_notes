# Module8W21 - Real World React

This is the end of React for now! Although there is definitely a learning curve, you can now see how powerful of a tool React is when developing projects. We covered A LOT of ground in this lecture--the take away is that because React is so powerful/popular, there are tonnes of libraries and features built on top of it. Using React is like finding the secret path in MarioKart that lets you skip through the entire level. 

- [lecture recording](https://vimeo.com/654386481/26d027581f)
- [notes](https://github.com/connkat/lecture_notes/tree/master/Module8/Real-World-React)


## TODO

- [x] The good, the bad, the ugly
- [x] React Router
- [x] Styled Components
- [x] MUI
- [x] useContext
- [x] Deployment of React apps (to Heroku and Netlify)--links to tutorials

### What we aren't covering today, but are useful to checkout:

- useRef
- Reducers

## The good, the bad, the ugly

- state is confusing
- didn't love it
- custom hooks are confusing/when to use
- props/prop drilling confusing
- spread operator

```
[ array, setArray ] = useState(0)

//WRONG:
const newArray = array.push("newString")

//RIGHT:
const newArray = [...array, "newString"]

```

- History in Scheduler (used in the useVisualMode custom hook) is effectively a stripped down version of [React Router History](https://v5.reactrouter.com/web/api/history)

- Why use custom hooks? DRY principals--if you are going to be calling the same hook(s) from multiple components, then you can use a custom hook to only write it once time and then call it when you need it.

- Props drilling sucks! That is why saving things to a context using the useContext hook will be your BFF in the future!

## React Router

Can turn your single page app into a multi page app with very little code! Add your Router, Switch/Routes and Route components and you are all set.
_the differences between v5 and v6 are significant, so if you look at the docs make sure you are looking at the right version!_

### V6 (released 1 month ago): 
```
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//everything else your functional component needs goes here//
  <Router>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
    </Router>
```

### V5: 
```
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//everything else your functional component needs goes here//
  <Router>
        <Switch>
            <Route exact path="/" component={() => <Home />}></Route>
            <Route exact path="/contact" component={() => <Contact />}></Route>
            <Route exact path="/projects" component={() => <Projects />}></Route>
        </Switch>
    </Router>
```

Something that was not discussed: if you are nesting addresses, make sure you list them under their parent. IE: 
```
<Route exact path="/contact" component={() => <Contact />}></Route>
<Route exact path="/contact/email-contact" component={() => <EmailContact />}></Route>
```


## Styled Components

A great way to style your code in the component without having to use an external CSS file--of course you can still use external CSS files, especially if you are writing CSS that you want to be used more universally.

### Basic use: 
  ```
  const StyledTitle = styled.h1`
    color: red;
  `;
  ```
### More advanced use with props and conditional rendering: 
  ```
  const StyledTitle = styled.h1`
    color: ${props => props.color ? props.color : "white"};
    text: ${props => props.text}
  `;
```

Alternative: I personally like using [makeStyles/useStyles](https://mui.com/styles/basics/), which is built off of [MaterialUI](https://mui.com/).

## MUI

A React library of pre-fab components! Simply install all of the required packages and go. The usual ones should be:

`yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material`
OR
`npm i @mui/material @emotion/react @emotion/styled @mui/icons-material`

Now you have a whole world of pre-made react components to choose from in a simple copy/paste format. 

Note: styling MUI components can sometimes be tricky! Open up your inspect and try to figure out the `className` of each component it so you can tackle it effectively.

## useContext

The [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”. RIP prop drilling and hello grabbing data.

Although contexts are a powerful tool, you don't want to use it for EVERYTHING in your app, as it will eventually take a toll on your application. Think about what is most useful--if you are using OAuth, then maybe storing an auth key or user info in the context here will help. Then you can simply pull the user ID from your context and do your query to lookup more information from your DB as needed.

[Here](https://medium.com/technofunnel/usecontext-in-react-hooks-aa9a60b8a461) is a solid walk through on how to create your very first context. 

## Deployment of React apps (to Heroku and Netlify--there are definitely more options out there)

- [Deployment to Heroku](https://dev.to/smithmanny/deploy-your-react-app-to-heroku-2b6f)
- [Deployment to Netlify](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)

For my quick deployment to Netlify I first made my account, added the netlify CLI tool globally, and then created a build folder in my create react app by using the command `yarn run build`. `npm run build` will do the same thing. Then just using `netlify deploy` and pointing it at my `./build` folder and it was good to go in under 1 min.

## Useful Links

- [Styled Components](https://medium.com/swlh/styled-components-e29204a2fb1a)
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Reducers](https://www.smashingmagazine.com/2020/12/how-redux-reducers-work/)
