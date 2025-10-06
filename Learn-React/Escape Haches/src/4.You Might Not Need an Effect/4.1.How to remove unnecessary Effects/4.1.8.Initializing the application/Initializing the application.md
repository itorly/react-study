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