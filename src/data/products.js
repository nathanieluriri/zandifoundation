// ─────────────────────────────────────────────────────────────
// SHOP PRODUCTS
// To change a price, edit the `price` number (in Naira, no commas).
// A product with `price: null` shows "Price coming soon" and can't be added to the cart.
// To add a product: copy one block, give it a new unique `id`,
// and put its pictures in /public/shop/.
// `sizes`: leave as [] for one-size items. To add sizes later, e.g. ['S', 'M', 'L'].
// ─────────────────────────────────────────────────────────────

export const products = [
  {
    id: 'healthy-hero-top-blue',
    name: 'Healthy Hero Top (Blue)',
    collection: 'Healthy Futures',
    price: 10000,
    sizes: [],
    images: [
      { src: '/shop/healthy-hero-top-blue-front.jpg', label: 'Front' },
      { src: '/shop/healthy-hero-top-blue-back.jpg', label: 'Back' },
    ],
  },
  {
    id: 'healthy-hero-top-white',
    name: 'Healthy Hero Top (White)',
    collection: 'Healthy Futures',
    price: 10000,
    sizes: [],
    images: [
      { src: '/shop/healthy-hero-top-white-front.jpg', label: 'Front' },
      { src: '/shop/healthy-hero-top-white-back.jpg', label: 'Back' },
    ],
  },
  {
    id: 'healthy-hero-cap-blue',
    name: 'Healthy Hero Cap (Blue)',
    collection: 'Healthy Futures',
    price: 5000,
    sizes: [],
    images: [{ src: '/shop/healthy-hero-cap-blue.jpg', label: 'Front' }],
  },
  {
    id: 'healthy-hero-cap-white',
    name: 'Healthy Hero Cap (White)',
    collection: 'Healthy Futures',
    price: 5000,
    sizes: [],
    images: [{ src: '/shop/healthy-hero-cap-white.jpg', label: 'Front' }],
  },
  {
    id: 'secure-the-futures-top-green',
    name: 'Secure the Futures Top (Green)',
    collection: 'Secure the Futures',
    price: 10000,
    sizes: [],
    images: [
      { src: '/shop/secure-the-futures-top-green-front.jpg', label: 'Front' },
      { src: '/shop/secure-the-futures-top-green-back.jpg', label: 'Back' },
    ],
  },
  {
    id: 'secure-the-futures-top-white',
    name: 'Secure the Futures Top (White)',
    collection: 'Secure the Futures',
    price: 10000,
    sizes: [],
    images: [
      { src: '/shop/secure-the-futures-top-white-front.jpg', label: 'Front' },
      { src: '/shop/secure-the-futures-top-white-back.jpg', label: 'Back' },
    ],
  },
  {
    id: 'secure-the-futures-cap-green',
    name: 'Secure the Futures Cap (Green)',
    collection: 'Secure the Futures',
    price: 5000,
    sizes: [],
    images: [{ src: '/shop/secure-the-futures-cap-green.jpg', label: 'Front' }],
  },
  {
    id: 'secure-the-futures-cap-white',
    name: 'Secure the Futures Cap (White)',
    collection: 'Secure the Futures',
    price: 5000,
    sizes: [],
    images: [{ src: '/shop/secure-the-futures-cap-white.jpg', label: 'Front' }],
  },
];

// Orders are sent to this WhatsApp number until Paystack checkout is connected.
export const ORDER_WHATSAPP_NUMBER = '2349035085013';

export const formatNaira = (amount) =>
  `₦${Number(amount).toLocaleString('en-NG')}`;
