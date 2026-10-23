export interface Project {
  id: string
  name: string
  tagline: string
  category: "luxury-residences" | "bungalows" | "villas"
  location: string
  subLocation: string
  carpetArea: string
  plotSizes?: string
  configurations: string[]
  startingPrice: string
  status: "Ready to Live" | "Sample House Ready" | "Possession Ready"
  image: string
  brochureUrl: string
  highlights: string[]
  reraNumber: string
  videoUrl?: string
  mapsUrl?: string
  features: string[]
}

export const PROJECTS: Project[] = [
  {
    id: "spring-hill",
    name: "Springhill Homes",
    tagline: "Resort-Style Ready Living on 120ft & 60ft 4-Road Junction",
    category: "luxury-residences",
    location: "New Pal - Gauravpath Corridor, Surat",
    subLocation: "1 KM from New Pal Gauravpath, 300m from 300ft 2nd Ring Road",
    carpetArea: "1,850 - 3,450 sq.ft.",
    plotSizes: "84 & 124 Sq. Yds (21ft front opening)",
    configurations: ["3 BHK Luxury", "4 BHK Grand", "5 BHK Royal Villa"],
    startingPrice: "₹47 Lakhs*",
    status: "Ready to Live",
    image: "/images/springhill-campus.jpeg",
    brochureUrl: "/brochures/spring-hill-brochure.pdf",
    highlights: [
      "Ready & Live Campus: સંપૂર્ણ તૈયાર અને લાઈવ કેમ્પસ",
      "Prime 4-Road Junction (120 ft & 60 ft TP Roads)",
      "Anchor Plot: 3-સાઇડ ઓપન 124 Sq.Yd પ્લોટ (21ft wide front)",
      "Resort-type landscaped podium with comprehensive maintenance program"
    ],
    reraNumber: "PR/GJ/SURAT/SURAT CITY/SUDA/RAA09876/010125",
    videoUrl: "https://youtu.be/z-s4KD0q2qk",
    mapsUrl: "https://maps.app.goo.gl/Wi7TGhT5QZuHHZp99",
    features: [
      "Allotted Covered EV Parking",
      "Children's Play Turf & Senior Deck",
      "Uniform Elevation Campus",
      "100% BU Permission & Occupancy Certificate Ready"
    ]
  },
  {
    id: "raj-mahel",
    name: "Raj Mahel",
    tagline: "The Real Mahel: 52 Ultra-Exclusive Royal Bungalows",
    category: "bungalows",
    location: "SMC New TP Corridor, Surat",
    subLocation: "120ft & 60ft Road Junction, 2-Side Road Corner Project",
    carpetArea: "2,400 - 4,800 sq.ft.",
    plotSizes: "125 - 200 Sq. Yds (28ft to 35ft Wide Fronts)",
    configurations: ["4 BHK Royal Bungalow", "5 BHK Palace Villa", "Anchor Plots"],
    startingPrice: "₹72.80 Lakhs*",
    status: "Ready to Live",
    image: "/images/rajmahel/entrance-gate.jpg",
    brochureUrl: "/brochures/raj-mahel-brochure.pdf",
    highlights: [
      "Ultra-private community reserved for only 52 discerning families",
      "Anchor Plots: 3-Side Open 200 Sq.Yd & 2-Side Open 180 Sq.Yd",
      "100% East-West Vastu-compliant layout with maximum cross-ventilation",
      "1 Main Security Checkpoint + 6 Manageable Entry/Exit Gates"
    ],
    reraNumber: "PR/GJ/SURAT/CHORYASI/SUDA/RAA09912/120225",
    videoUrl: "https://youtu.be/K_j_2J0510A",
    mapsUrl: "https://maps.app.goo.gl/CnkR8tcD2y3yU4fv9",
    features: [
      "Grand Central Water Fountain & Royal Gate",
      "Dedicated Club House & Banquet Room",
      "Architect & Interior Customization Support",
      "Immediate BU Registration Available"
    ]
  },
  {
    id: "applewood-homes",
    name: "Applewood",
    tagline: "Ready Row House Campus with Expansive 20ft Wide Living Halls",
    category: "luxury-residences",
    location: "New Pal Extension, Surat",
    subLocation: "Directly Touch 60ft SMC TP Road with Gated Security",
    carpetArea: "1,650 - 2,900 sq.ft.",
    plotSizes: "89 & 137 Sq. Yds (21ft Wide Fronts)",
    configurations: ["3 BHK Row House", "4 BHK Premium Row House"],
    startingPrice: "₹42.27 Lakhs*",
    status: "Ready to Live",
    image: "/images/applewood/applewood-1.jpg",
    brochureUrl: "/brochures/spring-hill-brochure.pdf",
    highlights: [
      "Spacious layout: 89 Sq.Yd with massive 20-foot wide living halls",
      "Anchor Plot of 137 Sq.Yd facing SMC road with shop/commercial potential",
      "East-West facing plots engineered according to Vastu Shastra",
      "Private boutique community of only 53 privileged families"
    ],
    reraNumber: "PR/GJ/SURAT/SURAT CITY/SUDA/RAA09432/080325",
    videoUrl: "https://youtu.be/Fhi8EtCLFXA",
    mapsUrl: "https://maps.app.goo.gl/Wi7TGhT5QZuHHZp99",
    features: [
      "Single Monitored Security Gate",
      "Interconnected Wide Internal Roads",
      "Direct Natural Sunlight & Terrace Sit-Out",
      "High Rental & Immediate Capital Appreciation Yield"
    ]
  },
  {
    id: "mahel",
    name: "Mahel",
    tagline: "Exclusive Bungalow Plot Project • The Real Mahel",
    category: "bungalows",
    location: "120ft Main Road & 60ft Road Junction, Surat",
    subLocation: "New Pal Gauravpath 1 KM, 300m to 2nd Ring Road (300 ft)",
    carpetArea: "2,600 - 5,200 sq.ft.",
    plotSizes: "Starting from 28ft Wide Front Opening",
    configurations: ["Bungalow Plots", "4 BHK Custom Bungalow", "5 BHK Royal"],
    startingPrice: "₹72.80 Lakhs*",
    status: "Ready to Live",
    image: "/images/mahel/entrance-gate.jpg",
    brochureUrl: "/brochures/raj-mahel-brochure.pdf",
    highlights: [
      "3-Side Open Project: 120ft Main Road & 60ft Road 4-Road Junction",
      "Private Community: માત્ર 31 એક્સક્લુઝિવ પરિવારો માટે જ",
      "Full Architect & Interior Support for planning and customization",
      "Royal Theme with uniform elevation & custom planning combination"
    ],
    reraNumber: "PR/GJ/SURAT/CHORYASI/SUDA/RAA09955/040225",
    videoUrl: "https://youtu.be/K_j_2J0510A",
    mapsUrl: "https://maps.app.goo.gl/CnkR8tcD2y3yU4fv9",
    features: [
      "Interconnected Campus Wide Roads",
      "28ft Wide Frontage on Starting Plots",
      "Bank Loan Available on Plots & Bungalows",
      "Complete SMC & TP Area Infrastructure"
    ]
  }
]

