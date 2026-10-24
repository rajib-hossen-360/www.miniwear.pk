import type { Collection } from '@/lib/collections';
import { products } from '@/lib/products';
import ProductCard from '@/components/product-card';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

export default function CollectionListing({ collection }: { collection: Collection }) {
  const collectionProducts = products.filter((product) => product.collections.includes(collection.slug));

  return (
    <main className="catalog-page">
      <div className="catalog-promo">
        <span>Free shipping on orders above Rs. 4,999</span>
        <strong>Everyday comfort for little ones</strong>
      </div>
      <SiteHeader variant="catalog" />
      <section className="collection-intro shell">
        <p className="eyebrow">{collection.eyebrow}</p>
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
        <a className="collection-back-link" href="/#new">Shop new arrivals</a>
      </section>
      <section className="collection-products shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Picked for this collection</p>
            <h2>Featured products</h2>
          </div>
          <span className="collection-count">{collectionProducts.length} pieces</span>
        </div>
        {collectionProducts.length > 0 ? (
          <div className="catalog-grid collection-grid">
            {collectionProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        ) : (
          <p className="catalog-empty">New favourites are on the way.</p>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
