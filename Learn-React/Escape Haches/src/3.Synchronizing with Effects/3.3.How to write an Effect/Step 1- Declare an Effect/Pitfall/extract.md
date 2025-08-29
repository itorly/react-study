
By default, Effects run after every render. This is why code like this will produce an infinite loop:

```js
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count + 1);
    });
```

Effects run as a result of rendering. Setting state triggers rendering. Setting state immediately in an Effect is like plugging a power outlet into itself. The Effect runs, it sets the state, which causes a re-render, which causes the Effect to run, it sets the state again, this causes another re-render, and so on.

Effects should usually synchronize your components with an external system. If there’s no external system and you only want to adjust some state based on other state, you might not need an Effect.