export interface FloorPlan {
  id: string
  title: string
  project: string
  plotArea: string
  superBuiltUp: string
  carpetArea: string
  facing: string
  image: string
  dimensions: {
    room: string
    size: string
    note: string
  }[]
  vastuNotes: string
}

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: "3bhk-84",
    title: "3 BHK Royal Row House (84 Sq.Yd)",
    project: "Springhill Homes",
    plotArea: "84 Sq. Yards (21'0\" Front Width)",
    superBuiltUp: "1,980 sq.ft.",
    carpetArea: "1,420 sq.ft.",
    facing: "East / North Facing (Vastu Compliant)",
    image: "/images/plans/3bhk-84sqyd-Spring Hills.jpg",
    dimensions: [
      { room: "Grand Living & Dining Room", size: "20'0\" x 13'6\"", note: "Spacious layout with direct natural cross-ventilation" },
      { room: "Master Bedroom Suite", size: "14'0\" x 12'0\"", note: "Attached luxury bath & private dress space" },
      { room: "Modular Kitchen & Store", size: "11'0\" x 9'0\"", note: "Dedicated utility area & granite counter" },
      { room: "Kid / Guest Bedroom", size: "12'0\" x 11'0\"", note: "Ample closet space & exterior window" },
      { room: "Sit-Out Balcony & Terrace", size: "15'0\" x 6'6\"", note: "Scenic open-to-sky view" }
    ],
    vastuNotes: "Main door facing East/North ensures continuous positive cosmic energy, Kitchen placed in Agni (South-East) zone."
  },
  {
    id: "4bhk-84",
    title: "4 BHK Grand Residence (84 Sq.Yd)",
    project: "Springhill Homes",
    plotArea: "84 Sq. Yards (21'0\" Front Width)",
    superBuiltUp: "2,450 sq.ft.",
    carpetArea: "1,820 sq.ft.",
    facing: "East-Facing Entrance",
    image: "/images/plans/4bhk-84sqyd-Spring Hills.jpg",
    dimensions: [
      { room: "Double Height Living Area", size: "21'0\" x 14'0\"", note: "Expansive ceiling with chandelier provision" },
      { room: "Presidential Master Suite", size: "16'0\" x 13'0\"", note: "Walk-in wardrobe and master bathroom" },
      { room: "Second Master Bedroom", size: "13'6\" x 12'0\"", note: "Attached bathroom & private balcony" },
      { room: "Children's Creative Suite", size: "12'6\" x 11'6\"", note: "Study nook with direct morning sun" },
      { room: "Private Family Lounge", size: "14'0\" x 10'0\"", note: "Upper level informal gathering lounge" }
    ],
    vastuNotes: "Master Bedroom situated in South-West (Nairutya) for prosperity and family stability."
  },
  {
    id: "3bhk-applewood",
    title: "3 BHK Premium (89 Sq.Yd - 20ft Wide Hall)",
    project: "Applewood Homes",
    plotArea: "89 Sq. Yards (21'0\" Wide Opening)",
    superBuiltUp: "2,150 sq.ft.",
    carpetArea: "1,580 sq.ft.",
    facing: "East-West Facing",
    image: "/images/plans/3bhk-89sqyd-AppleWood.jpg",
    dimensions: [
      { room: "Signature 20ft Wide Living Hall", size: "20'0\" x 14'6\"", note: "Extra wide layout for comfortable joint family seating" },
      { room: "Master Bedroom 1", size: "15'0\" x 12'0\"", note: "Private dressing and bathroom" },
      { room: "Parents Bedroom (Ground Floor)", size: "13'0\" x 11'6\"", note: "Zero-stair access for elders" },
      { room: "Kitchen & Puja Space", size: "12'0\" x 8'6\"", note: "Dedicated sacred Ishanya puja alcove" },
      { room: "Private Open Terrace", size: "18'0\" x 12'0\"", note: "Ideal for evening sit-outs & festivals" }
    ],
    vastuNotes: "Special ground-floor elders suite positioned in North-West (Vayavya) for gentle peaceful living."
  },
  {
    id: "anchor-124",
    title: "3-Side Open Anchor Villa (124 Sq.Yd)",
    project: "Springhill Homes / Raj Mahel",
    plotArea: "124 Sq. Yards (Corner Anchor Plot)",
    superBuiltUp: "3,100 sq.ft.",
    carpetArea: "2,350 sq.ft.",
    facing: "North-East Corner (Ishan Corner)",
    image: "/images/plans/124sqyd-Spring Hills.jpg",
    dimensions: [
      { room: "Grand Wrap-Around Living Room", size: "24'0\" x 15'0\"", note: "Triple side open natural light exposure" },
      { room: "Royal Master Penthouse Suite", size: "18'0\" x 14'0\"", note: "Jacuzzi bath provision & glass railing balcony" },
      { room: "Family Entertainment Hall", size: "16'0\" x 13'6\"", note: "Home theater / library zone" },
      { room: "Chef Kitchen + Dry Store", size: "13'6\" x 10'0\"", note: "Direct service entry and breakfast island" },
      { room: "Private Garden Porch", size: "20'0\" x 8'0\"", note: "Covered car parking with EV charging plug" }
    ],
    vastuNotes: "Rare 3-Side Open Ishan corner plot offering unmatched positive prana and maximum natural wind velocity."
  }
]

