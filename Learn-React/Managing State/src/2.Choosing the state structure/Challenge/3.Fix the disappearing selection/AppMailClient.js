import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.js';
import "./styles.css";

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  //  remove the state duplicated
  const [highlightedLetterId, setHighlightedLetterId] = useState(null);

  function handleHover(letterId) {
    setHighlightedLetterId(letterId);
  }

  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedLetterId
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
