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