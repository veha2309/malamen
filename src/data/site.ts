export interface ContactDetails {
  phone: string
  phoneDisplay: string
  secondaryPhone: string
  secondaryPhoneDisplay: string
  email: string
  address: string
  shortAddress: string
  hours: string
  whatsappUrl: string
  directionsUrl: string
}

export interface MenuItem {
  name: string
  description: string
  dietary?: 'veg' | 'non-veg'
  isPlaceholder: boolean
}

export interface MenuCategory { id: string; label: string; items: MenuItem[] }
export interface GalleryImage { src: string; alt: string; category: string; position?: string }
export interface ReviewSource { platform: string; note: string; url: string; isVerified: boolean }

export const SHOW_DEMO_BADGE = true

export const contact: ContactDetails = {
  phone: '+918588822264',
  phoneDisplay: '+91 85888 22264',
  secondaryPhone: '+919205222646',
  secondaryPhoneDisplay: '+91 92052 22646',
  email: 'query@malamendelhi.com',
  address: 'No. 101, GF, NH-19, Old Ishwar Nagar, Okhla, New Delhi — 110025',
  shortAddress: 'Old Ishwar Nagar, Okhla, New Delhi',
  hours: 'Open daily · 11:00 AM — 1:00 AM',
  whatsappUrl: 'https://wa.me/918588822264',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Malamen+The+Kitchen+and+Bar+Okhla+New+Delhi',
}

export const links = {
  officialMenu: 'https://malamendelhi.com/our-menu/',
  orderOnline: 'https://malamendelhi1.petpooja.com/',
}

const demo = (name: string, description: string, dietary?: MenuItem['dietary']): MenuItem => ({ name, description, dietary, isPlaceholder: true })

export const menu: MenuCategory[] = [
  { id: 'small', label: 'Small plates', items: [demo('Charred garden', 'Smoked seasonal vegetables, cultured cream, toasted seed.', 'veg'), demo('Ember chicken', 'Fire-roasted chicken, warm spice, bright citrus.', 'non-veg'), demo('Crisp lotus stem', 'Sweet heat, sesame and spring onion.', 'veg')] },
  { id: 'indian', label: 'Indian', items: [demo('From the tandoor', 'A rotating selection cooked over live fire.', 'non-veg'), demo('Paneer, gently smoked', 'Soft paneer, tomato, fenugreek and cream.', 'veg'), demo('Slow-cooked black dal', 'Overnight lentils finished with cultured butter.', 'veg')] },
  { id: 'asian', label: 'Pan Asian', items: [demo('Market dim sum', 'Seasonal filling, chilli oil and black vinegar.'), demo('Wok-fired greens', 'Young vegetables, garlic and toasted sesame.', 'veg'), demo('Miso glazed catch', 'Fresh fish, ginger and charred scallion.', 'non-veg')] },
  { id: 'mains', label: 'Mains', items: [demo('The shared table', 'Chef-led selection made for the whole table.'), demo('Coal-roasted vegetables', 'Millet, herb oil and smoked yoghurt.', 'veg'), demo('Pepper lamb', 'Slow braise, black pepper and silken mash.', 'non-veg')] },
  { id: 'cocktails', label: 'Cocktails', items: [demo('After Hours', 'Dark spirit, cacao, orange and smoke.'), demo('New Delhi Sour', 'Citrus, spice and a silky finish.'), demo('Garden at Dusk', 'Herbal, floral and gently sparkling.')] },
  { id: 'desserts', label: 'Desserts', items: [demo('Dark chocolate', 'Cocoa, sea salt and toasted hazelnut.', 'veg'), demo('Saffron milk', 'Soft-set cream, pistachio and rose.', 'veg'), demo('Seasonal fruit', 'Fresh fruit, sorbet and citrus.', 'veg')] },
]

export const gallery: GalleryImage[] = [
  { src: '/assets/day.webp', alt: 'Sunlit editorial dining table', category: 'Interiors' },
  { src: '/assets/food.webp', alt: 'Contemporary dish in a dark ceramic bowl', category: 'Food' },
  { src: '/assets/night.webp', alt: 'Amber cocktail at a dark marble bar', category: 'Cocktails' },
  { src: '/assets/hero.webp', alt: 'Atmospheric restaurant interior after dark', category: 'Nightlife', position: 'center' },
]

export const reviewSource: ReviewSource = {
  platform: 'Guest stories',
  note: 'Current ratings and guest quotes will be added after owner verification.',
  url: 'https://malamendelhi.com/',
  isVerified: false,
}

export const navItems = [
  ['Experience', '/experience'], ['Menu', '/menu'], ['Events', '/events'], ['Gallery', '/gallery'], ['About', '/about'],
] as const

export function whatsappLink(message: string) {
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`
}
