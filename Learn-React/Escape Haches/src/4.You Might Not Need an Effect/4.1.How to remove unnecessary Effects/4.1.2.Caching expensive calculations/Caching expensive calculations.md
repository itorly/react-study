This component computes visibleTodos by taking the todos it receives by props and filtering them according to the filter prop. 


## Avoid: redundant state and unnecessary Effect
```js
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  // ...
}
```
## fine if getFilteredTodos() is not slow

```js
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');
  // ✅ This is fine if getFilteredTodos() is not slow.
  const visibleTodos = getFilteredTodos(todos, filter);
  // ...
}
```
Usually, this code is fine! 

## But what if getFilteredTodos() is slow?
But maybe getFilteredTodos() is slow or you have a lot of todos. In that case you don’t want to recalculate getFilteredTodos() if some unrelated state variable like newTodo has changed.


## useMemo
You can cache (or “memoize”) an expensive calculation by wrapping it in a useMemo Hook.
```js
import { useMemo, useState } from 'react';

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');
  const visibleTodos = useMemo(() => {
    // ✅ Does not re-run unless todos or filter change
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
  // ...
}
```
This tells React that you don’t want the inner function to re-run unless either todos or filter have changed.

 React will remember the return value of getFilteredTodos() during the initial render. During the next renders, it will check if todos or filter are different. If they’re the same as last time, useMemo will return the last result it has stored. But if they are different, React will call the inner function again (and store its result).

### useMemo Compiler Note
React Compiler can automatically memoize expensive calculations for you, eliminating the need for manual useMemo in many cases.

### pure function
The function you wrap in useMemo runs during rendering, so this only works for pure calculations.