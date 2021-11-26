# Office Hours after React Review

- [x] Make sure my computer is getting power AND monitor is working.
- [x] CORS
- [x] When to pass a callback
- [x] Cleanup discussion
- [x] useVisualMode

## CORS

aka `cross origin resource sharing is a browser (aka HTTP) mechanism. It allows us to reach outside of a given domain in a controlled environment.

Example using client and server (but it is not restricted to just those kinds of calls)

```
GET /data HTTP/1.1
Host: https://localhost:8001/api/days <----- aka a server
Origin : https://localhost:8000 <----- aka a client
```

The server returns the following response because the origins match:

```
HTTP/1.1 200 OK
```

### Does CORES ever get rejected?

Literally all of the time. There are a lot of reasons. [Here are a few](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors). [This one in particular sucks a lot](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight).

## When to pass a callback into a setter

We partially covered this last time but it is very confusing to figure out when to/not to use callbacks with state.

```
  const handleChange = (event) => {
    setValue(event.target.value);
  };

<some more here>

return (
     <input
        className="todo"
        value={value}
        placeholder="write it here"
        onChange={handleChange}
      />
)

```

### Specifically about prev

We use `prev` (but could really be named everything) to access the previous thing (aka the getter). Because setState is actually a function called to update an exist state, we use it pull

```

const [person, setPerson ] =
const updatePerson = () => {
  setState(prev => ({
    person: {
      ...prev.person,
      firstGrocery: "PB",
      secondGrocery: "Jam"
    }
  }));
}
```

## cleanup

All cleanup is doing is tidying up our code before our component unmounts. When our code runs and reruns for every render, `useEffect` also cleans up after itself using the cleanup function. This prevents memory leaks when we dont have access to variables in the hook anymore. tldr; you use cleanup to close off all functions that were doing things so they don't keep trying to do things. 

```
useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
```

Let’s say we have a React component that fetches and renders data. If our component unmounts before our promise resolves, useEffect will try to update the state (on an unmounted component) and send an error like this: `Can't perform a React state update on an unmounted component. This is a no-op, but indicates a memory leak in your application.` 
To fix this error, we use the cleanup function to resolve it.

We can set our own cleanup functionality. IE in the event of a subscription we cna just change a boolean value to stop a function from being called. 
```
useEffect(() => {
    // set our variable to true
    const isApiSubscribed = true;
    axios.get(API).then((response) => {
        if (isApiSubscribed) {
            // handle success
        }
    });
    return () => {
        // cancel the subscription
        isApiSubscribed = false;
    };
}, []);
```

### Other cleanups: 
- AbortController();
- axios.CancelToken
- literally anything that would stop code from running, EX: 
```
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Clean up the subscription
    subscription.unsubscribe();
  };
});
```



## useVisualMode Demo

I will be walking through this hook for anyone interested -- this code won't be committed to the notes repo.
