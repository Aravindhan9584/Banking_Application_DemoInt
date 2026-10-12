export function formatMetric(metric) {
  const { value, type } = metric;

  if (type === 'currency') {
    return '₹' + value.toLocaleString('en-IN');
  }

  if (type === 'percent') {
    return value + '%';
  }

  if (type === 'date') {
    // split manually, new Date('2026-10-28') is treated as UTC and can show the wrong day
    const [year, month, day] = value.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  return value;
}
