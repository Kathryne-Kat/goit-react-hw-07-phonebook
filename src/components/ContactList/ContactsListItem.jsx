export const ContactListItem = ({
  id,
  name,
  number,
  onDeleteContact = () => {},
}) => {
  return (
    <li key={id}>
      {name}:{number}
      <button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};
