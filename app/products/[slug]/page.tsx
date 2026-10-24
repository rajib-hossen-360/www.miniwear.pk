'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, Check, ChevronDown, Heart, Minus, Plus, ShoppingBag, Truck } from 'lucide-react';
import { useParams } from 'next/navigation';
import { products } from '@/lib/products';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = useMemo(() => products.find((item) => item.slug === params.slug), [params.slug]);
  const [selectedSize, setSelectedSize] = useState('3-4Y');
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <main className="not-found"><a href="/" className="hero-link"><ArrowLeft size={14} /> Back to shop</a><h1>Product not found</h1></main>;
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 4);

  return (
    <main className="product-page">
      <SiteHeader variant="product" cartCount={added ? quantity : 0} />

      <div className="shell product-breadcrumb">Home <span>/</span> {product.category} <span>/</span> <strong>{product.name}</strong></div>
      <section className="product-detail shell">
        <div className="product-gallery">
          <div className="product-main-image"><img src={product.image} alt={product.name} /></div>
          <div className="product-thumbnails"><button className="thumbnail active"><img src={product.image} alt="Front view" /></button><button className="thumbnail"><img src={product.image} alt="Detail view" /></button><button className="thumbnail"><img src={product.image} alt="Fabric view" /></button></div>
        </div>
        <div className="product-purchase">
          <p className="eyebrow">Webnibo winter edit</p>
          <h1>{product.name}</h1>
          <div className="product-rating"><span>★★★★★</span><u> 12 reviews</u></div>
          <p className="detail-price">{product.price}</p>
          <p className="detail-copy">A cosy everyday layer made for little adventures. Soft on the skin, easy to move in, and finished with thoughtful details for the season ahead.</p>
          <div className="detail-divider" />
          <div className="option-heading"><span>Size</span><a href="#size-guide">Size guide</a></div>
          <div className="size-options">{['2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y'].map((size) => <button key={size} className={selectedSize === size ? 'selected' : ''} onClick={() => setSelectedSize(size)}>{size}</button>)}</div>
          <div className="option-heading quantity-heading"><span>Quantity</span></div>
          <div className="purchase-row"><div className="quantity-control"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={14} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={14} /></button></div><button className={`add-button ${added ? 'added' : ''}`} onClick={() => setAdded(true)}>{added ? <><Check size={16} /> Added to bag</> : <><ShoppingBag size={16} /> Add to bag</>}</button></div>
          <div className="product-actions"><button className={`save-product ${liked ? 'liked' : ''}`} onClick={() => setLiked(!liked)}><Heart size={15} fill={liked ? 'currentColor' : 'none'} /> {liked ? 'Saved to wishlist' : 'Add to wishlist'}</button></div>
          <div className="delivery-card"><Truck size={18} /><div><strong>Free delivery in Demo City</strong><span>Estimated delivery in 3–5 working days</span></div></div>
          <div className="accordion-row"><span>Product details</span><ChevronDown size={16} /></div><div className="accordion-row"><span>Shipping & returns</span><ChevronDown size={16} /></div>
        </div>
      </section>

      <section className="you-may-like shell"><div className="section-heading"><div><p className="eyebrow">Complete the look</p><h2>You may also like</h2></div></div><div className="product-grid">{relatedProducts.map((item) => <a href={`/products/${item.slug}`} className="product-card" key={item.slug}><div className="product-image-wrap"><img src={item.image} alt={item.name} className="product-image" /></div><div className="product-info"><div><p className="product-category">{item.category}</p><h3>{item.name}</h3></div><p className="product-price">{item.price}</p></div></a>)}</div></section>

      <SiteFooter />
    </main>
  );
}
