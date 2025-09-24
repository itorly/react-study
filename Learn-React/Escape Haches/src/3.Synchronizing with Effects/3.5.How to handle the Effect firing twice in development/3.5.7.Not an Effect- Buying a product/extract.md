# React Effects: Not for Buying Products

## The Problem

Some Effects can't be safely run twice, even with cleanup functions. Consider this problematic code:

```javascript
useEffect(() => {
  // 🔴 Wrong: This Effect fires twice in development, exposing a problem in the code.
  fetch('/api/buy', { method: 'POST' });
}, []);
```

This Effect would purchase a product twice in development mode due to Strict Mode's remounting behavior.

## Why This Is Wrong

**Effects are for synchronization with rendering, not user interactions:**
- Buying happens when user **clicks** the Buy button, not when they **visit** the page
- If the user navigates away and returns (Back button), the Effect runs again
- This would cause unwanted duplicate purchases

## The Solution

Move the purchase logic to an event handler:

```javascript
function handleClick() {
  // ✅ Buying is an event because it is caused by a particular interaction.
  fetch('/api/buy', { method: 'POST' });
}
```

## Key Insight

**If remounting breaks your application logic, it reveals existing bugs.** From the user's perspective:
- Visiting a page
- Visiting it, clicking a link, then pressing Back

Should behave identically. React's development remounting verifies your components follow this principle.

## Rule of Thumb

Use Effects for synchronizing with rendering. Use event handlers for responding to user interactions.