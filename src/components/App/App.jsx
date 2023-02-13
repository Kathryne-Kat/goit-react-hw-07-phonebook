import { Component } from 'react';
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

export default class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? initialContacts,
    filter: '',
  };

  //Для себе, як приклад
  // componentDidMount(){
  //   if(JSON.parse(localStorage.getItem('contacts'))){
  //   this.setState({contacts:JSON.parse(localStorage.getItem('contacts'))})
  // }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (
      this.state.contacts.some(
        con => con.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const finalContacts = { id: nanoid(), ...contact };
    this.setState(({ contacts }) => ({
      contacts: [finalContacts, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(con => con.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={css.container}>
        <h1 className={css.titleH1}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={css.titleH1}>Contacts</h2>
        {this.state.contacts.length > 0 ? (
          <>
            <Filter
              onFilterChange={this.handleFilter}
              value={this.state.filter}
            />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
              //contacts={this.state.contacts}
            />
          </>
        ) : (
          'No contacts'
        )}
      </div>
    );
  }
}
