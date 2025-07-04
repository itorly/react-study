import { useState } from 'react';
import './styles.css';

export default function AddAndRemoveCSSClass() {
  const [isActive, setIsActive] = useState(false);
  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName = ' picture--active';
  } else {
    backgroundClassName = ' background--active';
  }

  return (
    <>
      <h1>test CSS</h1>
      <div
        className={backgroundClassName}
        onClick={() => setIsActive(false)}
      >
        <img
          onClick={e => {
            e.stopPropagation();
            setIsActive(true);
          }}
          className={pictureClassName}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
        />
      </div>
    </>
  );
}
