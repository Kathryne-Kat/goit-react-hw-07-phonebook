import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../Contact/ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const initialContacts = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App({ contact }) {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (setContacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = contact => {
    if (
      contacts.some(
        con => con.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const finalContacts = { id: nanoid(), ...contact };
    setContacts([finalContacts, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(con => con.id !== id));
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.titleH1}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2 className={css.titleH1}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter onFilterChange={handleFilter} value={filter} />
          <ContactList
            contacts={getFilteredContacts()}
            onDeleteContact={deleteContact}
            //contacts={this.state.contacts}
          />
        </>
      ) : (
        'No contacts'
      )}
    </div>
  );
}
