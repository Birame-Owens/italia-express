import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaClock, FaCheckCircle } from 'react-icons/fa';
import { restaurantInfo } from '../data/menuData';

/**
 * Page Contact Améliorée - Italia Express
 * Design moderne avec palette dorée/beige
 */
const Contact = () => {

  return (
    <>
      <Helmet>
        <title>Nous Contacter - Italia Express Bollwiller</title>
        <meta name="description" content="Contactez Italia Express Bollwiller. Téléphone, adresse, horaires et localisation sur Google Maps." />
        <meta name="keywords" content="contact, téléphone, adresse, horaires, Bollwiller, Italia Express" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-page {
          background: linear-gradient(135deg, #F5EBE0 0%, #FCF4ED 50%, #F5EBE0 100%);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
        }

        /* Hero Section */
        .contact-hero {
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          padding: clamp(3rem, 8vw, 5rem) 1.5rem;
          text-align: center;
          box-shadow: 0 8px 32px rgba(139, 90, 43, 0.2);
          animation: slideInDown 0.6s ease-out;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .contact-hero p {
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          max-width: 700px;
          margin: 0 auto;
          opacity: 0.95;
          line-height: 1.7;
        }

        /* Main Content */
        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(2rem, 4vw, 3.5rem) 1.5rem;
        }

        /* Grid Layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 4vw, 3rem);
          margin-bottom: 3rem;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Info Cards Column */
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: clamp(1.5rem, 3vw, 2rem);
        }

        .contact-card {
          background: white;
          border-radius: 1rem;
          padding: clamp(1.5rem, 3vw, 2rem);
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.1);
          border: 2px solid #E8D4C4;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .contact-card:nth-child(1) { animation-delay: 0.1s; }
        .contact-card:nth-child(2) { animation-delay: 0.2s; }
        .contact-card:nth-child(3) { animation-delay: 0.3s; }
        .contact-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(139, 90, 43, 0.2);
          border-color: #D4A574;
        }

        /* Phone Card - Highlighted */
        .contact-card.phone-card {
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          border: 2px solid #C29562;
          position: relative;
          overflow: hidden;
        }

        .contact-card.phone-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1), transparent);
          pointer-events: none;
        }

        .contact-card.phone-card:hover {
          box-shadow: 0 12px 40px rgba(139, 90, 43, 0.35);
        }

        .contact-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .contact-card-icon {
          font-size: clamp(1.5rem, 3vw, 2rem);
          width: clamp(50px, 8vw, 60px);
          height: clamp(50px, 8vw, 60px);
          background: rgba(212, 165, 116, 0.15);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-card.phone-card .contact-card-icon {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .contact-card:hover .contact-card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .contact-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 700;
          color: #8B5A2B;
          margin-bottom: 0.75rem;
          letter-spacing: -0.2px;
        }

        .contact-card.phone-card h3 {
          color: rgba(255, 255, 255, 0.95);
        }

        .contact-card p {
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .contact-card.phone-card p {
          color: rgba(255, 255, 255, 0.9);
        }

        .contact-card-value {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 700;
          color: #D4A574;
          margin-bottom: 0.75rem;
        }

        .contact-card.phone-card .contact-card-value {
          color: white;
        }

        .contact-card a {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: clamp(0.6rem, 1.5vw, 0.8rem) clamp(1rem, 2vw, 1.3rem);
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          text-decoration: none;
          border-radius: 0.625rem;
          font-weight: 600;
          font-size: clamp(0.8rem, 1.5vw, 0.9rem);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(139, 90, 43, 0.2);
        }

        .contact-card.phone-card a {
          background: white;
          color: #D4A574;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }

        .contact-card a:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(139, 90, 43, 0.3);
        }

        /* Hours Display */
        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #E8D4C4;
        }

        .hours-item:last-child {
          border-bottom: none;
        }

        .hours-label {
          font-weight: 600;
          color: #8B5A2B;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        .hours-time {
          font-weight: 700;
          color: #D4A574;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: clamp(40px, 8vw, 50px);
          height: clamp(40px, 8vw, 50px);
          border-radius: 50%;
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 600;
          border: 2px solid transparent;
        }

        .social-btn:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 6px 15px rgba(139, 90, 43, 0.3);
        }

        /* Map Section */
        .contact-map-section {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.15);
          border: 2px solid #E8D4C4;
          animation: fadeInUp 0.6s ease-out 0.5s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .map-header {
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          padding: 1.25rem 1.5rem;
          font-family: 'Playfair Display', serif;
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .contact-map-section iframe {
          width: 100%;
          height: clamp(300px, 50vw, 500px);
          border: none;
          display: block;
        }

        /* CTA Section */
        .contact-cta {
          background: linear-gradient(135deg, #D4A574 0%, #C29562 100%);
          color: white;
          padding: clamp(2rem, 5vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
          border-radius: 1rem;
          margin-bottom: 3rem;
          animation: slideInUp 0.6s ease-out;
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

        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .cta-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.3px;
        }

        .cta-content p {
          font-size: clamp(0.9rem, 1.8vw, 1.1rem);
          margin-bottom: 1.5rem;
          opacity: 0.95;
          line-height: 1.7;
        }

        .cta-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        .cta-feature svg {
          flex-shrink: 0;
          font-size: 1.2rem;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: clamp(0.85rem, 2vw, 1.1rem) clamp(1.5rem, 3vw, 2rem);
          background: white;
          color: #D4A574;
          text-decoration: none;
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: clamp(0.9rem, 1.8vw, 1.05rem);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.95);
        }

        /* Benefits Section */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(1.5rem, 3vw, 2rem);
          margin-top: 3rem;
        }

        .benefit-card {
          background: white;
          padding: clamp(1.75rem, 3vw, 2.25rem);
          border-radius: 1rem;
          border: 2px solid #E8D4C4;
          box-shadow: 0 4px 15px rgba(139, 90, 43, 0.08);
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .benefit-card:nth-child(1) { animation-delay: 0.1s; }
        .benefit-card:nth-child(2) { animation-delay: 0.2s; }
        .benefit-card:nth-child(3) { animation-delay: 0.3s; }

        .benefit-card:hover {
          border-color: #D4A574;
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(139, 90, 43, 0.15);
        }

        .benefit-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          font-weight: 700;
          color: #8B5A2B;
          margin-bottom: 0.75rem;
        }

        .benefit-card p {
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          color: #666;
          line-height: 1.6;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-container {
            padding: clamp(1.5rem, 3vw, 2.5rem) 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact-hero {
            padding: 2rem 1rem;
          }

          .contact-cards {
            gap: 1.25rem;
          }

          .contact-card {
            padding: 1.25rem 1rem;
          }

          .social-links {
            gap: 0.5rem;
          }

          .cta-grid {
            gap: 1.25rem;
          }

          .cta-buttons {
            gap: 0.75rem;
          }
        }
      `}</style>

      <div className="contact-page">
        {/* Hero Section */}
       

        {/* Main Content */}
        <div className="contact-container">
          {/* Contact Grid */}
          <div className="contact-grid">
            {/* Info Cards */}
            <div className="contact-cards">
              {/* Phone Card - Highlighted */}
              <div 
                className="contact-card phone-card"
              >
                <div className="contact-card-header">
                  <div className="contact-card-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h3>Téléphone Direct</h3>
                    <p>Contactez-nous immédiatement</p>
                  </div>
                </div>
                <div className="contact-card-value">
                  {restaurantInfo.phone}
                </div>
                <a href={`tel:${restaurantInfo.phone}`}>
                  <FaPhone /> Appeler
                </a>
              </div>

              {/* Address Card */}
              <div className="contact-card">
                <div className="contact-card-header">
                  <div className="contact-card-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3>Localisation</h3>
                    <p>Visitez notre restaurant</p>
                  </div>
                </div>
                <div className="contact-card-value" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#666' }}>
                  {restaurantInfo.address}
                </div>
                <a href={`https://www.google.com/maps/search/${restaurantInfo.address}`} target="_blank" rel="noopener noreferrer">
                  <FaMapMarkerAlt /> Google Maps
                </a>
              </div>

              {/* Hours Card */}
              <div className="contact-card">
                <div className="contact-card-header">
                  <div className="contact-card-icon">
                    <FaClock />
                  </div>
                  <h3>Horaires d'Ouverture</h3>
                </div>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="hours-label">Lun - Ven</span>
                    <span className="hours-time">{restaurantInfo.hours?.weekday || '11h - 22h'}</span>
                  </div>
                  <div className="hours-item">
                    <span className="hours-label">Sam - Dim</span>
                    <span className="hours-time">{restaurantInfo.hours?.weekend || '12h - 23h'}</span>
                  </div>
                </div>
              </div>

              {/* Social Card */}
              <div className="contact-card">
                <div className="contact-card-header">
                  <div className="contact-card-icon">
                    <FaInstagram />
                  </div>
                  <h3>Suivez-Nous</h3>
                </div>
                <p>Découvrez nos actualités et promotions exclusives</p>
                <div className="social-links">
                  <a 
                    href={restaurantInfo.social?.facebook || '#'} 
                    className="social-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Facebook Italia Express"
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href={`https://instagram.com/${restaurantInfo.social?.instagram || ''}`}
                    className="social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram Italia Express"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="contact-map-section">
              <div className="map-header">
                <FaMapMarkerAlt /> Nous Localiser
              </div>
              <iframe
                title="Italia Express Location - Google Maps"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.5677215627503!2d${restaurantInfo.coordinates?.lng || 7.0755}!3d${restaurantInfo.coordinates?.lat || 47.7528}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47917885b2cb60e9%3A0xd070bf611fc48b1a!2sItalia%20Express!5e0!3m2!1sfr!2sfr!4v1644764000000`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="contact-cta">
            <div className="cta-grid">
              <div className="cta-content">
                <h2>Prêt à Commander ?</h2>
                <p>
                  Nous proposons plusieurs modes de commande pour plus de facilité. Choisissez celui qui vous convient et dégustez nos délicieuses pizzas !
                </p>
                <div className="cta-features">
                  <div className="cta-feature">
                    <FaCheckCircle />
                    <span>Commande par téléphone immédiate</span>
                  </div>
                  <div className="cta-feature">
                    <FaCheckCircle />
                    <span>Livraison rapide en moins de 30 minutes</span>
                  </div>
                  <div className="cta-feature">
                    <FaCheckCircle />
                    <span>Qualité garantie et ingrédients premium</span>
                  </div>
                </div>
              </div>
              <div className="cta-buttons">
                <a href={`tel:${restaurantInfo.phone}`} className="cta-btn">
                  <FaPhone /> Appeler Maintenant
                </a>
                <a 
                  href={`https://www.google.com/maps/search/${restaurantInfo.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
                >
                  <FaMapMarkerAlt /> Nous Visiter
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>✨ Qualité</h3>
              <p>Tous nos ingrédients sont sélectionnés avec soin et proviennent des meilleurs fournisseurs italiens.</p>
            </div>
            <div className="benefit-card">
              <h3>⚡ Rapidité</h3>
              <p>Nous respectons nos délais de livraison. Vos pizzas arrivent chaudes et fraîches à chaque commande.</p>
            </div>
            <div className="benefit-card">
              <h3>👨‍🍳 Professionnalisme</h3>
              <p>Notre équipe est formée et passionnée par les pizzas authentiques italiennes traditionnelles.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;