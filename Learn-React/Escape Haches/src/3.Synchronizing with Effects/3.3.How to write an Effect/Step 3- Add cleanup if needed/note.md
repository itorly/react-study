
### What is an Effect?
 capitalized “Effect” refers to the React-specific definition above, i.e. a side effect caused by rendering. 

### What can effects do?
 Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

### Do not re-run unless necessary
Most Effects should only re-run when needed rather than after every render. 

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

### What does “mount” mean?
when the component “mounts”, i.e. appears on the screen for the first time.