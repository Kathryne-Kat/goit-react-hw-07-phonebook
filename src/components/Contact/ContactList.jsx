import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <ul className={css.list}>
      {filterContacts.map(contact => {
        return (
          <li className={css.listItem} key={contact.id}>
            <div>
              <span className={css.name}> {contact.name}</span>:{' '}
              {contact.number}
            </div>
            <button
              className={css.listDel}
              onClick={() => dispatch(deleteContact(contact.id))}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
