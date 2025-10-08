# React: Notifying Parent Components About State Changes

## The Problem: Using Effects to Notify Parents

Don't use Effects to call parent callbacks when state changes:

```javascript
function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  // 🔴 Avoid: The onChange handler runs too late
  useEffect(() => {
    onChange(isOn);
  }, [isOn, onChange]);

  function handleClick() {
    setIsOn(!isOn);
  }

  function handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  }
}
```

### Why This Is Problematic

1. `Toggle` updates its state first
2. React updates the screen
3. Effect runs and calls `onChange`
4. Parent component updates its state
5. Another render pass begins

**Result:** Two render passes instead of one, causing unnecessary delays and re-renders.

## Solution 1: Update Both States in the Event Handler

Call the parent callback directly in the event handler:

```javascript
function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  function updateToggle(nextIsOn) {
    // ✅ Good: Perform all updates during the event that caused them
    setIsOn(nextIsOn);
    onChange(nextIsOn);
  }

  function handleClick() {
    updateToggle(!isOn);
  }

  function handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      updateToggle(true);
    } else {
      updateToggle(false);
    }
  }
}
```

### Benefits
- Both components update their state during the same event
- React batches updates from different components together
- **Only one render pass** occurs

## Solution 2: Lift State Up (Even Better)

Remove the child's state entirely and let the parent control it:

```javascript
// ✅ Also good: the component is fully controlled by its parent
function Toggle({ isOn, onChange }) {
  function handleClick() {
    onChange(!isOn);
  }

  function handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      onChange(true);
    } else {
      onChange(false);
    }
  }
}
```

### Benefits of Lifting State Up
- Parent has full control over the `Toggle`
- Less state overall to manage
- No synchronization needed between components
- Simpler component logic

## Key Principle

**Whenever you try to keep two different state variables synchronized, try lifting state up instead!**

## Rule of Thumb

- **Don't:** Use Effects to notify parents about state changes
- **Do:** Call parent callbacks directly in event handlers
- **Best:** Lift state up to the parent for full control