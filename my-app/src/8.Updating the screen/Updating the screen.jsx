import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function UpdatingTheScreen() {
  return (
    <div>
      <h1>8.Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}