export const COMPARISON_POINTS = [
  {
    criteria: "What You Actually Receive",
    underConstruction: "3D brochure renders and empty construction pit; finish quality remains a gamble.",
    silverstone: "Walk through the exact finished residence, touch the Italian-finish tiles, inspect fixtures, and feel actual sunlight.",
    advantage: true
  },
  {
    criteria: "Possession & Move-In Timeline",
    underConstruction: "3 to 5 years of uncertain delays, endless contractor excuses, and recurring project extensions.",
    silverstone: "Immediate Possession today. BU Permission, Occupancy Certificate, and Title Clear deeds ready.",
    advantage: true
  },
  {
    criteria: "Financial Burden & Dual Expense",
    underConstruction: "Double burden: Paying expensive Home Loan EMIs + monthly house rent simultaneously for years.",
    silverstone: "Zero Rent Overlap. Move in on day one; your EMI pays for your own real home right now.",
    advantage: true
  },
  {
    criteria: "Carpet Area & Vastu Verification",
    underConstruction: "Paper dimensions only; actual room feel, window views, and light are impossible to verify.",
    silverstone: "100% verified physical carpet area. Check room acoustic isolation and compass directions with your own Vastu advisor.",
    advantage: true
  },
  {
    criteria: "Campus Life & Amenities",
    underConstruction: "Promises of clubhouses built in Phase 3 or 4, often delayed or altered by builders.",
    silverstone: "Active, thriving community with 500+ happy families, operational security gate, clubhouse, and lush gardens.",
    advantage: true
  }
]

