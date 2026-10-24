'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from '@/components/product-card';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

const categories = ['All', 'T-shirts', 'Sweatshirts', 'Hoodie Tracksuits', 'Tracksuits', 'Tight & Leggings', 'High Necks', 'Jackets', 'Dresses', 'Sets', 'Shirts', 'Sweaters', 'Trousers'];

export default function AllProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sort, setSort] = useState('Featured');
  const visibleProducts = useMemo(() => {
    const categoryProducts = activeCategory === 'All' ? products : products.filter((product) => product.category === activeCategory);
    if (sort === 'Name') return [...categoryProducts].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'Price: low to high') return [...categoryProducts].sort((a, b) => Number(a.price.replace(/[^0-9]/g, '')) - Number(b.price.replace(/[^0-9]/g, '')));
    if (sort === 'Price: high to low') return [...categoryProducts].sort((a, b) => Number(b.price.replace(/[^0-9]/g, '')) - Number(a.price.replace(/[^0-9]/g, '')));
    return categoryProducts;
  }, [activeCategory, sort]);

  return (
    <main className="catalog-page">
      <div className="catalog-promo"><span>Free shipping on orders above Rs. 4,999</span><strong>Flat 25% off on winter collection</strong></div>
      <SiteHeader variant="catalog" />

      <section className="catalog-intro shell"><a href="/" className="product-back"><ArrowLeft size={15} /> Back to home</a><p className="eyebrow">Winter collection 2024</p><h1>Kids winter hoodies</h1><p>Warm, playful layers for little adventures. Shop premium winter clothing online in Demo City.</p></section>

      <section className="catalog-controls shell">
        <div className="catalog-tabs" role="tablist" aria-label="Product categories">{categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
        <div className="catalog-toolbar"><span>{visibleProducts.length} pieces</span><label htmlFor="sort-products">Sort by <select id="sort-products" value={sort} onChange={(event) => setSort(event.target.value)}><option>Featured</option><option>Name</option><option>Price: low to high</option><option>Price: high to low</option></select><ChevronDown size={14} /></label></div>
      </section>

      <div className="catalog-benefits shell"><span><strong>Soft & safe</strong> Premium fabrics for little skin</span><span><strong>Easy returns</strong> Simple 7-day exchange</span><span><strong>Cash on delivery</strong> Available across Demo City</span></div>
      <section className="catalog-grid shell">{visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</section>
      {visibleProducts.length === 0 && <p className="catalog-empty">No products in this collection yet.</p>}

      <SiteFooter />
    </main>
  );
}
