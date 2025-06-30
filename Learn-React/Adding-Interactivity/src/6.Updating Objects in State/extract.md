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
