# How to tell if a calculation is expensive

## probably not expensive
In general, unless you’re creating or looping over thousands of objects, it’s probably not expensive.

## measure the time spent
If you want to get more confidence, you can add a console log to measure the time spent in a piece of code:
```js
console.time('filter array');
const visibleTodos = getFilteredTodos(todos, filter);
console.timeEnd('filter array');
```
