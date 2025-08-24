import { useRef } from "react";

function DebouncedButton({ onClick, children }) {
  // useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
    // The returned object will persist for the full lifetime of the component.
    const timeoutIDRef = useRef(null);
  return (
    <button onClick={() => {
      clearTimeout(timeoutIDRef.current);
      timeoutIDRef.current = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}
