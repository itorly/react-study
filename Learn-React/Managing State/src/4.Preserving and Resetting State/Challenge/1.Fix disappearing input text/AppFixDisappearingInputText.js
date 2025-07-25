import { useState } from 'react';

export default function AppFixDisappearingInputText() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      {(showHint) ? <p><i>Hint: Your favorite city?</i></p> : null}
      <Form />
      <button onClick={() => {
        setShowHint(!showHint);
      }}>{showHint ? "Hide" : "Show"} hint</button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
