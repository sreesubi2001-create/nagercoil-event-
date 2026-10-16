export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'wedding' | 'reception' | 'catering' | 'birthday' | 'traditional' | 'production' | 'corporate';
  description: string;
  features: string[];
  idealFor: string;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'wedding' | 'reception' | 'catering' | 'birthday' | 'lighting';
  categoryLabel: string;
  imageUrl: string;
  location: string;
  description: string;
  highlightTag: string;
}

export interface InstagramReel {
  id: string;
  title: string;
  caption: string;
  views: string;
  likes: string;
  imageUrl: string;
  audioTrack: string;
  duration: string;
  instagramPostUrl: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  event: string;
  location: string;
  review: string;
  date: string;
}

export const BUSINESS_INFO = {
  name: 'Royal Event and Catering Management',
  shortName: 'Royal Event Management',
  tagline: 'We Plan • We Serve • You Celebrate',
  phone: '9585588810',
  formattedPhone: '+91 95855 88810',
  phoneTelLink: 'tel:+919585588810',
  whatsappNumber: '919585588810',
  whatsappBaseUrl: 'https://wa.me/919585588810',
  instagramUrl: 'https://instagram.com/royal_event_organizers?cplk=MWo1OGJsYmQ5YmxzYw%3D%3D',
  instagramHandle: '@royal_event_organizers',
  city: 'Nagercoil',
  district: 'Kanniyakumari',
  state: 'Tamil Nadu',
  country: 'India',
  pincode: '629001',
  fullAddress: 'Vadasery - Cape Road Junction, Nagercoil, Kanniyakumari District, Tamil Nadu 629001',
  googleMapsUrl: 'https://maps.google.com/?q=Nagercoil,+Kanniyakumari,+Tamil+Nadu,+India',
  operatingHours: '24 Hours (7 Days a Week)',
  experienceYears: '10+',
  eventsCompleted: '500+',
  serviceDistricts: ['Nagercoil', 'Kanniyakumari', 'Marthandam', 'Thuckalay', 'Colachel', 'Kulasekharam', 'Tirunelveli District'],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'traditional-wedding',
    title: 'Wedding & Muhurtham Mandapams',
    tagline: 'Authentic South Indian Sanctums Crafted with Sacred Grandeur',
    category: 'wedding',
    imageUrl: '/src/assets/images/gallery_mandapam_floral_1791977331591.jpg',
    description: 'Specializing in majestic South Indian wedding mandapams featuring ornate wooden pillars, cascading Thovalai fresh jasmine & marigold floral garlands, brass diyas, and ceremonial sanctums tailored for auspicious muhurthams.',
    features: [
      'Custom Mandapam Architecture & Floral Canopies',
      'Traditional Brass Kutthu Vilakku & Bell Accents',
      'Bridal Aisle & Temple-Style Entrance Arches',
      'Complete Muhurtham Stage Seating & Homa Kunda Decor'
    ],
    idealFor: 'Traditional Tamil, Kerala & Cross-cultural Weddings in Nagercoil & Kanniyakumari',
  },
  {
    id: 'luxury-reception',
    title: 'Grand Reception Stages',
    tagline: 'Contemporary Royal Stages with Breathtaking Visual Presence',
    category: 'reception',
    imageUrl: '/src/assets/images/gallery_reception_stage_1791977326870.jpg',
    description: 'Transforming marriage halls and convention centres with opulent curved backdrops, lush pastel florals, crystal chandeliers, architectural LED panels, and regal velvet royal couches.',
    features: [
      '3D Geometric & Floral Architectural Backdrops',
      'Fairy Light Ceiling Canopies & Crystal Chandeliers',
      'Premium Royal Couch & Couple Lounge Furniture',
      'Illuminated Floral Stage Steps & Stage Walkways'
    ],
    idealFor: 'Evening Wedding Receptions, Sangeet & High-End Celebrations',
  },
  {
    id: 'royal-catering-service',
    title: 'Royal Catering & Dining Services',
    tagline: 'Authentic South Indian Feasts & Multi-Cuisine Banquets',
    category: 'catering',
    imageUrl: '/src/assets/images/gallery_catering_feast_1791978739740.jpg',
    description: 'Under our brand commitment "We Serve", we provide seamless food and banquet management from traditional South Indian banana leaf wedding sadhya to opulent live buffet counters with fine silver chafing presentation.',
    features: [
      'Traditional South Indian Elai Saapadu (Banana Leaf Feasts)',
      'Luxury Live Counters, Chaat & Welcome Mocktail Bars',
      'Silver Buffet Stations with Professional Uniformed Waitstaff',
      'Exquisite Vegetable & Fruit Carving Centerpiece Displays'
    ],
    idealFor: 'Weddings, Engagements, Receptions & Corporate Dinners',
  },
  {
    id: 'grand-entrance-pathway',
    title: 'Grand Entrance Arches & Red Carpet',
    tagline: 'Creating an Unforgettable First Impression for Every Guest',
    category: 'wedding',
    imageUrl: '/src/assets/images/gallery_grand_entrance_1791978740120.jpg',
    description: 'Customizing grand walkway floral arches, red velvet carpet corridors, glowing crystal chandelier tunnels, and fresh flower welcoming pathways that welcome your guests in true royalty.',
    features: [
      'Monumental Floral Tunnel & Canopy Arches',
      'Red Velvet Carpet with Brass Candle Lanterns',
      'Personalized Entrance Welcome Boards & Floral Easels',
      'Photo-ready Arrival Experience for Family & Guests'
    ],
    idealFor: 'Convention Halls, Kalyana Mandapams & Outdoor Lawns',
  },
  {
    id: 'bridal-entry-effects',
    title: 'Bridal Entry FX & Cold Pyrotechnics',
    tagline: 'Walking on Clouds with Spectacular Stage Atmosphere',
    category: 'production',
    imageUrl: '/src/assets/images/gallery_couple_entry_pyro_1791978741887.jpg',
    description: 'Transforming couple entries into magical fairy tales with low-lying white dry ice fog clouds, indoor fire-safe cold sparkler fireworks, flower shower blowers, and synchronized spotlights.',
    features: [
      'Dense Low-Lying Dry Ice Cloud Fog Effect',
      '100% Smokeless Indoor Cold Sparkler Pyros',
      'Floral Petal Dropper & Romantic Stage Showers',
      'Timed Audio-Visual Countdown & Stage Cueing'
    ],
    idealFor: 'Bride & Groom Stage Entry, Ring Exchange & Cake Cutting',
  },
  {
    id: 'sound-concert-lighting',
    title: 'Aluminum Trussing, Intelligent Lighting & Sound',
    tagline: 'High-Impact Concert-Grade Production & Acoustics',
    category: 'production',
    imageUrl: '/src/assets/images/gallery_concert_truss_lighting_1791978741302.jpg',
    description: 'Equipped with heavy-duty silver aluminum trussing, intelligent moving head beams, stage wash lights, LED video walls, and line-array audio systems for crystal clear vows and dynamic music.',
    features: [
      'Heavy Aluminum Stage Trussing & Overhead Lighting Grid',
      'Intelligent Moving Head Beam Lights & Laser Ambience',
      'Line Array Concert Sound Setup with Wireless Mics',
      'LED Video Screen Integration for Live Camera Feed'
    ],
    idealFor: 'Receptions, Sangeet Evenings, Concerts & Award Galas',
  },
  {
    id: 'themed-birthdays',
    title: 'Themed Birthdays & Milestones',
    tagline: 'Joyful & Picture-Perfect Themes for Every Milestone',
    category: 'birthday',
    imageUrl: '/src/assets/images/gallery_milestone_birthday_1791977327671.jpg',
    description: 'From dreamlike 1st birthday celebrations to 50th and 60th (Sashtiabdhapoorthi) golden jubilees with organic balloon styling, illuminated marquee numbers, and custom dessert presentation stages.',
    features: [
      'Illuminated Marquee Numbers & Personalized Lettering',
      'Organic Balloon Garlands & Fresh Floral Styling',
      'Dedicated Cake Presentation Table & Backdrop',
      'Interactive Guest Photo Experience Station'
    ],
    idealFor: '1st Birthdays, 50th/60th Jubilees, Anniversary Celebrations',
  },
  {
    id: 'traditional-ceremonies',
    title: 'Traditional Family Celebrations',
    tagline: 'Preserving Sacred Heritage with Aesthetic Perfection',
    category: 'traditional',
    imageUrl: '/src/assets/images/hero_wedding_stage_1791977326183.jpg',
    description: 'Honoring Tamil cultural milestones including Valaikappu (Baby Shower), Grihapravesham (Housewarming), and traditional Poojas with auspicious fresh Thovalai florals and traditional stage canopies.',
    features: [
      'Traditional Bangle & Floral Canopies for Valaikappu',
      'Auspicious Kolam & Floral Welcome Entryways',
      'Pooja Mandapam & Banana Tree Traditional Embellishments',
      'Comfortable Family Seating Layouts'
    ],
    idealFor: 'Valaikappu, Grihapravesham, Sashtiabdhapoorthi & Sacred Poojas',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Royal Muhurtham Mandapam',
    category: 'wedding',
    categoryLabel: 'Wedding Mandapam',
    imageUrl: '/src/assets/images/hero_wedding_stage_1791977326183.jpg',
    location: 'Nagercoil Convention Hall',
    description: 'Ornate gold carved pillars with fragrant fresh jasmine garlands, deep royal navy satin drapery, glowing brass lamps, and sacred sacrificial hearth for auspicious wedding ceremonies.',
    highlightTag: 'Royal Heritage',
  },
  {
    id: 'gal-2',
    title: 'Grand Entrance Floral Arch & Red Carpet',
    category: 'wedding',
    categoryLabel: 'Grand Entrance Arch',
    imageUrl: '/src/assets/images/gallery_grand_entrance_1791978740120.jpg',
    location: 'Nagercoil Marriage Hall',
    description: 'Breathtaking white floral arch tunnel with crystal chandeliers, ambient fairy lights, red velvet carpet walkway, and brass lanterns welcoming arriving wedding guests.',
    highlightTag: 'Royal Walkway',
  },
  {
    id: 'gal-3',
    title: 'Royal Catering & Banquet Buffet Feast',
    category: 'catering',
    categoryLabel: 'Catering & Dining',
    imageUrl: '/src/assets/images/gallery_catering_feast_1791978739740.jpg',
    location: 'Kanniyakumari Grand Banquet',
    description: 'Gleaming silver chafing presentation, live food stations, exquisite fruit peacock carving display, and traditional South Indian gourmet cuisine prepared and served with royal hospitality.',
    highlightTag: 'We Serve',
  },
  {
    id: 'gal-4',
    title: 'Spectacular Couple Entry with Cold Pyros & Fog',
    category: 'lighting',
    categoryLabel: 'Bridal Entry FX',
    imageUrl: '/src/assets/images/gallery_couple_entry_pyro_1791978741887.jpg',
    location: 'Kanyakumari Luxury Resort',
    description: 'Enchanting walking-on-clouds dry ice low fog walkway flanked by dazzling indoor-safe cold sparkler fountain pyrotechnics and crystal chandeliers for the couple grand entry.',
    highlightTag: 'Magical Entry',
  },
  {
    id: 'gal-5',
    title: 'Contemporary Luxury Reception Stage',
    category: 'reception',
    categoryLabel: 'Reception Stage',
    imageUrl: '/src/assets/images/gallery_reception_stage_1791977326870.jpg',
    location: 'Marthandam Grand Banquet',
    description: 'Modern geometric curved stage backdrop draped with pastel English roses, cascading fairy light ceiling canopy, crystal chandeliers, and plush royal velvet couple seating.',
    highlightTag: 'Modern Luxury',
  },
  {
    id: 'gal-6',
    title: 'Aluminum Trussing & Intelligent Concert Lighting',
    category: 'lighting',
    categoryLabel: 'Lighting & Sound',
    imageUrl: '/src/assets/images/gallery_concert_truss_lighting_1791978741302.jpg',
    location: 'Nagercoil Open Air Venue',
    description: 'Heavy silver aluminum truss framework equipped with moving beam heads, LED screens, crystal chandeliers, and high-fidelity sound system engineering for musical evenings.',
    highlightTag: 'Concert Grade',
  },
  {
    id: 'gal-7',
    title: 'Authentic South Indian Muhurtham Sanctum',
    category: 'wedding',
    categoryLabel: 'Traditional Mandapam',
    imageUrl: '/src/assets/images/gallery_mandapam_floral_1791977331591.jpg',
    location: 'Kanyakumari Heritage Venue',
    description: 'Rich teakwood carved pillars adorned with sacred brass bells, fresh yellow marigolds, white tuberoses, and radiant traditional kutthu vilakku oil lamps.',
    highlightTag: 'Pure Tradition',
  },
  {
    id: 'gal-8',
    title: 'Milestone 30th Family Celebration',
    category: 'birthday',
    categoryLabel: 'Milestone Celebration',
    imageUrl: '/src/assets/images/gallery_milestone_birthday_1791977327671.jpg',
    location: 'Nagercoil Royal Banquet',
    description: 'Warm champagne & ivory balloon art installation with fresh floral accents, illuminated marquee numbers, gold satin runner dessert table, and fairy bistro ambient lighting.',
    highlightTag: 'Milestone Gala',
  },
  {
    id: 'gal-9',
    title: 'Chenda Melam & Interactive Live Stalls',
    category: 'catering',
    categoryLabel: 'Live Stalls & Entertainment',
    imageUrl: '/src/assets/images/reel_chenda_melam_stalls_1792134855948.jpg',
    location: 'Nagercoil Wedding Venue',
    description: 'Traditional Chenda Melam welcome procession, red carpet guest corridor, and custom canopy live food counters: Popcorn, Sweet Paan, Ice Cream & traditional Bombay Mittai.',
    highlightTag: 'Carnival & Feasts',
  },
];

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-chenda-melam-stalls',
    title: 'Live Chenda Melam, Popcorn, Paan & Ice Cream Stalls',
    caption: 'Electrifying Chenda Melam welcome procession along the red carpet entrance with interactive live stalls: Sweet Paan, Popcorn machine, Ice Pops, and traditional Bombay Mittai! Real event setup by Royal Event & Catering Management in Nagercoil ✨🥁',
    views: '58.4K',
    likes: '4.9K',
    imageUrl: '/src/assets/images/reel_chenda_melam_stalls_1792134855948.jpg',
    audioTrack: 'Original Chenda Melam Beats · @royal_event_organizers',
    duration: '0:34',
    instagramPostUrl: 'https://instagram.com/royal_event_organizers?cplk=MWo1OGJsYmQ5YmxzYw%3D%3D',
    tag: 'Chenda Melam & Stalls',
  },
  {
    id: 'reel-1',
    title: 'Magical Bridal Entry with Walking-on-Clouds Fog',
    caption: 'When the bride and groom step in surrounded by low-lying dry ice clouds and indoor-safe cold sparkler fountains ✨ Captured live at a grand Nagercoil wedding reception! #RoyalEventOrganizers',
    views: '46.8K',
    likes: '3.9K',
    imageUrl: '/src/assets/images/reel_bridal_entry_1792133901193.jpg',
    audioTrack: 'Original Sound · @royal_event_organizers',
    duration: '0:28',
    instagramPostUrl: 'https://instagram.com/royal_event_organizers?cplk=MWo1OGJsYmQ5YmxzYw%3D%3D',
    tag: 'Bridal Entry FX',
  },
  {
    id: 'reel-2',
    title: 'Handcrafting a Traditional South Indian Muhurtham Mandapam',
    caption: 'Over 5,000 fresh Thovalai yellow marigolds and aromatic jasmine strings woven into a sacred temple sanctum. Watch our artisan decor team transform the hall before dawn! #MuhurthamDecor',
    views: '62.4K',
    likes: '5.2K',
    imageUrl: '/src/assets/images/reel_mandapam_setup_1792133901704.jpg',
    audioTrack: 'Mangala Vathiyam Nadaswaram · Wedding Special',
    duration: '0:34',
    instagramPostUrl: 'https://instagram.com/royal_event_organizers?cplk=MWo1OGJsYmQ5YmxzYw%3D%3D',
    tag: 'Thovalai Flowers',
  },
  {
    id: 'reel-3',
    title: 'Traditional Wedding Sadhya & Feast (Elai Saapadu)',
    caption: 'Steaming hot sambar, rich ghee payasam, and 24 traditional South Indian items served hot on fresh plantain leaves by our uniformed royal catering team. "We Plan • We Serve • You Celebrate" 🍲 #RoyalCatering',
    views: '38.9K',
    likes: '2.8K',
    imageUrl: '/src/assets/images/reel_catering_banquet_1792133902092.jpg',
    audioTrack: 'Traditional Feast Beats · @royal_event_organizers',
    duration: '0:30',
    instagramPostUrl: 'https://instagram.com/royal_event_organizers?cplk=MWo1OGJsYmQ5YmxzYw%3D%3D',
    tag: 'Authentic Catering',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Arun & Dr. Subhashree',
    event: 'Grand Wedding Stage & Catering Coordination',
    location: 'Nagercoil',
    review: 'Royal Event Management brought our dream wedding to life. The traditional morning mandapam was pure divine elegance with fresh jasmine, the catering was praised by all our guests, and the evening reception stage stunned everyone. True professionals in Kanniyakumari.',
    date: 'February 2026',
  },
  {
    id: 'test-2',
    clientName: 'Suresh Kumar & Family',
    event: 'Daughter’s 1st Birthday & Catering',
    location: 'Thuckalay, Kanniyakumari',
    review: 'From the entrance marquee to the custom photo backdrop and hot banquet food, everything was finished well ahead of guest arrival. Mr. Royal team’s punctuality and attention to detail in Kanniyakumari district is unmatched.',
    date: 'January 2026',
  },
  {
    id: 'test-3',
    clientName: 'K. Meenakshi & S. Anand',
    event: 'Traditional Engagement & Valaikappu',
    location: 'Marthandam',
    review: 'Authentic South Indian aesthetics with great modern flair. The flower arrangements stayed crisp and fragrant throughout the day, and their team stayed until the last guest left to ensure flawless execution.',
    date: 'November 2025',
  },
];

