import { ContactListItem } from './ContactsListItem';

export const ContactList = ({ contacts, onDeleteContact = () => {} }) => {
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(contact => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
              {...contact}
            />
          );
        })}
    </ul>
  );
};
