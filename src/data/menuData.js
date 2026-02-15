// Menu Data for Italia Express
export const restaurantInfo = {
  name: 'Italia Express',
  address: '31 Rue de la Gare, 68540 BOLLWILLER',
  phone: '09 86 28 96 76',
  email: 'contact@italiaexpress.com',
  hours: {
    weekday: '11:00 - 22:00',
    weekend: '11:00 - 23:00'
  },
  social: {
    facebook: 'https://www.facebook.com/italiaexpress',
    instagram: 'italiaexpress'
  },
  coordinates: {
    lat: 47.8580556,
    lng: 7.2652778
  }
};

// Pizzas - Viandes (Meat)
export const pizzasViandes = [
  {
    id: 'margherita',
    name: 'MARGHERITA',
    category: 'Viandes',
    description: 'Tomate, mozzarella',
    price1: 10.00,
    price2: 16.00,
    image: '/images/margherita-pizza.jpg'
  },
  {
    id: 'regina',
    name: 'REGINA',
    category: 'Viandes',
    description: 'Tomate, mozzarella, champignons, jambon',
    price1: 12.00,
    price2: 18.00,
    image: '/images/REGINA pizza.jpg'
  },
  {
    id: 'vesuvio',
    name: 'VESUVIO',
    category: 'Viandes',
    description: 'Tomate, mozzarella, chorizo, merguez, piment',
    price1: 13.50,
    price2: 19.50,
    image: 'PIZZA-VESUVIO.jpeg'
  },
  {
    id: 'buffalo',
    name: 'BUFFALO',
    category: 'Viandes',
    description: 'Sauce tomate, crème fraîche, mozzarella, oignons, champignons, viande de boeuf cuisinée, sauce barbecue',
    price1: 13.50,
    price2: 19.50,
    image: 'Buffalo-Chicken-Pizza-1.jpg'
  },
  {
    id: 'chicken-cheese',
    name: 'CHICKEN CHEESE',
    category: 'Viandes',
    description: 'Crème fraîche, mozzarella, Gorgonzola, chèvre, poulet mariné',
    price1: 13.50,
    price2: 19.50,
    image: 'chicken-cheese-pizza-.jpg'
  },
  {
    id: 'kebab',
    name: 'KEBAB',
    category: 'Viandes',
    description: 'Sauce kebab, viande kebab hallal, mozzarella, oignons, tomates fraîches',
    price1: 14.00,
    price2: 20.00,
    image: 'pizza kebab.webp'
  },
  {
    id: 'italia',
    name: 'ITALIA',
    category: 'Viandes',
    description: 'Tomate, mozzarella, Gorgonzola, jambon de Parme, roquette, Grana Padano',
    price1: 14.00,
    price2: 20.00,
    image: 'pizza italia.webp'
  },
  {
    id: 'chevre-miel',
    name: 'CHÈVRE-MIEL',
    category: 'Viandes',
    description: 'Crème fraîche, mozzarella, chèvre, miel, copeaux de parmesan',
    price1: 14.00,
    price2: 20.00,
    image: 'pizza-chevre-miel.jpg'
  },
  {
    id: 'fruits-de-mer',
    name: 'FRUITS DE MER',
    category: 'Viandes',
    description: 'Tomate, mozzarella, fruits de mer, persillade',
    price1: 14.00,
    price2: 20.00,
    image: 'p⁪izza fruit de mer.jpeg'
  },
  {
    id: 'mista',
    name: 'MISTA',
    category: 'Viandes',
    description: 'Tomate, mozzarella, champignons, jambon, lardons, poivrons, oignons, chorizo',
    price1: 14.00,
    price2: 20.00,
    image: 'pizza mista.jpeg'
  },
  {
    id: 'carnivore',
    name: 'CARNIVORE',
    category: 'Viandes',
    description: 'Tomate, mozzarella, jambon, lardons, chorizo, poulet mariné',
    price1: 14.00,
    price2: 20.00,
    image: 'pizza carnivore.webp'
  },
  {
    id: 'burrata',
    name: 'BURRATA',
    category: 'Viandes',
    description: 'Tomate, mozzarella, tomates séchées marinées, jambon cru, roquette, boule de Burrata, vinaigre balsamique',
    price1: 14.50,
    price2: 20.50,
    image: 'pizza burrata.webp'
  },
  {
    id: 'savoyarde',
    name: 'SAVOYARDE',
    category: 'Viandes',
    description: 'Crème, emmental, pommes de terre, lardons, oignons, Reblochon',
    price1: 13.50,
    price2: 19.50,
    image: '/images/pizza savoyarde.webp'
  }
];

