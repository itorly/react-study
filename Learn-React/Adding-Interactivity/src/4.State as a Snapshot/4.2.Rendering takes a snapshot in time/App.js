import { useState } from 'react';

/**
 * Notice that number only increments once per click!
 * 
 * Setting state only changes it for the next render. 
 */
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // Here is what this button’s click handler tells React to do:
        // 1.setNumber(number + 1): number is 0 so setNumber(0 + 1).
        //  React prepares to change number to 1 on the next render.
        setNumber(number + 1);
        // 2.setNumber(number + 1): number is 0 so setNumber(0 + 1).
        //  React prepares to change number to 1 on the next render.
        setNumber(number + 1);
        // 3.setNumber(number + 1): number is 0 so setNumber(0 + 1).
        //  React prepares to change number to 1 on the next render.
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
