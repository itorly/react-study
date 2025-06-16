// JSX is stricter than HTML. You have to close tags like <br />. 
// Your component also can’t return multiple JSX tags. 
// You have to wrap them into a shared parent, 
// like a <div>...</div> or an empty <>...</> wrapper
function AboutPage() {
  return (
    <>
      <h1>2. Writing markup with JSX</h1>
      <h2>About</h2>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

export default AboutPage