## When You Might NOT Need an Effect

### Important Principle
**Don't rush to add Effects to your components.**

### Purpose of Effects
Effects are specifically designed to "step out" of React code and synchronize with **external systems**:
- Browser APIs
- Third-party widgets  
- Network operations
- Other external services

### Common Mistake
If your Effect only adjusts some state based on other state, you likely don't need an Effect at all.

### Rule of Thumb
- **Use Effects for**: External system synchronization
- **Avoid Effects for**: Internal state calculations based on other state

## Key Takeaway
Effects bridge the gap between React's declarative rendering model and the imperative world of side effects, allowing components to synchronize with external systems based on their presence in the UI rather than specific user interactions. However, they should be used judiciously - only when you truly need to interact with something outside of React's component system.