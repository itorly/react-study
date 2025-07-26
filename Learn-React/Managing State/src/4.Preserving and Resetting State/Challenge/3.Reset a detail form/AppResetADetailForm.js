import { useState } from 'react';
import ContactList from './ContactList.js';
import EditContact from './EditContact.js';

/**
 1. Without key={selectedId}:
- React sees the same EditContact component type when selectedId changes
- It reuses the same component instance, preserving its internal state
- The form fields don't reset because useState(initialData) only uses initialData on first render

 2. With key={selectedId}:
- Changing selectedId changes the key, making React treat it as a different component
- React unmounts the old instance and mounts a new one
- The new instance initializes its state with the new initialData
- This forces the form fields to reset to the new contact's values
 */
export default function AppContactManager() {
  const [
    contacts,
    setContacts
  ] = useState(initialContacts);
  const [
    selectedId,
    setSelectedId
  ] = useState(0);
  const selectedContact = contacts.find(c =>
    c.id === selectedId
  );

  function handleSave(updatedData) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedId}
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  )
}

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
