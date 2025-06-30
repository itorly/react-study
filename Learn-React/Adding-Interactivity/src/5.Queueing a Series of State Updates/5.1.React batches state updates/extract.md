## React batches state updates
React waits until all code in the event handlers has run before processing your state updates. 
This lets you update multiple state variables—even from multiple components—without triggering too many re-renders.
But this also means that the UI won’t be updated until after your event handler, and any code in it, completes. 
This behavior, also known as batching, makes your React app run much faster.
It also avoids dealing with confusing “half-finished” renders where only some of the variables have been updated.

React does not batch across multiple intentional events like clicks—each click is handled separately. Rest assured that React only does batching when it’s generally safe to do. This ensures that, for example, if the first button click disables a form, the second click would not submit it again.