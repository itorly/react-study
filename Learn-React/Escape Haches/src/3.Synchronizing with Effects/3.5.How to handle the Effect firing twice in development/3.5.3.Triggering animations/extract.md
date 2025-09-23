## Triggering animations

If your Effect animates something in, the cleanup function should reset the animation to the initial values:
```js
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // Trigger the animation
  return () => {
    node.style.opacity = 0; // Reset to the initial value
  };
}, []);
```
