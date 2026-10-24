export type Product = {
  slug: string;
  name: string;
  price: string;
  category: string;
  image: string;
  collections: string[];
  badge?: string;
  featured?: boolean;
  compareAtPrice?: string;
};

const productImages = [
  'https://images.pexels.com/photos/5693888/pexels-photo-5693888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/5693891/pexels-photo-5693891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/13094187/pexels-photo-13094187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/18533666/pexels-photo-18533666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/18533668/pexels-photo-18533668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export const products: Product[] = [
  { slug: 'aspen-cotton-tee', name: 'Aspen cotton tee', price: 'Rs. 1,450', compareAtPrice: 'Rs. 1,750', category: 'T-shirts', image: productImages[0], collections: ['winter-collection', 'boys'], badge: 'New' },
  { slug: 'north-shore-jacket', name: 'North shore jacket', price: 'Rs. 3,250', compareAtPrice: 'Rs. 3,800', category: 'Jackets', image: productImages[1], collections: ['winter-collection', 'boys', 'best-of-mini-wear'], featured: true },
  { slug: 'petal-day-romper', name: 'Petal day romper', price: 'Rs. 1,850', compareAtPrice: 'Rs. 2,200', category: 'Dresses', image: productImages[2], collections: ['winter-collection', 'girls'], badge: 'Sale' },
  { slug: 'cedar-fleece-zip', name: 'Cedar fleece zip', price: 'Rs. 2,950', compareAtPrice: 'Rs. 3,400', category: 'Sweatshirts', image: productImages[3], collections: ['winter-collection', 'high-necks', 'sweatshirts', 'boys', 'girls'], featured: true },
  { slug: 'little-explorer-set', name: 'Little explorer set', price: 'Rs. 2,450', category: 'Tracksuits', image: productImages[4], collections: ['winter-collection', 'tracksuits', 'boys', 'best-of-mini-wear'], featured: true },
  { slug: 'lagoon-windbreaker', name: 'Lagoon windbreaker', price: 'Rs. 3,100', category: 'Jackets', image: productImages[5], collections: ['winter-collection', 'boys'] },
  { slug: 'cherry-knit-cardigan', name: 'Cherry knit cardigan', price: 'Rs. 2,200', category: 'Sweaters', image: productImages[1], collections: ['winter-collection', 'girls', 'best-of-mini-wear'], featured: true },
  { slug: 'river-blue-shirt', name: 'River blue shirt', price: 'Rs. 1,750', category: 'Shirts', image: productImages[3], collections: ['winter-collection', 'boys'] },
  { slug: 'sailor-stripe-polo', name: 'Sailor stripe polo', price: 'Rs. 1,650', category: 'T-shirts', image: productImages[0], collections: ['winter-collection', 'boys'] },
  { slug: 'harbor-hooded-pullover', name: 'Harbor hooded pullover', price: 'Rs. 2,650', compareAtPrice: 'Rs. 3,100', category: 'Sweatshirts', image: productImages[1], collections: ['winter-collection', 'hoodies', 'sweatshirts', 'boys', 'best-of-mini-wear'], featured: true },
  { slug: 'sunset-jersey-set', name: 'Sunset jersey set', price: 'Rs. 2,350', category: 'Tracksuits', image: productImages[2], collections: ['winter-collection', 'tracksuits', 'girls'] },
  { slug: 'forest-green-hoodie', name: 'Forest green hoodie', price: 'Rs. 2,850', compareAtPrice: 'Rs. 3,350', category: 'Sweatshirts', image: productImages[3], collections: ['winter-collection', 'hoodies', 'sweatshirts', 'boys', 'best-of-mini-wear'], featured: true },
  { slug: 'cloud-cotton-joggers', name: 'Cloud cotton joggers', price: 'Rs. 1,950', category: 'Trousers', image: productImages[4], collections: ['winter-collection', 'trousers', 'boys'] },
  { slug: 'varsity-weekend-coat', name: 'Varsity weekend coat', price: 'Rs. 3,450', category: 'Jackets', image: productImages[5], collections: ['winter-collection', 'boys', 'girls'] },
  { slug: 'ruby-lounge-set', name: 'Ruby lounge set', price: 'Rs. 2,150', category: 'Tracksuits', image: productImages[1], collections: ['winter-collection', 'tracksuits', 'girls'] },
  { slug: 'white-linen-shirt', name: 'White linen shirt', price: 'Rs. 1,850', category: 'Shirts', image: productImages[3], collections: ['winter-collection', 'girls'] },
  { slug: 'little-cloud-hoodie-set', name: 'Little cloud hoodie set', price: 'Rs. 2,750', compareAtPrice: 'Rs. 3,200', category: 'Hoodie Tracksuits', image: productImages[4], collections: ['winter-collection', 'hoodie-tracksuits', 'boys', 'best-of-mini-wear'], featured: true },
  { slug: 'weekend-play-tracksuit', name: 'Weekend play tracksuit', price: 'Rs. 2,950', compareAtPrice: 'Rs. 3,400', category: 'Hoodie Tracksuits', image: productImages[5], collections: ['winter-collection', 'hoodie-tracksuits', 'girls'] },
  { slug: 'everyday-jogger-set', name: 'Everyday jogger set', price: 'Rs. 2,500', category: 'Tracksuits', image: productImages[0], collections: ['winter-collection', 'tracksuits', 'boys'] },
  { slug: 'soft-stretch-leggings', name: 'Soft stretch leggings', price: 'Rs. 1,350', category: 'Tight & Leggings', image: productImages[2], collections: ['winter-collection', 'tight-leggings', 'girls', 'best-of-mini-wear'], featured: true },
  { slug: 'playday-cotton-tights', name: 'Playday cotton tights', price: 'Rs. 1,250', category: 'Tight & Leggings', image: productImages[4], collections: ['winter-collection', 'tight-leggings', 'girls'] },
  { slug: 'cozy-rib-high-neck', name: 'Cozy rib high neck', price: 'Rs. 1,650', category: 'High Necks', image: productImages[5], collections: ['winter-collection', 'high-necks', 'girls', 'best-of-mini-wear'], featured: true },
  { slug: 'little-trail-trousers', name: 'Little trail trousers', price: 'Rs. 1,850', category: 'Trousers', image: productImages[2], collections: ['winter-collection', 'trousers', 'boys'] },
  { slug: 'playground-zip-hoodie', name: 'Playground zip hoodie', price: 'Rs. 2,550', compareAtPrice: 'Rs. 2,950', category: 'Hoodies', image: productImages[0], collections: ['winter-collection', 'hoodies', 'boys', 'best-of-mini-wear'], featured: true },
  { slug: 'little-comet-hoodie', name: 'Little comet hoodie', price: 'Rs. 2,350', category: 'Hoodies', image: productImages[2], collections: ['winter-collection', 'hoodies', 'girls'] },
  { slug: 'forest-friends-hoodie-set', name: 'Forest friends hoodie set', price: 'Rs. 2,850', compareAtPrice: 'Rs. 3,250', category: 'Hoodie Tracksuits', image: productImages[3], collections: ['winter-collection', 'hoodie-tracksuits', 'boys'], featured: true },
  { slug: 'pastel-day-hoodie-set', name: 'Pastel day hoodie set', price: 'Rs. 2,950', category: 'Hoodie Tracksuits', image: productImages[1], collections: ['winter-collection', 'hoodie-tracksuits', 'girls'] },
  { slug: 'weekend-rover-hoodie-set', name: 'Weekend rover hoodie set', price: 'Rs. 2,750', category: 'Hoodie Tracksuits', image: productImages[0], collections: ['winter-collection', 'hoodie-tracksuits', 'boys', 'best-of-mini-wear'] },
  { slug: 'little-sunshine-hoodie-set', name: 'Little sunshine hoodie set', price: 'Rs. 2,850', compareAtPrice: 'Rs. 3,250', category: 'Hoodie Tracksuits', image: productImages[2], collections: ['winter-collection', 'hoodie-tracksuits', 'girls'] },
  { slug: 'city-kids-hoodie-set', name: 'City kids hoodie set', price: 'Rs. 2,950', category: 'Hoodie Tracksuits', image: productImages[4], collections: ['winter-collection', 'hoodie-tracksuits', 'boys'] },
  { slug: 'cotton-candy-hoodie-set', name: 'Cotton candy hoodie set', price: 'Rs. 2,850', category: 'Hoodie Tracksuits', image: productImages[5], collections: ['winter-collection', 'hoodie-tracksuits', 'girls'] },
  { slug: 'sunny-day-tracksuit', name: 'Sunny day tracksuit', price: 'Rs. 2,650', category: 'Tracksuits', image: productImages[3], collections: ['winter-collection', 'tracksuits', 'girls'] },
  { slug: 'little-champion-tracksuit', name: 'Little champion tracksuit', price: 'Rs. 2,750', compareAtPrice: 'Rs. 3,100', category: 'Tracksuits', image: productImages[4], collections: ['winter-collection', 'tracksuits', 'boys', 'best-of-mini-wear'] },
  { slug: 'play-all-day-tracksuit', name: 'Play all day tracksuit', price: 'Rs. 2,550', category: 'Tracksuits', image: productImages[5], collections: ['winter-collection', 'tracksuits', 'boys'] },
  { slug: 'rainbow-runner-tracksuit', name: 'Rainbow runner tracksuit', price: 'Rs. 2,850', category: 'Tracksuits', image: productImages[1], collections: ['winter-collection', 'tracksuits', 'girls'] },
  { slug: 'little-star-hoodie', name: 'Little star hoodie', price: 'Rs. 2,350', category: 'Hoodies', image: productImages[3], collections: ['winter-collection', 'hoodies', 'girls'] },
  { slug: 'cozy-club-hoodie', name: 'Cozy club hoodie', price: 'Rs. 2,450', category: 'Hoodies', image: productImages[4], collections: ['winter-collection', 'hoodies', 'boys', 'best-of-mini-wear'] },
  { slug: 'pocket-pal-hoodie', name: 'Pocket pal hoodie', price: 'Rs. 2,250', compareAtPrice: 'Rs. 2,600', category: 'Hoodies', image: productImages[5], collections: ['winter-collection', 'hoodies', 'girls'] },
  { slug: 'mini-explorer-hoodie', name: 'Mini explorer hoodie', price: 'Rs. 2,550', category: 'Hoodies', image: productImages[2], collections: ['winter-collection', 'hoodies', 'boys'] },
];
