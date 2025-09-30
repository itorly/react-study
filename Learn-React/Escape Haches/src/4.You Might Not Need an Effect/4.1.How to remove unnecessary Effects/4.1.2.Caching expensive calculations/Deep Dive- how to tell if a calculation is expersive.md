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
## make sense to memoize that calculation
Perform the interaction you’re measuring (for example, typing into the input). You will then see logs like filter array: 0.15ms in your console. If the overall logged time adds up to a significant amount (say, 1ms or more), it might make sense to memoize that calculation. 