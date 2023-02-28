import ContactForm from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../Contact/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import book from '../../img/pngwingcom.png';
import { Loader } from 'components/Loader/Loader';
import { selectContacts, selectLoading } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapAll}>
      <div className={css.header}>
        <div className={css.nav}>
          <img className={css.book} src={book} alt="" />
          <h1 className={css.titleH1}>Phonebook</h1>
        </div>
      </div>
      <div className={css.container}>
        <div className={css.wrap}>
          <div>
            <ContactForm />
          </div>
          <div>
            <h2 className={css.titleH2}>Contacts</h2>
            {contacts.length > 0 ? (
              <div className={css.filterCont}>
                <Filter />
                <ContactList />
              </div>
            ) : (
              <p className={css.comment}>No contacts</p>
            )}
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
}
