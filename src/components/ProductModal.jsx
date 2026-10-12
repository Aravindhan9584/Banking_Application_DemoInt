import { useEffect, useState } from 'react';
import StatusBadge from './StatusBadge';
import { getCategory, getButtonText } from '../config/productConfig';
import { formatMetric } from '../utils/format';

function ProductModal({ product, onClose }) {
  const [applied, setApplied] = useState(false);
  const category = getCategory(product.category);
  const isApply = getButtonText(product) === 'Apply';

  // close on Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose}>
          ×
        </button>

        <p className="card__category">
          {category.icon} {category.label}
        </p>
        <h2 className="modal__title">{isApply ? `Apply for ${product.name}` : product.name}</h2>

        {applied ? (
          <>
            <p className="modal__success">Application submitted. We will contact you soon.</p>
            <button type="button" className="btn btn--primary" onClick={onClose}>
              Done
            </button>
          </>
        ) : (
          <>
            <p className="card__desc">{product.description}</p>

            <div className="modal__list">
              <div>
                <span>Status</span>
                <StatusBadge status={product.status} />
              </div>
              {product.metrics.map((metric) => (
                <div key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{formatMetric(metric)}</strong>
                </div>
              ))}
            </div>

            <div className="modal__actions">
              <button type="button" className="btn btn--secondary" onClick={onClose}>
                {isApply ? 'Cancel' : 'Close'}
              </button>
              {isApply && (
                <button type="button" className="btn btn--primary" onClick={() => setApplied(true)}>
                  Confirm application
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductModal;
