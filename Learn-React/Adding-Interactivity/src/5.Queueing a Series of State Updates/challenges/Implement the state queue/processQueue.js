export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // my solution
  for (let i = 0; i < queue.length; i++) {
    const element = queue[i];
    if (element == 'n => n+1') {
        finalState = finalState + 1;
    } else {
        finalState = element;
    }
  }

  // official solution
//   for (let update of queue) {
//     if (typeof update === 'function') {
//       // Apply the updater function.
//       finalState = update(finalState);
//     } else {
//       // Replace the next state.
//       finalState = update;
//     }
//   }

  return finalState;
}
