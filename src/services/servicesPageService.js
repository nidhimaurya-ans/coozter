import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const defaultServicesPageContent = {
  hero: {
    eyebrow: "Grow Your Business With Scalable Digital Marketing",
    title: "Outsmart the competition with best-in-class digital marketing services",
    description:
      "Get more traffic. Acquire more customers. Sell more stuff. Coozter offers proven strategies and reliable execution to exceed your marketing goals.",
    heroImageUrl:
      "https://www.smartsites.com/media/digital-marketing-services-banner-hero.png",
    heroImageAlt: "Digital marketing analytics laptop with growth idea",
    partnerBadges: [
      { name: "Google", label: "Growth Partner" },
      { name: "Microsoft", label: "Ads Partner" },
      { name: "Meta", label: "Business Partner" },
      { name: "Amazon Ads", label: "Verified Partner" },
      { name: "HubSpot", label: "Certified Partner" },
      { name: "Inc. 5000", label: "Growth List" },
      { name: "BBB", label: "A+ Rating" },
      { name: "Klaviyo", label: "Champion" },
    ],
  },
  serviceCategories: {
    heading: "Our Services",
    backgroundImageUrl: "/assets/coozter-hero-bg.jpg",
    groups: [
      {
        title: "Affiliate Branding",
        items: [
          "Partner messaging",
          "Referral landing pages",
          "Offer positioning",
          "Campaign tracking",
          "Partner visibility",
        ],
        href: "#affiliate-branding",
        cta: "More Affiliate Branding",
      },
      {
        title: "Paid Performance",
        items: [
          "Google Ads",
          "Social ad testing",
          "Retargeting",
          "Landing pages",
          "Budget guidance",
        ],
        href: "#paid-advertising",
        cta: "More Paid Campaigns",
      },
      {
        title: "Search Engine Optimization",
        items: [
          "Search intent research",
          "Technical SEO audit",
          "Comparison pages",
          "Content briefs",
          "Conversion updates",
        ],
        href: "#seo-growth",
        cta: "More Organic SEO",
      },
      {
        title: "Content & Lead Systems",
        items: [
          "Content strategy",
          "Lead magnets",
          "Email journeys",
          "Nurture flows",
          "Reporting cadence",
        ],
        href: "#content-marketing",
        cta: "More Content Systems",
      },
      {
        title: "Social Media Growth",
        items: [
          "Founder-led content",
          "LinkedIn positioning",
          "Community response",
          "Video direction",
          "Channel voice",
        ],
        href: "#social-media-growth",
        cta: "More Social Growth",
      },
    ],
  },
  growthEngine: {
    title: "Marketing systems that move like one connected engine.",
    text:
      "Every channel has a role: attract demand, shape trust, capture intent, and report what should happen next.",
    visualAlt: "Connected marketing growth system visual",
    centerLabelLineOne: "Growth",
    centerLabelLineTwo: "Engine",
    cards: [
      { title: "SEO", text: "Intent captured" },
      { title: "Paid", text: "Demand tested" },
      { title: "Content", text: "Trust built" },
      { title: "Analytics", text: "Decisions clear" },
    ],
  },
  outcomes: {
    title: "Marketing That Moves Real Business Metrics",
    text: "We focus on outcomes that matter, not vanity metrics.",
    achievementBlocks: [
      {
        iconKey: "target",
        title: "More Qualified Leads",
        text: "Attract people who are actively searching for your products or services.",
      },
      {
        iconKey: "globe",
        title: "Better Online Visibility",
        text: "Improve your search presence, social reach, and brand awareness.",
      },
      {
        iconKey: "trending-up",
        title: "Higher Conversion Rates",
        text: "Turn website visitors into inquiries, appointments, calls, and customers.",
      },
      {
        iconKey: "shield",
        title: "Stronger Brand Trust",
        text: "Build a professional digital presence that makes customers choose you.",
      },
      {
        iconKey: "refresh",
        title: "Scalable Growth",
        text: "Create repeatable marketing systems that support long-term business growth.",
      },
    ],
    metrics: [
      { value: "3x", label: "Better campaign visibility" },
      { value: "45%", label: "Increase in qualified leads" },
      { value: "60%", label: "Better landing page conversion" },
      { value: "2.8x", label: "Return on ad spend focus" },
    ],
  },
  process: {
    title: "Our Simple Growth Process",
    text:
      "A clear process keeps strategy, execution, and reporting moving in the same direction.",
    steps: [
      {
        title: "Discover",
        text: "Audit the offer, channel data, customer journey, and where demand already exists.",
      },
      {
        title: "Plan",
        text: "Choose the channels, messages, pages, and metrics that deserve focus first.",
      },
      {
        title: "Execute",
        text: "Build campaigns, content systems, partner assets, and conversion paths with clear owners.",
      },
      {
        title: "Optimize",
        text: "Review signal quality, budget movement, rankings, partner activity, and lead context.",
      },
      {
        title: "Scale",
        text: "Turn the strongest tests into repeatable operating systems across channels.",
      },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
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
    ],
  },
};

