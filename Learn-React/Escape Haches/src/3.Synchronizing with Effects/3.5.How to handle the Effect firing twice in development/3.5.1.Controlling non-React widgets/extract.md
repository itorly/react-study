### Controlling non-React widgets


#### there is no cleanup needed in this case.
```js
useEffect(() => {
  const map = mapRef.current;
  map.setZoomLevel(zoomLevel);
}, [zoomLevel]);
```
The `map.setZoomLevel()` method is a non-React method that sets the zoom level of a map. It does not need to be cleaned up because it does not create any React-specific resources.

#### Some APIs may not allow you to call them twice in a row. 
For example, the showModal method of the built-in \<dialog> element throws if you call it twice. Implement the cleanup function and make it close the dialog:
```js
useEffect(() => {
  const dialog = dialogRef.current;
  dialog.showModal();
  return () => dialog.close();
}, []);
```