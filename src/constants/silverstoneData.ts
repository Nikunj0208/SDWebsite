export interface HeroSlideData {
  id: string
  tag: string
  headline: string
  headlineGu: string
  subhead: string
  subheadGu: string
  specsStrip: string[]
  specsStripGu: string[]
  startingPrice: string
  image: string
  alt: string
  projectId: string
  projectName: string
}

export interface MetricData {
  value: string
  title: string
  titleGu: string
  subtitle: string
  subtitleGu: string
  highlight?: boolean
}

export interface FlagshipProjectData {
  id: string
  name: string
  titleSuffix?: string
  gujaratiTag: string
  category: "all" | "row-house-plots" | "royal-bungalows"
  tag: string
  tagGu: string
  status: string
  statusGu: string
  startingPrice: string
  priceNumeric: number
  keyDimensions: string
  keyDimensionsGu: string
  plotDimensions: string
  plotRange: string
  frontage: string
  anchorHighlight: string
  anchorHighlightGu: string
  specPills: string[]
  specPillsGu: string[]
  image: string
  whatsappText: string
  carpetArea?: string
  totalFamilies: string
  roadType: string
  architectSupport: string
}

export interface WhyInvestProofCard {
  id: string
  title: string
  titleGu: string
  desc: string
  descGu: string
  badge: string
  badgeGu: string
  iconName: "Building" | "Road" | "Navigation" | "Compass" | "ShoppingBag" | "TrendingUp"
}

export interface ProjectComparisonRow {
  parameter: string
  parameterGu: string
  applewood: string
  springhill: string
  rajmahel: string
  mahel: string
}

// --------------------------------------------------------------------------
// 1. HERO SECTION DATA (3 Kinematic Slides with English + Gujarati)
// --------------------------------------------------------------------------
export const HERO_TRUST_PILL = {
  en: "RERA APPROVED • SMC & NEW TP AREA • LIVE & READY CAMPUSES",
  gu: "રેરા મંજૂર • SMC અને નવો ટીપી એરિયા • સંપૂર્ણ તૈયાર અને લાઈવ કેમ્પસ",
}

export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: "slide-1",
    projectId: "spring-hill",
    projectName: "Springhill Homes",
    tag: "RESORT-STYLE READY LIVING",
    headline: "Resort-Style Row House & Bungalow Plots from ₹42.27 Lakh*.",
    headlineGu: "₹42.27 લાખથી શરૂ રિસોર્ટ-સ્ટાઇલ રો-હાઉસ અને બંગલો પ્લોટ્સ.",
    subhead: "100% Ready-to-Live gated campuses just 1 km from New Pal Gauravpath.",
    subheadGu: "નવા પાલ ગૌરવપથથી માત્ર 1 કિમી દૂર 100% લાઈવ અને રેડી-ટુ-મુવ કેમ્પસ.",
    specsStrip: [
      "84 to 350 Sq.Yd Plots",
      "Loan Available on Plots & Bungalows",
      "Architect & Interior Support",
    ],
    specsStripGu: [
      "84 થી 350 વારના પ્લોટ્સ",
      "પ્લોટ અને બંગલો પર લોન ઉપલબ્ધ",
      "આર્કિટેક્ટ અને ઇન્ટિરિયર સપોર્ટ",
    ],
    startingPrice: "From ₹42.27 Lakh*",
    image: "/images/springhill-campus.jpeg",
    alt: "Silverstone Developers Springhill Homes Resort Campus Surat",
  },
  {
    id: "slide-2",
    projectId: "raj-mahel",
    projectName: "Rajmahel",
    tag: "THE ROYAL BUNGALOW COLLECTION",
    headline: "The Real Mahel. 28 to 35 Ft Wide Frontage Bungalows.",
    headlineGu: "ધ રિયલ મહેલ. 28 થી 35 ફૂટ પહોળા ફ્રન્ટવાળા રોયલ બંગલો.",
    subhead: "Ultra-private communities of 31 to 52 families on 120 ft & 60 ft road junctions.",
    subheadGu: "120 અને 60 ફૂટ રોડ જંક્શન પર માત્ર 31 થી 52 પરિવારો માટે અતિ-ખાનગી કેમ્પસ.",
    specsStrip: [
      "28 to 35 Ft Front Openings",
      "100% East-West Vastu",
      "Only 31–52 Elite Families",
    ],
    specsStripGu: [
      "28 થી 35 ફૂટ પહોળા ફ્રન્ટ",
      "100% પૂર્વ-પશ્ચિમ વાસ્તુ",
      "માત્ર 31–52 પ્રતિષ્ઠિત પરિવારો",
    ],
    startingPrice: "From ₹72.80 Lakh*",
    image: "/images/rajmahel/entrance-gate.jpg",
    alt: "Rajmahel The Real Mahel Luxury Palatial Bungalows Surat",
  },
  {
    id: "slide-3",
    projectId: "applewood-homes",
    projectName: "Applewood",
    tag: "SURAT MEGA INFRASTRUCTURE",
    headline: "Just 300m From Surat's 300-Ft 2nd Ring Road.",
    headlineGu: "સુરતના 300 ફૂટ 2nd રિંગ રોડથી માત્ર 300 મીટર દૂર.",
    subhead: "Connected by 300', 120', and 60' TP roads—Surat's next posh residential destination.",
    subheadGu: "300', 120' અને 60' ટીપી રોડથી જોડાયેલ સુરતનું આગામી પોશ રેસિડેન્શિયલ ડેસ્ટિનેશન.",
    specsStrip: [
      "300-Ft 2nd Ring Road Touch",
      "120' & 60' TP Grid Network",
      "SMC New TP Rapid Growth",
    ],
    specsStripGu: [
      "300 ફૂટ આઉટર રિંગ રોડ ટચ",
      "120' અને 60' ટીપી રોડ ગ્રીડ",
      "SMC નવો ટીપી ઝડપી વિકાસ",
    ],
    startingPrice: "From ₹42.27 Lakh*",
    image: "/images/applewood/applewood-1.jpg",
    alt: "Applewood Homes 300ft Ring Road Infrastructure Corridor Surat",
  },
]

