'use client';

import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, ArrowUp } from 'lucide-react'; // Importer l'icône ArrowUp
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const consent = Cookies.get('cookies-consent');
    if (consent === 'true') {
      setCookiesAccepted(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set('cookies-consent', 'true', { expires: 365 });
    setCookiesAccepted(true);
  };

  const handleDeclineCookies = () => {
    Cookies.set('cookies-consent', 'false', { expires: 365 });
    setCookiesAccepted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <html lang="en">
      <body className="layout">
        <header>
          <div>
            <Link href="/">
              <Image
                src="/logo-lbp-header.png"
                alt="Lebonplan - Le meilleur site d'annonces en ligne"
                width={200}
                height={50}
              />
            </Link>
            <nav>
              <div className="desktop-nav">
                <div className="menu-links">
                  <a href="/">Accueil</a>&nbsp;|&nbsp;
                  <a href="/a-propos">A propos</a>&nbsp;|&nbsp;
                  <a href="/offres">Offres</a>&nbsp;|&nbsp;
                  <a href="/contact">Contact</a>
                </div>
                <div className="auth-links">
                  <a href="/connexion">Connexion</a>&nbsp;|&nbsp;
                  <a href="/inscription">Inscription</a>
                </div>
              </div>
              <div className="burger-menu" onClick={toggleMenu}>
                <Menu size={24} />
              </div>
              {isMenuOpen && (
                <div className="mobile-nav">
                  <a href="/">Accueil</a>
                  <a href="/a-propos">A propos</a>
                  <a href="/offres">Offres</a>
                  <a href="/contact">Contact</a>
                  <a href="/connexion">Connexion</a>
                  <a href="/inscription">Inscription</a>
                </div>
              )}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {!cookiesAccepted && (
          <div className="cookie-banner">
            <p>
              Ce site utilise des cookies pour améliorer votre expérience. En
              continuant à naviguer sur le site, vous acceptez notre utilisation
              des cookies.
            </p>
            <button onClick={handleAcceptCookies}>Accepter</button>
            <button onClick={handleDeclineCookies}>Refuser</button>
          </div>
        )}

        <footer>
          <center><x>©2024 - Tous droits réservés - <Link href="/ml" target="_blank">Mention légale</Link> - WebAll</x></center>
        </footer>

        {showScrollButton && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <ArrowUp size={24} /> 
          </button>
        )}
      </body>
    </html>
  );
}
