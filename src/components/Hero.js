import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Italia Express';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative h-96 md:h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(220,38,38,0.3), rgba(220,38,38,0.2)), url('/images/fond.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl">
        <style>{`
          .hero-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            letter-spacing: 2px;
            margin: 0;
            min-height: 1.2em;
          }
          
          .hero-cursor {
            display: inline-block;
            width: 3px;
            height: 1em;
            background: white;
            margin-left: 4px;
            animation: blink 1s infinite;
          }
          
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          
          .hero-subtitle {
            font-size: clamp(1rem, 2.5vw, 1.3rem);
            color: rgba(255, 255, 255, 0.9);
            margin-top: 1.5rem;
            font-weight: 500;
            letter-spacing: 1px;
            animation: fadeInUp 0.8s ease-out 0.5s both;
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
        `}</style>
        <h1 className="hero-title">
          {displayedText}
          {displayedText.length < fullText.length && <span className="hero-cursor"></span>}
        </h1>
        <p className="hero-subtitle">Découvrez nos délicieuses pizzas authentiques</p>
      </div>
    </section>
  );
};

export default Hero;
