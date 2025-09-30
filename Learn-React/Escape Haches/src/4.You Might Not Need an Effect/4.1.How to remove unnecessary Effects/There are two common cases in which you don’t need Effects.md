
### You don’t need Effects to transform data for rendering. 

 If your Effect also immediately updates the state, this restarts the whole process from scratch! 

 To avoid the unnecessary render passes, transform all the data at the top level of your components. That code will automatically re-run whenever your props or state change.

### You don’t need Effects to handle user events. 


### You do need Effects to synchronize with external systems.