export const FAQS = [
  {
    question: 'How far in advance should we reserve Royal Event Management for a wedding in Nagercoil?',
    answer: 'For auspicious muhurtham dates and peak wedding seasons in Tamil Nadu, we recommend reserving 2 to 6 months in advance. For intimate birthdays and family events, 2 to 3 weeks notice is generally sufficient.',
  },
  {
    question: 'Do you provide both Event Management and Catering Services together?',
    answer: 'Yes! As reflected in our motto "We Plan • We Serve • You Celebrate", we specialize in end-to-end event production as well as catering management—from traditional South Indian banana leaf feasts to multi-cuisine reception banquets.',
  },
  {
    question: 'Do you manage events across the entire Kanniyakumari district?',
    answer: 'Yes! We actively serve the entire Kanniyakumari district including Nagercoil town, Kanyakumari, Marthandam, Thuckalay, Colachel, Kulasekharam, as well as cross-border venues in Tirunelveli and Kerala borders.',
  },
  {
    question: 'Can you customize decorations according to our specific hall dimensions and theme?',
    answer: 'Absolutely. Every marriage hall in Nagercoil has distinct stage dimensions and ceiling heights. We conduct an on-site recce and design customized 2D/3D layout plans to maximize visual grandeur for your chosen venue.',
  },
  {
    question: 'What special effects do you offer for bride and groom entries?',
    answer: 'We provide heavy dry-ice low fog machines (walking-on-clouds effect), indoor cold sparkler pyrotechnics (100% smokeless and fire-safe), grand entrance floral canopies, and programmed intelligent beam lighting.',
  },
  {
    question: 'How can I get an exact proposal or discuss my upcoming function?',
    answer: 'You can directly call us at 9585588810, send a message on WhatsApp, or connect with us on Instagram @royal_event_organizers. Share your event date and venue location to receive immediate consultation.',
  },
];