export const AMENITIES_LIST = [
  {
    name: "Jain & Hindu Mandir Complex",
    description: "Dedicated serene spiritual sanctuary with peaceful meditation lawns designed for daily peace of mind.",
    tag: "Spiritual Calm"
  },
  {
    name: "Covered Allotted EV-Ready Parking",
    description: "Spacious paved parking bays with dedicated charging infrastructure for your electric vehicles.",
    tag: "Future Ready"
  },
  {
    name: "Clubhouse & Air-Conditioned Gym",
    description: "Fully functioning health club with modern fitness equipment, indoor games, and private banquet lounge.",
    tag: "Fully Active"
  },
  {
    name: "Landscaped Senior Deck & Kids Turf",
    description: "Anti-skid walking tracks with peaceful reflexology gardens and safe, rubberized play zones for children.",
    tag: "Family First"
  },
  {
    name: "3-Tier 24/7 Monitored CCTV Security",
    description: "Gated entry-exit security with RFID boom barriers, intercom connectivity, and high-definition perimeter surveillance.",
    tag: "100% Secure"
  },
  {
    name: "Solar Powered Common Utilities",
    description: "Substantial lifetime savings on society maintenance through green solar generation for campus lights and pumps.",
    tag: "Eco Friendly"
  }
]

export const CONNECTIVITY_RADAR = [
  {
    category: "Highways & Transport",
    places: [
      { name: "Surat 2nd Ring Road (300 ft Wide)", distance: "300 Meters", time: "1 min" },
      { name: "New Pal Gauravpath Main Corridor", distance: "1.0 KM", time: "3 mins" },
      { name: "New Dandi 300ft Express Road", distance: "400 Meters", time: "2 mins" },
      { name: "Surat International Airport", distance: "14 KM", time: "18 mins" },
      { name: "Surat Railway Station & Central Bus Port", distance: "12 KM", time: "20 mins" }
    ]
  },
  {
    category: "Schools & Academies",
    places: [
      { name: "Delhi Public School (DPS) Tapi", distance: "3.2 KM", time: "6 mins" },
      { name: "G.D. Goenka International School", distance: "4.5 KM", time: "8 mins" },
      { name: "LP Savani Academy & Vidhyalaya", distance: "2.8 KM", time: "5 mins" },
      { name: "S.D. Jain Modern School", distance: "5.1 KM", time: "9 mins" }
    ]
  },
  {
    category: "Healthcare & Hospitals",
    places: [
      { name: "Apple Super Speciality Hospital", distance: "2.5 KM", time: "5 mins" },
      { name: "Shalby Multispeciality Hospital", distance: "4.8 KM", time: "9 mins" },
      { name: "Sunshine Global Hospital", distance: "5.2 KM", time: "10 mins" },
      { name: "Kiran Super Multispeciality Hospital", distance: "8.5 KM", time: "14 mins" }
    ]
  },
  {
    category: "Shopping & Lifestyle",
    places: [
      { name: "DMart Pal & Supermarkets", distance: "1.8 KM", time: "4 mins" },
      { name: "VR Surat Shopping Mall & Inox", distance: "6.5 KM", time: "12 mins" },
      { name: "Rahul Raj Mall & Multiplex", distance: "6.8 KM", time: "12 mins" },
      { name: "Gauravpath Food & Cafe Street", distance: "1.5 KM", time: "3 mins" }
    ]
  }
]

