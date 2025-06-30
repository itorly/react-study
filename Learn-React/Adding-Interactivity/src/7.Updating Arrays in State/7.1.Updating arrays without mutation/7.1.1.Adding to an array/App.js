import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        // create a new array which contains the existing items and a new item at the end
        // the easiest one is to use the ... array spread syntax:
        setArtists( // Replace the state
            [ // with a new array
                ...artists, // that contains all the old items
                { id: nextId++, name: name } // and one new item at the end
            ]   
        );
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
