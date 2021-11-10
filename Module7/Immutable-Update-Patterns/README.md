# Module7W17 - Immutable Update Patterns
Hello, everyone! Now that you have spent some time with React, I'm sure you have some opinions. Tonight we're going to talk about some of the fundamental concepts of React in order to better understand what exactly is happening under the hood with React. 

- [lecture recording](https://vimeo.com/644560659/755f6ec9c4)
- [notes](https://github.com/connkat/lecture_notes/tree/master/Module7/Immutable-Update-Patterns)

### TODO
[x] Thoughts on React so far
[x] What is state?
[x] Immutability
[x] Props
[x] Storybook


## Thoughts on React so far
- Props/children 
- Better than EJS
- Storybook: harder to get started
- State is confusing
- Destructuring {...}, [...]

## Immutability
It leads to a simpler programming and debugging as data that never changes is way easier to work than data is free changed to be whatever it needs to be throughout the app.

Having a copy the old ver and new ver of data, will always help to easy compare the two data's.

If data cannot be mutated then nothing in the code can tamper with it which leads to less bugs.

### The Wrong Way
I have this react app that allows me to store items into an array. Pressing a button allows it to add another item into the state.

```
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [items, addItem] = useState(['one', 'two']);

  const handleAddItem = () => {
    items.push('three');
    addItem(items);
  }

  return (
    <div className="App">
    {items.map( item => <li>{item}</li>)}
    <button onClick={handleAddItem}>ADD ME</button>
    </div>
  );
}

export default App;
```

Notice how we use handleAddItem function but nothing gets re-rendered. The idea is quite simple. We add an item into the state array. And then we tell react to use that state as the new state. React checks the state, seems that old and new are in fact the same thing, and basically says, cool i wont re-render.

This is a bug!!

### How to Fix!!
Using immutable state pattern, we make a duplicate of the sate and then we add an item to that, followed by setting to the new freshly created array, to the state.

```
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [items, addItem] = useState(['one', 'two']);

  const handleAddItem = () => {
    const cloneItems = items.slice(); // COPY
    cloneItems.push('three');
    addItem(cloneItems);
  }

  return (
    <div className="App">
    {items.map( item => <li>{item}</li>)}
    <button onClick={handleAddItem}>ADD ME</button>
    </div>
  );
}

export default App;
```

Now we want to follow this pattern all around our react states. Always making a copy of a previous state, editing that, followed by a replace.

## Spread Operator (...)

What we did above is absolutely correct!! However its not elegant. Making a copy with splice, is old fashioned.

Enter the `spread` operator.

```
// making a copy for arrays 
const array = [1,2,3,4,5];
const copyArr = [...array];

// making a copy for objects
const obj = {a:1, b:2};
const copyObj = {...obj};
```

## Storybook
I've setup a basic storybook in the `form-example` CRA to be used as an example. Remember that it is separate from your actual project and that it is intended to just show different components from a design perspective. 

If your component expects certain props to be passed in, you will have to remember to pass the props in storybook just like you would from a parent component in your application. 

The `action` imported is meant to simulate a function, so we can use it to pass in what is essentially just a console.log to indicate that a function call will happen. 


### Useful Links
(Getters and Setters)[https://www.programiz.com/javascript/getter-setter]
(The Virtual DOM)[https://www.codecademy.com/articles/react-virtual-dom]
(Storybook example)[https://next--storybookjs.netlify.app/official-storybook/]
