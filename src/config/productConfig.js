export const CATEGORIES = [
  { id: 'all', label: 'All products', icon: '▦' },
  { id: 'savings', label: 'Savings', icon: '🏦' },
  { id: 'credit-card', label: 'Credit Cards', icon: '💳' },
  { id: 'loan', label: 'Loans', icon: '🏠' },
  { id: 'wealth', label: 'Wealth', icon: '📈' },
];

export const STATUSES = {
  active: { label: 'Active', color: 'green' },
  available: { label: 'Available', color: 'blue' },
  pending: { label: 'Pending', color: 'orange' },
  blocked: { label: 'Blocked', color: 'red' },
};

export function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id);
}

// available products can be applied for, everything else the user already has
export function getButtonText(product) {
  if (product.status === 'available') return 'Apply';
  return 'View Details';
}
