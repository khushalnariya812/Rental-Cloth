// ─────────────────────────────────────────────
// Mock data for the RentLook application
// 3-Color Palette:
//   Color 1 (Purple)    : #7c3aed
//   Color 2 (Royal Blue): #2563eb
//   Color 3 (Teal)      : #0d9488
// ─────────────────────────────────────────────

export const categories = [
  {
    id: 1,
    name: 'Ethnic Wear',
    subtitle: 'Traditional & Wedding Collection',
    description: 'Lehenga, Saree, Sherwani & more for weddings, festivals and special occasions.',
    image: require('../assets/category_ethnic.png'),
    count: '500+ Outfits',
    startingPrice: '₹499/day',
    tag: 'Most Popular',
    // Color 1 — Purple
    color:       '#7c3aed',
    colorDark:   '#5b21b6',
    colorLight:  '#a78bfa',
    colorSubtle: 'rgba(124, 58, 237, 0.12)',
    colorBorder: 'rgba(124, 58, 237, 0.35)',
    colorShadow: 'rgba(124, 58, 237, 0.30)',
  },
  {
    id: 2,
    name: 'Western Wear',
    subtitle: 'Formal & Party Collection',
    description: 'Designer suits, blazers, cocktail dresses and gowns for every formal event.',
    image: require('../assets/category_western.png'),
    count: '350+ Outfits',
    startingPrice: '₹399/day',
    tag: 'Trending Now',
    // Color 2 — Royal Blue
    color:       '#2563eb',
    colorDark:   '#1d4ed8',
    colorLight:  '#60a5fa',
    colorSubtle: 'rgba(37, 99, 235, 0.12)',
    colorBorder: 'rgba(37, 99, 235, 0.35)',
    colorShadow: 'rgba(37, 99, 235, 0.30)',
  },
  {
    id: 3,
    name: "Kids' Wear",
    subtitle: 'Party & Costume Collection',
    description: 'Adorable party wear, princess dresses and fancy costumes for your little ones.',
    image: require('../assets/category_kids.png'),
    count: '200+ Outfits',
    startingPrice: '₹199/day',
    tag: 'New Arrivals',
    // Color 3 — Teal
    color:       '#0d9488',
    colorDark:   '#0f766e',
    colorLight:  '#2dd4bf',
    colorSubtle: 'rgba(13, 148, 136, 0.12)',
    colorBorder: 'rgba(13, 148, 136, 0.35)',
    colorShadow: 'rgba(13, 148, 136, 0.30)',
  },
  {
    id: 4,
    name: 'Bridal Collection',
    subtitle: 'Exclusive Wedding Wear',
    description: 'Luxurious bridal lehengas, wedding gowns and complete bridal sets for your perfect day.',
    image: require('../assets/category_bridal.png'),
    count: '150+ Outfits',
    startingPrice: '₹999/day',
    tag: 'Premium',
    // Color 1 — Purple (brand primary, premium feel)
    color:       '#7c3aed',
    colorDark:   '#5b21b6',
    colorLight:  '#a78bfa',
    colorSubtle: 'rgba(124, 58, 237, 0.12)',
    colorBorder: 'rgba(124, 58, 237, 0.35)',
    colorShadow: 'rgba(124, 58, 237, 0.30)',
  },
];

export const steps = [
  {
    id: 1,
    icon: '👗',
    title: 'Choose Your Outfit',
    description: 'Browse our curated collection of premium outfits. Filter by occasion, size, color, and price.',
    // Color 1 — Purple
    color: '#7c3aed',
    colorSubtle: 'rgba(124, 58, 237, 0.12)',
    colorBorder: 'rgba(124, 58, 237, 0.30)',
    colorShadow: 'rgba(124, 58, 237, 0.25)',
  },
  {
    id: 2,
    icon: '📅',
    title: 'Pick Your Dates',
    description: 'Select your rental duration — from a single day to an entire week. Flexible plans available.',
    // Color 2 — Royal Blue
    color: '#2563eb',
    colorSubtle: 'rgba(37, 99, 235, 0.12)',
    colorBorder: 'rgba(37, 99, 235, 0.30)',
    colorShadow: 'rgba(37, 99, 235, 0.25)',
  },
  {
    id: 3,
    icon: '🚚',
    title: 'Get it Delivered',
    description: 'We deliver fresh, dry-cleaned outfits right to your doorstep before your event.',
    // Color 3 — Teal
    color: '#0d9488',
    colorSubtle: 'rgba(13, 148, 136, 0.12)',
    colorBorder: 'rgba(13, 148, 136, 0.30)',
    colorShadow: 'rgba(13, 148, 136, 0.25)',
  },
  {
    id: 4,
    icon: '✨',
    title: 'Return with Ease',
    description: 'Simply drop it in our prepaid return bag after your event. No cleaning needed!',
    // Color 2 — Royal Blue (cycling back)
    color: '#2563eb',
    colorSubtle: 'rgba(37, 99, 235, 0.12)',
    colorBorder: 'rgba(37, 99, 235, 0.30)',
    colorShadow: 'rgba(37, 99, 235, 0.25)',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    avatar: 'PS',
    // Color 1 — Purple avatar
    avatarColor: '#7c3aed',
    rating: 5,
    review: 'Absolutely loved the experience! I rented a beautiful Banarasi lehenga for my cousin\'s wedding. It was in perfect condition, delivered on time, and I looked stunning. Will definitely rent again!',
    occasion: 'Wedding',
    outfit: 'Banarasi Lehenga',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    location: 'Delhi',
    avatar: 'RM',
    // Color 2 — Blue avatar
    avatarColor: '#2563eb',
    rating: 5,
    review: 'The sherwani I rented for my engagement was absolutely premium quality. The fitting was perfect and I got so many compliments. The price was a fraction of buying one. Highly recommended!',
    occasion: 'Engagement',
    outfit: 'Designer Sherwani',
  },
  {
    id: 3,
    name: 'Anjali Patel',
    location: 'Bangalore',
    avatar: 'AP',
    // Color 3 — Teal avatar
    avatarColor: '#0d9488',
    rating: 5,
    review: 'Such a brilliant concept! I needed an evening gown for my office award ceremony and couldn\'t justify buying one. RentLook delivered a gorgeous designer gown. Fabulous service!',
    occasion: 'Corporate Event',
    outfit: 'Designer Gown',
  },
  {
    id: 4,
    name: 'Kavya Reddy',
    location: 'Hyderabad',
    avatar: 'KR',
    // Color 1 — Purple avatar
    avatarColor: '#7c3aed',
    rating: 5,
    review: 'Rented a princess dress for my daughter\'s birthday party. She was thrilled! The costume was so well-made and comfortable. The whole process was smooth and hassle-free. 10/10!',
    occasion: 'Birthday Party',
    outfit: 'Princess Costume',
  },
];

export const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '5K+',  label: 'Premium Outfits'  },
  { value: '50+',  label: 'Cities Served'    },
  { value: '4.9★', label: 'Average Rating'   },
];

export const navLinks = [
  { label: 'Home',         href: '#home'         },
  { label: 'Categories',   href: '#categories'   },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#newsletter'   },
];
