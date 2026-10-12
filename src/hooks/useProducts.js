import { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    getProducts()
      .then((data) => {
        if (!ignore) setProducts(data);
      })
      .catch(() => {
        if (!ignore) setError('Could not load products. Please try again.');
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return { products, loading, error };
}
