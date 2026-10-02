import heroPerfume from '../assets/images/hero_perfume.jpg';
import perfumeNoir from '../assets/images/perfume_noir.jpg';
import perfumeAmbre from '../assets/images/perfume_ambre.jpg';
import perfumeVelvet from '../assets/images/perfume_velvet.jpg';
import perfumeLumiere from '../assets/images/perfume_lumiere.jpg';
import perfumeRose from '../assets/images/perfume_rose.jpg';
import perfumeSaffron from '../assets/images/perfume_saffron.jpg';

export const products = [
  {
    id: 1,
    name: 'Noir Élégance',
    number: '01',
    category: 'Eau de Parfum',
    type: 'Woody Oriental',
    price: 2499,
    sizes: [
      { ml: 50, price: 2499 },
      { ml: 100, price: 3999 },
    ],
    image: perfumeNoir,
    description:
      'A commanding fragrance that captures the essence of midnight sophistication. Deep, mysterious, and unapologetically bold.',
    longDescription:
      'Noir Élégance is crafted for those who understand that true luxury lies in restraint. This woody oriental masterpiece opens with a burst of black pepper and cardamom, slowly revealing a heart of dark rose and smoky incense. The dry down is a velvety embrace of aged oud, leather, and a whisper of tonka bean.',
    notes: {
      top: ['Black Pepper', 'Cardamom', 'Bergamot'],
      heart: ['Dark Rose', 'Incense', 'Violet Leaf'],
      base: ['Aged Oud', 'Leather', 'Tonka Bean'],
    },
    isSignature: true,
  },
  {
    id: 2,
    name: 'Ambre Royale',
    number: '02',
    category: 'Eau de Parfum Intense',
    type: 'Amber Spicy',
    price: 2999,
    sizes: [
      { ml: 50, price: 2999 },
      { ml: 100, price: 4499 },
    ],
    image: perfumeAmbre,
    description:
      'Warm amber envelops rare spices in a fragrance that feels like liquid gold against the skin.',
    longDescription:
      'Ambre Royale is an ode to the ancient amber trade routes. Each note is layered with precision — from the initial spark of saffron and cinnamon bark to the rich, honeyed warmth of labdanum and benzoin. This is a scent that lingers in memory long after it fades from skin.',
    notes: {
      top: ['Saffron', 'Cinnamon Bark', 'Pink Pepper'],
      heart: ['Labdanum', 'Myrrh', 'Jasmine Absolute'],
      base: ['Amber', 'Benzoin', 'Vanilla Absolute'],
    },
    isSignature: true,
  },
  {
    id: 3,
    name: 'Velvet Oud',
    number: '03',
    category: 'Parfum',
    type: 'Oud Floral',
    price: 3499,
    sizes: [
      { ml: 50, price: 3499 },
      { ml: 100, price: 4999 },
    ],
    image: perfumeVelvet,
    description:
      'The pinnacle of our collection. Rare Laotian oud meets Bulgarian rose in an extraordinary composition.',
    longDescription:
      'Velvet Oud represents the summit of perfumery art. Rare Laotian oud, aged for over twenty years, is paired with hand-picked Bulgarian rose and precious iris butter. The result is a fragrance of extraordinary depth and beauty — simultaneously powerful and delicate, ancient and modern.',
    notes: {
      top: ['Rose de Mai', 'Saffron', 'Elemi'],
      heart: ['Laotian Oud', 'Bulgarian Rose', 'Iris Butter'],
      base: ['Sandalwood', 'Musk', 'Ambergris'],
    },
    isSignature: true,
  },
  {
    id: 4,
    name: 'Lumière Blanche',
    number: '04',
    category: 'Eau de Parfum',
    type: 'Fresh Floral',
    price: 1999,
    sizes: [
      { ml: 50, price: 1999 },
      { ml: 100, price: 2999 },
    ],
    image: perfumeLumiere,
    description:
      'A luminous composition that captures the first light of dawn — ethereal, clean, and quietly radiant.',
    longDescription:
      'Lumière Blanche is inspired by the soft, golden light that bathes morning hills at dawn. White tea and neroli create a crystalline opening, while white musk and clean cedarwood provide an understated, skin-like warmth. This is the fragrance of quiet confidence.',
    notes: {
      top: ['White Tea', 'Neroli', 'Pear Blossom'],
      heart: ['Lily of the Valley', 'Magnolia', 'Peony'],
      base: ['White Musk', 'Cedarwood', 'Cashmeran'],
    },
    isSignature: false,
  },
  {
    id: 5,
    name: 'Rose Impériale',
    number: '05',
    category: 'Eau de Parfum',
    type: 'Floral Oriental',
    price: 2799,
    sizes: [
      { ml: 50, price: 2799 },
      { ml: 100, price: 4199 },
    ],
    image: perfumeRose,
    description:
      'A majestic rose composition that transcends the ordinary — rich, complex, and intoxicating.',
    longDescription:
      'Rose Impériale is not merely a rose fragrance — it is a declaration. Turkish rose absolute and Damascena rose otto are woven with raspberry and spiced plum, creating a scent that is simultaneously classic and provocative. The base of patchouli and amber gives it an enduring, regal presence.',
    notes: {
      top: ['Raspberry', 'Spiced Plum', 'Pink Pepper'],
      heart: ['Turkish Rose Absolute', 'Damascena Rose', 'Peony'],
      base: ['Patchouli', 'Amber', 'White Musk'],
    },
    isSignature: false,
  },
  {
    id: 6,
    name: 'Saffron Dusk',
    number: '06',
    category: 'Eau de Parfum Intense',
    type: 'Spicy Woody',
    price: 3199,
    sizes: [
      { ml: 50, price: 3199 },
      { ml: 100, price: 4699 },
    ],
    image: perfumeSaffron,
    description:
      'Inspired by the golden hour — where saffron, suede, and smoldering woods meet the fading sun.',
    longDescription:
      'Saffron Dusk captures the fleeting beauty of twilight. Premium Kashmiri saffron is blended with warm suede and smoky guaiac wood, creating a fragrance that glows with an inner warmth. Each spray is a moment suspended in amber light.',
    notes: {
      top: ['Kashmiri Saffron', 'Nutmeg', 'Grapefruit'],
      heart: ['Suede', 'Orris Root', 'Cinnamon'],
      base: ['Guaiac Wood', 'Vetiver', 'Amber'],
    },
    isSignature: false,
  },
];

export const heroImage = heroPerfume;

export const signatureProducts = products.filter((p) => p.isSignature);

export const brandInfo = {
  name: 'Perfume Showcase Website',
  shortName: 'Perfume Showcase',
  tagline: 'Handcrafted fragrance startup born in Pernambut, Tamil Nadu.',
  founder: 'Raiyan S A',
  email: 'zakwanraiyan47@gmail.com',
  phone: '+91 94872 65295',
  location: 'Pernambut, Tamil Nadu, India — 635810',
  instagram: '@raiyan_sha7',
  founded: 2026,
  rights: 'All rights reserved by Raiyan S A',
  stats: {
    fragrances: '06',
    clients: '500+',
    signatures: '03',
  },
};
