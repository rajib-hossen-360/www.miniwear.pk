'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react';

const winterLinks = [
  { title: 'All Winter', href: '/collections/winter-collection' },
  { title: 'Hoodies', href: '/collections/hoodies' },
  { title: 'Hoodie Tracksuits', href: '/collections/hoodie-tracksuits' },
  { title: 'Sweatshirts', href: '/collections/sweatshirts' },
  { title: 'Tracksuits', href: '/collections/tracksuits' },
  { title: 'Tight & Leggings', href: '/collections/tight-leggings' },
  { title: 'High Necks', href: '/collections/high-necks' },
  { title: 'Trousers', href: '/collections/trousers' },
];

type SiteHeaderProps = {
  variant?: 'hero' | 'catalog' | 'product';
  cartCount?: number;
  onCartClick?: () => void;
};

export default function SiteHeader({ variant = 'catalog', cartCount = 0, onCartClick }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [winterOpen, setWinterOpen] = useState(false);
  const headerClass = variant === 'hero' ? 'site-header shell' : `${variant}-header shell`;

  return (
    <header className={`${headerClass} branded-header`}>
      {variant === 'product' && <a className="product-back header-back" href="/">Back to shop</a>}
      <button
        className={`mobile-menu-button ${variant === 'catalog' ? 'catalog-menu-button' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <a className="logo" href="/" aria-label="Webnibo home">
        <Image src="/logo.png" alt="Webnibo" width={2172} height={724} priority={variant !== 'product'} />
      </a>
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <a href="/">Home</a>
        <div className={`nav-dropdown ${winterOpen ? 'expanded' : ''}`}>
          <a href="/collections/winter-collection" className="nav-dropdown-title">Winter Collection</a>
          <button
            className="nav-dropdown-toggle"
            type="button"
            aria-label="Toggle Winter Collection categories"
            aria-expanded={winterOpen}
            onClick={() => setWinterOpen(!winterOpen)}
          >
            <ChevronDown size={15} />
          </button>
          <div className="nav-dropdown-menu">
            {winterLinks.map((link) => (
              <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.title}</a>
            ))}
          </div>
        </div>
        <a href="/collections/boys">BOYS</a>
        <a href="/collections/girls">GIRLS</a>
        <a href="/collections/best-of-mini-wear">Best Of Mini Wear</a>
      </nav>
      <div className="header-actions">
        <button aria-label="Search"><Search size={18} /></button>
        <button aria-label="View favorites"><Heart size={18} /></button>
        <button className="cart-button" aria-label="Shopping bag" onClick={onCartClick}>
          <ShoppingBag size={18} /><span>{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