// --------------------------------------------------------------------------
// 2. 6-METRIC TRUST & INFRASTRUCTURE BAR (Numbers Do The Talking)
// --------------------------------------------------------------------------
export const TRUST_METRICS: MetricData[] = [
  {
    value: "₹42.27L*",
    title: "Starting Price",
    titleGu: "શરૂઆતી કિંમત",
    subtitle: "Row House & Bungalow Plots",
    subtitleGu: "રો-હાઉસ અને બંગલો પ્લોટ્સ",
    highlight: true,
  },
  {
    value: "84–350",
    title: "Sq. Yd. Plot Sizes",
    titleGu: "વારના પ્લોટ્સ",
    subtitle: "21 ft to 35 ft wide frontages",
    subtitleGu: "21 થી 35 ફૂટ પહોળા ફ્રન્ટ",
  },
  {
    value: "300m",
    title: "To 2nd Ring Road",
    titleGu: "2nd રિંગ રોડથી અંતર",
    subtitle: "300 ft wide mega corridor",
    subtitleGu: "300 ફૂટ વિશાળ એક્સપ્રેસ રોડ",
    highlight: true,
  },
  {
    value: "1 KM",
    title: "To New Pal Gauravpath",
    titleGu: "નવા પાલ ગૌરવપથથી",
    subtitle: "2 km to DMart & Schools",
    subtitleGu: "2 કિમીમાં ડીમાર્ટ અને શાળાઓ",
  },
  {
    value: "100%",
    title: "Live & Ready Campuses",
    titleGu: "તૈયાર અને લાઈવ કેમ્પસ",
    subtitle: "RERA approved with bank loans",
    subtitleGu: "રેરા મંજૂર અને બેંક લોન સુવિધા",
    highlight: true,
  },
  {
    value: "4",
    title: "Junction Landmarks",
    titleGu: "જંક્શન લેન્ડમાર્ક્સ",
    subtitle: "On 120 ft & 60 ft TP roads",
    subtitleGu: "120 અને 60 ફૂટ ટીપી રોડ પર",
  },
]

