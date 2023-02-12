import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactListItem = ({
  id,
  name,
  number,
  onDeleteContact = () => {},
}) => {
  return (
    <li className={css.listItem} key={id}>
      {name}: {number}
      <button
        className={css.listDel}
        onClick={() => onDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
