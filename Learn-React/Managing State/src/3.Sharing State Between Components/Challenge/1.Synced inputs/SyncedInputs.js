import { useState } from 'react';

export default function i() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="First input" txt={text} hc={handleChange} />
      <Input label="Second input" txt={text} hc={handleChange} />
    </>
  );
}

function Input({ label, txt, hc }) {
  
  return (
    <label>
      {label}
      {' '}
      <input
        value={txt}
        onChange={hc}
      />
    </label>
  );
}
