import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';
import "./styles.css";

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // allow multiple selection
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // allow multiple selection
    if ( selectedIds.includes(toggledId) ) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== toggledId))
    } else {
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
