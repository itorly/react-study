# Adjusting some state when a prop changes

## background: reset or adjust a part of the state on a prop change
Sometimes, you might want to reset or adjust a part of the state on a prop change, but not all of it.

This List component receives a list of items as a prop, and maintains the selected item in the selection state variable. You want to reset the selection to null whenever the items prop receives a different array:

## Avoid: Adjusting state on prop change in an Effect
```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  useEffect(() => {
    setSelection(null);
  }, [items]);
  // ...
}
```

## Analysis: Why not ideal?
This, too, is not ideal. 
1. Every time the items change, the List and its child components will render with a stale selection value at first. 
2. Then React will update the DOM and run the Effects. 
3. Finally, the setSelection(null) call will cause another re-render of the List and its child components, restarting this whole process again.

## Better: Adjust the state while rendering
Instead, adjust the state directly during rendering:
```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  // ...
}
```