function getServicesPageRef() {
  return db ? doc(db, "projects", "coozter", "pages", "services") : null;
}

function getServicesCollectionRef() {
  return db ? collection(db, "projects", "coozter", "services") : null;
}

function getServicesPageContentRef() {
  return db
    ? doc(db, "projects", "coozter", "services", "servicesPageContent")
    : null;
}

function normalizeOrderedItems(items = []) {
  return items
    .filter((item) => item?.isActive !== false)
    .sort((a, b) => (a?.sortOrder ?? 999) - (b?.sortOrder ?? 999));
}

function mergeSection(defaultSection, section = {}) {
  return Object.entries(section).reduce(
    (acc, [key, value]) => {
      if (Array.isArray(value)) {
        acc[key] = value.length > 0 ? value : defaultSection[key];
        return acc;
      }

      acc[key] = value ?? defaultSection[key];
      return acc;
    },
    { ...defaultSection },
  );
}

function getSection(data = {}, key) {
  const sections = [
    data[key],
    data.servicesPage?.[key],
    data.services?.[key],
    data.sections?.[key],
  ].filter(Boolean);

  return sections.reduce((acc, section) => ({ ...acc, ...section }), {});
}

function normalizeLabelItem(item = {}) {
  return {
    name: item.name || item.title || "",
    label: item.label || item.descriptionText || "",
  };
}

function normalizeServiceGroup(item = {}) {
  return {
    title: item.title || "",
    items: Array.isArray(item.items) ? item.items.filter(Boolean) : [],
    href: item.buttonUrl || item.href || "#",
    cta: item.buttonLabel || item.cta || "",
  };
}

function normalizeTextCard(item = {}) {
  return {
    title: item.title || "",
    text: item.descriptionText || item.text || "",
    iconKey: item.iconKey || "",
  };
}

function normalizeMetric(item = {}) {
  return {
    value: item.value || "",
    label: item.label || "",
  };
}

function normalizeFaq(item = {}) {
  return {
    question: item.question || "",
    answer: item.answer || "",
  };
}

