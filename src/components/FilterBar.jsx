import { STATUSES } from '../config/productConfig';

function FilterBar({ search, status, onSearchChange, onStatusChange }) {
  return (
    <div className="filters">
      <input
        type="search"
        className="filters__search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="filters__select"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="all">All statuses</option>
        {Object.keys(STATUSES).map((key) => (
          <option key={key} value={key}>
            {STATUSES[key].label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
