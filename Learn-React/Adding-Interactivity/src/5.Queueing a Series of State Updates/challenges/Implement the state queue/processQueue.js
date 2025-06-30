export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let i = 0; i < queue.length; i++) {
    const element = queue[i];
    if (element == 'n => n+1') {
        finalState = finalState + 1;
    } else {
        finalState = element;
    }
  }

  return finalState;
}
