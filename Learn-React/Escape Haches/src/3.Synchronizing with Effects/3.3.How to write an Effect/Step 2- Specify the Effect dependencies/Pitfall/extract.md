The behaviors without the dependency array and with an empty [] dependency array are different:
```javascript
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
We’ll take a close look at what “mount” means in the next step.