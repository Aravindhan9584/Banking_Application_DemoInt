export function filterProducts(products, filters) {
  const search = filters.search.trim().toLowerCase();

  return products.filter((product) => {
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }
    if (filters.status !== 'all' && product.status !== filters.status) {
      return false;
    }
    if (search) {
      const text = (product.name + ' ' + product.description).toLowerCase();
      return text.includes(search);
    }
    return true;
  });
}

export function countByCategory(products) {
  const counts = { all: products.length };

  products.forEach((product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
  });

  return counts;
}
