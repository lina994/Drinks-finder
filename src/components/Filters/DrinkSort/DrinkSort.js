import './DrinkSort.css';

function handleChange(event, updateSortMethod) {
  let value = event.target.value;
  value = value === '' ? null : value;
  updateSortMethod(value);
}

function DrinkSort({ sortMethod, updateSortMethod}) {
  return (
    <div className="Drink-sort">
      <select onChange={(event) => handleChange(event, updateSortMethod)}>
        <option value="">Sort By ...</option>
        <option value="name-asc">Sort By Name</option>
        <option value="data-dec">Sort By Date</option>
      </select>
    </div>
  );
}

export default DrinkSort;
