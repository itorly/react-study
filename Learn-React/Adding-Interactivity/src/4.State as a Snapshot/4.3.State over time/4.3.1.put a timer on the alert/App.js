import { useState } from 'react';


export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        // The state stored in React may have changed by the time the alert runs, 
        // but it was scheduled using a snapshot of the state at the time the user interacted with it!

        // A state variable’s value never changes within a render, 
        // even if its event handler’s code is asynchronous. 

        // Inside that render’s onClick, 
        // the value of number continues to be 0 even after setNumber(number + 5) was called. 
        // Its value was “fixed” when React “took the snapshot” of the UI by calling your component.
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}
