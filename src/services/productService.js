import products from '../data/products';

// returns a promise so this can be swapped for a real API call later
export function getProducts() {
  return Promise.resolve(products);
}
