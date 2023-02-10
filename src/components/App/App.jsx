import { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../Contact/ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contacts.some(con => con.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const finalContacts = { id: nanoid(), ...contact };
    this.setState(prevState => ({
      contacts: [finalContacts, ...prevState.contacts],
    }));
    // this.setState({
    //   contacts: [finalContacts, ...this.state.contacts],
    // });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(con => con.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        <h1 className={css.titleH1}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={css.titleH1}>Contacts</h2>
        <Filter onFilterChange={this.handleFilter} value={this.state.filter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
          //contacts={this.state.contacts}
        />
      </div>
    );
  }
}
