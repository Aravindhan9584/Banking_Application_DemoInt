import { CATEGORIES } from '../config/productConfig';

function CategoryTabs({ selected, counts, onSelect }) {
  return (
    <div className="tabs" role="tablist">
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          type="button"
          role="tab"
          aria-selected={selected === category.id}
          className={selected === category.id ? 'tab tab--active' : 'tab'}
          onClick={() => onSelect(category.id)}
        >
          <span>{category.icon}</span>
          {category.label}
          <span className="tab__count">{counts[category.id] || 0}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
