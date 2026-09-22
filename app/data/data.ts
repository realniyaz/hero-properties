export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  typology: string;
  carpetArea: string;
  superArea: string;
  price: string;
  bsp: string;
  configuration: string;
  highlights: string[];
  popular?: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  category: "Wellness" | "Sports" | "Leisure" | "Community";
  description: string;
  iconName: string;
}

export interface LocationBenefit {
  distance: string;
  landmark: string;
  category: "Connectivity" | "Airport" | "Commercial" | "Education" | "Healthcare";
}

export interface ProjectData {
  projectInfo: {
    name: string;
    tagline: string;
    subHeading: string;
    developer: string;
    location: string;
    address: string;
    landParcel: string;
    towers: string;
    structure: string;
    startingPrice: string;
    reraNumber: string;
    possessionDate: string;
  };
  contactInfo: {
    phone: string;
    whatsappNumber: string;
    whatsappMessage: string;
    email: string;
    salesDeskEmail: string;
  };
  navLinks: NavItem[];
  hero: {
    badge: string;
    title: string;
    highlightedTitle: string;
    description: string;
    banners: string[];
    quickFeatures: {
      icon: string;
      label: string;
      value: string;
    }[];
  };
  overview: {
    title: string;
    subtitle: string;
    description: string[];
    keyStats: {
      label: string;
      value: string;
    }[];
  };
  highlights: string[];
  pricing: PricingPlan[];
  amenities: Amenity[];
  location: {
    title: string;
    subtitle: string;
    mapEmbedUrl?: string;
    benefits: LocationBenefit[];
  };
  disclaimer: string;
}

