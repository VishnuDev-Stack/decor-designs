// All site copy and business details live here, so content can be edited
// without touching the components.

// Optimised WebP photos in /public/images. Each has a "-sm" (800px) variant for cards.
const img = (name) => `/images/${name}.webp`
export const small = (src) => src.replace('.webp', '-sm.webp')

export const images = {
  living: img('living'),
  livingAlt: img('living-alt'),
  dining: img('dining'),
  kitchen: img('kitchen'),
  bedroom: img('bedroom'),
  ceiling: img('ceiling'),
  wardrobe: img('wardrobe'),
  bathroom: img('bathroom'),
}

const GEO = '12.324209,75.085317' // Kuttikol studio

export const site = {
  name: 'Decor Designs Interio',
  tagline: 'Transforming Spaces Into Timeless Living.',
  phoneDisplay: '+91 75101 84005', // also the WhatsApp number
  phoneHref: 'tel:+917510184005',
  altPhoneDisplay: '+91 80868 17578',
  altPhoneHref: 'tel:+918086817578',
  whatsappNumber: '917510184005', // country code + number, digits only
  email: 'decordesignsds@gmail.com',
  address: 'Kuttikol, Kasaragod, Kerala',
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${GEO}`,
  mapEmbed: `https://www.google.com/maps?q=${GEO}&z=14&output=embed`,
  instagram: {
    handle: '@decor_designs_interio',
    href: 'https://www.instagram.com/decor_designs_interio/',
  },
}

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Our Process' },
  { id: 'contact', label: 'Contact' },
]

export const highlights = [
  { icon: '✦', title: 'Creative Design', text: 'Original concepts tailored to your taste, space and natural light.' },
  { icon: '◆', title: 'Quality Execution', text: 'Precision craftsmanship and finishes that stand the test of time.' },
  { icon: '❖', title: 'Client-Focused Approach', text: 'Clear communication and decisions built around your priorities.' },
]

export const services = [
  { title: 'Complete Home Interiors', text: 'Turnkey home interiors designed and delivered as one cohesive, well-planned space.', img: images.dining, alt: 'Complete home interiors with cohesive design' },
  { title: 'Living Room Design', text: 'Welcoming, elegant living areas balanced for comfort, light and everyday use.', img: images.livingAlt, alt: 'Stylish modern living room interior' },
  { title: 'Modular Kitchen Design', text: 'Smart, ergonomic modular kitchens built for efficiency and timeless style.', img: images.kitchen, alt: 'Modern modular kitchen with marble countertop' },
  { title: 'Bedroom Interior Design', text: 'Serene, restful bedrooms layered with warmth, texture and soft lighting.', img: images.bedroom, alt: 'Luxury master bedroom interior' },
  { title: 'False Ceiling & Lighting', text: 'Architectural ceilings and layered lighting that set the mood of every room.', img: images.ceiling, alt: 'False ceiling with cove and recessed lighting' },
  { title: 'Wardrobe & Storage Solutions', text: 'Bespoke wardrobes and storage designed around how you actually live.', img: images.wardrobe, alt: 'Modern walk-in wardrobe and storage' },
  { title: 'Bathroom Interiors', text: 'Spa-like bathrooms with refined materials, fittings and thoughtful detailing.', img: images.bathroom, alt: 'Elegant modern bathroom interior' },
  { title: 'Civil & Interior Renovation', text: 'Complete civil works and renovations handled end-to-end with site coordination.', img: images.living, alt: 'Renovated modern living space' },
]

export const projects = [
  { title: 'The Lumière Residence', category: 'Living Rooms', text: 'A light-filled living space layered in warm neutrals and gold accents.', img: images.living },
  { title: 'Serene Suite', category: 'Bedrooms', text: 'A restful master suite with soft textures and ambient layered lighting.', img: images.bedroom },
  { title: 'Marble & Oak Kitchen', category: 'Kitchens', text: 'An ergonomic modular kitchen finished in charcoal, oak and gold.', img: images.kitchen },
  { title: 'The Beige Atelier', category: 'Full Homes', text: 'A cohesive open-plan home designed for calm, connected living.', img: images.dining },
  { title: 'Warm Horizon Living', category: 'Living Rooms', text: 'An inviting lounge balanced with texture, tone and natural light.', img: images.livingAlt },
  { title: 'Illuminated Volume', category: 'Full Homes', text: "A sculptural ceiling and cove lighting defining the room's character.", img: images.ceiling },
  { title: 'The Tailored Closet', category: 'Bedrooms', text: 'A bespoke walk-in wardrobe organised around everyday rituals.', img: images.wardrobe },
  { title: 'Marble Bath Sanctuary', category: 'Bathrooms', text: 'A spa-like bathroom in marble and brushed gold fittings.', img: images.bathroom },
]

export const whyUs = [
  { title: 'Personalised Solutions', text: 'Designs shaped around your lifestyle, taste and budget — never templated.' },
  { title: 'Practical Space Planning', text: 'Layouts that maximise flow, storage and natural light in every room.' },
  { title: 'Quality Materials & Finishing', text: 'Trusted materials and finishes chosen for longevity and feel.' },
  { title: 'Attention to Detail', text: 'The small things — joins, edges, alignment — handled with care.' },
  { title: 'Transparent Communication', text: 'Clear scope, pricing and updates from start to handover.' },
  { title: 'Commitment to Timelines', text: 'Disciplined scheduling so your home is ready when promised.' },
]

export const processSteps = [
  { title: 'Consultation & Requirements', text: 'We listen to your vision, needs and budget to understand the space you want.' },
  { title: 'Design Planning & Material Selection', text: 'Layouts, 3D concepts and curated materials come together for your approval.' },
  { title: 'Execution & Site Coordination', text: 'Skilled teams and disciplined site coordination bring the design to life.' },
  { title: 'Final Inspection & Handover', text: 'A thorough walkthrough, snag resolution and a home ready to move into.' },
]

// TODO: these are SAMPLE testimonials — replace with genuine client reviews before going live.
export const testimonials = [
  { quote: 'Decor Designs transformed our apartment into a warm, functional home. Every detail was considered and the finish quality exceeded our expectations.', name: 'Aarav & Meera', role: '3BHK Home Interior', img: images.dining },
  { quote: 'From planning to handover, the team was transparent and punctual. Our modular kitchen is both beautiful and incredibly practical to use daily.', name: 'Priya Sharma', role: 'Modular Kitchen', img: images.kitchen },
  { quote: 'Their attention to material quality and lighting completely changed how our home feels. Professional, creative and genuinely client-focused.', name: 'Rohan Verma', role: 'Complete Home Renovation', img: images.livingAlt },
]
