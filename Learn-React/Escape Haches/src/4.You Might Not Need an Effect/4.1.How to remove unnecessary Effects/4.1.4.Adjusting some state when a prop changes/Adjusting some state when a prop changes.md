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
## Analysis of the solution
Storing information from previous renders like this can be hard to understand, but it’s better than updating the same state in an Effect. In the above example, setSelection is called directly during a render. React will re-render the List immediately after it exits with a return statement. React has not rendered the List children or updated the DOM yet, so this lets the List children skip rendering the stale selection value.

When you update a component during rendering, React throws away the returned JSX and immediately retries rendering. To avoid very slow cascading retries, React only lets you update the same component’s state during a render. If you update another component’s state during a render, you’ll see an error. A condition like items !== prevItems is necessary to avoid loops. You may adjust state like this, but any other side effects (like changing the DOM or setting timeouts) should stay in event handlers or Effects to keep components pure.

### disadvantage
Although this pattern is more efficient than an Effect, most components shouldn’t need it either. No matter how you do it, adjusting state based on props or other state makes your data flow more difficult to understand and debug. 

## Another solution
 Always check whether you can reset all state with a key or calculate everything during rendering instead. For example, instead of storing (and resetting) the selected item, you can store the selected item ID:
 