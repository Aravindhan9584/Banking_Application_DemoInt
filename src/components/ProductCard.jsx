import StatusBadge from './StatusBadge';
import { getCategory, getButtonText } from '../config/productConfig';
import { formatMetric } from '../utils/format';

function ProductCard({ product, onButtonClick }) {
  const category = getCategory(product.category);
  const buttonText = getButtonText(product);

  return (
    <div className={`card card--${product.category}`}>
      <div className="card__header">
        <span className="card__category">
          {category.icon} {category.label}
        </span>
        <StatusBadge status={product.status} />
      </div>

      <h3 className="card__title">{product.name}</h3>
      <p className="card__desc">{product.description}</p>

      <div className="card__metrics">
        {product.metrics.map((metric) => (
          <div key={metric.label} className="metric">
            <span className="metric__label">{metric.label}</span>
            <span className="metric__value">{formatMetric(metric)}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={buttonText === 'Apply' ? 'btn btn--primary' : 'btn btn--secondary'}
        onClick={() => onButtonClick(product)}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ProductCard;
