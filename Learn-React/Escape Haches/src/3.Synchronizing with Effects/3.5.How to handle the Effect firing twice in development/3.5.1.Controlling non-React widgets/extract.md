### Controlling non-React widgets


#### there is no cleanup needed in this case.
```js
useEffect(() => {
  const map = mapRef.current;
  map.setZoomLevel(zoomLevel);
}, [zoomLevel]);
```
The `map.setZoomLevel()` method is a non-React method that sets the zoom level of a map. It does not need to be cleaned up because it does not create any React-specific resources.

