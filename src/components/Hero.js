import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative h-96 md:h-[600px] bg-cover bg-center bg-fixed flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(220,38,38,0.25), rgba(220,38,38,0.15)), url('/images/image%20de%20fond.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl">
      </div>
    </section>
  );
};

export default Hero;