export const BANK_PARTNERS = [
  { name: "State Bank of India", logoText: "SBI Home Loans", approval: "Instant Pre-Approved" },
  { name: "HDFC Bank", logoText: "HDFC Bank", approval: "Digital Sanction in 48 Hrs" },
  { name: "ICICI Bank", logoText: "ICICI Bank", approval: "Preferred Builder Rate" },
  { name: "Bank of Baroda", logoText: "Bank of Baroda", approval: "Lowest Processing Fee" },
  { name: "Kotak Mahindra Bank", logoText: "Kotak Prime", approval: "Fast-Track Approval" },
  { name: "Axis Bank", logoText: "Axis Bank", approval: "Special ROI Tie-Up" }
]

export const REALITY_COMPARISONS = [
  {
    id: "elevation",
    title: "Delivered Elevation vs 3D Concept",
    category: "Actual Elevation",
    location: "Springhill Homes Campus, Surat",
    deliveredImage: "/images/springhill-elevation.jpeg",
    renderImage: "/images/springhill/springhill-1.png",
    description: "The actual delivered elevation features crisp monolithic architectural grooves, weatherproof exterior texture, and integrated balcony lighting matching the architectural blueprint with 100% precision."
  },
  {
    id: "campus-gate",
    title: "Completed Grand Entrance Gate & Avenue",
    category: "Completed Entrance Lobby",
    location: "Raj Mahel Campus, Surat",
    deliveredImage: "/images/rajmahel/05 Gate.jpg",
    renderImage: "/images/rajmahel/01 Fountain.jpg",
    description: "Walk under the completed 30-foot arched security gate with security barrier, stone paving, and operational fountain before making your purchase decision."
  },
  {
    id: "clubhouse",
    title: "Operational Clubhouse & Garden Lounge",
    category: "Landscaped Podium",
    location: "Raj Mahel & Springhill, Surat",
    deliveredImage: "/images/rajmahel/06 Club House.jpg",
    renderImage: "/images/rajmahel/03 Garden.jpg",
    description: "Fully active community clubhouse with senior sit-out lawn, indoor games, and lush green landscaping already in daily use by resident families."
  },
  {
    id: "sample-flat",
    title: "Actual Furnished Sample Residence",
    category: "Actual Sample Flat",
    location: "Applewood & Springhill, Surat",
    deliveredImage: "/images/rajmahel/02 Balcony.jpg",
    renderImage: "/images/springhill/springhill-7.jpg",
    description: "Experience the real 20-foot wide living room, genuine ceiling heights, natural afternoon breeze, and serene sit-out balcony in person."
  }
]
