## 6.Updating Objects in State

### Overiew
State can hold any kind of JavaScript value, including objects.
When you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.

We learn
- How to correctly update an object in React state
- How to update a nested object without mutating it
- What immutability is, and how not to break it
- How to make object copying less repetitive with Immer

### 6.1.What’s a mutation
“immutable”, meaning unchangeable or “read-only”. 
Now consider an object in state:
```javascript
const [position, setPosition] = useState({ x: 0, y: 0 });
```
Technically, it is possible to change the contents of the object itself. This is called a mutation:
```js
position.x = 10;
```
However, although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.


### 6.2.Treat state as read-only
 You should treat any JavaScript object that you put into state as read-only.

 You should treat the state value you have access to in a render as read-only.

To actually trigger a re-render in this case, create a new object and pass it to the state setting function:
```javascript
onPointerMove={e => {
  setPosition({
    x: e.clientX,
    y: e.clientY
  });
}}
```

With setPosition, you’re telling React:

- Replace position with this new object
- And render this component again

### Local mutation is fine

```js
const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
```

The code below modifies an existing object in state, so it is a problem:
```js
position.x = e.clientX;
position.y = e.clientY;
```

But code like this is absolutely fine because you’re mutating a fresh object you have just created:
```js
const nextPosition = {};
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;
setPosition(nextPosition);
```

In fact, it is completely equivalent to writing this:
```js
setPosition({
  x: e.clientX,
  y: e.clientY
});
```

Mutation is only a problem when you change existing objects that are already in state. Mutating an object you’ve just created is okay because no other code references it yet. Changing it isn’t going to accidentally impact something that depends on it. This is called a “local mutation”. You can even do local mutation while rendering. 