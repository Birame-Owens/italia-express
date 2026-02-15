import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaChevronRight, FaClock, FaEnvelope } from 'react-icons/fa';
import { restaurantInfo } from '../data/menuData';

/**
 * Footer Amélioré - Italia Express
 * Design moderne avec palette dorée/beige
 * Responsive et dynamique
 */
const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
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

        /* Main Footer Container */
        .footer-container {
          background: linear-gradient(135deg, #2C2C2C 0%, #3A3A3A 100%);
          color: #fff;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          margin-top: 4rem;
        }

        /* Decorative Background */
        .footer-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        /* Main Footer Content */
        .footer-main {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(2rem, 4vw, 3.5rem) 1.5rem;
          position: relative;
          z-index: 1;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: clamp(1.5rem, 3vw, 3rem);
          margin-bottom: 2rem;
        }

        .footer-section {
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .footer-section:nth-child(1) { animation-delay: 0.1s; }
        .footer-section:nth-child(2) { animation-delay: 0.2s; }
        .footer-section:nth-child(3) { animation-delay: 0.3s; }
        .footer-section:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          font-weight: 700;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #D4A574 0%, #FAF8F3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.3px;
        }

        /* Brand Section */
        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-logo {
          width: clamp(120px, 20vw, 150px);
          height: auto;
          margin-bottom: 0.75rem;
          filter: brightness(1.1) drop-shadow(0 2px 8px rgba(212, 165, 116, 0.2));
          transition: all 0.3s ease;
        }

        .footer-brand-logo:hover {
          filter: brightness(1.2) drop-shadow(0 4px 12px rgba(212, 165, 116, 0.4));
          transform: translateY(-2px);
        }

        .footer-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 700;
          background: linear-gradient(135deg, #D4A574 0%, #FAF8F3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.5px;
        }

        .footer-brand-desc {
          color: #AAA;
          font-size: clamp(0.8rem, 1.5vw, 0.9rem);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        /* CTA Button */
        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          padding: clamp(0.65rem, 2vw, 0.8rem) clamp(1.2rem, 3vw, 1.5rem);
          border-radius: 0.625rem;
          font-weight: 700;
          font-size: clamp(0.8rem, 1.5vw, 0.9rem);
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          width: fit-content;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.25);
          position: relative;
          overflow: hidden;
          animation: slideUpIn 0.6s ease-out 0.3s both;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        .footer-cta-btn:hover::before {
          transform: translateX(100%);
        }

        .footer-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.35);
        }

        .footer-cta-btn:active {
          transform: translateY(-1px);
        }

        /* Social Links */
        .footer-socials {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          animation: slideRightIn 0.6s ease-out 0.4s both;
        }

        @keyframes slideRightIn {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .social-link {
          width: clamp(40px, 8vw, 45px);
          height: clamp(40px, 8vw, 45px);
          border-radius: 50%;
          background: rgba(212, 165, 116, 0.15);
          border: 1.5px solid rgba(212, 165, 116, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D4A574;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: clamp(0.8rem, 2vw, 1rem);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .social-link:hover::before {
          opacity: 1;
        }

        .social-link:hover {
          border-color: #D4A574;
          color: white;
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 20px rgba(212, 165, 116, 0.3);
        }

        /* Navigation List */
        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: clamp(0.5rem, 2vw, 0.75rem);
        }

        .footer-nav-list a {
          color: #AAA;
          font-size: clamp(0.8rem, 1.5vw, 0.9rem);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          padding: 0.3rem 0;
        }

        .footer-nav-list a::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #D4A574, #C29562);
          transition: width 0.3s ease;
        }

        .footer-nav-list a:hover {
          color: #D4A574;
          transform: translateX(4px);
        }

        .footer-nav-list a:hover::before {
          width: 100%;
        }

        .footer-nav-list a::after {
          content: '→';
          opacity: 0;
          transform: translateX(-5px);
          transition: all 0.3s ease;
        }

        .footer-nav-list a:hover::after {
          opacity: 1;
          transform: translateX(0);
        }

        /* Info Items */
        .footer-info-item {
          display: flex;
          gap: 0.875rem;
          margin-bottom: clamp(1rem, 2vw, 1.25rem);
          align-items: flex-start;
        }

        .footer-info-icon {
          color: white;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          flex-shrink: 0;
          width: clamp(32px, 6vw, 40px);
          height: clamp(32px, 6vw, 40px);
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(212, 165, 116, 0.2);
          transition: all 0.3s ease;
        }

        .footer-info-item:hover .footer-info-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 4px 12px rgba(212, 165, 116, 0.3);
        }

        .footer-info-content {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .footer-info-label {
          color: #888;
          font-size: clamp(0.7rem, 1.2vw, 0.8rem);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .footer-info-value {
          color: #FFF;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          font-weight: 500;
          line-height: 1.4;
        }

        .footer-info-value a {
          color: #D4A574;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-info-value a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #D4A574;
          transition: width 0.3s ease;
        }

        .footer-info-value a:hover {
          opacity: 0.8;
        }

        .footer-info-value a:hover::after {
          width: 100%;
        }

        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(212, 165, 116, 0.2);
          padding: clamp(1.25rem, 3vw, 1.75rem) 1.5rem;
          background: rgba(0, 0, 0, 0.4);
          position: relative;
          z-index: 1;
          animation: fadeIn 0.8s ease-out 0.6s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .footer-bottom-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          align-items: center;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-bottom-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            text-align: auto;
          }
        }

        .footer-copyright {
          color: #666;
          font-size: clamp(0.75rem, 1.2vw, 0.85rem);
        }

        .footer-copyright strong {
          color: #D4A574;
          font-weight: 600;
        }

        .footer-credit {
          color: #666;
          font-size: clamp(0.75rem, 1.2vw, 0.85rem);
        }

        .footer-credit a {
          color: #D4A574;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .footer-credit a:hover {
          color: #FAF8F3;
        }

        /* Mobile Expandable Sections */
        .footer-section-toggle {
          display: none;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          user-select: none;
          margin-bottom: 0.75rem;
        }

        @media (max-width: 767px) {
          .footer-section-toggle {
            display: flex;
          }

          .footer-section-toggle svg {
            transition: transform 0.3s ease;
            font-size: 0.8rem;
            color: #D4A574;
          }

          .footer-section-toggle.expanded svg {
            transform: rotate(90deg);
          }

          .footer-content {
            display: none;
            animation: expandDown 0.3s ease-out;
          }

          .footer-content.expanded {
            display: block;
          }

          @keyframes expandDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        @media (min-width: 768px) {
          .footer-content {
            display: block !important;
          }
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .footer-main {
            padding: clamp(1.5rem, 3vw, 2.5rem) 1rem;
          }

          .footer-grid {
            gap: clamp(1.25rem, 2vw, 2rem);
            margin-bottom: 1.5rem;
          }

          .footer-bottom {
            padding: clamp(1rem, 2vw, 1.5rem) 1rem;
          }

          .footer-bottom-content {
            padding: 0 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            padding: 1.5rem 0.75rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .footer-section h3 {
            margin-bottom: 0.75rem;
            font-size: 0.95rem;
          }

          .footer-cta-btn {
            width: 100%;
            padding: 0.7rem 1rem;
          }

          .footer-nav-list {
            gap: 0.5rem;
          }

          .footer-info-item {
            margin-bottom: 0.875rem;
          }

          .footer-bottom {
            padding: 1rem 0.75rem;
          }

          .footer-copyright,
          .footer-credit {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <footer className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-section footer-brand">
              <img 
                src="/images/logo originale.png" 
                alt="Italia Express Logo" 
                className="footer-brand-logo"
              />
              <h2 className="footer-brand-name">Italia Express</h2>
              <p className="footer-brand-desc">
                Pizzeria authentique à Bollwiller. Qualité premium, saveurs italiennes authentiques et livraison rapide en moins de 30 minutes.
              </p>
              <a href="tel:0986289676" className="footer-cta-btn">
                <FaPhone /> Commander
              </a>
              <div className="footer-socials">
                <a 
                  href={restaurantInfo.social?.facebook || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link" 
                  title="Facebook"
                  aria-label="Facebook Italia Express"
                >
                  <FaFacebook />
                </a>
                <a 
                  href={`https://instagram.com/${restaurantInfo.social?.instagram || ''}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link" 
                  title="Instagram"
                  aria-label="Instagram Italia Express"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="footer-section">
              <div 
                className={`footer-section-toggle ${expandedSection === 'nav' ? 'expanded' : ''}`}
                onClick={() => toggleSection('nav')}
                role="button"
                tabIndex={0}
              >
                <h3 style={{ margin: 0 }}>Navigation</h3>
                <FaChevronRight />
              </div>
              <div className={`footer-content ${expandedSection === 'nav' ? 'expanded' : ''}`}>
                <ul className="footer-nav-list">
                  <li><a href="/">Accueil</a></li>
                  <li><a href="/pizzas">Nos Pizzas</a></li>
                  <li><a href="/menu">Carte Complète</a></li>
                  <li><a href="/contact">Nous Contacter</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="footer-section">
              <div 
                className={`footer-section-toggle ${expandedSection === 'contact' ? 'expanded' : ''}`}
                onClick={() => toggleSection('contact')}
                role="button"
                tabIndex={0}
              >
                <h3 style={{ margin: 0 }}>Contact</h3>
                <FaChevronRight />
              </div>
              <div className={`footer-content ${expandedSection === 'contact' ? 'expanded' : ''}`}>
                <div className="footer-info-item">
                  <div className="footer-info-icon">
                    <FaPhone />
                  </div>
                  <div className="footer-info-content">
                    <span className="footer-info-label">Téléphone</span>
                    <span className="footer-info-value">
                      <a href={`tel:${restaurantInfo.phone}`}>
                        {restaurantInfo.phone}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="footer-info-item">
                  <div className="footer-info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="footer-info-content">
                    <span className="footer-info-label">Adresse</span>
                    <span className="footer-info-value">
                      <a 
                        href={`https://www.google.com/maps/search/${restaurantInfo.address}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {restaurantInfo.address}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Section */}
            <div className="footer-section">
              <div 
                className={`footer-section-toggle ${expandedSection === 'hours' ? 'expanded' : ''}`}
                onClick={() => toggleSection('hours')}
                role="button"
                tabIndex={0}
              >
                <h3 style={{ margin: 0 }}>Horaires</h3>
                <FaChevronRight />
              </div>
              <div className={`footer-content ${expandedSection === 'hours' ? 'expanded' : ''}`}>
                <div className="footer-info-item">
                  <div className="footer-info-icon">
                    <FaClock />
                  </div>
                  <div className="footer-info-content">
                    <span className="footer-info-label">Lun - Ven</span>
                    <span className="footer-info-value">
                      {restaurantInfo.hours?.weekday || '11h - 22h'}
                    </span>
                  </div>
                </div>
                <div className="footer-info-item">
                  <div className="footer-info-icon">
                    <FaClock />
                  </div>
                  <div className="footer-info-content">
                    <span className="footer-info-label">Sam - Dim</span>
                    <span className="footer-info-value">
                      {restaurantInfo.hours?.weekend || '12h - 23h'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; 2026 <strong>Italia Express Bollwiller</strong> — Tous droits réservés.
            </p>
            <p className="footer-credit">
              Développé par <a href="mailto:birameowensdiop@gmail.com">Birame Owens Diop</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;