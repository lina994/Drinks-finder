import './CategoryFilter.css';

function handleChange(event, updateCategory) {
  let value = event.target.value;
  value = value === '' ? null: value;
  updateCategory(value);
}

function CategoryFilter({categories, updateCategory}) {
  return (
    <div className="Category-filter">
      <label htmlFor="Category-filter-input">Filter By Category</label>
      <select name="Category-filter-input" id="Category-filter-input" onChange={(event) => handleChange(event, updateCategory)}>
        <option value="">All</option>
        { categories.map((category) => <option key={category} value={category}>{category}</option>) }
      </select>
    </div>
  );
}

export default CategoryFilter;
