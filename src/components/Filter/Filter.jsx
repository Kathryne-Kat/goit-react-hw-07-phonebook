import { useDispatch, useSelector } from 'react-redux';
import { handleFilterSlice } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const handleFilter = e => {
    dispatch(handleFilterSlice(e.target.value));
    //setFilter(e.target.value);
  };
  const dispatch = useDispatch();
  return (
    <div className="filter">
      <h4 className={css.title}>Find contacts by name</h4>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};
