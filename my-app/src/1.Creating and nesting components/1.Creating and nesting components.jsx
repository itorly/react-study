// Creating and nesting components

// React apps are made out of components. 
// A component is a piece of the UI that has its own logic and appearance. 
// A component can be as small as a button, or as large as an entire page.
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

// The export default keywords specify the main component in the file.

// Notice that <MyButton /> starts with a capital letter. 
// That’s how you know it’s a React component.
// React component names must always start with a capital letter, 
// while HTML tags must be lowercase.
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to the Quick Start of React 
        <br></br>
        <br></br>
        1. Creating and nesting components
      </h1>
      <MyButton />
    </div>
  );
}