// --------------------------------------------------------------------------
// 3. THE 4 FLAGSHIP PROJECTS (Verified Data from Brochure)
// --------------------------------------------------------------------------
export const FLAGSHIP_PROJECTS: FlagshipProjectData[] = [
  {
    id: "applewood",
    name: "Applewood",
    category: "row-house-plots",
    tag: "Premium Row House Plot Project",
    tagGu: "પ્રીમિયમ રો-હાઉસ પ્લોટ પ્રોજેક્ટ",
    status: "Ready & Live Campus",
    statusGu: "સંપૂર્ણ તૈયાર અને લાઈવ કેમ્પસ",
    startingPrice: "₹42.27 Lakh*",
    priceNumeric: 42.27,
    keyDimensions: "89 Sq.Yd (21' Front Width + 20' Wide Living Hall)",
    keyDimensionsGu: "89 વાર (21' ફ્રન્ટ પહોળાઈ + 20' વિશાળ લિવિંગ હોલ)",
    plotDimensions: "89 & 137 Sq.Yd Plots",
    plotRange: "89 to 137 Sq.Yd",
    frontage: "21 ft Front Width",
    anchorHighlight: "137 Sq.Yd SMC Road-Facing Plot with Shop Planning",
    anchorHighlightGu: "137 વારનો SMC રોડ-ફેસિંગ પ્લોટ (દુકાન પ્લાનિંગ સાથે)",
    specPills: [
      "Only 53 Private Plots",
      "Both-Side Road Corner",
      "East-West Vastu",
      "Single Security Gate",
    ],
    specPillsGu: [
      "માત્ર 53 પ્રાઈવેટ પ્લોટ્સ",
      "બંને બાજુ રોડ ટચ કોર્નર",
      "પૂર્વ-પશ્ચિમ વાસ્તુ સુસંગત",
      "સિંગલ સિક્યુરિટી ગેટ",
    ],
    image: "/images/applewood/applewood-1.jpg",
    whatsappText:
      "Hello Silverstone Developers, I want exact plot availability and layout for Applewood (from ₹42.27 Lakh*).",
    carpetArea: "1,650 - 2,900 sq.ft.",
    totalFamilies: "53 Plots",
    roadType: "Both-Side Corner Road",
    architectSupport: "Complete Support",
    gujaratiTag: "20 ફૂટ પહોળો લિવિંગ હોલ • સિંગલ સિક્યુરિટી ગેટ",
  },
  {
    id: "spring-hill",
    name: "Springhill Homes",
    category: "row-house-plots",
    tag: "3 / 4 / 5 BHK Row Houses & Plots",
    tagGu: "3 / 4 / 5 BHK રો-હાઉસ અને પ્લોટ્સ",
    status: "Ready & Live Resort Campus",
    statusGu: "રેડી અને લાઈવ રિસોર્ટ કેમ્પસ",
    startingPrice: "₹47.00 Lakh*",
    priceNumeric: 47.0,
    keyDimensions: "84 Sq.Yd (21' Frontage) & 124 Sq.Yd (3-Side Open Anchor Plot)",
    keyDimensionsGu: "84 વાર (21' ફ્રન્ટ) અને 124 વાર (3-બાજુ ખુલ્લો એન્કર પ્લોટ)",
    plotDimensions: "84 & 124 Sq.Yd (21ft Front)",
    plotRange: "84 to 124 Sq.Yd",
    frontage: "21 ft Frontage",
    anchorHighlight: "Prime 4-Road Junction of 120 ft & 60 ft Roads",
    anchorHighlightGu: "120 ફૂટ અને 60 ફૂટ રોડનું મુખ્ય 4-રોડ જંક્શન",
    specPills: [
      "Uniform Campus Elevation",
      "Resort-Type Living",
      "Interconnected Roads",
      "Dedicated Maintenance Program",
    ],
    specPillsGu: [
      "એકસરખું કેમ્પસ એલિવેશન",
      "રિસોર્ટ-ટાઈપ લાઈફસ્ટાઈલ",
      "ઇન્ટરકનેક્ટેડ રોડ નેટવર્ક",
      "ડેડિકેટેડ મેઇન્ટેનન્સ પ્રોગ્રામ",
    ],
    image: "/images/springhill-campus.jpeg",
    whatsappText:
      "Hello Silverstone Developers, I want exact plot availability and layout for Springhill Homes (from ₹47.00 Lakh*).",
    carpetArea: "1,850 - 3,450 sq.ft.",
    totalFamilies: "Fully Settled",
    roadType: "120ft & 60ft 4-Road Junction",
    architectSupport: "Complete Support",
    gujaratiTag: "120ft & 60ft રોડ જંક્શન • સંપૂર્ણ તૈયાર અને લાઈવ કેમ્પસ",
  },
  {
    id: "raj-mahel",
    name: "Rajmahel",
    titleSuffix: "The Real Mahel",
    category: "royal-bungalows",
    tag: "All Mahel-Type Luxury Bungalows",
    tagGu: "ઓલ મહેલ ટાઇપ લક્ઝરી બંગલો",
    status: "Ready & Live Campus",
    statusGu: "સંપૂર્ણ તૈયાર અને લાઈવ કેમ્પસ",
    startingPrice: "₹72.80 Lakh*",
    priceNumeric: 72.8,
    keyDimensions:
      "125 Sq.Yd (28'–35' Frontage), 180 Sq.Yd (2-Side Open), 200 Sq.Yd (3-Side Open Corner)",
    keyDimensionsGu:
      "125 વાર (28'–35' ફ્રન્ટ), 180 વાર (2-બાજુ ઓપન), 200 વાર (3-બાજુ ઓપન કોર્નર)",
    plotDimensions: "125 to 200 Sq.Yd Plots",
    plotRange: "125 to 200 Sq.Yd",
    frontage: "28 ft to 35 ft Frontage",
    anchorHighlight: "120 ft & 60 ft Road Junction • 2-Side Road Touch Corner Project",
    anchorHighlightGu: "120 ફૂટ અને 60 ફૂટ રોડ જંક્શન • 2-બાજુ રોડ ટચ કોર્નર પ્રોજેક્ટ",
    specPills: [
      "Only 52 Exclusive Families",
      "East-West Vastu",
      "1 Main + 6 Smart Gates",
      "Full Architect & Interior Support",
    ],
    specPillsGu: [
      "માત્ર 52 પ્રતિષ્ઠિત પરિવારો",
      "100% પૂર્વ-પશ્ચિમ વાસ્તુ",
      "1 મુખ્ય + 6 સ્માર્ટ ગેટ્સ",
      "સંપૂર્ણ આર્કિટેક્ટ અને ઇન્ટિરિયર સપોર્ટ",
    ],
    image: "/images/rajmahel/entrance-gate.jpg",
    whatsappText:
      "Hello Silverstone Developers, I want exact plot availability and layout for Rajmahel (from ₹72.80 Lakh*).",
    carpetArea: "2,400 - 4,800 sq.ft.",
    totalFamilies: "Only 52 Families",
    roadType: "120ft & 60ft Corner Junction",
    architectSupport: "Full Architect & Interior",
    gujaratiTag: "ધ રિયલ મહેલ • માત્ર 52 એક્સક્લુઝિવ પરિવારો માટે",
  },
  {
    id: "mahel-bungalows",
    name: "Mahel",
    titleSuffix: "The Real Mahel",
    category: "royal-bungalows",
    tag: "Exclusive Bungalow Plot Project",
    tagGu: "એક્સક્લુઝિવ બંગલો પ્લોટ પ્રોજેક્ટ",
    status: "Ultra-Private Community",
    statusGu: "અલ્ટ્રા-પ્રાઇવેટ રેસિડેન્શિયલ કમ્યુનિટી",
    startingPrice: "₹72.80 Lakh*",
    priceNumeric: 72.8,
    keyDimensions: "28 ft+ Wide Front Opening Plots",
    keyDimensionsGu: "28 ફૂટથી વધુ પહોળા ફ્રન્ટ ઓપનિંગ પ્લોટ્સ",
    plotDimensions: "Starting from 28ft Wide Front",
    plotRange: "150 to 350 Sq.Yd",
    frontage: "28 ft+ Wide Front Opening",
    anchorHighlight: "3-Side Open Project on 120 ft Main Road & 60 ft 4-Road Junction",
    anchorHighlightGu: "120 ફૂટ મુખ્ય રોડ અને 60 ફૂટ 4-રોડ જંક્શન પર 3-બાજુ ઓપન",
    specPills: [
      "Only 31 Exclusive Families",
      "Royal Uniform Theme",
      "Custom Floor Planning",
      "Full Architect & Interior Support",
    ],
    specPillsGu: [
      "માત્ર 31 ખાસ પરિવારો માટે",
      "રોયલ યુનિફોર્મ થીમ",
      "કસ્ટમ ફ્લોર પ્લાનિંગ સુવિધા",
      "સંપૂર્ણ આર્કિટેક્ટ અને ઇન્ટિરિયર સપોર્ટ",
    ],
    image: "/images/mahel/entrance-gate.jpg",
    whatsappText:
      "Hello Silverstone Developers, I want exact plot availability and layout for Mahel (from ₹72.80 Lakh*).",
    carpetArea: "2,600 - 5,200 sq.ft.",
    totalFamilies: "Only 31 Families",
    roadType: "3-Side Open 120' & 60' Junction",
    architectSupport: "Full Architect & Interior",
    gujaratiTag: "રોયલ થીમ • માત્ર 31 પરિવારો માટે • 3-Side Open",
  },
]

