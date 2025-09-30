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

## wrap the calculation in useMemo
As an experiment, you can then wrap the calculation in useMemo to verify whether the total logged time has decreased for that interaction or not:
```js
console.time('filter array');
const visibleTodos = useMemo(() => {
  return getFilteredTodos(todos, filter); // Skipped if todos and filter haven't changed
}, [todos, filter]);
console.timeEnd('filter array');
```
### prons and cons of useMemo
useMemo won’t make the first render faster. It only helps you skip unnecessary work on updates.

## test the performance with an artificial slowdown
Keep in mind that your machine is probably faster than your users’ so it’s a good idea to test the performance with an artificial slowdown. For example, Chrome offers a CPU Throttling option for this.

## How to get the most accurate timings
Also note that measuring performance in development will not give you the most accurate results. (For example, when Strict Mode is on, you will see each component render twice rather than once.) To get the most accurate timings, build your app for production and test it on a device like your users have.