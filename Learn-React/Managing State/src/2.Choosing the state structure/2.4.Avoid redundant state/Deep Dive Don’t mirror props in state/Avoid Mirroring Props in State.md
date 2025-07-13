### Avoid Mirroring Props in State

    In React, avoid initializing state with props unless you specifically want to ignore future updates to that prop. When you mirror a prop in state, the state variable only gets initialized once during the first render and won't update if the prop changes.

    Instead, use the prop directly in your component:
```js
function Message({ messageColor }) {
  const color = messageColor;
  // ... use color directly
}
```


    The only exception is when you want to ignore future updates to a prop. In this case, use a naming convention like initial or default to make this behavior clear:
```js
function Message({ initialColor }) {
  const [color, setColor] = useState(initialColor);
  // color will stay at initialColor even if the prop changes
}
```
    By following these guidelines, you'll avoid subtle bugs and make your components more predictable and maintainable.
