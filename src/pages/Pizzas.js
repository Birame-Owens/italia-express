import React from 'react';
import { Helmet } from 'react-helmet-async';
import PizzaCard from '../components/PizzaCard';
import { nosPizzas } from '../data/menuData';
import { FaPhone } from 'react-icons/fa';

/**
 * Page Pizzas Améliorée
 * Design moderne avec palette dorée/beige
 * Conserve la logique existante
 */
const Pizzas = () => {
  return (
    <>
      <Helmet>
        <title>Nos Pizzas - Italia Express Bollwiller</title>
        <meta name="description" content="Découvrez toutes nos délicieuses pizzas authentiques préparées avec passion" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .pizzas-page {
          background: linear-gradient(135deg, #F5EBE0 0%, #FCF4ED 50%, #F5EBE0 100%);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
        }

        /* Main Content */
        .pizzas-wrapper {
          max-width: 1600px;
          margin: 0 auto;
          padding: clamp(1.5rem, 3vw, 2.5rem) clamp(0.75rem, 2vw, 1.5rem);
        }

        .pizzas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: clamp(1.25rem, 2.5vw, 2rem);
          animation: fadeIn 0.6s ease-out;
          margin-bottom: clamp(2rem, 4vw, 3.5rem);
        }

        @keyframes fadeIn {
          from { 
            opacity: 0;
          }
          to { 
            opacity: 1;
          }
        }

        .pizzas-grid > * {
          animation: scaleInCard 0.5s ease-out;
          animation-fill-mode: both;
        }

        .pizzas-grid > :nth-child(1) { animation-delay: 0.05s; }
        .pizzas-grid > :nth-child(2) { animation-delay: 0.1s; }
        .pizzas-grid > :nth-child(3) { animation-delay: 0.15s; }
        .pizzas-grid > :nth-child(n+4) { animation-delay: 0.2s; }

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
          .pizzas-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: clamp(1rem, 2vw, 1.75rem);
          }
        }

        @media (max-width: 768px) {
          .pizzas-wrapper {
            padding: clamp(1.25rem, 2vw, 1.75rem) clamp(0.75rem, 1.5vw, 1rem);
          }

          .pizzas-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: clamp(1rem, 1.5vw, 1.5rem);
          }
        }

        @media (max-width: 480px) {
          .pizzas-wrapper {
            padding: 1.25rem 0.75rem;
          }

          .pizzas-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        /* CTA Section */
        .pizzas-cta-section {
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          padding: clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 3vw, 2.5rem);
          margin: clamp(1.5rem, 3vw, 3rem) clamp(0.75rem, 2vw, 1.5rem) 0;
          border-radius: clamp(0.75rem, 2vw, 1.25rem);
          text-align: center;
          box-shadow: 0 12px 40px rgba(139, 90, 43, 0.25);
          position: relative;
          overflow: hidden;
          animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
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

        /* Decorative background */
        .pizzas-cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .pizzas-cta-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Decorative line above title */
        .pizzas-cta-line {
          width: clamp(40px, 8vw, 100px);
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          margin: 0 auto 1rem;
          border-radius: 2px;
          animation: expandWidth 0.6s ease-out 0.2s both;
        }

        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: clamp(40px, 8vw, 100px);
            opacity: 1;
          }
        }

        .pizzas-cta-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 5vw, 2.8rem);
          color: white;
          margin: 0 0 clamp(0.75rem, 1.5vw, 1.25rem) 0;
          letter-spacing: -0.5px;
          font-weight: 700;
          animation: fadeInDown 0.6s ease-out 0.1s both;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pizzas-cta-content p {
          font-size: clamp(0.85rem, 1.8vw, 1.05rem);
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: clamp(1.25rem, 2.5vw, 1.75rem);
          line-height: 1.7;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pizzas-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.4rem, 1vw, 0.75rem);
          padding: clamp(0.8rem, 2vw, 1.15rem) clamp(1.5rem, 3vw, 2.5rem);
          background: white;
          color: #D4A574;
          font-size: clamp(0.85rem, 1.8vw, 1.05rem);
          font-weight: 700;
          letter-spacing: 0.3px;
          border-radius: clamp(0.5rem, 1vw, 0.875rem);
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
          animation: scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
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

        .pizzas-cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(212, 165, 116, 0.1);
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .pizzas-cta-btn:hover::before {
          left: 100%;
        }

        .pizzas-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.98);
          color: #8B5A2B;
        }

        .pizzas-cta-btn:active {
          transform: translateY(-2px);
        }

        .pizzas-cta-btn svg {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          animation: slideRightIn 0.6s ease-out 0.4s both;
        }

        @keyframes slideRightIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .pizzas-cta-section {
            margin: clamp(1rem, 2vw, 1.5rem) clamp(0.75rem, 1.5vw, 1rem) 0;
            padding: clamp(2rem, 4vw, 3rem) clamp(1rem, 2vw, 1.5rem);
          }

          .pizzas-cta-content h2 {
            font-size: clamp(1.3rem, 4vw, 2rem);
          }

          .pizzas-cta-content p {
            font-size: clamp(0.8rem, 1.5vw, 0.95rem);
          }

          .pizzas-cta-btn {
            width: fit-content;
            padding: clamp(0.7rem, 1.5vw, 0.95rem) clamp(1.25rem, 2.5vw, 2rem);
          }
        }

        @media (max-width: 480px) {
          .pizzas-cta-section {
            margin: 1rem 0.75rem 0;
            padding: 1.75rem 1rem;
            border-radius: 0.75rem;
          }

          .pizzas-cta-line {
            margin: 0 auto 0.75rem;
          }

          .pizzas-cta-content h2 {
            font-size: 1.4rem;
            margin-bottom: 0.6rem;
          }

          .pizzas-cta-content p {
            font-size: 0.85rem;
            margin-bottom: 1.25rem;
            line-height: 1.6;
          }

          .pizzas-cta-btn {
            width: 100%;
            padding: 0.75rem 1.25rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="pizzas-page">
        <div className="pizzas-wrapper">
          {/* Pizza Grid */}
          <div className="pizzas-grid">
            {nosPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="pizzas-cta-section">
          <div className="pizzas-cta-content">
            <div className="pizzas-cta-line" />
            <h2>Prêt à vous régaler ?</h2>
            <p>
              Commandez maintenant par téléphone. Livraison ou à emporter en moins de 30 minutes.
            </p>
            <a href="tel:0986289676" className="pizzas-cta-btn">
              <FaPhone /> 09 86 28 96 76
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pizzas;