export function normalizeServicesPageContent(data = {}) {
  const heroSection = getSection(data, "heroSection");
  const serviceCategoriesSection = getSection(data, "serviceCategoriesSection");
  const growthEngineSection = getSection(data, "growthEngineSection");
  const outcomesSection = getSection(data, "outcomesSection");
  const processSection = getSection(data, "processSection");
  const faqSection = getSection(data, "faqSection");

  const content = {
    hero: mergeSection(defaultServicesPageContent.hero, data.hero),
    serviceCategories: mergeSection(
      defaultServicesPageContent.serviceCategories,
      data.serviceCategories,
    ),
    growthEngine: mergeSection(
      defaultServicesPageContent.growthEngine,
      data.growthEngine,
    ),
    outcomes: mergeSection(defaultServicesPageContent.outcomes, data.outcomes),
    process: mergeSection(defaultServicesPageContent.process, data.process),
    faq: mergeSection(defaultServicesPageContent.faq, data.faq),
  };

  if (heroSection.eyebrowText) content.hero.eyebrow = heroSection.eyebrowText;
  if (heroSection.headingText) content.hero.title = heroSection.headingText;
  if (heroSection.descriptionText) content.hero.description = heroSection.descriptionText;
  if (heroSection.heroImageUrl) content.hero.heroImageUrl = heroSection.heroImageUrl;
  if (heroSection.heroImageAltText) {
    content.hero.heroImageAlt = heroSection.heroImageAltText;
  }
  if (Array.isArray(heroSection.partnerBadges) && heroSection.partnerBadges.length) {
    content.hero.partnerBadges = normalizeOrderedItems(
      heroSection.partnerBadges,
    ).map(normalizeLabelItem);
  }

  if (serviceCategoriesSection.headingText) {
    content.serviceCategories.heading = serviceCategoriesSection.headingText;
  }
  if (serviceCategoriesSection.backgroundImageUrl) {
    content.serviceCategories.backgroundImageUrl =
      serviceCategoriesSection.backgroundImageUrl;
  }
  if (
    Array.isArray(serviceCategoriesSection.serviceGroups) &&
    serviceCategoriesSection.serviceGroups.length
  ) {
    content.serviceCategories.groups = normalizeOrderedItems(
      serviceCategoriesSection.serviceGroups,
    ).map(normalizeServiceGroup);
  }

  if (growthEngineSection.headingText) {
    content.growthEngine.title = growthEngineSection.headingText;
  }
  if (growthEngineSection.descriptionText) {
    content.growthEngine.text = growthEngineSection.descriptionText;
  }
  if (growthEngineSection.visualAltText) {
    content.growthEngine.visualAlt = growthEngineSection.visualAltText;
  }
  if (growthEngineSection.centerLabelLineOne) {
    content.growthEngine.centerLabelLineOne =
      growthEngineSection.centerLabelLineOne;
  }
  if (growthEngineSection.centerLabelLineTwo) {
    content.growthEngine.centerLabelLineTwo =
      growthEngineSection.centerLabelLineTwo;
  }
  if (Array.isArray(growthEngineSection.cards) && growthEngineSection.cards.length) {
    content.growthEngine.cards = normalizeOrderedItems(growthEngineSection.cards).map(
      normalizeTextCard,
    );
  }

  if (outcomesSection.headingText) content.outcomes.title = outcomesSection.headingText;
  if (outcomesSection.descriptionText) {
    content.outcomes.text = outcomesSection.descriptionText;
  }
  if (
    Array.isArray(outcomesSection.achievementBlocks) &&
    outcomesSection.achievementBlocks.length
  ) {
    content.outcomes.achievementBlocks = normalizeOrderedItems(
      outcomesSection.achievementBlocks,
    ).map(normalizeTextCard);
  }
  if (Array.isArray(outcomesSection.metrics) && outcomesSection.metrics.length) {
    content.outcomes.metrics = normalizeOrderedItems(outcomesSection.metrics).map(
      normalizeMetric,
    );
  }

  if (processSection.headingText) content.process.title = processSection.headingText;
  if (processSection.descriptionText) content.process.text = processSection.descriptionText;
  if (Array.isArray(processSection.steps) && processSection.steps.length) {
    content.process.steps = normalizeOrderedItems(processSection.steps).map(
      normalizeTextCard,
    );
  }

  if (faqSection.headingText) content.faq.heading = faqSection.headingText;
  if (Array.isArray(faqSection.faqs) && faqSection.faqs.length) {
    content.faq.items = normalizeOrderedItems(faqSection.faqs).map(normalizeFaq);
  }

  return content;
}

export function subscribeServicesPageContent(onData, onError) {
  let servicesPageData = {};
  let servicesPageContentData = {};
  const servicesCollectionDocs = {};

  const servicesPageRef = getServicesPageRef();
  const servicesCollectionRef = getServicesCollectionRef();
  const servicesPageContentRef = getServicesPageContentRef();

  if (!servicesPageRef || !servicesCollectionRef || !servicesPageContentRef) {
    onData(defaultServicesPageContent);
    return () => {};
  }

  function emit() {
    const servicesCollectionData = Object.values(servicesCollectionDocs).reduce(
      (acc, section) => ({ ...acc, ...section }),
      {},
    );

    onData(
      normalizeServicesPageContent({
        ...servicesPageData,
        ...servicesCollectionData,
        ...servicesPageContentData,
      }),
    );
  }

  const unsubscribeServicesPage = onSnapshot(
    servicesPageRef,
    (snapshot) => {
      servicesPageData = snapshot.exists() ? snapshot.data() : {};
      emit();
    },
    onError,
  );

  const unsubscribeServicesCollection = onSnapshot(
    servicesCollectionRef,
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "removed") {
          delete servicesCollectionDocs[change.doc.ref.path];
          return;
        }

        servicesCollectionDocs[change.doc.ref.path] = change.doc.data();
      });

      emit();
    },
    onError,
  );

  const unsubscribeServicesPageContent = onSnapshot(
    servicesPageContentRef,
    (snapshot) => {
      servicesPageContentData = snapshot.exists() ? snapshot.data() : {};
      emit();
    },
    onError,
  );

  return () => {
    unsubscribeServicesPage();
    unsubscribeServicesCollection();
    unsubscribeServicesPageContent();
  };
}
