## 6.Updating Objects in State

### Overiew
State can hold any kind of JavaScript value, including objects.
When you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.

We learn
- How to correctly update an object in React state
- How to update a nested object without mutating it
- What immutability is, and how not to break it
- How to make object copying less repetitive with Immer