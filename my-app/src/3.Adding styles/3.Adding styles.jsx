import './Adding styles.css'
import imgExample from '../img/smile.jpg'

function MyImg() {
  return (
    <img className="avatar" src={imgExample} />
  );
}

export default function AddingStyles() {
    return (
      <div>
        <h1>3. Writing markup with JSX</h1>
        <MyImg />
      </div>
    );
}