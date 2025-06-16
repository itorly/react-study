function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    // Notice how onClick={handleClick} has no parentheses at the end!
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function RespondingToEvents() {
  return (
    <div>
      <h1>7.Responding to events</h1>
      <MyButton />
    </div>
  );
}

export default RespondingToEvents;