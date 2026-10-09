// All site copy and business details live here, so content can be edited
// without touching the components.

const IMG = 'https://media.base44.com/images/public/6ac90e3e32653bfd16b1317d'

export const images = {
  living: `${IMG}/fe38aef70_generated_7485cd4b.png`,
  livingAlt: `${IMG}/21a7f05ca_generated_93841075.png`,
  dining: `${IMG}/634f3bf04_generated_cb023685.png`,
  kitchen: `${IMG}/71205e58f_generated_010d0186.png`,
  bedroom: `${IMG}/b2e69606a_generated_d73ad321.png`,
  ceiling: `${IMG}/0c5ca4f18_generated_8ae4eca5.png`,
  wardrobe: `${IMG}/289a39c43_generated_4ffc8b57.png`,
  bathroom: `${IMG}/4f514c2d5_generated_b219fa3e.png`,
}

// TODO: replace the placeholders below with the real business details.
export const site = {
  name: 'Decor Designs Interio',
  tagline: 'Transforming Spaces Into Timeless Living.',
  phoneDisplay: '+91 XXXXX XXXXX',
  phoneHref: 'tel:+910000000000',
  whatsappNumber: '910000000000', // country code + number, digits only
  email: 'hello@decordesigns.com',
  address: 'Your City, India',
  hours: 'Mon – Sat, 10:00 AM – 7:00 PM',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Pinterest', href: '#' },
  ],
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
  { quote: 'Decor Designs transformed our apartment into a warm, functional home. Every detail was considered and the finish quality exceeded our expectations.', name: 'Aarav & Meera', role: '3BHK Home Interior' },
  { quote: 'From planning to handover, the team was transparent and punctual. Our modular kitchen is both beautiful and incredibly practical to use daily.', name: 'Priya Sharma', role: 'Modular Kitchen' },
  { quote: 'Their attention to material quality and lighting completely changed how our home feels. Professional, creative and genuinely client-focused.', name: 'Rohan Verma', role: 'Complete Home Renovation' },
]
