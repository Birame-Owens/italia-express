import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import OfferCard from '../components/OfferCard';
import { FaMapMarkerAlt, FaPhone, FaChevronRight, FaUtensils, FaClock, FaTruck } from 'react-icons/fa';
import { offres, restaurantInfo } from '../data/menuData';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Italia Express Bollwiller - Pizzeria Authentique</title>
        <meta name="description" content="Italia Express Bollwiller - Restaurant de pizzas authentiques. Découvrez nos meilleures pizzas, pâtes et desserts." />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;600&display=swap');

        :root {
          --primary: #8B5A2B;
          --secondary: #D4A574;
          --bg-light: #FCF4ED;
          --text-dark: #2C2C2C;
          --text-muted: #666;
        }

        .home-container {
          font-family: 'Inter', sans-serif;
          color: var(--text-dark);
          background-color: white;
        }

        /* --- Global Sections --- */
        .section-padding {
          padding: 100px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* --- Alternating Grid Layout --- */
        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 40px;
        }

        .image-wrapper {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          aspect-ratio: 4/5;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .image-wrapper:hover img {
          transform: scale(1.08);
        }

        /* --- Cards & Features --- */
        .feature-box {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--primary);
          font-size: 0.9rem;
        }

        /* --- Buttons --- */
        .btn-modern {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: var(--primary);
          color: white;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
          box-shadow: 0 10px 20px rgba(139, 90, 43, 0.2);
        }

        .btn-modern:hover {
          transform: translateY(-3px);
          background: var(--secondary);
          box-shadow: 0 15px 30px rgba(139, 90, 43, 0.3);
        }

        /* --- Offers Grid --- */
        .offers-bg {
          background: var(--bg-light);
          border-radius: 50px;
          margin: 0 20px;
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        /* --- Contact Cards --- */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .c-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid #eee;
          text-align: center;
          transition: 0.3s;
        }

        .c-card:hover {
          border-color: var(--secondary);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .c-icon {
          font-size: 2rem;
          color: var(--secondary);
          margin-bottom: 20px;
        }

        /* --- Responsive Logic --- */
        @media (max-width: 968px) {
          .split-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .order-mobile-first {
            order: -1;
          }

          .order-mobile-last {
            order: 1;
          }

          .section-padding {
            padding: 60px 20px;
          }

          .image-wrapper {
            aspect-ratio: 16/9;
          }
        }
      `}</style>

      <div className="home-container">
        <Hero />

        {/* Section 1: About (Image Gauche) */}
        <section className="section-padding container">
          <div className="split-grid">
            <div className="image-wrapper order-mobile-last">
              <img loading="lazy" src="/images/accueil italia express.png" alt="Intérieur Restaurant" />
            </div>
            <div className="content-side">
              <span style={{ color: '#D4A574', fontWeight: 700, letterSpacing: 2 }}>AUTHENTIQUE</span>
              <h2 className="section-title">Pourquoi Italia Express ?</h2>
              <p style={{ lineHeight: 1.8, color: '#666', marginBottom: 20 }}>
                Depuis des années, nous ravissons les papilles des habitants de Bollwiller avec nos pizzas authentiques. 
                Chaque pâte est pétrie avec amour et chaque ingrédient est sélectionné pour sa fraîcheur.
              </p>
              <div className="feature-box">
                <div className="feature-tag"><FaUtensils /> Ingrédients d'Italie</div>
                <div className="feature-tag"><FaTruck /> Livraison Express</div>
                <div className="feature-tag"><FaClock /> Tradition Artisanale</div>
              </div>
              <a href="/pizzas" className="btn-modern">Découvrir la carte <FaChevronRight /></a>
            </div>
          </div>
        </section>

        {/* Section 2: Offres (Pleine largeur) */}
        <div className="offers-bg section-padding">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 50 }}>
              <h2 className="section-title">Nos Offres Spéciales</h2>
              <p>Le meilleur de l'Italie au meilleur prix</p>
            </div>
            <div className="offers-grid">
              {offres.slice(0, 3).map(offer => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Tiramisu (Image Droite) */}
        <section className="section-padding container">
          <div className="split-grid">
            <div className="content-side">
              <span style={{ color: '#D4A574', fontWeight: 700 }}>DOUCEUR ITALIENNE</span>
              <h2 className="section-title">L'Incontournable Tiramisu</h2>
              <p style={{ lineHeight: 1.8, color: '#666' }}>
                Notre Tiramisu n'est pas juste un dessert, c'est une promesse de voyage. 
                Fait maison chaque matin avec un mascarpone onctueux et un café espresso de caractère.
              </p>
              <ul style={{ listStyle: 'none', padding: '20px 0', color: '#555' }}>
                <li style={{ marginBottom: 10 }}>✓ Recette secrète de la Nonna</li>
                <li style={{ marginBottom: 10 }}>✓ Sans conservateurs, 100% frais</li>
              </ul>
              <a href="/menu" className="btn-modern">Côté Sucré <FaChevronRight /></a>
            </div>
            <div className="image-wrapper order-mobile-first">
              <img loading="lazy" src="/images/tiramisu.webp" alt="Tiramisu Maison" />
            </div>
          </div>
        </section>

        {/* Section 4: Pâtes (Image Gauche) */}
        <section className="section-padding container" style={{ background: '#fdfdfd' }}>
          <div className="split-grid">
            <div className="image-wrapper">
              <img loading="lazy" src="/images/pates.jpeg" alt="Pâtes Italiennes" />
            </div>
            <div className="content-side">
              <span style={{ color: '#D4A574', fontWeight: 700 }}>LA PASTA</span>
              <h2 className="section-title">Nos Pâtes Fraîches</h2>
              <p style={{ lineHeight: 1.8, color: '#666' }}>
                Carbonara crémeuse, Bolognaise mijotée pendant des heures ou fruits de mer... 
                Nous apportons la diversité de l'Italie dans votre assiette à Bollwiller.
              </p>
              <div style={{ margin: '30px 0' }}>
                <a href="tel:0986289676" className="btn-modern" style={{ background: 'transparent', border: '2px solid #8B5A2B', color: '#8B5A2B' }}>
                  <FaPhone /> Commander maintenant
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Contact */}
        <section className="section-padding container">
          <div className="contact-grid">
            <div className="c-card">
              <FaMapMarkerAlt className="c-icon" />
              <h3>Nous trouver</h3>
              <p>{restaurantInfo.address}</p>
            </div>
            <div className="c-card">
              <FaPhone className="c-icon" />
              <h3>Nous appeler</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>{restaurantInfo.phone}</p>
            </div>
            <div className="c-card" style={{ background: 'var(--primary)', color: 'white' }}>
              <FaClock className="c-icon" style={{ color: 'white' }} />
              <h3>Horaires</h3>
              <p>Ouvert 7j/7<br />11h30 - 14h00 / 18h00 - 22h00</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;