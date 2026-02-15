import React from 'react';

const PizzaCard = ({ pizza, item }) => {
  const itemData = pizza || item;
  
  if (!itemData) return null;

  // Construire le chemin de l'image en fonction de la catégorie
  const getCategoryFolder = (category) => {
    const categoryMap = {
      'Viandes': 'pizza%20viande',
      'Poisson': 'pizza%20poisson',
      'Végétarienne': 'pizza%20vege',
      'Végé': 'pizza%20vege',
      'Pâtes': 'pizza%20pates',
      'Nouveautés': 'pizza%20nouveautes'
    };
    return categoryMap[category] || 'pizzas';
  };

  // Utiliser le chemin complet si fourni, sinon construire basé sur la catégorie
  const imageUrl = itemData.image?.startsWith('/') 
    ? itemData.image 
    : `/images/${getCategoryFolder(itemData.category)}/${itemData.image}`;

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 group h-full flex flex-col">
      {/* Image Container - Only show if image exists */}
      {itemData.image && (
        <div className="relative w-full h-40 xs:h-44 sm:h-48 md:h-56 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
          <img 
            src={imageUrl}
            alt={itemData.name}
            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}

      {/* Content */}
      <div className="p-3 xs:p-3.5 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="mb-1.5 sm:mb-2.5">
          <span className="inline-block bg-gradient-to-r from-primary to-red-600 text-white text-xs font-bold px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full shadow-md">
            {itemData.category}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-black text-gray-900 mb-1.5 xs:mb-2 leading-tight">{itemData.name}</h3>
        
        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 mb-3 xs:mb-3.5 sm:mb-4 leading-relaxed flex-1 line-clamp-2 xs:line-clamp-3">
          {itemData.description}
        </p>

        {/* Prices Section */}
        <div className="bg-gradient-to-r from-primary/5 to-red-50 rounded-lg sm:rounded-xl p-2.5 xs:p-3 sm:p-3.5 md:p-4 mb-2.5 xs:mb-3 sm:mb-4 border border-primary/10">
          <div className="grid grid-cols-2 gap-1.5 xs:gap-2 sm:gap-3">
            {itemData.price1 && (
              <div className="text-center bg-white rounded py-1.5 xs:py-2 sm:py-2.5 md:py-3 px-2 shadow-sm">
                <p className="text-xs font-bold text-gray-600 mb-0.5 xs:mb-1">1 pers.</p>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-black text-primary">{itemData.price1.toFixed(2)}€</p>
              </div>
            )}
            {itemData.price2 && (
              <div className="text-center bg-white rounded py-1.5 xs:py-2 sm:py-2.5 md:py-3 px-2 shadow-sm">
                <p className="text-xs font-bold text-gray-600 mb-0.5 xs:mb-1">2 pers.</p>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-black text-primary">{itemData.price2.toFixed(2)}€</p>
              </div>
            )}
            {!itemData.price2 && itemData.price && (
              <div className="text-center bg-white rounded py-1.5 xs:py-2 sm:py-2.5 md:py-3 px-2 shadow-sm col-span-2">
                <p className="text-xs font-bold text-gray-600 mb-0.5 xs:mb-1">Prix</p>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-black text-primary">{itemData.price?.toFixed(2)}€</p>
              </div>
            )}
          </div>
        </div>

        {/* Ingredients Note */}
        <div className="border-t border-gray-100 pt-2 xs:pt-2.5">
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
            <span className="font-bold text-gray-700">Ingrédients:</span> {itemData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
