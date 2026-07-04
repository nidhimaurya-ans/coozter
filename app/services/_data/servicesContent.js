import {
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiCompass,
  FiCpu,
  FiDollarSign,
  FiEdit3,
  FiGlobe,
  FiHeart,
  FiHome,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPieChart,
  FiRefreshCcw,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export const sectionSpace = "container-pad py-14 sm:py-16 lg:py-24";
export const divider = "border-slate-300/80 divide-slate-300/80";

export const trustIndustries = [
  [FiHome, "Local Businesses"],
  [FiShoppingBag, "eCommerce Brands"],
  [FiMapPin, "Real Estate"],
  [FiHeart, "Healthcare"],
  [FiEdit3, "Education"],
  [FiCpu, "SaaS Companies"],
  [FiBriefcase, "Agencies"],
  [FiUsers, "Professional Services"],
];

export const achievementBlocks = [
  [
    FiTarget,
    "More Qualified Leads",
    "Attract people who are actively searching for your products or services.",
  ],
  [
    FiGlobe,
    "Better Online Visibility",
    "Improve your search presence, social reach, and brand awareness.",
  ],
  [
    FiTrendingUp,
    "Higher Conversion Rates",
    "Turn website visitors into inquiries, appointments, calls, and customers.",
  ],
  [
    FiShield,
    "Stronger Brand Trust",
    "Build a professional digital presence that makes customers choose you.",
  ],
  [
    FiRefreshCcw,
    "Scalable Growth",
    "Create repeatable marketing systems that support long-term business growth.",
  ],
];

export const valueBlocks = [
  [
    FiCompass,
    "Strategy-first execution",
    "Every channel starts with positioning, buyer intent, and the commercial job it needs to do.",
  ],
  [
    FiBarChart2,
    "Data-driven performance",
    "Campaigns are measured by signal quality, conversion paths, and decisions they help create.",
  ],
  [
    FiCpu,
    "Automation-ready workflows",
    "We structure content, reporting, and campaign operations so your team can repeat what works.",
  ],
  [
    FiShield,
    "Transparent reporting",
    "No noisy dashboards. You get the readout: what changed, why it matters, and what to do next.",
  ],
];

export const workflow = [
  [
    "Discover",
    "Audit the offer, channel data, customer journey, and where demand already exists.",
  ],
  [
    "Plan",
    "Choose the channels, messages, pages, and metrics that deserve focus first.",
  ],
  [
    "Execute",
    "Build campaigns, content systems, partner assets, and conversion paths with clear owners.",
  ],
  [
    "Optimize",
    "Review signal quality, budget movement, rankings, partner activity, and lead context.",
  ],
  [
    "Scale",
    "Turn the strongest tests into repeatable operating systems across channels.",
  ],
];

export const metrics = [
  ["3x", "Better campaign visibility"],
  ["45%", "Increase in qualified leads"],
  ["60%", "Better landing page conversion"],
  ["2.8x", "Return on ad spend focus"],
];

export const detailedServices = [
  {
    slug: "seo-growth",
    icon: FiSearch,
    eyebrow: "SEO Services",
    title: "Grow Organically With Search Engine Optimization",
    description:
      "SEO helps your business appear when customers search for your services online. We improve your website structure, content, keywords, and technical performance so search engines can understand and rank your website better.",
    cta: "Improve My SEO",
    href: "/contact",
    accent: "from-blue-600 to-sky-400",
    work: [
      "Complete website SEO audit",
      "Competitor research",
      "Keyword planning",
      "Meta title and description optimization",
      "Website content improvement",
      "Technical issue fixing",
      "Google Business Profile optimization",
      "Local SEO setup",
      "Monthly ranking reports",
    ],
    bestFor: [
      "Local Businesses",
      "Service-Based Companies",
      "Blogs",
      "eCommerce Websites",
      "Long-Term Growth",
    ],
  },
  {
    slug: "paid-advertising",
    icon: FiDollarSign,
    eyebrow: "PPC Advertising",
    title: "Get Faster Results With Paid Advertising",
    description:
      "Paid ads help your business reach customers quickly. We create, manage, and optimize campaigns designed to generate leads, sales, calls, and website traffic.",
    cta: "Launch My Ad Campaign",
    href: "/contact",
    accent: "from-sky-500 to-blue-700",
    work: [
      "Google Search Ads",
      "Display Ads",
      "Meta Ads",
      "YouTube Ads",
      "Retargeting campaigns",
      "Landing page recommendations",
      "Conversion tracking setup",
      "Budget optimization",
      "Weekly performance checks",
    ],
    bestFor: [
      "Lead Generation",
      "Product Sales",
      "New Launches",
      "Local Campaigns",
      "Fast Traffic Growth",
    ],
  },
  {
    slug: "social-media-growth",
    icon: FiUsers,
    eyebrow: "Social Media Marketing",
    title: "Build a Brand People Remember",
    description:
      "Social media is not only about posting. It is about creating a consistent brand voice, useful content, and meaningful engagement with your audience.",
    cta: "Grow My Social Presence",
    href: "/contact",
    accent: "from-cyan-500 to-blue-600",
    work: [
      "Monthly content calendar",
      "Post design",
      "Reels ideas",
      "Caption writing",
      "Hashtag research",
      "Profile optimization",
      "Audience engagement",
      "Campaign planning",
      "Monthly insights report",
    ],
    bestFor: [
      "Brand Awareness",
      "Community Building",
      "Product Promotion",
      "Personal Brands",
      "Local Businesses",
    ],
  },
  {
    slug: "website-design",
    icon: FiMonitor,
    eyebrow: "Website Design",
    title: "Create a Website That Looks Premium and Converts Better",
    description:
      "Your website is often the first impression of your business. We design clean, modern, mobile-friendly websites that explain your value clearly and guide visitors toward action.",
    cta: "Redesign My Website",
    href: "/contact",
    accent: "from-blue-700 to-cyan-400",
    work: [
      "Homepage design",
      "Service page design",
      "Landing page design",
      "Contact page optimization",
      "Responsive UI",
      "UX improvements",
      "Website speed improvements",
      "SEO-ready page structure",
      "CTA and form optimization",
    ],
    bestFor: [
      "New Businesses",
      "Website Redesigns",
      "Lead Generation Websites",
      "SaaS Websites",
      "Agency Websites",
    ],
  },
];

export const whyChooseBlocks = [
  [
    FiCompass,
    "Strategy Before Execution",
    "We do not start with random posts or ads. We first understand your goals and build a clear growth plan.",
  ],
  [
    FiBarChart2,
    "Transparent Reporting",
    "You always know what is happening, what is improving, and where your marketing budget is going.",
  ],
  [
    FiTarget,
    "Conversion-Focused Design",
    "Every campaign, page, and creative is built to guide users toward action.",
  ],
  [
    FiCpu,
    "Multi-Channel Expertise",
    "We connect SEO, ads, social media, content, and website improvements into one growth system.",
  ],
  [
    FiEdit3,
    "Custom Plans",
    "Your business is different, so your marketing plan should not be copied from another brand.",
  ],
  [
    FiShield,
    "Long-Term Partnership",
    "We focus on sustainable growth, not short-term tricks.",
  ],
];

export const industries = [
  [FiMapPin, "Real Estate", "Generate more property inquiries through local SEO, landing pages, paid ads, and social campaigns."],
  [FiHeart, "Healthcare & Clinics", "Build search visibility and patient trust with clear content, local pages, and conversion paths."],
  [FiEdit3, "Education & Coaching", "Reach students and learners with content funnels, paid campaigns, and credibility-led pages."],
  [FiShoppingBag, "eCommerce", "Increase product visibility, retarget visitors, and improve conversion through paid ads and SEO."],
  [FiHome, "Restaurants & Cafes", "Improve local discovery, reviews, social reach, and booking or ordering actions."],
  [FiCpu, "IT & SaaS", "Clarify positioning, improve demo demand, and connect content to product-led conversion points."],
  [FiZap, "Fitness & Wellness", "Turn local demand and community interest into bookings, memberships, and repeat visits."],
  [FiBriefcase, "Legal & Finance", "Build trust through educational content, lead forms, local SEO, and clear service pages."],
  [FiUsers, "Local Services", "Capture high-intent searches and convert visitors into calls, estimates, and appointments."],
  [FiPieChart, "B2B Companies", "Support longer buying journeys with authority content, landing pages, and measurable campaigns."],
];

export const trackedMetrics = [
  "Website traffic growth",
  "Keyword ranking improvement",
  "Cost per lead",
  "Conversion rate",
  "Return on ad spend",
  "Social engagement",
  "Email open rate",
  "Lead quality",
  "Sales inquiries",
  "Customer acquisition cost",
];

export const caseStudies = [
  {
    title: "Local Service Business",
    challenge: "Low website traffic and poor lead quality",
    solution: "Local SEO, Google Ads, and landing page redesign",
    result:
      "Improved search visibility, better-quality inquiries, and lower cost per lead",
  },
  {
    title: "eCommerce Brand",
    challenge: "High ad spend but low conversion",
    solution: "Meta Ads optimization, product page improvement, and retargeting funnel",
    result: "Better ROAS and improved checkout performance",
  },
];

export const plans = [
  {
    name: "Starter Growth Plan",
    price: "Custom",
    bestFor: "Small businesses starting digital marketing.",
    cta: "Start With Starter Plan",
    items: [
      "Basic SEO setup",
      "Social media content",
      "Google Business Profile optimization",
      "Monthly performance report",
      "Basic website recommendations",
    ],
  },
  {
    name: "Performance Growth Plan",
    price: "Custom",
    badge: "Most Popular",
    bestFor: "Businesses that want leads and consistent growth.",
    cta: "Choose Performance Plan",
    items: [
      "SEO optimization",
      "Google Ads or Meta Ads",
      "Social media management",
      "Content planning",
      "Landing page optimization",
      "Monthly strategy call",
      "Detailed reporting",
    ],
  },
  {
    name: "Scale Growth Plan",
    price: "Custom",
    bestFor: "Businesses ready to scale aggressively.",
    cta: "Scale My Business",
    items: [
      "Full-funnel marketing strategy",
      "SEO + PPC + Social Media",
      "Email marketing automation",
      "CRO improvements",
      "Advanced analytics",
      "Weekly optimization",
      "Dedicated growth support",
    ],
  },
];

export const platforms = [
  "Google Ads",
  "Meta Ads",
  "Google Analytics",
  "Google Search Console",
  "WordPress",
  "Shopify",
  "HubSpot",
  "Mailchimp",
  "Canva",
  "Semrush",
  "LinkedIn Ads",
  "YouTube Ads",
];

export const comparisonRows = [
  ["I want more Google traffic", "SEO"],
  ["I want leads quickly", "PPC Ads"],
  ["I want better brand awareness", "Social Media Marketing"],
  ["I want a better website", "Website Design"],
  ["I want better conversions", "CRO"],
  ["I want repeat customers", "Email Marketing"],
  ["I want better content", "Content Marketing"],
  ["I want full growth support", "Complete Digital Marketing Plan"],
];

export const serviceFaqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer SEO, PPC advertising, social media marketing, content marketing, website design, email marketing, branding, and conversion optimization.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "Paid ads can generate results faster, while SEO usually takes more time because it builds long-term organic visibility.",
  },
  {
    question: "Do you create custom marketing plans?",
    answer:
      "Yes. Every business has different goals, audiences, budgets, and competition, so we create custom strategies.",
  },
  {
    question: "Can you manage our social media?",
    answer:
      "Yes. We can plan content, design posts, write captions, create reels ideas, and track social media performance.",
  },
  {
    question: "Do you build websites too?",
    answer:
      "Yes. We design and develop modern, responsive, SEO-friendly websites and landing pages.",
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes. We provide clear reports showing performance, results, improvements, and next steps.",
  },
  {
    question: "Which service should I start with?",
    answer:
      "If you need fast leads, start with paid ads. If you want long-term visibility, start with SEO. If your website is weak, improve the website first.",
  },
];