// --------------------------------------------------------------------------
// 4. "WHY INVEST HERE?" — SURAT'S NEXT POSH DESTINATION (Bilingual EN / GU)
// --------------------------------------------------------------------------
export const WHY_INVEST_SECTION = {
  eyebrowEn: "LOCATION FUTURE & GROWTH",
  eyebrowGu: "લોકેશન ભવિષ્ય અને ગ્રોથ",
  questionEn: "It's a new developing area—why buy a home here, and what is its future?",
  questionGu:
    "નવો એરિયા છે તો મનમાં સવાલ ચોક્કસ થાય કે 'અહીં ઘર કેમ લેવું જોઈએ?' અને 'આ એરિયાનું ફ્યુચર શું છે?'",
  subheadEn:
    "Surat is rapidly expanding Westward towards the 300-ft 2nd Ring Road and New Pal Gauravpath corridor.",
  subheadGu:
    "સુરતનો સૌથી તેજ વિકાસ 300 ફૂટ આઉટર રિંગ રોડ અને ન્યૂ પાલ ગૌરવપથ કોરિડોર તરફ થઈ રહ્યો છે.",
  proofCards: [
    {
      id: "card-1",
      badge: "SMC TP SCHEME",
      badgeGu: "SMC ટીપી સ્કીમ",
      title: "SMC & New TP Area",
      titleGu: "SMC અને નવો ટીપી એરિયા",
      desc: "Live SMC infrastructure works in full swing with modern drainage, water, and LED street lighting.",
      descGu: "SMC ઇન્ફ્રાસ્ટ્રક્ચરનું કામ પૂર્ણ ગતિમાં છે; ડ્રેનેજ, પાણી અને એલઇડી લાઈટ્સ કાર્યરત.",
      iconName: "Building",
    },
    {
      id: "card-2",
      badge: "MEGA ROAD NETWORK",
      badgeGu: "વિશાળ રોડ નેટવર્ક",
      title: "300' • 120' • 60' Roads",
      titleGu: "300' • 120' • 60' રોડ નેટવર્ક",
      desc: "Unmatched wide-road grid connectivity ensuring zero traffic congestion for decades.",
      descGu: "300, 120 અને 60 ફૂટના વિશાળ રોડ ગ્રીડથી સુરત શહેર સાથે ઉત્કૃષ્ટ અને અવિરત કનેક્ટિવિટી.",
      iconName: "Road",
    },
    {
      id: "card-3",
      badge: "OUTER RING ROAD",
      badgeGu: "આઉટર રિંગ રોડ",
      title: "300m to 2nd Ring Road",
      titleGu: "2nd રિંગ રોડથી 300 મીટર",
      desc: "Direct access to Surat's 300-ft outer ring corridor & 300-ft New Dandi Road in under 60 seconds.",
      descGu: "સુરતના 300 ફૂટ આઉટર રિંગ રોડ અને 300 ફૂટ ન્યૂ દાંડી રોડ સુધી માત્ર 60 સેકન્ડમાં પહોંચો.",
      iconName: "Navigation",
    },
    {
      id: "card-4",
      badge: "PAL CORRIDOR",
      badgeGu: "પાલ કોરિડોર",
      title: "1 KM to New Pal Gauravpath",
      titleGu: "પાલ ગૌરવપથથી 1 કિમી",
      desc: "Adjacent to Pal's established residential belt, offering premium lifestyle at sensible pricing.",
      descGu: "પાલ ગૌરવપથના સ્થાપિત અને વિકસિત રેસિડેન્શિયલ બેલ્ટથી અડીને પ્રીમિયમ લાઈફસ્ટાઈલ.",
      iconName: "Compass",
    },
    {
      id: "card-5",
      badge: "3-5 MINS DISTANCE",
      badgeGu: "3-5 મિનિટનું અંતર",
      title: "2 KM Daily Convenience Radar",
      titleGu: "2 કિમીમાં દૈનિક સુવિધાઓ",
      desc: "DMart, Multiplexes, Multi-Speciality Hospitals, and Top Education Zone within 3–5 minutes.",
      descGu: "ડી-માર્ટ, મલ્ટિપ્લેક્સ, મલ્ટી-સ્પેશિયાલિટી હોસ્પિટલો અને ટોચની ઇન્ટરનેશનલ શાળાઓ નજીકમાં.",
      iconName: "ShoppingBag",
    },
    {
      id: "card-6",
      badge: "HIGH CAPITAL APPRECIATION",
      badgeGu: "ઝડપી કેપિટલ ગ્રોથ",
      title: "Upcoming Commercial Hub",
      titleGu: "આગામી કોમર્શિયલ હબ",
      desc: "Surrounded by future high-street commercial & business landmarks for maximum appreciation.",
      descGu: "ભવિષ્યના પ્રીમિયમ હાઇ-સ્ટ્રીટ કોમર્શિયલ અને બિઝનેસ હબથી ઘેરાયેલું ઝડપી વળતર આપતું સ્થળ.",
      iconName: "TrendingUp",
    },
  ] as WhyInvestProofCard[],
}

