export const Filter = ({ value, onFilterChange }) => {
  return (
    <div className="filter">
      <h4>Find contacts by name</h4>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
};
