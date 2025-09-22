
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

### What does “mount” mean?
when the component “mounts”, i.e. appears on the screen for the first time.