// --------------------------------------------------------------------------
// 5. SIDE-BY-SIDE PROJECT SELECTOR TABLE ("Find Your Ideal Plot in 10 Seconds")
// --------------------------------------------------------------------------
export const PROJECT_COMPARISON_TABLE: ProjectComparisonRow[] = [
  {
    parameter: "Starting Price",
    parameterGu: "શરૂઆતી કિંમત",
    applewood: "₹42.27 Lakh*",
    springhill: "₹47.00 Lakh*",
    rajmahel: "₹72.80 Lakh*",
    mahel: "₹72.80 Lakh*",
  },
  {
    parameter: "Plot Sizes (Sq.Yd)",
    parameterGu: "પ્લોટ સાઇઝ (વાર)",
    applewood: "89 & 137 Sq.Yd",
    springhill: "84 & 124 Sq.Yd",
    rajmahel: "125, 180, 200 Sq.Yd",
    mahel: "150 to 350 Sq.Yd",
  },
  {
    parameter: "Front Opening Width",
    parameterGu: "ફ્રન્ટ ઓપનિંગ પહોળાઈ",
    applewood: "21 ft Front (20' Hall)",
    springhill: "21 ft Frontage",
    rajmahel: "28 ft to 35 ft Front",
    mahel: "28 ft+ Wide Front",
  },
  {
    parameter: "Road Junction Type",
    parameterGu: "રોડ જંક્શન પ્રકાર",
    applewood: "Corner 2-Road Touch",
    springhill: "4-Road (120' & 60')",
    rajmahel: "Corner (120' & 60')",
    mahel: "3-Side Open (120' & 60')",
  },
  {
    parameter: "Total Community Families",
    parameterGu: "કુલ પરિવારોની સંખ્યા",
    applewood: "Only 53 Plots",
    springhill: "Fully Gated Community",
    rajmahel: "Only 52 Families",
    mahel: "Only 31 Families",
  },
  {
    parameter: "Architect & Interior Support",
    parameterGu: "આર્કિટેક્ટ અને ઇન્ટિરિયર",
    applewood: "Complete Support",
    springhill: "Complete Support",
    rajmahel: "Full Custom Support",
    mahel: "Full Custom Support",
  },
  {
    parameter: "RERA & BU Permission",
    parameterGu: "રેરા અને BU મંજૂરી",
    applewood: "100% Ready Possession",
    springhill: "100% Ready Possession",
    rajmahel: "100% Ready Possession",
    mahel: "100% Ready Possession",
  },
]
