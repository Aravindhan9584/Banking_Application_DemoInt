import { STATUSES } from '../config/productConfig';

function StatusBadge({ status }) {
  const info = STATUSES[status];
  if (!info) return null;

  return <span className={`badge badge--${info.color}`}>{info.label}</span>;
}

export default StatusBadge;
