// Hard-coded product data for the dashboard.
// status: active | available | pending | blocked
// metric type: currency | percent | date

const products = [
  {
    id: 1,
    name: 'Everyday Savings Account',
    category: 'savings',
    status: 'active',
    description: 'Flexible savings with no monthly fees.',
    metrics: [
      { label: 'Interest rate', value: 4.25, type: 'percent' },
      { label: 'Balance', value: 152430, type: 'currency' },
    ],
  },
  {
    id: 2,
    name: 'Fixed Deposit',
    category: 'savings',
    status: 'available',
    description: 'Lock in a higher rate for 12 months.',
    metrics: [
      { label: 'Interest rate', value: 7.1, type: 'percent' },
      { label: 'Minimum deposit', value: 10000, type: 'currency' },
    ],
  },
  {
    id: 3,
    name: 'Platinum Rewards Card',
    category: 'credit-card',
    status: 'active',
    description: 'Earn 2x points on dining and travel.',
    metrics: [
      { label: 'Available limit', value: 84500, type: 'currency' },
      { label: 'Next due date', value: '2026-10-28', type: 'date' },
    ],
  },
  {
    id: 4,
    name: 'Cashback Card',
    category: 'credit-card',
    status: 'blocked',
    description: 'Blocked after a suspicious transaction.',
    metrics: [
      { label: 'Available limit', value: 0, type: 'currency' },
      { label: 'Cashback earned', value: 1240, type: 'currency' },
    ],
  },
  {
    id: 5,
    name: 'Travel Card',
    category: 'credit-card',
    status: 'available',
    description: 'Zero forex markup and airport lounge access.',
    metrics: [
      { label: 'Annual fee', value: 2500, type: 'currency' },
      { label: 'Reward rate', value: 3, type: 'percent' },
    ],
  },
  {
    id: 6,
    name: 'Home Loan',
    category: 'loan',
    status: 'active',
    description: '20-year floating-rate home loan.',
    metrics: [
      { label: 'Outstanding', value: 3250000, type: 'currency' },
      { label: 'Next due date', value: '2026-11-05', type: 'date' },
    ],
  },
  {
    id: 7,
    name: 'Personal Loan',
    category: 'loan',
    status: 'pending',
    description: 'Your application is under review.',
    metrics: [
      { label: 'Requested amount', value: 500000, type: 'currency' },
      { label: 'Interest rate', value: 10.5, type: 'percent' },
    ],
  },
  {
    id: 8,
    name: 'Balanced Mutual Fund',
    category: 'wealth',
    status: 'active',
    description: 'Diversified equity and debt portfolio.',
    metrics: [
      { label: 'Current value', value: 412800, type: 'currency' },
      { label: '1-year return', value: 12.4, type: 'percent' },
    ],
  },
  {
    id: 9,
    name: 'Government Bonds',
    category: 'wealth',
    status: 'available',
    description: 'Low-risk, government-backed bonds.',
    metrics: [
      { label: 'Yield', value: 7.3, type: 'percent' },
      { label: 'Minimum investment', value: 1000, type: 'currency' },
    ],
  },
];

export default products;
