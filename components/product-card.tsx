'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const discount = product.compareAtPrice
    ? Number(product.compareAtPrice.replace(/[^0-9]/g, '')) - Number(product.price.replace(/[^0-9]/g, ''))
    : 0;
  const badge = discount > 0
    ? `Save Rs. ${discount.toLocaleString('en-US')}`
    : product.badge || (product.featured ? 'Bestseller' : undefined);

  return (
    <article className="product-card catalog-card">
      <div className="product-image-wrap">
        <a href={`/products/${product.slug}`} className="product-link" aria-label={`View ${product.name}`}>
          <img src={product.image} alt={product.name} className="product-image" />
          {badge && <span className={`product-badge ${discount > 0 ? 'sale-badge' : ''}`}>{badge}</span>}
        </a>
        <button
          className={`wishlist ${liked ? 'liked' : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label={liked ? `Remove ${product.name} from favorites` : `Save ${product.name}`}
        >
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
        </button>
        <a className="product-quick-view" href={`/products/${product.slug}`}>View details</a>
      </div>
      <a href={`/products/${product.slug}`} className="product-info">
        <div className="product-card-copy">
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <div className="product-card-prices">
          <p className={product.compareAtPrice ? 'product-price sale-price' : 'product-price'}>{product.price}</p>
          {product.compareAtPrice && <p className="product-compare-price">{product.compareAtPrice}</p>}
        </div>
      </a>
    </article>
  );
}