// Pizzas - Poisson (Fish)
export const pizzasPoisson = [
  {
    id: 'siciliana',
    name: 'SICILIANA',
    category: 'Poisson',
    description: 'Tomate, mozzarella, anchois, câpres, olives',
    price1: 12.00,
    price2: 18.00,
    image: '/images/pizza poisson/SICILIANA pizza.webp'
  },
  {
    id: 'calzone',
    name: 'CALZONE',
    category: 'Poisson',
    description: 'Tomate, mozzarella, champignons, jambon, oeuf',
    price1: 12.00,
    price2: 12.00,
    image: 'pizza CALZONE.webp'
  },
  {
    id: 'calzone-4-fromages',
    name: 'CALZONE 4 FROMAGES',
    category: 'Poisson',
    description: 'Tomate, mozzarella, Gorgonzola, chèvre, emmental',
    price1: 12.50,
    price2: 18.50,
    image: 'pizza vegetarienne frommage.avif'
  }
];

// Pizzas - Végétarien (Vegetarian)
export const pizzasVege = [
  {
    id: 'vegetarienne',
    name: 'VÉGÉTARIENNE',
    category: 'Végé',
    description: 'Tomate, mozzarella, champignons, poivrons, oignons, artichauts',
    price1: 12.50,
    price2: 18.50,
    image: 'pizza vegetarienne.webp'
  },
  {
    id: '4-fromages',
    name: '4 FROMAGES',
    category: 'Végé',
    description: 'Tomate, mozzarella, Gorgonzola, chèvre, emmental',
    price1: 12.50,
    price2: 18.50,
    image: 'pizza vegetarienne.webp'
  },
  {
    id: 'etna',
    name: 'ETNA',
    category: 'Végé',
    description: 'Tomate, mozzarella, poivrons, salami piquant, oeuf',
    price1: 12.50,
    price2: 18.50,
    image: '/images/pizza etna.webp'
  },
  {
    id: 'creole',
    name: 'CRÉOLE',
    category: 'Végé',
    description: 'Tomate, mozzarella, ananas, poulet, piment',
    price1: 12.50,
    price2: 18.50,
    image: '/images/pizza creole.webp'
  },
  {
    id: '4-saisons',
    name: '4 SAISONS',
    category: 'Végé',
    description: 'Tomate, mozzarella, champignons, jambon, artichauts, olives',
    price1: 12.50,
    price2: 18.50,
    image: 'pizza vegetarienne.webp'
  },
  {
    id: 'orientale',
    name: 'ORIENTALE',
    category: 'Végé',
    description: 'Tomate, mozzarella, merguez, poivrons',
    price1: 12.50,
    price2: 18.50,
    image: '/images/pizza ORIENTALE.webp'
  },
  {
    id: 'indienne',
    name: 'INDIENNE',
    category: 'Végé',
    description: 'Sauce curry, mozzarella, poulet mariné, oignons, poivrons',
    price1: 13.00,
    price2: 19.00,
    image: '/images/pizza indienne.webp'
  }
];

// Pizzas - Nouveautés (New Creations)
export const pizzasNouveautes = [
  {
    id: 'salmonella',
    name: 'SALMONELLA',
    category: 'Nouveautés',
    description: 'Crème fraîche, mozzarella, saumon, oignons',
    price1: 12.50,
    price2: 18.50,
    image: '/images/pizza SALMONELLA.jpeg'
  },
  {
    id: 'pizza-gratinee',
    name: 'PIZZA GRATINÉE',
    category: 'Nouveautés',
    description: 'Crème, emmental, oignons, lardons',
    price1: 13.00,
    price2: 19.00,
    image: '/images/PIZZA GRATINÉE.jpg'
  }
];

// Suppléments
export const supplements = [
  {
    id: 'oeuf',
    name: 'Oeuf',
    price: 0.50,
    icon: '🥚'
  },
  {
    id: 'parme',
    name: 'Jambon de Parme',
    price: 1.50,
    icon: '🍖'
  },
  {
    id: 'salami-piquant',
    name: 'Salami piquant',
    price: 1.50,
    icon: '🌶️'
  },
  {
    id: 'crevettes',
    name: 'Crevettes',
    price: 1.50,
    icon: '🦐'
  },
  {
    id: 'fruits-mer',
    name: 'Fruits de mer',
    price: 1.50,
    icon: '🐚'
  }
];

