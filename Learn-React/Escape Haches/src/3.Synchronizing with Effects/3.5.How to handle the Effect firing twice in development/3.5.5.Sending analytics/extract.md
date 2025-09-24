

### The Problem: 
In development mode, useEffect runs twice due to React's Strict Mode, causing analytics events like logVisit(url) to be called twice per URL.

### The Solution: 
Don't try to "fix" this behavior. Keep your code as-is because:

1. There's no user-visible difference between running once vs twice
2. Analytics shouldn't run in development anyway (it skews production metrics)
3. Component remounting during development already causes extra logs
4. Production will only log once - no duplicates

### Debugging Options:
1. Deploy to staging environment (runs in production mode)
2. Temporarily disable Strict Mode
3. Move analytics to route change handlers instead of Effects
4. Use intersection observers for more precise viewport tracking

### Bottom Line: 
The double-firing is a development-only behavior that helps catch bugs. Your analytics code should either be disabled in development or you should ignore the extra calls since they won't happen in production.