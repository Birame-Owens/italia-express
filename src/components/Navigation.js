import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

/**
 * Navigation Améliorée - Italia Express
 * Design moderne avec palette dorée/beige
 * Animations fluides et responsive complet
 */
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setScrolled(true);
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
      } else {
        setScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Main Navigation Container */
        .nav-container {
          position: sticky;
          top: 0;
          z-index: 50;
          background: white;
          font-family: 'Inter', sans-serif;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 1px 3px rgba(139, 90, 43, 0.05);
          border-bottom: 1px solid #E8D4C4;
        }

        .nav-container.scrolled {
          box-shadow: 0 8px 32px rgba(139, 90, 43, 0.15);
          padding: 0.5rem 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
        }

        /* Info Bar - Desktop only */
        .nav-info-bar {
          display: none;
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          font-size: 0.8rem;
          box-shadow: 0 4px 12px rgba(139, 90, 43, 0.2);
          animation: slideDownIn 0.6s ease-out;
        }

        @keyframes slideDownIn {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 1024px) {
          .nav-info-bar {
            display: flex;
          }
        }

        .nav-info-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          width: 100%;
        }

        .nav-info-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.95);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          font-weight: 500;
          padding: 0.3rem 0.6rem;
          border-radius: 0.4rem;
        }

        .nav-info-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(4px);
        }

        .nav-info-item svg {
          font-size: 0.8rem;
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Main Navbar */
        .nav-main {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0.875rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          width: 100%;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          text-decoration: none;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInScale 0.6s ease-out;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .nav-logo:hover {
          transform: translateY(-3px);
        }

        .nav-logo-img {
          height: 2.75rem;
          width: auto;
          object-fit: contain;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 8px rgba(139, 90, 43, 0.1));
        }

        .nav-container.scrolled .nav-logo-img {
          height: 2.25rem;
        }

        .nav-logo-text {
          display: none;
          flex-direction: column;
          gap: 0.1rem;
        }

        @media (min-width: 640px) {
          .nav-logo-text {
            display: flex;
          }
        }

        .nav-logo-brand {
          font-family: 'Playfair Display', serif;
          font-size: clamp(0.95rem, 2vw, 1.25rem);
          font-weight: 700;
          background: linear-gradient(135deg, #8B5A2B 0%, #D4A574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.3px;
          transition: all 0.3s ease;
        }

        .nav-logo-sub {
          font-size: 0.65rem;
          color: #D4A574;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
        }

        /* Desktop Menu */
        .nav-desktop {
          display: none;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
        }

        @media (min-width: 1024px) {
          .nav-desktop {
            display: flex;
            animation: fadeInSlideUp 0.6s ease-out 0.1s both;
          }
        }

        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link {
          padding: 0.6rem 1.2rem;
          color: #8B5A2B;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0.5rem;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: -1;
        }

        .nav-link:hover {
          color: #D4A574;
          background: rgba(212, 165, 116, 0.08);
          transform: translateY(-2px);
        }

        .nav-link:hover::before {
          transform: translateX(0);
        }

        /* Underline animation */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0.4rem;
          left: 1.2rem;
          right: 1.2rem;
          height: 2px;
          background: linear-gradient(90deg, #D4A574, #C29562);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* CTA Button */
        .nav-cta {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          border-radius: 0.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          white-space: nowrap;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.25);
          position: relative;
          overflow: hidden;
          animation: fadeInScale 0.6s ease-out 0.2s both;
        }

        @media (min-width: 1024px) {
          .nav-cta {
            display: flex;
          }
        }

        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        .nav-cta:hover::before {
          transform: translateX(100%);
        }

        .nav-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.35);
        }

        .nav-cta:active {
          transform: translateY(-1px);
        }

        .nav-cta svg {
          font-size: 1rem;
        }

        /* Mobile Menu Button */
        .nav-mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.1), transparent);
          color: #D4A574;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
          border-radius: 0.5rem;
        }

        @media (min-width: 1024px) {
          .nav-mobile-toggle {
            display: none;
          }
        }

        .nav-mobile-toggle:hover {
          transform: scale(1.1);
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.2), rgba(212, 165, 116, 0.1));
        }

        .nav-mobile-toggle:active {
          transform: scale(0.95);
        }

        /* Mobile Menu */
        .nav-mobile {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #FFFFFF 0%, #FCF4ED 100%);
          z-index: 40;
          overflow-y: auto;
          padding-top: 5.5rem;
          animation: slideInFromTop 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-mobile.open {
          display: block;
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-mobile-content {
          padding: 1rem;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-mobile-item {
          padding: 0.875rem 1.125rem;
          color: #8B5A2B;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 0.625rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
          position: relative;
          overflow: hidden;
          border-left: 3px solid transparent;
        }

        .nav-mobile-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(212, 165, 116, 0.08), transparent);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        .nav-mobile-item:hover {
          color: #D4A574;
          border-left-color: #D4A574;
          transform: translateX(8px);
          background: rgba(212, 165, 116, 0.06);
        }

        .nav-mobile-item:hover::before {
          transform: translateX(0);
        }

        .nav-mobile-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #E8D4C4, transparent);
          margin: 1rem 0;
          animation: expandWidth 0.6s ease-out;
        }

        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        .nav-mobile-info {
          padding: 1rem 1.125rem;
          background: rgba(212, 165, 116, 0.05);
          border-radius: 0.625rem;
          margin-bottom: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          border: 1px solid #E8D4C4;
        }

        .nav-mobile-info-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #8B5A2B;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .nav-mobile-info-item svg {
          font-size: 0.9rem;
          color: #D4A574;
          flex-shrink: 0;
        }

        .nav-mobile-cta {
          margin-top: 1rem;
          padding: 0.95rem 1.125rem;
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          border-radius: 0.625rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.25);
          animation: scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
          text-transform: uppercase;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .nav-mobile-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.35);
        }

        .nav-mobile-cta:active {
          transform: scale(0.98);
        }

        .nav-mobile-cta svg {
          font-size: 1rem;
        }

        /* Responsive */
        @media (max-width: 1023px) {
          .nav-main {
            padding: 0.75rem 1rem;
            gap: 1rem;
          }

          .nav-logo-img {
            height: 2.5rem;
          }

          .nav-container.scrolled .nav-logo-img {
            height: 2rem;
          }
        }

        @media (max-width: 639px) {
          .nav-main {
            padding: 0.625rem 0.75rem;
            gap: 0.75rem;
          }

          .nav-logo-img {
            height: 2.25rem;
          }

          .nav-container.scrolled .nav-logo-img {
            height: 1.875rem;
          }

          .nav-logo-brand {
            font-size: 0.95rem;
          }

          .nav-mobile-content {
            padding: 0.75rem;
          }

          .nav-mobile-item {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .nav-mobile-info {
            padding: 0.875rem 1rem;
            gap: 0.625rem;
            margin-bottom: 0.625rem;
          }

          .nav-mobile-cta {
            padding: 0.875rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
        {/* Info Bar - Desktop only */}
        <div className="nav-info-bar">
          <div className="nav-info-content">
            <a 
              href="https://www.google.com/maps/search/31+Rue+de+la+Gare,+68540+BOLLWILLER"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-info-item"
            >
              <FaMapMarkerAlt />
              <span>31 Rue de la Gare, 68540 BOLLWILLER</span>
            </a>
            <a 
              href="tel:0986289676"
              className="nav-info-item"
            >
              <FaPhone />
              <span>09 86 28 96 76</span>
            </a>
            <div className="nav-info-item" style={{ cursor: 'default' }}>
              <FaClock />
              <span>Lun-Dim: 11h-22h</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="nav-main">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img 
              src="/images/logo originale.png" 
              alt="Italia Express Logo" 
              className="nav-logo-img"
            />
            <div className="nav-logo-text">
              <span className="nav-logo-brand">Italia Express</span>
              <span className="nav-logo-sub">Pizzeria</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="nav-desktop">
            <Link to="/" className="nav-link" onClick={closeMenu}>
               Accueil
            </Link>
            <Link to="/pizzas" className="nav-link" onClick={closeMenu}>
               Pizzas
            </Link>
            <Link to="/menu" className="nav-link" onClick={closeMenu}>
               Menu
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
               Contact
            </Link>
          </div>

          {/* CTA Button */}
          <a href="tel:0986289676" className="nav-cta" onClick={closeMenu}>
            <FaPhone /> COMMANDER
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="nav-mobile-toggle"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
          <div className="nav-mobile-content">
            {/* Navigation Items */}
            <Link to="/" className="nav-mobile-item" onClick={closeMenu}>
               Accueil
            </Link>
            <Link to="/pizzas" className="nav-mobile-item" onClick={closeMenu}>
               Nos Pizzas
            </Link>
            <Link to="/menu" className="nav-mobile-item" onClick={closeMenu}>
               Carte Complète
            </Link>
            <Link to="/contact" className="nav-mobile-item" onClick={closeMenu}>
               Contact
            </Link>

            <div className="nav-mobile-divider" />

            {/* Info Section */}
            <div className="nav-mobile-info">
              <a 
                href="tel:0986289676" 
                className="nav-mobile-info-item"
                onClick={closeMenu}
              >
                <FaPhone />
                <span>09 86 28 96 76</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/31+Rue+de+la+Gare,+68540+BOLLWILLER"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-mobile-info-item"
              >
                <FaMapMarkerAlt />
                <span>Rue de la Gare, Bollwiller</span>
              </a>
              <div className="nav-mobile-info-item">
                <FaClock />
                <span>Lun-Dim: 11h-22h</span>
              </div>
            </div>

            {/* CTA Button */}
            <a href="tel:0986289676" className="nav-mobile-cta" onClick={closeMenu}>
              <FaPhone /> Commander
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;