// Pâtes (Pastas)
export const pates = [
  {
    id: 'carbonara',
    name: 'CARBONARA',
    description: 'Crème fraîche, lardons, jaune d\'oeuf, parmesan',
    price: 11.00,
    image: '/images/patte carbona.webp'
  },
  {
    id: 'bolognaise',
    name: 'BOLOGNAISE',
    description: 'Sauce tomate, viande de boeuf hachée',
    price: 11.00,
    image: '/images/pate bolognaise.jpeg'
  },
  {
    id: '4-fromages',
    name: '4 FROMAGES',
    description: 'Crème fraîche, chèvre, Gorgonzola, emmental, parmesan, gratiné au four',
    price: 11.00,
    image: ''
  },
  {
    id: 'poulet-curry',
    name: 'POULET CURRY',
    description: 'Crème fraîche, champignon, poulet, curry, parmesan',
    price: 11.00,
    image: '/images/pate POULET CURRY.webp'
  },
  {
    id: 'lasagne',
    name: 'LASAGNE',
    description: 'Pâtes, viande hachée, sauce tomate, béchamel, parmesan',
    price: 11.00,
    image: '/images/pate lasagne.webp'
  },
  {
    id: 'saumon',
    name: 'SAUMON',
    description: 'Crème fraîche, saumon, oignon',
    price: 11.00,
    image: '/images/patte saumon.jpg'
  },
  {
    id: 'du-chef',
    name: 'DU CHEF',
    description: 'Crème, bolo, Gorgonzola, chèvre, emmental, parmesan, gratiné au four',
    price: 11.00,
    image: ''
  },
  {
    id: 'creme',
    name: 'CREME',
    description: 'Champignons, jambon, crème, parmesan',
    price: 11.00,
    image: ''
  }
];

// Salades (Salads)
export const salades = [
  {
    id: 'salade-montagnarde',
    name: 'SALADE MONTAGNARDE',
    description: 'Salade verte, lardons grillés, oignons, comté, croûtons',
    price: 7.00,
    image: '/images/SALADE MONTAGNARDE.webp'
  },
  {
    id: 'salade-vigneronne',
    name: 'SALADE VIGNERONNE',
    description: 'Salade verte, oeuf dur, tomates cerises, saucisse, oignons',
    price: 7.00,
    image: '/images/SALADE VIGNERONNE.jpeg'
  }
];

// Desserts
export const desserts = [
  {
    id: 'tiramisu',
    name: 'TIRAMISU MAISON',
    description: 'Tiramisu traditionnel fait maison',
    price: 4.00,
    image: '/images/tiramisu.webp'
  },
  {
    id: 'glaces',
    name: 'GLACES',
    description: 'Sélection de glaces variées',
    price: 3.50,
    image: '/images/GLACES.avif'
  }
];

// Boissons (Drinks)
export const boissons = {
  sans_alcool: [
    {
      id: 'sodas',
      name: 'SODAS',
      description: '33 cl',
      price: 2.00,
      image: '/images/SODAS.webp'
    },
    {
      id: 'eau',
      name: 'EAU',
      description: '50 cl',
      price: 1.50,
      image: '/images/EAU.jpeg'
    },
    {
      id: 'coca',
      name: 'COCA',
      description: '1,5 l',
      price: 3.50,
      image: '/images/COCA.webp'
    }
  ],
  alcool: [
    {
      id: 'biere',
      name: 'BIÈRE',
      description: '33 cl',
      price: 2.50,
      image: '/images/biere.webp'
    },
    {
      id: 'desperados',
      name: 'DESPERADOS',
      description: '50 cl',
      price: 3.50,
      image: '/images/DESPERADOS.webp'
    },
    {
      id: 'lambrusco',
      name: 'LAMBRUSCO',
      description: '75 cl',
      price: 12.00,
      image: '/images/LAMBRUSCO.webp'
    },
    {
      id: 'rose',
      name: 'ROSÉ',
      description: '75 cl',
      price: 10.00,
      image: '/images/ROSÉ.webp'
    },
    {
      id: 'rouge',
      name: 'ROUGE',
      description: '75 cl',
      price: 10.00,
      image: '/images/ROUGE.webp'
    }
  ]
};

// Offres de Fidélité (Loyalty Offers)
export const offres = [
  {
    id: 'offer1',
    number: '1',
    title: 'Offre fidélité',
    description: '10 pizzas achetées = 1 gratuite',
    note: 'Précisez à la commande uniquement à emporter (conservez vos factures)'
  },
  {
    id: 'offer2',
    number: '2',
    title: 'Offre 110%',
    description: '110% sur pizzas à emporter',
    note: 'Offre exceptionnelle'
  },
  {
    id: 'offer3',
    number: '3',
    title: 'Boisson offerte',
    description: 'À compter de 4 pizzas ou pâtes = 1 boisson offerte',
    note: 'Offre valable sur présentation du bon'
  },
  {
    id: 'offer4',
    number: '4',
    title: 'Dimanche promo',
    description: 'Le dimanche midi, toutes nos pizzas à moitié prix',
    note: 'Pizzas sur place uniquement - Réservé aux clients présents'
  }
];

// All pizzas combined
export const allPizzas = [
  ...pizzasViandes,
  ...pizzasPoisson,
  ...pizzasVege,
  ...pizzasNouveautes
];

// Export aliases for compatibility with Menu and Pizzas pages
export const nosPizzas = allPizzas;
export const nosPates = pates;
export const nosSalades = salades;
export const nosDesserts = desserts;
export const nosBoissons = boissons;