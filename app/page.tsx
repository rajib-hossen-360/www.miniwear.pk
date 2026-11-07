'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Gem, Leaf, ShoppingBag, Star, TrendingUp, Wind } from 'lucide-react';
import { products, type Product } from '@/lib/products';
import { collections } from '@/lib/collections';
import ProductCard from '@/components/product-card';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

const shelfSlugs = ['winter-collection', 'hoodies', 'tracksuits', 'hoodie-tracksuits'];

const collectionCards = [
  { slug: 'sweatshirts', productSlug: 'harbor-hooded-pullover' },
  { slug: 'tracksuits', productSlug: 'little-explorer-set' },
  { slug: 'hoodies', productSlug: 'forest-green-hoodie' },
  { slug: 'hoodie-tracksuits', productSlug: 'little-cloud-hoodie-set' },
];

const testimonials = [
  { quote: '“Soft, playful and beautifully made. The quality is even better in person.”', name: 'Ayesha K.' },
  { quote: '“Webkyro makes getting dressed for school a little more fun every morning.”', name: 'Maha R.' },
  { quote: '“The loveliest colours and the sweetest packaging. We will be back.”', name: 'Sara N.' },
  { quote: '“The fabric feels gentle and comfortable, and my little one loves the colours.”', name: 'Hira A.' },
  { quote: '“A lovely fit and such a cheerful design. We are very happy with our order.”', name: 'Noor F.' },
  { quote: '“The outfit is cosy, well made, and perfect for everyday adventures.”', name: 'Zainab M.' },
  { quote: '“Beautiful stitching and a thoughtful design. It quickly became a favourite.”', name: 'Amna S.' },
  { quote: '“The colours look just as lovely in person. Shopping was easy too.”', name: 'Iqra T.' },
  { quote: '“A comfortable outfit with great quality. I will definitely shop here again.”', name: 'Fatima H.' },
  { quote: '“Such a sweet set for little ones—soft, practical, and beautifully finished.”', name: 'Maryam J.' },
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileHeroSlide, setMobileHeroSlide] = useState(0);

  const heroProducts = ['little-explorer-set', 'harbor-hooded-pullover', 'forest-green-hoodie', 'sunset-jersey-set', 'cozy-rib-high-neck', 'weekend-play-tracksuit']
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => product !== undefined);

  return (
    <main>
      <section className={`hero mobile-hero-active-${mobileHeroSlide + 1}`}>
        <div className="mobile-hero-promo">Open And Check Parcel Before Payment! (Shop Above Rs. 5,000/- and Enjoy Free Shipping)</div>
        <SiteHeader variant="hero" cartCount={cartCount} onCartClick={() => setCartCount(cartCount + 1)} />
        <div className={`mobile-hero-carousel mobile-hero-slide-${mobileHeroSlide + 1}`} aria-label="Featured collections">
          <div className="mobile-hero-heading">
            {mobileHeroSlide === 0 ? (
              <>
                <p className="mobile-hero-script">Enjoy</p>
                <h2>SUMMER</h2>
                <a href="/collections/kids-summer-collection-pakistan" className="mobile-hero-badge">WITH US <ArrowRight size={14} /></a>
              </>
            ) : (
              <>
                <p className="mobile-hero-kicker">THE NEW SEASON</p>
                <h2>WINTER</h2>
                <p className="mobile-hero-script">Collection</p>
                <a href="/collections/winter-collection" className="mobile-hero-badge">IS LIVE NOW <ArrowRight size={14} /></a>
              </>
            )}
          </div>
          {mobileHeroSlide === 0 && (
            <div className="summer-beach-scene" aria-hidden="true">
              <div className="summer-parasol">
                <span className="summer-parasol-canopy" />
                <span className="summer-parasol-pole" />
                <span className="summer-parasol-base" />
              </div>
              <div className="summer-lounger summer-lounger-one">
                <span className="summer-lounger-back" />
                <span className="summer-lounger-seat" />
                <span className="summer-lounger-leg summer-lounger-leg-one" />
                <span className="summer-lounger-leg summer-lounger-leg-two" />
              </div>
              <div className="summer-lounger summer-lounger-two">
                <span className="summer-lounger-back" />
                <span className="summer-lounger-seat" />
                <span className="summer-lounger-leg summer-lounger-leg-one" />
                <span className="summer-lounger-leg summer-lounger-leg-two" />
              </div>
              <span className="summer-beach-ball" />
            </div>
          )}
          {mobileHeroSlide === 1 && (
            <div className="mobile-hero-products">
              {heroProducts.map((product) => (
                <a href={`/products/${product.slug}`} key={product.slug} aria-label={`Shop ${product.name}`}>
                  <img src={product.image} alt={product.name} />
                </a>
              ))}
            </div>
          )}
          <div className="mobile-hero-features">
            <span><Leaf size={15} /> Soft &amp; comfortable</span>
            <span><Gem size={15} /> Premium quality</span>
            <span><TrendingUp size={15} /> Trending designs</span>
            <span><Wind size={15} /> Breathable fabric</span>
          </div>
          <div className="mobile-hero-controls">
            <button type="button" aria-label="Show previous collection" onClick={() => setMobileHeroSlide(1 - mobileHeroSlide)}>
              <ArrowLeft size={18} />
            </button>
            <button type="button" aria-label="Show next collection" onClick={() => setMobileHeroSlide(1 - mobileHeroSlide)}>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {shelfSlugs.map((slug) => {
        const collection = collections.find((item) => item.slug === slug);
        const featuredProducts = products.filter((product) => product.collections.includes(slug)).slice(0, 8);

        if (!collection) return null;

        return (
          <section className="home-product-section shell" id={slug} key={slug}>
            <div className="section-heading home-section-heading">
              <div>
                <p className="eyebrow">{slug === 'winter-collection' ? 'Made for colder days' : 'Made for little adventures'}</p>
                <h2>{collection.title}</h2>
              </div>
            </div>
            <div className="product-grid">
              {featuredProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
            </div>
            <a href={`/collections/${slug}`} className="home-view-all">View all <ArrowRight size={15} /></a>
          </section>
        );
      })}

      <section className="editorial-banner shell">
        <div className="editorial-content">
          <p className="eyebrow">The winter edit</p>
          <h2>Cosy layers,<br /><em>happy little days.</em></h2>
          <p>Soft fabrics and playful favourites made for every chilly-day adventure.</p>
          <a href="/collections/winter-collection" className="button-light">Shop winter <ArrowRight size={14} /></a>
        </div>
        <div className="editorial-image">
          <img src={heroProducts[1]?.image} alt="Cosy winter outfit for kids" />
        </div>
      </section>

      <section className="testimonials" id="about">
        <div className="shell">
          <div className="section-heading centered"><div><p className="eyebrow">Kind words</p><h2>What our customers say</h2></div></div>
          <div className="testimonial-carousel">
            <div className="testimonial-track">
              {[false, true].map((isDuplicate) => (
                <div className="testimonial-track-group" aria-hidden={isDuplicate || undefined} key={String(isDuplicate)}>
                  {testimonials.map(({ quote, name }) => (
                    <article className="testimonial" key={name}>
                      <div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={13} fill="currentColor" />)}</div>
                      <p>{quote}</p>
                      <strong>{name}</strong>
                      <small>Customer review</small>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="collection-list-section shell" id="collections">
        <div className="section-heading collection-list-heading">
          <h2>Collection list</h2>
        </div>
        <div className="collection-tile-grid">
          {collectionCards.map(({ slug, productSlug }) => {
            const collection = collections.find((item) => item.slug === slug);
            const product = products.find((item) => item.slug === productSlug);
            if (!collection || !product) return null;
            return (
              <a className="collection-tile" href={`/collections/${slug}`} key={slug}>
                <img src={product.image} alt="" />
                <span>{collection.title}<ArrowRight size={16} /></span>
              </a>
            );
          })}
        </div>
      </section>

      <SiteFooter />
      <button className="floating-cart" aria-label="Add an item to your bag" onClick={() => setCartCount(cartCount + 1)}><ShoppingBag size={17} /><span>{cartCount}</span></button>
    </main>
  );
}
