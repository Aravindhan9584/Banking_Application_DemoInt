import { useCallback, useState } from 'react';
import { useProducts } from './hooks/useProducts';
import { filterProducts, countByCategory } from './utils/filterProducts';
import CategoryTabs from './components/CategoryTabs';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import './App.css';

const defaultFilters = {
  category: 'all',
  status: 'all',
  search: '',
};

function App() {
  const { products, loading, error } = useProducts();
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const visibleProducts = filterProducts(products, filters);
  const counts = countByCategory(products);

  function updateFilter(name, value) {
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  const closeModal = useCallback(() => setSelectedProduct(null), []);

  return (
    <div className="app">
      <h1>Banking Products</h1>
      <p className="app__subtitle">Your savings, cards, loans and investments in one view.</p>

      <CategoryTabs
        selected={filters.category}
        counts={counts}
        onSelect={(value) => updateFilter('category', value)}
      />

      <FilterBar
        search={filters.search}
        status={filters.status}
        onSearchChange={(value) => updateFilter('search', value)}
        onStatusChange={(value) => updateFilter('status', value)}
      />

      {loading && <p className="state">Loading products...</p>}
      {error && <p className="state state--error">{error}</p>}

      {!loading && !error && (
        <ProductGrid
          products={visibleProducts}
          onButtonClick={setSelectedProduct}
          onClearFilters={() => setFilters(defaultFilters)}
        />
      )}

      {selectedProduct && (
        <ProductModal key={selectedProduct.id} product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
