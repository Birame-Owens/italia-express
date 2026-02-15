import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import OfferCard from '../components/OfferCard';
import { FaMapMarkerAlt, FaPhone, FaChevronRight } from 'react-icons/fa';
import { offres, restaurantInfo } from '../data/menuData';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Italia Express Bollwiller - Pizzeria Authentique</title>
        <meta name="description" content="Italia Express Bollwiller - Restaurant de pizzas authentiques. Découvrez nos meilleures pizzas, pâtes et desserts." />
        <meta name="keywords" content="pizzeria, pizza, bollwiller, italia express, restaurant" />
        <meta property="og:title" content="Italia Express Bollwiller" />
        <meta property="og:description" content="Authentique pizzeria à Bollwiller" />
        <meta property="og:type" content="website" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        .home-container {
          background: linear-gradient(135deg, #F5EBE0 0%, #FCF4ED 50%, #F5EBE0 100%);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        /* Section Base Styles */
        .home-section {
          padding: 4rem 1.5rem;
        }

        .home-section-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* About Section */
        .about-section {
          background: white;
          border-bottom: 2px solid #E8D4C4;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-image {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          aspect-ratio: 4/3;
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.15);
          border: 3px solid #E8D4C4;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .about-image:hover img {
          transform: scale(1.03);
        }

        .about-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8B5A2B 0%, #D4A574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .about-intro {
          font-size: 0.85rem;
          font-weight: 700;
          color: #8B5A2B;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 0.75rem;
        }

        .about-desc {
          font-size: 1rem;
          color: #666;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1rem;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.25);
          animation: bounceIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.5) rotateZ(-45deg);
          }
          70% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateZ(0);
          }
        }

        .feature-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          animation: fadeInSlideRight 0.6s ease-out;
          animation-fill-mode: both;
        }

        .feature-item:nth-child(1) { animation-delay: 0.1s; }
        .feature-item:nth-child(2) { animation-delay: 0.2s; }
        .feature-item:nth-child(3) { animation-delay: 0.3s; }
        .feature-item:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeInSlideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .feature-item:hover .feature-icon {
          animation: pulse 0.6s ease-in-out;
          transform: scale(1.1);
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 15px rgba(139, 90, 43, 0.25); }
          50% { box-shadow: 0 8px 25px rgba(139, 90, 43, 0.4); }
        }

        .feature-content h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #2C2C2C;
          margin: 0 0 0.25rem 0;
        }

        .feature-content p {
          font-size: 0.85rem;
          color: #777;
          margin: 0;
          line-height: 1.5;
        }

        .about-cta {
          display: inline-block;
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          padding: 1rem 2.25rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.25);
          position: relative;
          overflow: hidden;
          animation: slideUpIn 0.6s ease-out 0.5s both;
        }

        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.25);
          transition: left 0.4s ease;
        }

        .about-cta:hover::before {
          left: 100%;
        }

        .about-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.35);
        }

        /* Offers Section */
        .offers-section {
          background: linear-gradient(135deg, #FAF8F3 0%, #FCF4ED 100%);
          border-bottom: 2px solid #E8D4C4;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8B5A2B 0%, #D4A574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.3px;
        }

        .section-header p {
          color: #8B5A2B;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.75rem;
        }

        /* Specialty Sections (Tiramisu, Pâtes) */
        .specialty-section {
          background: white;
          border-bottom: 2px solid #E8D4C4;
        }

        .specialty-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .specialty-image {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          aspect-ratio: 1;
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.15);
          border: 3px solid #E8D4C4;
        }

        .specialty-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .specialty-image:hover img {
          transform: scale(1.03);
        }

        .specialty-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8B5A2B 0%, #D4A574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 1rem 0;
          letter-spacing: -0.3px;
        }

        .specialty-intro {
          font-size: 0.8rem;
          font-weight: 700;
          color: #8B5A2B;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 0.5rem;
        }

        .specialty-desc {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.8;
          margin-bottom: 1.75rem;
        }

        .specialty-box {
          background: #F9F7F4;
          border: 2px solid #E8D4C4;
          padding: 1.5rem;
          border-radius: 1rem;
          margin-bottom: 1.75rem;
        }

        .specialty-box h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #2C2C2C;
          margin: 0 0 1rem 0;
        }

        .specialty-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: #666;
        }

        .specialty-list li {
          display: flex;
          gap: 0.75rem;
        }

        .specialty-list strong {
          color: #2C2C2C;
          font-weight: 600;
        }

        .specialty-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .specialty-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .specialty-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          transition: left 0.3s ease;
        }

        .specialty-btn:hover::before {
          left: 100%;
        }

        .specialty-btn-primary {
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.25);
        }

        .specialty-btn-primary::before {
          background: rgba(255, 255, 255, 0.2);
        }

        .specialty-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.35);
        }

        .specialty-btn-secondary {
          background: white;
          color: #8B5A2B;
          border: 2px solid #D4A574;
          box-shadow: 0 2px 8px rgba(139, 90, 43, 0.1);
        }

        .specialty-btn-secondary::before {
          background: rgba(139, 90, 43, 0.05);
        }

        .specialty-btn-secondary:hover {
          background: #D4A574;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.25);
        }

        /* Contact Section */
        .contact-section {
          background: linear-gradient(135deg, #FAF8F3 0%, #FCF4ED 100%);
          border-bottom: 2px solid #E8D4C4;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .contact-card {
          background: white;
          border: 3px solid #E8D4C4;
          border-radius: 1rem;
          padding: 1.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInScale 0.6s ease-out;
          animation-fill-mode: both;
        }

        .contact-cards > :nth-child(1) { animation-delay: 0.1s; }
        .contact-cards > :nth-child(2) { animation-delay: 0.2s; }
        .contact-cards > :nth-child(3) { animation-delay: 0.3s; }

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

        .contact-card:hover {
          border-color: #D4A574;
          box-shadow: 0 12px 32px rgba(139, 90, 43, 0.15);
          transform: translateY(-4px);
        }

        .contact-card-header {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.25);
          transition: all 0.3s ease;
        }

        .contact-card:hover .contact-icon {
          transform: scale(1.15) rotate(10deg);
          box-shadow: 0 8px 24px rgba(139, 90, 43, 0.35);
        }

        .contact-card h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #2C2C2C;
          margin: 0;
        }

        .contact-card-content {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .contact-card-link {
          display: inline-block;
          color: #8B5A2B;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .contact-card-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #D4A574, #C29562);
          transition: width 0.3s ease;
        }

        .contact-card-link:hover::after {
          width: 100%;
        }

        .contact-card-link:hover {
          transform: translateX(4px);
        }

        /* About Section */
        .final-about-section {
          background: white;
          border-bottom: 2px solid #E8D4C4;
        }

        .about-box {
          background: linear-gradient(135deg, #FAF8F3 0%, #FCF4ED 100%);
          border: 2px solid #E8D4C4;
          border-radius: 1rem;
          padding: 2.5rem;
        }

        .about-box p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.8;
          margin: 0 0 1.25rem 0;
        }

        .about-box p:last-child {
          margin-bottom: 0;
        }

        .about-box strong {
          color: #8B5A2B;
          font-weight: 700;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .about-grid,
          .specialty-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-content h2,
          .specialty-content h2 {
            font-size: 1.75rem;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }

          .specialty-box {
            padding: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .home-section {
            padding: 2.5rem 1rem;
          }

          .about-content h2,
          .specialty-content h2 {
            font-size: 1.5rem;
          }

          .section-header h2 {
            font-size: 1.25rem;
          }

          .about-desc,
          .specialty-desc {
            font-size: 0.9rem;
          }

          .about-grid,
          .specialty-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .specialty-grid > div:nth-child(1) {
            order: -1 !important;
          }

          .specialty-actions {
            flex-direction: row;
          }

          .specialty-actions > * {
            flex: 1;
          }

          .about-box {
            padding: 1.75rem;
          }

          .about-box p {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }

          .offers-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .home-section {
            padding: 2rem 0.75rem;
          }

          .about-content h2,
          .specialty-content h2 {
            font-size: 1.25rem;
          }

          .section-header h2 {
            font-size: 1.1rem;
          }

          .section-header p {
            font-size: 0.85rem;
          }

          .features-list {
            gap: 1rem;
          }

          .about-desc,
          .specialty-desc {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .feature-content h3,
          .contact-card h3 {
            font-size: 0.9rem;
          }

          .feature-content p {
            font-size: 0.8rem;
          }

          .specialty-box {
            padding: 1rem;
          }

          .specialty-list {
            font-size: 0.8rem;
            gap: 0.5rem;
          }

          .specialty-actions {
            flex-direction: column;
            gap: 0.5rem;
          }

          .specialty-actions > * {
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
          }

          .offers-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-cards {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .contact-card {
            padding: 1.25rem;
          }

          .specialty-intro {
            font-size: 0.75rem;
          }

          .specialty-box h3 {
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
          }
        }
      `}</style>

      <Hero />

      {/* About Section */}
      <section className="home-section about-section">
        <div className="home-section-content">
          <div className="about-grid">
            <div className="about-image">
              <img src="/images/accueil italia express.png" alt="Italia Express Bollwiller" />
            </div>
            <div className="about-content">
              <p className="about-intro">Notre Restaurant</p>
              <h2>Pourquoi Italia Express ?</h2>
              <p className="about-desc">
                Depuis des années, nous ravissons les papilles des habitants de Bollwiller avec nos pizzas authentiques et nos pâtes traditionnelles. Notre engagement envers la qualité n'a jamais varié.
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h3>Recettes Authentiques</h3>
                    <p>Inspirées de la tradition italienne, utilisant les meilleurs ingrédients directement importés d'Italie.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h3>Qualité Premium</h3>
                    <p>Produits frais et de haute qualité pour chaque pizza que nous préparons.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h3>Livraison Rapide</h3>
                    <p>Votre pizza chaude et fraîche en moins de 30 minutes directement chez vous.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h3>Savoir-Faire</h3>
                    <p>Pizzaïolos expérimentés qui préparent chaque pizza avec passion et précision.</p>
                  </div>
                </div>
              </div>
              <a href="/pizzas" className="about-cta">Découvrir Nos Pizzas</a>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="home-section offers-section">
        <div className="home-section-content">
          <div className="section-header">
            <h2>Nos Offres Spéciales</h2>
            <p>Des avantages exclusifs pour vous</p>
          </div>
          <div className="offers-grid">
            {offres.slice(2).map(offer => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Tiramisu Section */}
      <section className="home-section specialty-section">
        <div className="home-section-content">
          <div className="specialty-grid">
            <div className="specialty-image">
              <img src="/images/tiramisu.webp" alt="Tiramisu - Dessert délicieux" />
            </div>
            <div className="specialty-content">
              <p className="specialty-intro">Nos Desserts</p>
              <h2>Nos Tiramisu</h2>
              <p className="specialty-desc">
                Découvrez notre Tiramisu traditionnel italien, préparé avec les meilleurs ingrédients. Mascarpone crémeux, biscuits à la cuillère, café espresso et cacao.
              </p>
              <div className="specialty-box">
                <h3>Caractéristiques</h3>
                <ul className="specialty-list">
                  <li><strong>•</strong> Recette authentique italienne</li>
                  <li><strong>•</strong> Ingrédients frais et sélectionnés</li>
                  <li><strong>•</strong> Préparation artisanale</li>
                </ul>
              </div>
              <div className="specialty-actions">
                <a href="/menu" className="specialty-btn specialty-btn-primary">
                  Voir tous les Desserts <FaChevronRight />
                </a>
                <a href="tel:0986289676" className="specialty-btn specialty-btn-secondary">
                  📞 Commander
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pâtes Section */}
      <section className="home-section specialty-section">
        <div className="home-section-content">
          <div className="specialty-grid">
            <div className="specialty-content" style={{ order: 1 }}>
              <p className="specialty-intro">Nos Spécialités</p>
              <h2>Nos Pâtes </h2>
              <p className="specialty-desc">
                Découvrez nos pâtes faites maison, préparées avec soin et servies avec les meilleures sauces. Du classique Carbonara à nos créations spéciales, chaque plat ravira vos papilles.
              </p>
              <div className="specialty-box">
                <h3>Nos Pâtes Populaires</h3>
                <ul className="specialty-list">
                  <li><strong>Carbonara</strong> - Classique italienne avec crème et lardons</li>
                  <li><strong>Bolognaise</strong> - Sauce riche à la viande</li>
                  <li><strong>Fruits de Mer</strong> - Gourmande et savoureuse</li>
                </ul>
              </div>
              <div className="specialty-actions">
                <a href="/menu" className="specialty-btn specialty-btn-primary">
                  Voir notre Carte <FaChevronRight />
                </a>
                <a href="tel:0986289676" className="specialty-btn specialty-btn-secondary">
                  📞 Commander
                </a>
              </div>
            </div>
            <div className="specialty-image" style={{ order: 2 }}>
              <img src="/images/pates.jpeg" alt="Pâtes - Spécialité maison" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="home-section contact-section">
        <div className="home-section-content">
          <div className="section-header">
            <h2>Nous Contacter</h2>
            <p>Nous sommes disponibles pour répondre à vos questions</p>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Adresse</h3>
              </div>
              <p className="contact-card-content">{restaurantInfo.address}</p>
              <a href={`https://www.google.com/maps/search/${restaurantInfo.address}`} target="_blank" rel="noopener noreferrer" className="contact-card-link">
                Voir sur Google Maps <FaChevronRight style={{ fontSize: '0.7rem' }} />
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <h3>Téléphone</h3>
              </div>
              <p className="contact-card-content">
                <a href={`tel:${restaurantInfo.phone}`} className="contact-card-link" style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>
                  {restaurantInfo.phone}
                </a>
                Appel gratuit
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <h3>Commander</h3>
              </div>
              <a href="tel:0986289676" className="specialty-btn specialty-btn-primary" style={{ marginTop: '0.5rem' }}>
                Appeler Maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final About Section */}
      <section className="home-section final-about-section">
        <div className="home-section-content">
          <div className="section-header">
            <h2>À Propos de Nous</h2>
          </div>
          <div className="about-box">
            <p>
              <strong>Italia Express</strong> est une pizzeria traditionnelle établie à Bollwiller depuis plusieurs années. Notre passion pour la gastronomie italienne nous drive à préparer chaque pizza avec la plus grande attention aux détails.
            </p>
            <p>
              Nous croyons qu'une bonne pizza commence par les meilleurs ingrédients. C'est pourquoi nous sélectionnons soigneusement chaque produit, du fromage mozzarella au sauce tomate, en passant par tous nos garnitures.
            </p>
            <p>
              Notre équipe de pizzaïolos expérimentés maîtrise l'art traditionnel de la fabrication de pizza. Venez découvrir pourquoi nos clients reviennent toujours pour plus !
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;