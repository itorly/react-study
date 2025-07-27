# Writing reducers well 

* Reducers must be pure. 
  1. reducers run during rendering! (Actions are queued until the next render.)
  2. same inputs always result in the same output
  3. They should not send requests, schedule timeouts, or perform any side effects (operations that impact things outside the component).
  4. They should update objects and arrays without mutations.

* Each action describes a single user interaction, even if that leads to multiple changes in the data.
   * If you log every action in a reducer, that log should be clear enough for you to reconstruct what interactions or responses happened in what order. 