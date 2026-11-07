import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <a className="logo footer-logo" href="/" aria-label="Webkyro home">
            <Image src="/logo.png" alt="Webkyro" width={2316} height={630} />
          </a>
          <p>Everyday pieces for tiny people<br />with big personalities.</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Explore</h3>
            <a href="/#new">New in</a>
            <a href="/#collections">Collections</a>
            <a href="/#about">Our story</a>
          </div>
          <div>
            <h3>Help</h3>
            <a href="#">Shipping &amp; returns</a>
            <a href="#">Size guide</a>
            <a href="mailto:hello@example.com">Contact us</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+12025550147">+1 (202) 555-0147</a>
            <a href="mailto:hello@example.com">hello@example.com</a>
            <p className="footer-contact-detail">123 Sample Street<br />Demo City, ZZ 00000</p>
          </div>
          <div className="newsletter">
            <h3>Stay in the loop</h3>
            <p>New drops, little surprises.</p>
            <div className="newsletter-form">
              <input placeholder="Your email address" aria-label="Your email address" />
              <button aria-label="Subscribe"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Webkyro</span>
        <span>Made for little lives</span>
        <div className="socials">
          <a href="#" aria-label="Instagram: @webkyro_demo">Instagram · @webkyro_demo</a>
          <a href="#" aria-label="Facebook: @webkyro_demo">Facebook · @webkyro_demo</a>
        </div>
      </div>
    </footer>
  );
}
