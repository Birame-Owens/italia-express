import React from 'react';

const OfferCard = ({ offer }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 md:p-7 rounded-lg shadow-sm hover:shadow-md transition-all hover:border-primary/50">
      <div className="mb-3 text-center">
        <div className="inline-block w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">
          {offer.number}
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">{offer.title}</h3>
      <p className="text-center text-sm md:text-base text-gray-600 mb-3 font-medium">{offer.description}</p>
      {offer.note && <p className="text-xs text-gray-500 text-center bg-gray-50 p-2 md:p-3 rounded-md">{offer.note}</p>}
    </div>
  );
};

export default OfferCard;
