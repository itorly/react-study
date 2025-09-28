# React Effects: Putting It All Together

## Interactive Example Overview

The React documentation provides a playground component that demonstrates Effect behavior using `setTimeout` to schedule console logs 3 seconds after the Effect runs, with cleanup that cancels pending timeouts.

```javascript
useEffect(() => {
  function onTimeout() {
    console.log('⏰ ' + text);
  }

  console.log('🔵 Schedule "' + text + '" log');
  const timeoutId = setTimeout(onTimeout, 3000);

  return () => {
    console.log('🟡 Cancel "' + text + '" log');
    clearTimeout(timeoutId);
  };
}, [text]);
```

## Key Behaviors to Observe

### 1. Development Mode Double-Running
When mounting the component, you'll see:
- Schedule "a" log
- Cancel "a" log  
- Schedule "a" log again

This demonstrates React's Strict Mode remounting to verify proper cleanup implementation.

### 2. Cleanup Between Renders
When typing quickly (e.g., "abc"):
- React cleans up the previous render's Effect before running the next one
- You'll see: Schedule "ab" → Cancel "ab" → Schedule "abc"
- Only one timeout is scheduled at a time, preventing accumulation

### 3. Unmounting Cleanup
Pressing "Unmount the component" immediately cleans up the last Effect, clearing the timeout before it can fire.

### 4. Effect Isolation (Without Cleanup)
If you remove the cleanup function and type "abcde" quickly:
- **Expected**: Five "abcde" logs after 3 seconds
- **Actual**: Sequence of "a", "ab", "abc", "abcd", "abcde"

## Critical Insight: Effect Isolation

Each Effect "captures" the state value from its corresponding render due to JavaScript closures. An Effect from a render with `text = 'ab'` will always see 'ab', regardless of later state changes.

**Effects from each render are isolated from each other.**

## Learning Outcomes

This example demonstrates:
- Proper cleanup prevents resource leaks
- React's development mode helps verify cleanup logic
- Effects capture values at render time, not current values
- Cleanup runs between renders and on unmount