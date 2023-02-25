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
    <div className={css.filter_wrap}>
      <label className={css.filter}>
        <p className={css.title}>Find contacts by name</p>
        <input
          className={css.inputFilter}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};
