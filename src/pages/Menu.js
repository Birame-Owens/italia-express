import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PizzaCard from '../components/PizzaCard';
import { FaPhone } from 'react-icons/fa';
import {
  nosPizzas,
  nosPates,
  nosSalades,
  nosDesserts,
  nosBoissons,
  restaurantInfo
} from '../data/menuData';

/**
 * Page Menu Améliorée - Italia Express
 * Design moderne avec palette dorée/beige
 * Conserve la logique existante
 */
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // URL Hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const validCategories = ['pizzas', 'pates', 'salades', 'desserts', 'boissons', 'carte'];
      if (hash && validCategories.includes(hash)) {
        setActiveCategory(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const categories = {
    pizzas: { items: nosPizzas, icon: '🍕' },
    pates: { items: nosPates, icon: '🍝' },
    salades: { items: nosSalades, icon: '🥗' },
    desserts: { items: nosDesserts, icon: '🍰' },
    boissons: {
      items: [
        { id: 'boissons-title-1', name: 'Sans Alcool', isTitle: true, icon: '🥤' },
        ...nosBoissons.sans_alcool,
        { id: 'boissons-title-2', name: 'Avec Alcool', isTitle: true, icon: '🍷' },
        ...nosBoissons.alcool
      ],
      icon: '🥤'
    }
  };

  const tabCategories = [
    { id: 'pizzas', name: 'Pizzas', image: '/images/lien/pizza.webp' },
    { id: 'pates', name: 'Pâtes', image: '/images/lien/pate.webp' },
    { id: 'salades', name: 'Salades', image: '/images/SALADE%20MONTAGNARDE.webp' },
    { id: 'desserts', name: 'Desserts', image: '/images/lien/dessert.webp' },
    { id: 'boissons', name: 'Boissons', image: '/images/lien/boisson.webp' },
    { id: 'carte', name: 'Carte', isEmoji: true, emoji: '📋' }
  ];

  const items = categories[activeCategory]?.items || [];

  return (
    <>
      <Helmet>
        <title>Notre Carte - Italia Express Bollwiller</title>
        <meta name="description" content="Découvrez notre menu : pizzas, pâtes, salades, desserts et boissons" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #D4A574;
          --primary-light: #C29562;
          --primary-dark: #8B5A2B;
          --beige-light: #F5EBE0;
          --beige: #FCF4ED;
          --beige-border: #E8D4C4;
          --dark: #2C2C2C;
          --text-secondary: #666;
        }

        body {
          font-family: 'Inter', sans-serif;
          color: var(--dark);
        }

        .menu-page {
          background: linear-gradient(135deg, var(--beige-light) 0%, var(--beige) 50%, var(--beige-light) 100%);
          min-height: 100vh;
        }

        /* Sticky Tabs */
        .menu-tabs-container {
          position: sticky;
          top: 0;
          background: white;
          z-index: 100;
          padding: clamp(0.75rem, 2vw, 1.25rem) clamp(0.75rem, 2vw, 1.5rem);
          box-shadow: ${scrolled ? '0 8px 24px rgba(139, 90, 43, 0.15)' : 'none'};
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 2px solid var(--beige-border);
        }

        .menu-tabs {
          display: flex;
          gap: clamp(1rem, 3vw, 2.5rem);
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1600px;
          margin: 0 auto;
          align-items: center;
        }

        .menu-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.4rem, 1vw, 0.7rem);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          background: transparent;
          padding: 0.5rem;
          text-decoration: none;
          outline: none;
        }

        .menu-tab-circle {
          width: clamp(60px, 12vw, 90px);
          height: clamp(60px, 12vw, 90px);
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--beige-border);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(139, 90, 43, 0.1);
        }

        .menu-tab-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .menu-tab:hover .menu-tab-circle {
          border-color: var(--primary);
          box-shadow: 0 8px 20px rgba(139, 90, 43, 0.2);
          transform: scale(1.08);
        }

        .menu-tab.active .menu-tab-circle {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.3), 0 8px 25px rgba(139, 90, 43, 0.2);
          transform: scale(1.1);
        }

        .menu-tab-label {
          font-size: clamp(0.65rem, 1.5vw, 0.85rem);
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .menu-tab:hover .menu-tab-label {
          color: var(--primary-dark);
        }

        .menu-tab.active .menu-tab-label {
          color: var(--primary-dark);
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .menu-tabs-container {
            padding: clamp(0.75rem, 1.5vw, 1rem);
          }

          .menu-tabs {
            gap: clamp(0.75rem, 2vw, 1.8rem);
          }
        }

        @media (max-width: 480px) {
          .menu-tabs-container {
            padding: 0.75rem 0.5rem;
          }

          .menu-tabs {
            gap: 1rem;
          }

          .menu-tab-label {
            font-size: 0.65rem;
            display: none;
          }
        }

        /* Main Content */
        .menu-wrapper {
          max-width: 1600px;
          margin: 0 auto;
          padding: clamp(1.75rem, 3vw, 2.5rem) clamp(0.75rem, 2vw, 1.5rem);
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: clamp(1.5rem, 2.5vw, 2rem);
          animation: fadeInGrid 0.6s ease-out;
          margin-bottom: clamp(2rem, 4vw, 3rem);
        }

        @keyframes fadeInGrid {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .menu-grid > * {
          animation: scaleInCard 0.4s ease-out;
          animation-fill-mode: both;
        }

        .menu-grid > :nth-child(1) { animation-delay: 0.05s; }
        .menu-grid > :nth-child(2) { animation-delay: 0.1s; }
        .menu-grid > :nth-child(3) { animation-delay: 0.15s; }
        .menu-grid > :nth-child(n+4) { animation-delay: 0.2s; }

        @keyframes scaleInCard {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 1024px) {
          .menu-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: clamp(1.25rem, 2vw, 1.75rem);
          }
        }

        @media (max-width: 768px) {
          .menu-wrapper {
            padding: clamp(1.25rem, 2vw, 1.75rem) clamp(0.75rem, 1.5vw, 1rem);
          }

          .menu-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: clamp(1rem, 1.5vw, 1.5rem);
          }
        }

        @media (max-width: 480px) {
          .menu-wrapper {
            padding: 1rem 0.75rem;
          }

          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        /* Category Title */
        .menu-category-title {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          gap: clamp(0.75rem, 2vw, 1.2rem);
          padding: clamp(1.5rem, 3vw, 2rem) 0;
          margin: clamp(0.5rem, 1vw, 1rem) 0;
          animation: slideInCategory 0.5s ease-out;
        }

        @keyframes slideInCategory {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .menu-category-icon {
          font-size: clamp(2rem, 4vw, 2.8rem);
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .menu-category-info h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          font-weight: 700;
          color: var(--primary-dark);
          margin: 0;
          letter-spacing: -0.3px;
        }

        .menu-category-divider {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-dark), transparent);
        }

        @media (max-width: 480px) {
          .menu-category-title {
            gap: clamp(0.6rem, 1.5vw, 0.8rem);
            padding: clamp(1.25rem, 2vw, 1.5rem) 0;
          }

          .menu-category-divider {
            display: none;
          }
        }

        /* Carte Section */
        .menu-carte-section {
          grid-column: 1 / -1;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          padding: clamp(2rem, 4vw, 2.5rem) clamp(1.5rem, 3vw, 2rem);
          border-radius: clamp(0.75rem, 1.5vw, 1.25rem);
          border: 2px solid var(--primary-dark);
          animation: slideUp 0.6s ease-out;
          box-shadow: 0 8px 24px rgba(139, 90, 43, 0.2);
        }

        .menu-carte-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          color: white;
          margin: 0 0 clamp(1.25rem, 2vw, 1.5rem) 0;
          text-align: center;
          letter-spacing: -0.3px;
          font-weight: 700;
        }

        .menu-carte-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: clamp(1.25rem, 2vw, 1.5rem);
          margin-bottom: clamp(1.25rem, 2vw, 1.5rem);
        }

        .menu-carte-item {
          background: white;
          padding: clamp(1.25rem, 2vw, 1.5rem);
          border-radius: 0.625rem;
          border-left: 4px solid var(--primary-dark);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-carte-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 90, 43, 0.15);
        }

        .menu-carte-item-name {
          font-weight: 700;
          color: var(--primary-dark);
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .menu-carte-item-desc {
          font-size: clamp(0.8rem, 1.3vw, 0.85rem);
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .menu-carte-item-price {
          font-weight: 700;
          color: var(--primary);
          font-size: clamp(0.85rem, 1.3vw, 0.9rem);
        }

        .menu-carte-info {
          background: rgba(139, 90, 43, 0.95);
          color: white;
          padding: clamp(1.5rem, 3vw, 2rem);
          border-radius: 0.75rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: clamp(1.25rem, 2vw, 1.5rem);
          margin-top: clamp(1.25rem, 2vw, 1.5rem);
        }

        .menu-carte-info-item h3 {
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          font-weight: 700;
          margin: 0 0 0.75rem 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .menu-carte-info-item p {
          font-size: clamp(0.8rem, 1.3vw, 0.9rem);
          margin: 0.35rem 0;
          line-height: 1.6;
          opacity: 0.95;
        }

        .menu-carte-info-item a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .menu-carte-info-item a:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .menu-carte-section {
            padding: clamp(1.5rem, 2.5vw, 1.75rem);
          }

          .menu-carte-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: clamp(1rem, 1.5vw, 1.25rem);
          }

          .menu-carte-info {
            grid-template-columns: 1fr;
            gap: clamp(1rem, 1.5vw, 1.25rem);
            padding: clamp(1.25rem, 2vw, 1.5rem);
          }
        }

        @media (max-width: 480px) {
          .menu-carte-section {
            padding: clamp(1.25rem, 2vw, 1.5rem);
            border-radius: 0.75rem;
            margin-bottom: 1.5rem;
          }

          .menu-carte-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .menu-carte-title {
            font-size: 1.3rem;
            margin-bottom: 1.25rem;
          }

          .menu-carte-item {
            padding: 1.25rem;
          }

          .menu-carte-info {
            grid-template-columns: 1fr;
            padding: 1.25rem;
          }
        }

        /* CTA Section */
        .menu-cta {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: white;
          padding: clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 3vw, 2.5rem);
          margin: clamp(2rem, 4vw, 3rem) clamp(0.75rem, 2vw, 1.5rem) 0;
          border-radius: clamp(0.75rem, 1.5vw, 1.25rem);
          text-align: center;
          box-shadow: 0 12px 40px rgba(139, 90, 43, 0.25);
          position: relative;
          overflow: hidden;
          animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .menu-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1), transparent);
          pointer-events: none;
        }

        .menu-cta h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: white;
          margin: 0 0 clamp(0.75rem, 1.5vw, 1rem) 0;
          letter-spacing: -0.3px;
          position: relative;
          z-index: 1;
        }

        .menu-cta p {
          font-size: clamp(0.9rem, 2vw, 1rem);
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: clamp(1.5rem, 2.5vw, 1.75rem);
          line-height: 1.7;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
        }

        .menu-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 1vw, 0.75rem);
          padding: clamp(0.8rem, 2vw, 1.1rem) clamp(1.5rem, 3vw, 2.8rem);
          background: white;
          color: var(--primary);
          font-size: clamp(0.85rem, 1.8vw, 1rem);
          font-weight: 700;
          letter-spacing: 0.3px;
          border: none;
          border-radius: clamp(0.5rem, 1vw, 0.75rem);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          text-decoration: none;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .menu-cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(212, 165, 116, 0.1);
          transition: left 0.3s ease;
        }

        .menu-cta-btn:hover::before {
          left: 100%;
        }

        .menu-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.98);
          color: var(--primary-dark);
        }

        .menu-cta-btn:active {
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .menu-cta {
            margin: clamp(1.5rem, 3vw, 2rem) clamp(0.75rem, 1.5vw, 1rem) 0;
            padding: clamp(2rem, 3.5vw, 2.5rem) clamp(1rem, 2vw, 1.5rem);
          }

          .menu-cta h2 {
            font-size: clamp(1.3rem, 3vw, 1.6rem);
          }

          .menu-cta p {
            font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          }

          .menu-cta-btn {
            padding: clamp(0.7rem, 1.5vw, 0.95rem) clamp(1.25rem, 2.5vw, 2rem);
          }
        }

        @media (max-width: 480px) {
          .menu-cta {
            margin: 1rem 0.75rem 0;
            padding: 1.75rem 1rem;
            border-radius: 0.75rem;
          }

          .menu-cta h2 {
            font-size: 1.35rem;
            margin-bottom: 0.6rem;
          }

          .menu-cta p {
            font-size: 0.85rem;
            margin-bottom: 1.25rem;
          }

          .menu-cta-btn {
            width: 100%;
            padding: 0.75rem 1.25rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="menu-page">
        {/* Circular Navigation Links */}
        <div className="menu-tabs-container">
          <div className="menu-tabs">
            {tabCategories.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`menu-tab ${activeCategory === tab.id ? 'active' : ''}`}
              >
                <div className="menu-tab-circle" style={tab.isEmoji ? { display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)' } : {}}>
                  {tab.isEmoji ? tab.emoji : <img src={tab.image} alt={tab.name} />}
                </div>
                <span className="menu-tab-label">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="menu-wrapper">
          {/* Menu Grid or PDF Section */}
          <div className="menu-grid">
            {activeCategory === 'carte' ? (
              <div className="menu-carte-section">
                <h1 className="menu-carte-title">Notre Carte Complète</h1>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(1.5rem, 2.5vw, 2rem)', width: '100%' }}>
                  <img src="/images/carte1 .png" alt="Carte 1" style={{ width: '100%', height: 'auto', borderRadius: '0.625rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
                  <img src="/images/carte2.png" alt="Carte 2" style={{ width: '100%', height: 'auto', borderRadius: '0.625rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
                </div>
              </div>
            ) : (
              items.map(item => {
                if (item.isTitle) {
                  return (
                    <div key={item.id} className="menu-category-title">
                      <div className="menu-category-icon">{item.icon}</div>
                      <div className="menu-category-info">
                        <h2>{item.name}</h2>
                      </div>
                      <div className="menu-category-divider" />
                    </div>
                  );
                }
                return <PizzaCard key={item.id} pizza={item} />;
              })
            )}
          </div>
        </div>

        {/* CTA Section */}
        <section className="menu-cta">
          <h2>Prêt à vous régaler ?</h2>
          <p>Appelez-nous dès maintenant. Livraison à domicile ou à emporter en moins de 30 minutes dans toute la région.</p>
          <a href="tel:0986289676" className="menu-cta-btn">
            <FaPhone /> 09 86 28 96 76
          </a>
        </section>
      </div>
    </>
  );
};

export default Menu;