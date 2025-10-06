# React: Initializing the Application
## The Problem: One-Time Logic in Effects

Some logic should run only once when the app loads. You might be tempted to use an Effect:

```javascript
function App() {
  // 🔴 Avoid: Effects with logic that should only ever run once
  useEffect(() => {
    loadDataFromLocalStorage();
    checkAuthToken();
  }, []);
}
```

### Why This Fails

- **Runs twice in development** due to Strict Mode
- Can cause issues (e.g., invalidating auth tokens not designed for multiple calls)
- Components should be resilient to remounting, including top-level `App`

## Solution 1: Track Execution with a Flag

Use a top-level variable to ensure logic runs only once per app load:

```javascript
let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);
}
```

## Solution 2: Run During Module Initialization (Preferred)

Execute code before the app renders, outside any component:

```javascript
if (typeof window !== 'undefined') { // Check if we're running in the browser
  // ✅ Only runs once per app load
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

### How It Works

Code at the top level runs once when the component is imported, even if it's never rendered.

## Best Practices

### ✅ Do
- Keep app-wide initialization logic in root component modules like `App.js`
- Place initialization in your application's entry point
- Use the browser check `typeof window !== 'undefined'` for client-side code

### ❌ Don't
- Overuse top-level initialization pattern
- Put initialization logic in arbitrary components
- Risk slowdown or surprising behavior when importing components

## Key Distinction

**Once per app load** ≠ **Once per component mount**

For truly one-time initialization, use module-level code or a tracked flag, not just an empty dependency array in `useEffect`.