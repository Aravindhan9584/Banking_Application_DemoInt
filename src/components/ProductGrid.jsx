import ProductCard from './ProductCard';

function ProductGrid({ products, onButtonClick, onClearFilters }) {
  if (products.length === 0) {
    return (
      <div className="state">
        <p>No products match your filters.</p>
        <button type="button" className="btn btn--secondary" onClick={onClearFilters}>
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onButtonClick={onButtonClick} />
      ))}
    </div>
  );
}

export default ProductGrid;
