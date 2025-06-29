import { useState } from 'react';

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }
  return (
    <form onSubmit={(e) => {
      /**
       * What does calling preventDefault() function mean?
       * 
       * e.preventDefault() prevents the default form submission behavior.
       * By default, when a form is submitted (e.g., by clicking a <button type="submit">), 
       * the browser sends the form data to the server and reloads the page.
       * 
       * Using e.preventDefault() ensures that the page does not reload, 
       * allowing you to handle the submission logic 
       * (like sending data asynchronously or updating component state) yourself.
       * 
       * In React applications (and modern SPAs in general), 
       * we usually handle form submissions with JavaScript instead of relying on the browser's default behavior.
       * 
       * To conclude, 
       * e.preventDefault() stops the browser from performing the default action (page reload) when the form is submitted, 
       * so your custom logic inside onSubmit can run without interruption.
       */
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message) {
  // ...
}