export const heroPropertiesData: ProjectData = {
  projectInfo: {
    name: "Hero Properties",
    tagline: "Elevated Living Engineered by Hero Realty",
    subHeading: "Ultra-Luxury 3 & 4 BHK Smart Green Residences",
    developer: "Hero Realty (Hero Enterprise)",
    location: "Prime Growth Corridor",
    address: "Hero Properties, Sector Growth Corridor, NCR",
    landParcel: "Expansive Gated Township",
    towers: "Iconic High-Rise Towers",
    structure: "G+34 Floors",
    startingPrice: "₹1.85 Cr* Onwards",
    reraNumber: "RERA Registration Applied / In Process",
    possessionDate: "December 2028",
  },

  contactInfo: {
    phone: "+91 99103 74156",
    whatsappNumber: "917042080055",
    whatsappMessage:
      "Hi! 👋 I would like to know more about the Hero Properties project. Please share the pricing sheet, floor plans, and current launch offers.",
    email: "realtyfmleads@gmail.com",
    salesDeskEmail: "realtyfmleads@gmail.com",
  },

  navLinks: [
    { label: "Overview", href: "#overview" },
    { label: "Highlights", href: "#highlights" },
    { label: "Pricing", href: "#price" },
    { label: "Floor Plans", href: "#floorplans" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "New Luxury Launch • Hero Enterprise Legacy",
    title: "HERO",
    highlightedTitle: "PROPERTIES",
    description:
      "A grand residential enclave designed around biophilic wellness, IGBC gold standard sustainability, and futuristic smart home living.",
    banners: [
      "/banner1.png",
      "/banner2.png",
      "/banner3.png",
    ],
    quickFeatures: [
      { icon: "Building2", label: "Typology", value: "3 & 4 BHK Residences" },
      { icon: "Sparkles", label: "Design", value: "Smart Climate Responsive" },
      { icon: "IndianRupee", label: "Investment", value: "₹1.85 Cr* Onwards" },
      { icon: "MapPin", label: "Location", value: "Strategic Highway Corridor" },
    ],
  },

  overview: {
    title: "Legacy of Engineering & Architectural Trust",
    subtitle: "Hero Realty Heritage",
    description: [
      "Hero Properties introduces an ultra-luxury residential address engineered with precision, sustainable green living, and smart automation built directly into the fabric of daily life.",
      "Spread across vast landscaped acres, the development features low-density tower placement ensuring expansive natural daylight, cross-ventilation, and majestic skyline vistas.",
    ],
    keyStats: [
      { label: "Acres of Lush Greens", value: "80%" },
      { label: "Dedicated Clubhouse", value: "50,000+ Sq.Ft." },
      { label: "Units Per Floor", value: "Low Density" },
      { label: "Multi-Tier Security", value: "5-Tier System" },
    ],
  },

  highlights: [
    "Backed by the trusted legacy of Hero Enterprise with top-tier construction standards",
    "Expansive 3 & 4 BHK luxury residences featuring large deck balconies and 11-ft clear ceiling heights",
    "IGBC Gold pre-certified sustainable development with active solar energy and rainwater management",
    "50,000+ Sq. Ft. signature clubhouse with temperature-controlled indoor pool and wellness spa",
    "Zero vehicular movement at ground level for safe and pollution-free pedestrian walks",
    "Smart home automation ready with digital keyless entry and EV charging infrastructure",
    "Close proximity to primary expressway corridors, upcoming metro corridors, and international airports",
  ],

  pricing: [
    {
      typology: "3 BHK Luxury Residence",
      carpetArea: "1,180 Sq. Ft.",
      superArea: "1,650 Sq. Ft.",
      price: "₹1.85 Cr*",
      bsp: "₹11,200 per sq. ft.",
      configuration: "3 Bedrooms + 3 Bathrooms + 3 Balconies",
      highlights: [
        "Spacious living and dining space opening to an expansive balcony",
        "Designer modular kitchen with attached utility deck",
        "Master suite with laminated wooden flooring and dressing niche",
        "Dedicated covered car parking spot",
      ],
      popular: true,
    },
    {
      typology: "4 BHK Ultra-Luxury Residence",
      carpetArea: "1,620 Sq. Ft.",
      superArea: "2,350 Sq. Ft.",
      price: "₹2.65 Cr*",
      bsp: "₹11,200 per sq. ft.",
      configuration: "4 Bedrooms + 4 Bathrooms + Servant Room + Extended Deck",
      highlights: [
        "Private entrance foyer with double-height ceiling feel",
        "Grand living hall with corner panoramic glass glazing",
        "Separate servant room with dedicated utility entrance",
        "Master bedroom with private deck and walk-in wardrobe area",
      ],
      popular: false,
    },
  ],

  amenities: [
    {
      id: "pool",
      title: "Resort-Style Lap & Infinity Pool",
      category: "Wellness",
      description: "Temperature-controlled swimming pool with private sun deck cabanas and dedicated kids splash pool.",
      iconName: "Waves",
    },
    {
      id: "clubhouse",
      title: "Signature Grand Clubhouse",
      category: "Leisure",
      description: "Sprawling multi-level clubhouse featuring banquet halls, cigar lounge, and mini theatre.",
      iconName: "Building",
    },
    {
      id: "fitness",
      title: "High-Tech Gymnasium & Pilates Studio",
      category: "Sports",
      description: "World-class strength equipment, cardio zone, dedicated yoga pavilion, and steam/sauna rooms.",
      iconName: "Dumbbell",
    },
    {
      id: "sports",
      title: "Multi-Sport Court Arena",
      category: "Sports",
      description: "Standard squash courts, badminton hall, floodlit tennis courts, and cricket practice pitch.",
      iconName: "Trophy",
    },
    {
      id: "kids",
      title: "Children's Sensory Play Park",
      category: "Community",
      description: "Safe rubberized outdoor activity zones, indoor creche, and interactive gaming zone.",
      iconName: "Smile",
    },
    {
      id: "greenery",
      title: "Zen Meditation & Reflexology Path",
      category: "Wellness",
      description: "Themed floral gardens, aromatic herbal trails, and silent meditation pavilions.",
      iconName: "Trees",
    },
  ],

  location: {
    title: "Strategically Connected Urban Address",
    subtitle: "Seamless highway and transit links connecting key commercial and cultural hubs.",
    mapEmbedUrl: "https://maps.google.com",
    benefits: [
      { distance: "2 Mins", landmark: "Primary Expressway Access Point", category: "Connectivity" },
      { distance: "8 Mins", landmark: "Upcoming Metro Link / Transit Station", category: "Connectivity" },
      { distance: "15 Mins", landmark: "Prominent Multi-Speciality Hospital", category: "Healthcare" },
      { distance: "20 Mins", landmark: "Leading International Schools & Universities", category: "Education" },
      { distance: "25 Mins", landmark: "Major Corporate Business District / Cyber Hub", category: "Commercial" },
      { distance: "30 Mins", landmark: "International Airport Corridor", category: "Airport" },
    ],
  },

  disclaimer:
    "Disclaimer: This website is for informational purposes only and belongs to an authorized marketing partner. Project details, specifications, floor plans, and pricing are subject to revision as per RERA guidelines and developer discretion. Images and renderings are artistic impressions.",
};