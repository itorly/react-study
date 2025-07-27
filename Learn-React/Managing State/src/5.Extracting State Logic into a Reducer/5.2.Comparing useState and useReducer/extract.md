# useState vs useReducer Comparison

| Aspect | useState | useReducer |
|--------|----------|------------|
| **Code Size** |  less code upfront | 1. both a reducer function and dispatch actions <br/> 2. help cut down on the code if many event handlers modify state in a similar way|
| **Readability** | 1. very easy to read when the state updates are simple <br/> 2. When the state updates get more complex, they can bloat your component’s code and make it difficult to scan | cleanly separate the how of update logic from the what happened of event handlers|
| **Debugging** | a bug with useState can be difficult to tell where the state was set incorrectly, and why. | 1. With useReducer, you can add a console log into your reducer to see every state update, and why it happened (due to which action). <br/> 2. If each action is correct, you’ll know that the mistake is in the reducer logic itself.<br/> 3. However, you have to step through more code than with useState.|
|  **Testing** | | 1. A reducer is a pure function that doesn’t depend on your component. This means that you can export and test it separately in isolation.<br/> 2. While generally it’s best to test components in a more realistic environment, for complex state update logic it can be useful to assert that your reducer returns a particular state for a particular initial state and action.|
|  **Personal preference** | You don’t have to use reducers for everything: feel free to mix and match! You can even useState and useReducer in the same component. | Use a reducer if you often encounter bugs due to incorrect state updates in some component, and want to introduce more structure to its code.
