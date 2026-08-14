const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;

const isClient = typeof window !== "undefined";
const getSaved = <T>(key: string, defaultValue: T): T => {
  if (!isClient) return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const initialBrand = {
  name: "Vinayak Tours & Travel",
  tagline: "From Visa to Vacation — Tailor-made journeys since 2014",
  logo: "", // Replaced with inline vector Logo component
  established: 2014,
  whatsapp: "919039139194",
  whatsappDisplay: "+91 90391 39194",
  phones: [
    { name: "Honey Rajpal (Indore)", number: "+91 93006 55686", tel: "+919300655686" },
    { name: "Ajay Rajpal (Chandigarh)", number: "+91 90391 39194", tel: "+919039139194" },
  ],
  // NOTE: Replace with new domain email once purchased (e.g. info@vinayaktoursandtravel.com)
  emails: ["vinayakindore2000@gmail.com", "vinayakindore2000@gmail.com"],
  youtube: "https://www.youtube.com/@vinayaktoursntravel",
  offices: [
    {
      city: "Indore (HQ)",
      address: "103, TREASURE VIHAR, Bijalpur, Indore (M.P.)",
      contact: "Honey Rajpal · +91 93006 55686",
      mapQuery: "Bijalpur+Indore+Madhya+Pradesh",
    },
    {
      city: "Chandigarh",
      address: "238, Airport Road, Manali Highway, Chandigarh (U.T.)",
      contact: "Ajay Rajpal · +91 90391 39194",
      mapQuery: "Airport+Road+Chandigarh",
    },
  ],
};

export const brand = initialBrand;

export const officePhotos = {
  building: "/office-indore.png",
  exterior: "/office-indore.png",
  lounge: "/office-lounge.png",
  workroom: "/office-chandigarh.png",
  workstations: "/office-chandigarh.png",
};

export const services = [
  {
    slug: "tours",
    icon: "Compass",
    title: "Domestic & International Tours",
    desc: "Tailored packages — solo, honeymoon, family, corporate, senior citizens, Do Dham & Char Dham. Budget-flexible with fixed departures.",
  },
  { slug: "flights", icon: "Plane", title: "Flight Ticketing", desc: "Best fares on domestic & international airlines with 24/7 reissue support." },
  { slug: "cruises", icon: "Ship", title: "Cruise Holidays", desc: "River, ocean and expedition cruises curated across the world's finest lines." },
  { slug: "visas", icon: "FileCheck2", title: "Passport & Visa Consultation", desc: "End-to-end documentation, appointment slots and interview coaching." },
  { slug: "hotels", icon: "Hotel", title: "Hotel Reservations", desc: "Preferred rates with 40+ global chains, from boutique stays to 5-star suites." },
  { slug: "mice", icon: "Users", title: "MICE & Corporate Travel", desc: "Meetings, incentives, conferences, exhibitions, interviews & seminars — handled end to end." },
  { slug: "rail-bus", icon: "TrainFront", title: "Rail & Bus Booking", desc: "IRCTC authorized ticketing and pan-India bus reservations with real-time availability." },
];

export const whyChooseUs = [
  { title: "10+ Years of Trust", desc: "Serving thousands of families & corporates since 2014." },
  { title: "Budget to Luxury", desc: "From backpacker to bespoke — every trip is priced to fit." },
  { title: "Two Home Bases", desc: "Offices in Indore and Chandigarh, service across India." },
  { title: "One-Stop Shop", desc: "Flights, hotels, visas, cruises, rail & bus under one roof." },
  { title: "Global Alliances", desc: "Preferred partnerships with leading airlines and hotel groups." },
  { title: "Dedicated 24×7 Support", desc: "A real human on WhatsApp before, during and after your trip — at the airport, abroad, overnight — we're always there." },
];

export const themes = [
  "Religious", "Wildlife", "Trekking", "Climbing Expeditions", "Cultural & Heritage", "Family Tour",
  "Group Tours", "Solo Trip", "Honeymooners", "Weekend Tours", "Fixed Departures",
  "Beach Tours", "Cruise Tours", "Underwater Expeditions", "MICE & Corporate",
];

type Dest = { name: string; slug: string; image: string; blurb: string; from?: string };

export const regions: { key: string; label: string; destinations: Dest[] }[] = [
  {
    key: "india", label: "Within India",
    destinations: [
      { name: "Goa", slug: "goa", image: img("photo-1512343879784-a960bf40e7f2"), blurb: "Beaches, sunsets and Portuguese charm.", from: "₹ 12,999" },
      { name: "Kerala", slug: "kerala", image: img("photo-1602216056096-3b40cc0c9944"), blurb: "Backwaters, houseboats and hill stations.", from: "₹ 18,499" },
      { name: "Rajasthan", slug: "rajasthan", image: img("photo-1477587458883-47145ed94245"), blurb: "Forts, palaces and desert nights.", from: "₹ 16,999" },
      { name: "Kashmir", slug: "kashmir", image: img("photo-1595815771614-ade9d652a65d"), blurb: "Shikaras on Dal Lake and snowy Gulmarg.", from: "₹ 21,499" },
      { name: "Himachal Pradesh", slug: "himachal", image: img("photo-1626621341517-bbf3d9990a23"), blurb: "Manali, Shimla and the Spiti circuit.", from: "₹ 14,999" },
      { name: "Char Dham Yatra", slug: "char-dham", image: img("photo-1626714424372-1f088c811568"), blurb: "Yamunotri, Gangotri, Kedarnath, Badrinath.", from: "₹ 24,999" },
      { name: "Ladakh", slug: "ladakh", image: img("photo-1581793745862-99fde7fa73d2"), blurb: "Pangong Lake, Khardung La and Nubra Valley.", from: "₹ 27,499" },
      { name: "Andaman & Nicobar", slug: "andaman", image: img("photo-1504214208698-ea1916a2195a"), blurb: "Crystal-clear seas and coral reefs.", from: "₹ 22,999" },
      { name: "Uttarakhand", slug: "uttarakhand", image: img("photo-1547471080-7cc2caa01a7e"), blurb: "Rishikesh, Haridwar and Jim Corbett." },
      { name: "Northeast India", slug: "northeast", image: img("photo-1516426122078-c23e76319801"), blurb: "Meghalaya, Assam & Sikkim — India's hidden gems." },
    ],
  },
  {
    key: "asia", label: "Asia",
    destinations: [
      { name: "Dubai", slug: "dubai", image: img("photo-1512453979798-5ea266f8880c"), blurb: "Skyline, desert safari and Burj Khalifa.", from: "₹ 39,999" },
      { name: "Bali, Indonesia", slug: "bali", image: img("photo-1537996194471-e657df975ab4"), blurb: "Rice terraces, temples and beach clubs.", from: "₹ 44,999" },
      { name: "Thailand", slug: "thailand", image: img("photo-1552465011-b4e21bf6e79a"), blurb: "Bangkok, Phuket and Krabi island-hopping.", from: "₹ 29,999" },
      { name: "Vietnam", slug: "vietnam", image: img("photo-1528127269322-539801943592"), blurb: "Halong Bay cruises and Hoi An lanterns." },
      { name: "Sri Lanka", slug: "sri-lanka", image: img("photo-1580910365203-91500e8fa1e5"), blurb: "Tea country, beaches and ancient cities." },
      { name: "Japan", slug: "japan", image: img("photo-1493976040374-85c8e12f0c0e"), blurb: "Cherry blossoms, bullet trains, ryokans." },
      { name: "Egypt", slug: "egypt", image: img("photo-1539650116574-75c0c6d73f6e"), blurb: "Pyramids, Nile cruises and Red Sea reefs." },
      { name: "Russia", slug: "russia", image: img("photo-1513326738677-b964603b136d"), blurb: "Moscow & St. Petersburg heritage." },
      { name: "China", slug: "china", image: img("photo-1508804185872-d7badad00f7d"), blurb: "The Great Wall, Shanghai and Guilin." },
      { name: "South Korea", slug: "korea", image: img("photo-1538485399081-7191377e8241"), blurb: "Seoul, K-culture and Jeju island." },
      { name: "Singapore & Malaysia", slug: "singapore-malaysia", image: img("photo-1525625293386-3f8f99389edd"), blurb: "Marina Bay, Langkawi and colonial Penang." },
      { name: "Maldives", slug: "maldives", image: img("photo-1544551763-46a013bb70d5"), blurb: "Overwater villas and crystal lagoons.", from: "₹ 89,999" },
    ],
  },
  {
    key: "oceania", label: "Australia & New Zealand",
    destinations: [
      { name: "Australia", slug: "australia", image: img("photo-1523482580672-f109ba8cb9be"), blurb: "Sydney, Great Barrier Reef, Gold Coast." },
      { name: "New Zealand", slug: "new-zealand", image: img("photo-1507699622108-4be3abd695ad"), blurb: "Fjords, glaciers and Middle-earth vistas." },
    ],
  },
  {
    key: "europe", label: "Europe",
    destinations: [
      { name: "Switzerland", slug: "switzerland", image: img("photo-1530122037265-a5f1f91d3b99"), blurb: "Jungfrau, Interlaken and lake cruises.", from: "₹ 1,49,999" },
      { name: "France", slug: "france", image: img("photo-1502602898657-3e91760cbb34"), blurb: "Paris, Provence and the French Riviera." },
      { name: "Italy", slug: "italy", image: img("photo-1531572753322-ad063cecc140"), blurb: "Rome, Venice and Amalfi Coast." },
      { name: "Greece", slug: "greece", image: img("photo-1503152394-c571994fd383"), blurb: "Santorini sunsets and Mykonos beaches." },
      { name: "Spain", slug: "spain", image: img("photo-1509840841025-9088ba78a826"), blurb: "Barcelona, Madrid and Andalusian charm." },
      { name: "Nordic (Denmark & Finland)", slug: "nordic", image: img("photo-1516815231560-8f41ec531527"), blurb: "Northern Lights and design capitals." },
      { name: "Turkey", slug: "turkey", image: img("photo-1527838832700-5059252407fa"), blurb: "Istanbul, Cappadocia hot-air balloons." },
    ],
  },
  {
    key: "uk", label: "United Kingdom & Ireland",
    destinations: [
      { name: "London", slug: "london", image: img("photo-1513635269975-59663e0ac1ad"), blurb: "Royal palaces, West End and Thames." },
      { name: "Scotland", slug: "scotland", image: img("photo-1583407723467-9b2d22504831"), blurb: "Highlands, whisky trails and castles." },
      { name: "Ireland", slug: "ireland", image: img("photo-1590089415225-401ed6f9db8e"), blurb: "Cliffs of Moher and Dublin pubs." },
    ],
  },
  {
    key: "north-america", label: "North America",
    destinations: [
      { name: "USA", slug: "usa", image: img("photo-1485871981521-5b1fd3805eee"), blurb: "NYC, West Coast and National Parks." },
      { name: "Canada", slug: "canada", image: img("photo-1519832979-6fa011b87667"), blurb: "Rockies, Niagara and Vancouver." },
      { name: "Mexico", slug: "mexico", image: img("photo-1518638150340-f706e86654de"), blurb: "Cancun beaches and Mayan ruins." },
    ],
  },
  {
    key: "south-america", label: "South America",
    destinations: [
      { name: "Brazil", slug: "brazil", image: img("photo-1483729558449-99ef09a8c325"), blurb: "Rio, Amazon and Iguazu Falls." },
      { name: "Peru", slug: "peru", image: img("photo-1526392060635-9d6019884377"), blurb: "Machu Picchu and Sacred Valley." },
      { name: "Argentina", slug: "argentina", image: img("photo-1589909202802-8f4aadce1849"), blurb: "Buenos Aires tango and Patagonia." },
      { name: "Chile", slug: "chile", image: img("photo-1531177071211-fe7bfd6613b0"), blurb: "Atacama desert and Torres del Paine." },
      { name: "Uruguay", slug: "uruguay", image: img("photo-1544737151-6e4b999de2a7"), blurb: "Montevideo and Punta del Este." },
    ],
  },
  {
    key: "africa", label: "Africa",
    destinations: [
      { name: "South Africa", slug: "south-africa", image: img("photo-1516026672322-bc52d61a55d5"), blurb: "Cape Town, safaris and Garden Route." },
      { name: "Kenya", slug: "kenya", image: img("photo-1547471080-7cc2caa01a7e"), blurb: "Masai Mara big-five safari." },
      { name: "Tanzania", slug: "tanzania", image: img("photo-1516426122078-c23e76319801"), blurb: "Serengeti and Kilimanjaro." },
      { name: "Mauritius & Seychelles", slug: "mauritius-seychelles", image: img("photo-1544551763-46a013bb70d5"), blurb: "Island escapes for honeymooners." },
      { name: "Ghana", slug: "ghana", image: img("photo-1580060839134-75a5edca2e99"), blurb: "West African culture & coastlines." },
    ],
  },
  {
    key: "antarctica", label: "Antarctica",
    destinations: [
      { name: "Antarctica Expedition", slug: "antarctica", image: img("photo-1551415923-a2297c7fda79"), blurb: "The seventh continent by expedition ship." },
    ],
  },
];

export const allDestinations: Dest[] = regions.flatMap(r => r.destinations);

const initialTestimonials = [
  { name: "Mr. Sethuraman", role: "Char Dham Yatra", quote: "A very well organised yatra — clean stays, punctual pickups and a caring group leader throughout. Truly a stress-free spiritual trip for the whole family." },
  { name: "Mr. Jagmohan Singh", role: "Family tour — Kashmir", quote: "From Srinagar shikaras to Gulmarg snow, every day was planned to perfection. The drivers and hotels were exactly as promised." },
  { name: "Mr. Rajesh Gupta", role: "Honeymoon — Bali", quote: "Vinayak handled every transfer, villa and candlelight dinner. We only had to show up and enjoy — Bali felt completely effortless." },
  { name: "Mr. Wasim Khan", role: "Dubai & Abu Dhabi", quote: "Visa, flights, desert safari, Burj Khalifa — all sorted in one call. Transparent pricing and instant WhatsApp support throughout the trip." },
  { name: "Mrs. Reena Kumari", role: "Family tour — Kerala", quote: "Backwater houseboats, Munnar tea gardens and beaches — beautifully sequenced. Vinayak's team was always a call away, day or night." },
  { name: "Ms. Palak", role: "Solo weekend — Manali", quote: "As a solo woman traveller I felt completely safe. Reliable drivers, thoughtful hotel picks and a team that genuinely cares." },
  { name: "Ms. Emma", role: "Rajasthan Heritage Tour", quote: "First visit to India and the care was outstanding. Every fort, palace and haveli was booked seamlessly — I never had to worry about a thing." },
  { name: "Mr. David Brown", role: "Kerala & Goa", quote: "A brilliantly designed two-week itinerary. Guides were knowledgeable, hotels were charming and communication was quick throughout." },
  { name: "Mr. Lucky Singh", role: "Force Motors (Corporate Offsite)", quote: "Flights, hotel blocks and ground logistics for 180 people — handled without a single miss. Our go-to travel partner." },
  { name: "Mr. Ashok Sharma", role: "JK Files (India) Limited", quote: "Reissues, upgrades, last-minute changes — Ajay and his team handle everything within minutes. A very dependable partner." },
  { name: "Mr. Om Kumar", role: "Caparo Engineering India", quote: "Punctual, transparent invoicing and always reachable on WhatsApp. Vinayak has become our default travel desk." },
  { name: "Mr. Bansal", role: "Shubham Group (Annual Meet)", quote: "Highly professional service. They customized everything within our budget and ensured a smooth execution of our group tours." },
  { name: "Mr. Mandloi", role: "VE Commercial Vehicles Ltd", quote: "Excellent travel support for executive travel, airport transfers, and booking accommodations across the country." },
  { name: "Mr. Mahendra Singh", role: "Auto Engineering Ltd", quote: "Reliable and fast response times. They manage all our flight reissues and travel logistics flawlessly." }
];

export const testimonials = initialTestimonials;

export const corporateClients = [
  "Force Motors", "Shubham Group", "VE Commercial Vehicles Ltd.",
  "Caparo Engineering India Limited", "Auto Engineering Ltd.",
  "JK Files (India) Limited", "Pharmaceutical Giants",
];

export const airlines = [
  "Emirates", "Cathay Pacific", "Singapore Airlines", "United Airlines",
  "IndiGo", "Air India", "Vistara", "SriLankan Airlines", "Ethiopian Airlines", "AirAsia",
];

export const hotelGroups = [
  "Marriott International", "Hilton Worldwide", "IHG", "Accor Group",
  "Wyndham Hotels & Resorts", "Hyatt", "Four Seasons", "Six Senses",
  "Radisson Hotel Group", "Shangri-La", "ITC Hotels", "Oberoi Group",
  "Best Western", "Ramada", "Days Inn", "Golden Tulip", "Campanile",
  "Treebo", "Omni Hotels", "Disney Experiences",
];

export const durations = [
  "1 Day Tour", "1N / 2D", "2N / 3D", "3N / 4D", "4N / 5D", "5N / 6D",
  "6N / 7D", "7N / 8D", "8N / 9D", "9N / 10D", "10N / 11D", "12N / 13D",
  "14N / 15D", "15N & more",
];

export const faqs = [
  {
    q: "How do I book a tour with Vinayak Tours & Travel?",
    a: "Simply send an enquiry through our website, WhatsApp, or a call. Our travel designer will share a custom itinerary and quote — at no extra cost. You only pay after you've approved the package.",
  },
  {
    q: "Do I need to pay an advance to get an itinerary?",
    a: "No. Itinerary drafts and consultations are at no extra charge. Payments are collected only after you confirm a package, and always through official invoices and secure channels.",
  },
  {
    q: "Do you handle visa and passport work?",
    a: "Yes. We provide end-to-end passport and visa consultation — documentation, appointment slots, form filling, and interview coaching for most tourist and business visa categories.",
  },
  {
    q: "Which destinations do you cover?",
    a: "50+ countries across Asia, Europe, the Americas, Africa, Oceania and Antarctica, plus every major Indian region — from Kashmir to Kerala, and Char Dham to the Northeast.",
  },
  {
    q: "Can you plan honeymoon and family group tours?",
    a: "Absolutely. Honeymoon, family, senior citizens, solo, group and MICE tours are our core specialities — with dedicated managers for every trip.",
  },
  {
    q: "What support do I get during my trip?",
    a: "24×7 WhatsApp support before, during and after the trip. Don't ever feel alone at the airport, abroad, or at odd hours — our dedicated team is always available to assist you.",
  },
  {
    q: "Are your prices negotiable?",
    a: "Prices depend on season, hotel category and inclusions. We're transparent about every component and always aim to match your budget without cutting corners.",
  },
  {
    q: "Do you offer corporate and MICE travel services?",
    a: "Yes. We manage corporate ticketing, offsites, incentive trips, conferences and exhibitions for organisations of every size — with consolidated billing and dedicated desks.",
  },
  {
    q: "Do you offer fixed-departure group tours?",
    a: "Yes! We have curated fixed-departure tours with the best economical itineraries — perfect for solo travellers and families who want to join a group. Check our Packages section for current departures.",
  },
];

const galleryImg = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;

export const galleryPhotos = [
  { src: galleryImg("photo-1512343879784-a960bf40e7f2"), alt: "Palm-fringed beach in Goa at sunset", cat: "Beaches" },
  { src: galleryImg("photo-1602216056096-3b40cc0c9944"), alt: "Kerala backwater houseboat at dawn", cat: "Backwaters" },
  { src: galleryImg("photo-1477587458883-47145ed94245"), alt: "Rajasthan fort at golden hour", cat: "Heritage" },
  // Mountains — proper Himalayan / mountain photos
  { src: galleryImg("photo-1585409677983-0f6c41ca9c3b"), alt: "Snow-capped Himalayan peaks at sunrise", cat: "Mountains" },
  { src: galleryImg("photo-1464822759023-fed622ff2c3b"), alt: "Mountain range with dramatic clouds", cat: "Mountains" },
  { src: galleryImg("photo-1506905925346-21bda4d32df4"), alt: "Alpine mountain lake with reflections", cat: "Mountains" },
  { src: galleryImg("photo-1512453979798-5ea266f8880c"), alt: "Dubai skyline with Burj Khalifa", cat: "Cityscapes" },
  { src: galleryImg("photo-1537996194471-e657df975ab4"), alt: "Rice terraces in Bali, Indonesia", cat: "Nature" },
  { src: galleryImg("photo-1530122037265-a5f1f91d3b99"), alt: "Swiss Alps and Lake Interlaken", cat: "Europe" },
  { src: galleryImg("photo-1493976040374-85c8e12f0c0e"), alt: "Cherry blossoms in Japan", cat: "Asia" },
  // Wildlife
  { src: galleryImg("photo-1547471080-7cc2caa01a7e"), alt: "Masai Mara wildlife safari — Kenya", cat: "Wildlife" },
  { src: galleryImg("photo-1516426122078-c23e76319801"), alt: "Serengeti wildlife and Kilimanjaro", cat: "Wildlife" },
  { src: galleryImg("photo-1474511320723-9a56873867b5"), alt: "African lion on the savanna safari", cat: "Wildlife" },
  // Trekking — proper trekking/hiking trail photos
  { src: galleryImg("photo-1551632811-561732d1e306"), alt: "Trekkers on a mountain trail with backpacks", cat: "Trekking" },
  { src: galleryImg("photo-1533240332313-0db49b459ad6"), alt: "Hikers trekking through green valley trail", cat: "Trekking" },
  { src: galleryImg("photo-1501555088652-021faa106b9b"), alt: "Trekking group with poles on mountain ridge", cat: "Trekking" },
  // Cruises — proper cruise ship photos
  { src: galleryImg("photo-1548574505-5e239809ee19"), alt: "Large cruise ship sailing on open ocean", cat: "Cruises" },
  { src: galleryImg("photo-1599640842225-85d111c60e6b"), alt: "Luxury cruise ship deck at sunset", cat: "Cruises" },
  { src: galleryImg("photo-1580541631950-7282082b53ce"), alt: "Cruise ship docked at tropical port", cat: "Cruises" },
  // Adventure
  { src: galleryImg("photo-1519832979-6fa011b87667"), alt: "Rocky Mountains, Canada", cat: "Adventure" },
  { src: galleryImg("photo-1526392060635-9d6019884377"), alt: "Machu Picchu in Peru", cat: "Heritage" },
  { src: galleryImg("photo-1551415923-a2297c7fda79"), alt: "Antarctic expedition ship near icebergs", cat: "Expeditions" },
];

export const galleryLocalVideos = [
  { src: "/africa video.mp4", title: "Africa Safari & Landscapes" },
  { src: "/cruise video.mp4", title: "Ocean Cruise Experience" },
  { src: "/cruise party video.mp4", title: "Cruise Deck Party" },
];

export const galleryDeals = [
  { src: "/bali.jpeg", alt: "Bali 4 Nights Short Escape — Bedugul, Tanah Lot, ATV & snorkelling, from $170pp" },
  { src: "/chennai cruise.jpeg", alt: "Cordelia Cruises Chennai getaway, 2 nights at sea, from ₹34,843" },
  { src: "/cherry blossom_japan.jpeg", alt: "Cherry Blossom 2027 Japan tour, from $1,099pp" },
  { src: "/china.jpeg", alt: "China 8N/9D — Shanghai, Beijing, Xi'an, Chongqing & Chengdu, from ₹1,99,000pp" },
  { src: "/London Cab.png", alt: "Book flights, trains, buses & cabs from London to Paris in one click" },
  { src: "/Macau.png", alt: "Macau experiences — House of Dancing Water, Golden Reel Ferris Wheel & teamLab SuperNature" },
  { src: "/Middle East & Africa.jpeg", alt: "Vinayak Tours & Travel expands to the Middle East & Africa — Marketplace LLC, UAE" },
  { src: "/Seychelles.jpeg", alt: "Seychelles Twin Island Getaway, 5 nights, from €722pp" },
  { src: "/srilanka cruise.jpeg", alt: "Cordelia Cruises sail to Sri Lanka — Chennai, Hambantota, Trincomalee & Jaffna" },
  { src: "/super machaa cruise.jpeg", alt: "Superr Macha Cruise — the South's biggest party at sea" },
  { src: "/Turkey.jpeg", alt: "Turkey Grand Discovery, 10 nights, from $1,187pp — Istanbul, Cappadocia & Bodrum" },
  { src: "/unique hotels deal.jpeg", alt: "Kruger Shalati — a once-in-a-lifetime hotel experience, South Africa" },
];

export type PackageCategory = "india" | "international" | "luxury" | "adventure" | "fixed";

const initialPackages: {
  slug: string;
  title: string;
  region: string;
  duration: string;
  from: string;
  image: string;
  category: PackageCategory[];
  highlights: string[];
  isFixed?: boolean;
  departureDate?: string;
}[] = [
  // ── STANDARD PACKAGES ──
  {
    slug: "kashmir-classic",
    title: "Kashmir Classic",
    region: "Srinagar · Gulmarg · Pahalgam",
    duration: "6N / 7D",
    from: "₹ 21,499",
    image: galleryImg("photo-1595815771614-ade9d652a65d"),
    category: ["india"],
    highlights: ["Dal Lake shikara ride", "Gulmarg Gondola", "Betaab Valley excursion"],
  },
  {
    slug: "kerala-backwaters",
    title: "Kerala Backwaters & Hills",
    region: "Munnar · Thekkady · Alleppey · Kochi",
    duration: "5N / 6D",
    from: "₹ 18,499",
    image: galleryImg("photo-1602216056096-3b40cc0c9944"),
    category: ["india"],
    highlights: ["Houseboat stay", "Tea plantation tour", "Spice garden visit"],
  },
  {
    slug: "rajasthan-heritage",
    title: "Rajasthan Royal Heritage",
    region: "Jaipur · Jodhpur · Udaipur",
    duration: "7N / 8D",
    from: "₹ 24,999",
    image: galleryImg("photo-1477587458883-47145ed94245"),
    category: ["india", "luxury"],
    highlights: ["Amber Fort", "Mehrangarh sunset", "Lake Pichola boat ride"],
  },
  {
    slug: "char-dham-yatra",
    title: "Char Dham Yatra",
    region: "Yamunotri · Gangotri · Kedarnath · Badrinath",
    duration: "10N / 11D",
    from: "₹ 29,999",
    image: galleryImg("photo-1626714424372-1f088c811568"),
    category: ["india"],
    highlights: ["Full spiritual circuit", "Escorted group tour", "Comfortable stays"],
  },
  {
    slug: "dubai-abu-dhabi",
    title: "Dubai & Abu Dhabi Escape",
    region: "Dubai · Abu Dhabi",
    duration: "5N / 6D",
    from: "₹ 39,999",
    image: galleryImg("photo-1512453979798-5ea266f8880c"),
    category: ["international"],
    highlights: ["Burj Khalifa", "Desert safari", "Sheikh Zayed Grand Mosque"],
  },
  {
    slug: "bali-honeymoon",
    title: "Bali Honeymoon",
    region: "Ubud · Seminyak · Nusa Dua",
    duration: "6N / 7D",
    from: "₹ 44,999",
    image: galleryImg("photo-1537996194471-e657df975ab4"),
    category: ["international", "luxury"],
    highlights: ["Private pool villa", "Candlelight dinner", "Ubud rice terraces"],
  },
  {
    slug: "switzerland-scenic",
    title: "Switzerland Scenic",
    region: "Zurich · Lucerne · Interlaken · Zermatt",
    duration: "7N / 8D",
    from: "₹ 1,49,999",
    image: galleryImg("photo-1530122037265-a5f1f91d3b99"),
    category: ["international", "luxury"],
    highlights: ["Jungfraujoch", "Mount Titlis", "Glacier Express ride"],
  },
  {
    slug: "thailand-island-hop",
    title: "Thailand Island Hopper",
    region: "Bangkok · Phuket · Krabi",
    duration: "6N / 7D",
    from: "₹ 29,999",
    image: galleryImg("photo-1552465011-b4e21bf6e79a"),
    category: ["international"],
    highlights: ["Phi Phi islands", "Tiger Cave temple", "Bangkok city tour"],
  },
  {
    slug: "ladakh-adventure",
    title: "Ladakh Adventure",
    region: "Leh · Nubra · Pangong",
    duration: "7N / 8D",
    from: "₹ 27,499",
    image: galleryImg("photo-1581793745862-99fde7fa73d2"),
    category: ["india", "adventure"],
    highlights: ["Khardung La pass", "Pangong Lake camp", "Nubra dunes"],
  },
  {
    slug: "kilimanjaro-climb",
    title: "Kilimanjaro Summit Trek",
    region: "Tanzania",
    duration: "9N / 10D",
    from: "₹ 2,49,000",
    image: galleryImg("photo-1516426122078-c23e76319801"),
    category: ["international", "adventure"],
    highlights: ["Machame route", "Certified guides", "Full expedition support"],
  },
  {
    slug: "maldives-luxe",
    title: "Maldives Overwater Luxe",
    region: "Male atoll",
    duration: "4N / 5D",
    from: "₹ 89,999",
    image: galleryImg("photo-1544551763-46a013bb70d5"),
    category: ["international", "luxury"],
    highlights: ["Overwater villa", "Seaplane transfer", "Sunset dolphin cruise"],
  },
  {
    slug: "new-zealand-adventure",
    title: "New Zealand Adventure",
    region: "Auckland · Rotorua · Queenstown",
    duration: "9N / 10D",
    from: "₹ 1,89,000",
    image: galleryImg("photo-1507699622108-4be3abd695ad"),
    category: ["international", "adventure", "luxury"],
    highlights: ["Milford Sound cruise", "Bungee & jet-boat", "Hobbiton set tour"],
  },
  // ── FIXED DEPARTURE PACKAGES ──
  {
    slug: "fixed-manali-group",
    title: "Fixed Departure — Manali Group Tour",
    region: "Delhi · Manali · Rohtang",
    duration: "5N / 6D",
    from: "₹ 11,999",
    image: galleryImg("photo-1626621341517-bbf3d9990a23"),
    category: ["india", "fixed"],
    isFixed: true,
    highlights: ["Group size 20–30 pax", "Rohtang pass excursion", "Solang Valley", "AC Volvo transfers"],
  },
  {
    slug: "fixed-goa-bus",
    title: "Fixed Departure — Goa Budget Bus Tour",
    region: "Indore · Goa · Indore",
    duration: "4N / 5D",
    from: "₹ 8,999",
    image: galleryImg("photo-1512343879784-a960bf40e7f2"),
    category: ["india", "fixed"],
    isFixed: true,
    highlights: ["Sleeper bus both ways", "Calangute & Baga beaches", "Dudhsagar waterfall excursion", "Old Goa churches"],
  },
  {
    slug: "fixed-rajasthan-winter",
    title: "Fixed Departure — Rajasthan Winter Special",
    region: "Jaipur · Jodhpur · Jaisalmer · Udaipur",
    duration: "7N / 8D",
    from: "₹ 17,999",
    image: galleryImg("photo-1477587458883-47145ed94245"),
    category: ["india", "fixed"],
    isFixed: true,
    highlights: ["Guided heritage walks", "Desert camp night stay", "Camel safari", "Pushkar fair (seasonal)"],
  },
  {
    slug: "fixed-chardham-bus",
    title: "Fixed Departure — Char Dham Yatra by Bus",
    region: "Haridwar · Yamunotri · Gangotri · Kedarnath · Badrinath",
    duration: "12N / 13D",
    from: "₹ 19,999",
    image: galleryImg("photo-1626714424372-1f088c811568"),
    category: ["india", "fixed"],
    isFixed: true,
    highlights: ["Fully escorted group", "All 4 dhams covered", "Budget guesthouse stays", "Priest services included"],
  },
  {
    slug: "fixed-thailand-group",
    title: "Fixed Departure — Thailand Group Tour",
    region: "Bangkok · Pattaya · Phuket",
    duration: "6N / 7D",
    from: "₹ 34,999",
    image: galleryImg("photo-1552465011-b4e21bf6e79a"),
    category: ["international", "fixed"],
    isFixed: true,
    highlights: ["Return flights included", "Coral island boat trip", "Alcazar cabaret show", "Phi Phi island tour"],
  },
  {
    slug: "fixed-dubai-group",
    title: "Fixed Departure — Dubai Group Package",
    region: "Dubai · Abu Dhabi",
    duration: "5N / 6D",
    from: "₹ 42,999",
    image: galleryImg("photo-1512453979798-5ea266f8880c"),
    category: ["international", "fixed"],
    isFixed: true,
    highlights: ["Return flights + visa", "Desert safari with BBQ dinner", "Burj Khalifa (124th floor)", "Abu Dhabi city tour"],
  },
];

export const packages = initialPackages;

export const packageCategories: { key: PackageCategory; label: string; desc: string }[] = [
  { key: "india", label: "India", desc: "Handpicked domestic escapes from the Himalayas to the coasts." },
  { key: "international", label: "International", desc: "50+ countries — visas, flights and stays handled end to end." },
  { key: "luxury", label: "Luxury", desc: "5-star stays, private guides and premium ground handling." },
  { key: "adventure", label: "Adventure", desc: "Treks, expeditions and once-in-a-lifetime experiences." },
  { key: "fixed", label: "Fixed Departures", desc: "Best & economical group itineraries with set departure dates." },
];
