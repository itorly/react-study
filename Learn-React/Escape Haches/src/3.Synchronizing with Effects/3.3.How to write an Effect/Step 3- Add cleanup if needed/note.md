
### What is an Effect?
 capitalized “Effect” refers to the React-specific definition above, i.e. a side effect caused by rendering. 

### What can effects do?
 Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

### Do not re-run unless necessary
Most Effects should only re-run when needed rather than after every render. 

### When will an Effect run?
By default, your Effect will run after every commit.


### What does “mount” mean?
when the component “mounts”, i.e. appears on the screen for the first time.