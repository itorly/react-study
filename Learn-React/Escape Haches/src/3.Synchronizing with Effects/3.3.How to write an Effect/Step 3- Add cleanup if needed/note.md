
### What is an Effect?
 capitalized “Effect” refers to the React-specific definition above, i.e. a side effect caused by rendering. 

### What can effects do?
 Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

### Do not re-run unless necessary
Most Effects should only re-run when needed rather than after every render. 

### skip unnecessarily re-running the Effect
Tell React to skip unnecessarily re-running the Effect by specifying an array of dependencies as the second argument to the useEffect call. 

### How to specify dependencies
Start by adding an empty [] array.
Then add the dependencies(props) to the array.

### What is the function of the added dependencies?
The dependency array can contain multiple dependencies. React will only skip re-running the Effect if all of the dependencies you specify have exactly the same values as they had during the previous render.

### How does React compare dependency values?
React compares the dependency values using the Object.is comparison. See the useEffect reference for details.

### The difference between the behaviors without the dependency array and with an empty [] dependency array
```js
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

### When will an Effect run?
By default, your Effect will run after every commit.

### When does React run the code inside useEffect?
Every time your component renders, React will update the screen and then run the code inside useEffect. In other words, useEffect “delays” a piece of code from running until that render is reflected on the screen.

### Why do we need Effects?
In React, rendering should be a pure calculation of JSX and should not contain side effects like modifying the DOM.

### wrap legacy non-React code 
You can use a similar approach to wrap legacy non-React code (like jQuery plugins) into declarative React components.

### Why do not use Effects for state calculations?
Effects run as a result of rendering. Setting state triggers rendering. Setting state immediately in an Effect is like plugging a power outlet into itself. The Effect runs, it sets the state, which causes a re-render, which causes the Effect to run, it sets the state again, this causes another re-render, and so on.

### Why was the ref omitted from the dependency array?
This is because the ref object has a stable identity: React guarantees you’ll always get the same object from the same useRef call on every render. It never changes, so it will never by itself cause the Effect to re-run. Therefore, it does not matter whether you include it or not.

### Omitting always-stable dependencies only works when the linter can “see” that the object is stable
For example, if ref was passed from a parent component, you would have to specify it in the dependency array. However, this is good because you can’t know whether the parent component always passes the same ref, or passes one of several refs conditionally. So your Effect would depend on which ref is passed.

### What does “mount” mean?
when the component “mounts”, i.e. appears on the screen for the first time.

### Why does React remount components?
To help you spot them quickly, in development React remounts every component once immediately after its initial mount.