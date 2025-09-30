# React Effects: Each Render Has Its Own Effects

## Core Concept

Think of `useEffect` as "attaching" behavior to each render's output. Every render produces its own Effect with captured values from that specific render.

## Example: ChatRoom Component

```javascript
export default function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to {roomId}!</h1>;
}
```

## Effect Lifecycle Walkthrough

### 1. Initial Render (`roomId = "general"`)

**JSX Output:**
```javascript
<h1>Welcome to general!</h1>
```

**Effect Created:**
```javascript
() => {
  const connection = createConnection('general');
  connection.connect();
  return () => connection.disconnect();
}
// Dependencies: ['general']
```

React runs this Effect → connects to 'general' chat room.

### 2. Re-render with Same Dependencies

**JSX Output:** Same as before  
**Dependencies:** `['general']` matches previous `['general']`

React skips the Effect entirely (never called).

### 3. Re-render with Different Dependencies (`roomId = "travel"`)

**JSX Output:**
```javascript
<h1>Welcome to travel!</h1>
```

**New Effect:**
```javascript
() => {
  const connection = createConnection('travel');
  connection.connect();
  return () => connection.disconnect();
}
// Dependencies: ['travel']
```

**React's Process:**
1. Compares `['travel']` vs `['general']` → Different (`Object.is('travel', 'general')` is false)
2. Cleans up the first render's Effect (calls `disconnect()` on 'general' connection)
3. Runs the third render's Effect (connects to 'travel')

### 4. Unmount

React runs the last Effect's cleanup function:
- Third render's cleanup destroys `createConnection('travel')`
- App disconnects from 'travel' room

## Development-Only Behaviors

When Strict Mode is enabled:
- **Remounts every component once after mount** (state and DOM preserved)
- **Remounts Effects when saving files** during development
- Purpose: Find missing cleanup and expose race conditions early

**Both behaviors are development-only and don't occur in production.**

## Key Takeaways

- Each render creates its own Effect with captured values
- Effects are skipped only when all dependencies match the previous render
- Cleanup always runs before the next Effect or on unmount
- Effect isolation prevents stale closures and ensures predictable behavior