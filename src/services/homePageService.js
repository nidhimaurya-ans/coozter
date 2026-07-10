import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const defaultHomePageContent = {
  hero: {
    eyebrow: "Affiliate Marketing & Performance Growth Agency",
    title: "We build growth that compounds.",
    highlight: "Performance that lasts.",
    description:
      "Coozter combines affiliate marketing, SEO, paid media, content, and analytics to drive measurable growth, real customers, and predictable results.",
    primaryCtaLabel: "Book a Strategy Call",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore Our Services",
    secondaryCtaHref: "/services",
    imageUrl: "/assets/digital-marketing-services.svg",
    imageAlt: "",
    metrics: [
      { value: "15+", label: "Years of Combined Experience" },
      { value: "250+", label: "Brands Scaled" },
      { value: "$450M+", label: "Revenue Driven" },
      { value: "80+", label: "Growth Experts" },
    ],
  },
  trust: {
    headline:
      "Strategy, campaigns, and reporting built for teams that want marketing to make sense again",
    stats: [
      { value: "32", label: "partner launches" },
      { value: "+148%", label: "qualified leads" },
      { value: "4.8x", label: "campaign ROI" },
    ],
    partnerLogos: [],
  },
  channels: {
    title: "Every Marketing Channel",
    highlight: "Works Together.",
    description:
      "We build a connected growth system where every channel supports the next, driving consistent pipeline and revenue.",
    benefits: [
      {
        title: "Connected Strategy",
        text: "All channels aligned to one goal.",
      },
      {
        title: "Better Performance",
        text: "Data-backed decisions for more ROI.",
      },
      {
        title: "Full Transparency",
        text: "Real-time reporting across channels.",
      },
    ],
    growthPoints: [
      { title: "Demand", text: "Attract the right audience." },
      { title: "Trust", text: "Build credibility with proof-led content." },
      { title: "Convert", text: "Optimize journeys that drive action." },
      { title: "Report", text: "Real-time insights that guide growth." },
      { title: "Scale", text: "Systemize what works and scale profitably." },
    ],
    centerLabel: "Growth\nEngine",
    centerIconKey: "zap",
  },
  process: {
    headline: "From scattered activity to clear momentum.",
    imageAlt: "Team planning marketing campaigns in a workspace",
    images: [
      "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=82')",
      "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=82')",
      "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=82')",
    ],
    steps: [
      {
        title: "Diagnose",
        text: "Demand, offer clarity, channel data, and trust signals are mapped before any campaign work starts.",
      },
      {
        title: "Position",
        text: "Audience, proof, message, and conversion paths are sharpened so every channel knows what to say.",
      },
      {
        title: "Build",
        text: "Landing pages, partner kits, content briefs, ad tests, and tracking are created around one growth logic.",
      },
      {
        title: "Launch",
        text: "Focused tests go live with enough structure to learn from traffic, leads, and sales conversations.",
      },
      {
        title: "Optimize",
        text: "Channel mix, creative, pages, and reporting improve from quality signals instead of guesswork.",
      },
      {
        title: "Report",
        text: "You get a clear read on what changed, why it matters, and what should happen next.",
      },
    ],
  },
  servicesPreview: {
    headline: "One growth system, many connected moves.",
    description:
      "Services are not presented as separate boxes. They move as a connected path from trust and demand to campaigns and reporting.",
    signals: [
      "Partner trust",
      "Search intent",
      "Campaign testing",
      "Content proof",
      "Clean reporting",
    ],
    ctaLabel: "Explore all services",
    ctaHref: "/services",
    services: [],
    serviceSlugs: [],
  },
  blogPreview: {
    eyebrow: "Field notes",
    headline: "Growth ideas worth opening next.",
    ctaLabel: "More blogs",
    ctaHref: "/blogs",
    blogSlugs: [],
  },
  contact: {
    heading: "Ready to grow your website ?",
    description:
      "Bring affiliate partnerships, search, campaigns, and reporting into one practical operating system for measurable growth.",
    primaryCtaLabel: "Book a Strategy Call",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore Services",
    secondaryCtaHref: "/services",
  },
};

const projectRef = doc(db, "projects", "coozter");
const homePageRef = doc(db, "projects", "coozter", "pages", "home");
const homeCollectionRef = collection(db, "projects", "coozter", "home");
const homePageContentRef = doc(
  db,
  "projects",
  "coozter",
  "home",
  "homePageContent",
);
const heroSectionRefs = [
  doc(db, "projects", "coozter", "homesection", "hero"),
  doc(db, "projects", "coozter", "homesection", "hero-section"),
  doc(db, "projects", "coozter", "home", "hero"),
  doc(db, "projects", "coozter", "home", "content"),
  doc(db, "projects", "coozter", "home", "data"),
  doc(db, "projects", "coozter", "sections", "hero"),
];

const heroFieldKeys = [
  "eyebrowText",
  "headingText",
  "highlightedHeadingText",
  "descriptionText",
  "heroImageAltText",
  "heroImageUrl",
  "primaryButtonLabel",
  "primaryButtonUrl",
  "secondaryButtonLabel",
  "secondaryButtonUrl",
  "isActive",
  "metrics",
];

function normalizeStat(item) {
  if (typeof item === "string") {
    const [value, ...label] = item.split(" ");
    return { value, label: label.join(" ") };
  }

  return item;
}

function normalizeHeroMetrics(metrics) {
  return metrics
    .filter((item) => item?.isActive !== false)
    .sort((a, b) => (a?.sortOrder ?? 999) - (b?.sortOrder ?? 999))
    .map(normalizeStat);
}

function normalizeOrderedItems(items = []) {
  return items
    .filter((item) => item?.isActive !== false)
    .sort((a, b) => (a?.sortOrder ?? 999) - (b?.sortOrder ?? 999));
}

function normalizeImage(value) {
  if (!value) return value;
  return value.startsWith("url(") ? value : `url('${value}')`;
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

function hasHeroFields(data = {}) {
  return heroFieldKeys.some((key) => Object.prototype.hasOwnProperty.call(data, key));
}

function getHeroSection(data = {}) {
  const heroSections = [
    data.heroSection,
    data.homePage?.heroSection,
    data.home?.heroSection,
    data.sections?.heroSection,
    data.sections?.hero,
    data.heroSectionData,
    hasHeroFields(data) ? data : null,
  ].filter(Boolean);

  return heroSections.reduce((acc, section) => ({ ...acc, ...section }), {});
}

function getTrustSection(data = {}) {
  const trustSections = [
    data.trustSection,
    data.homePage?.trustSection,
    data.home?.trustSection,
    data.sections?.trustSection,
    data.sections?.trust,
  ].filter(Boolean);

  return trustSections.reduce((acc, section) => ({ ...acc, ...section }), {});
}

function getMarketingChannelsSection(data = {}) {
  const marketingChannelsSections = [
    data.marketingChannelsSection,
    data.homePage?.marketingChannelsSection,
    data.home?.marketingChannelsSection,
    data.sections?.marketingChannelsSection,
    data.sections?.channels,
  ].filter(Boolean);

  return marketingChannelsSections.reduce(
    (acc, section) => ({ ...acc, ...section }),
    {},
  );
}

function normalizeChannelItem(item = {}) {
  return {
    title: item.title || "",
    text: item.descriptionText || item.text || "",
    iconKey: item.iconKey || "",
  };
}

function getProcessSection(data = {}) {
  const processSections = [
    data.processSection,
    data.homePage?.processSection,
    data.home?.processSection,
    data.sections?.processSection,
    data.sections?.process,
  ].filter(Boolean);

  return processSections.reduce((acc, section) => ({ ...acc, ...section }), {});
}

function normalizeProcessStep(item = {}) {
  return {
    title: item.title || "",
    text: item.descriptionText || item.text || "",
  };
}

function normalizeProcessImages(images = [], fallbackImages = []) {
  const activeImages = normalizeOrderedItems(images)
    .map((image) => image?.imageUrl || image?.url || image)
    .filter(Boolean)
    .map(normalizeImage);

  return [...activeImages, ...fallbackImages.slice(activeImages.length)];
}

function getServicesPreviewSection(data = {}) {
  const servicesPreviewSections = [
    data.servicesPreviewSection,
    data.homePage?.servicesPreviewSection,
    data.home?.servicesPreviewSection,
    data.sections?.servicesPreviewSection,
    data.sections?.servicesPreview,
  ].filter(Boolean);

  return servicesPreviewSections.reduce(
    (acc, section) => ({ ...acc, ...section }),
    {},
  );
}

function normalizeLabelItems(items = []) {
  return normalizeOrderedItems(items)
    .map((item) => item?.label || item)
    .filter(Boolean);
}

function normalizeSelectedServiceSlugs(items = []) {
  return normalizeOrderedItems(items)
    .map((item) => item?.serviceSlug || item?.slug || item)
    .filter(Boolean);
}

function getBlogPreviewSection(data = {}) {
  const blogPreviewSections = [
    data.blogPreviewSection,
    data.homePage?.blogPreviewSection,
    data.home?.blogPreviewSection,
    data.sections?.blogPreviewSection,
    data.sections?.blogPreview,
  ].filter(Boolean);

  return blogPreviewSections.reduce(
    (acc, section) => ({ ...acc, ...section }),
    {},
  );
}

function normalizeSelectedBlogSlugs(items = []) {
  return normalizeOrderedItems(items)
    .map((item) => item?.blogSlug || item?.slug || item)
    .filter(Boolean);
}

export function normalizeHomePageContent(data = {}) {
  const rawHeroSection = getHeroSection(data);
  const heroSection = rawHeroSection || {};
  const trustSection = getTrustSection(data);
  const marketingChannelsSection = getMarketingChannelsSection(data);
  const processSection = getProcessSection(data);
  const servicesPreviewSection = getServicesPreviewSection(data);
  const blogPreviewSection = getBlogPreviewSection(data);
  const content = {
    hero: mergeSection(defaultHomePageContent.hero, data.hero),
    trust: mergeSection(defaultHomePageContent.trust, data.trust),
    channels: mergeSection(defaultHomePageContent.channels, data.channels),
    process: mergeSection(defaultHomePageContent.process, data.process),
    servicesPreview: mergeSection(
      defaultHomePageContent.servicesPreview,
      data.servicesPreview,
    ),
    blogPreview: mergeSection(defaultHomePageContent.blogPreview, data.blogPreview),
    contact: mergeSection(defaultHomePageContent.contact, data.contact),
  };

  if (data.heroEyebrow) content.hero.eyebrow = data.heroEyebrow;
  if (data.heroTitle) content.hero.title = data.heroTitle;
  if (data.heroHighlight) content.hero.highlight = data.heroHighlight;
  if (data.heroDescription) content.hero.description = data.heroDescription;
  if (heroSection.eyebrowText) content.hero.eyebrow = heroSection.eyebrowText;
  if (heroSection.headingText) content.hero.title = heroSection.headingText;
  if (heroSection.highlightedHeadingText) {
    content.hero.highlight = heroSection.highlightedHeadingText;
  }
  if (heroSection.descriptionText) {
    content.hero.description = heroSection.descriptionText;
  }
  if (heroSection.primaryButtonLabel) {
    content.hero.primaryCtaLabel = heroSection.primaryButtonLabel;
  }
  if (heroSection.primaryButtonUrl) {
    content.hero.primaryCtaHref = heroSection.primaryButtonUrl;
  }
  if (heroSection.secondaryButtonLabel) {
    content.hero.secondaryCtaLabel = heroSection.secondaryButtonLabel;
  }
  if (heroSection.secondaryButtonUrl) {
    content.hero.secondaryCtaHref = heroSection.secondaryButtonUrl;
  }
  if (heroSection.heroImageUrl) content.hero.imageUrl = heroSection.heroImageUrl;
  if (heroSection.heroImageAltText) {
    content.hero.imageAlt = heroSection.heroImageAltText;
  }
  if (Array.isArray(heroSection.metrics) && heroSection.metrics.length > 0) {
    content.hero.metrics = heroSection.metrics;
  }
  if (trustSection.headingText) {
    content.trust.headline = trustSection.headingText;
  }
  if (Array.isArray(trustSection.stats) && trustSection.stats.length > 0) {
    content.trust.stats = trustSection.stats;
  }
  if (
    Array.isArray(trustSection.partnerLogos) &&
    trustSection.partnerLogos.length > 0
  ) {
    content.trust.partnerLogos = trustSection.partnerLogos;
  }
  if (marketingChannelsSection.headingText) {
    content.channels.title = marketingChannelsSection.headingText;
  }
  if (marketingChannelsSection.highlightedHeadingText) {
    content.channels.highlight = marketingChannelsSection.highlightedHeadingText;
  }
  if (marketingChannelsSection.descriptionText) {
    content.channels.description = marketingChannelsSection.descriptionText;
  }
  if (marketingChannelsSection.centerGraphicIconKey) {
    content.channels.centerIconKey = marketingChannelsSection.centerGraphicIconKey;
  }
  if (
    marketingChannelsSection.centerGraphicLabelLineOne ||
    marketingChannelsSection.centerGraphicLabelLineTwo
  ) {
    content.channels.centerLabel = [
      marketingChannelsSection.centerGraphicLabelLineOne,
      marketingChannelsSection.centerGraphicLabelLineTwo,
    ]
      .filter(Boolean)
      .join("\n");
  }
  if (
    Array.isArray(marketingChannelsSection.benefits) &&
    marketingChannelsSection.benefits.length > 0
  ) {
    content.channels.benefits = normalizeOrderedItems(
      marketingChannelsSection.benefits,
    ).map(normalizeChannelItem);
  }
  if (
    Array.isArray(marketingChannelsSection.growthPoints) &&
    marketingChannelsSection.growthPoints.length > 0
  ) {
    content.channels.growthPoints = normalizeOrderedItems(
      marketingChannelsSection.growthPoints,
    ).map(normalizeChannelItem);
  }
  if (processSection.headingText) {
    content.process.headline = processSection.headingText;
  }
  if (processSection.imageAltText) {
    content.process.imageAlt = processSection.imageAltText;
  }
  if (Array.isArray(processSection.images) && processSection.images.length > 0) {
    content.process.images = normalizeProcessImages(
      processSection.images,
      defaultHomePageContent.process.images,
    );
  }
  if (Array.isArray(processSection.steps) && processSection.steps.length > 0) {
    content.process.steps = normalizeOrderedItems(processSection.steps).map(
      normalizeProcessStep,
    );
  }
  if (servicesPreviewSection.headingText) {
    content.servicesPreview.headline = servicesPreviewSection.headingText;
  }
  if (servicesPreviewSection.descriptionText) {
    content.servicesPreview.description = servicesPreviewSection.descriptionText;
  }
  if (servicesPreviewSection.buttonLabel) {
    content.servicesPreview.ctaLabel = servicesPreviewSection.buttonLabel;
  }
  if (servicesPreviewSection.buttonUrl) {
    content.servicesPreview.ctaHref = servicesPreviewSection.buttonUrl;
  }
  if (
    Array.isArray(servicesPreviewSection.tags) &&
    servicesPreviewSection.tags.length > 0
  ) {
    content.servicesPreview.signals = normalizeLabelItems(
      servicesPreviewSection.tags,
    );
  }
  if (
    Array.isArray(servicesPreviewSection.selectedServices) &&
    servicesPreviewSection.selectedServices.length > 0
  ) {
    content.servicesPreview.serviceSlugs = normalizeSelectedServiceSlugs(
      servicesPreviewSection.selectedServices,
    );
  }
  if (blogPreviewSection.eyebrowText) {
    content.blogPreview.eyebrow = blogPreviewSection.eyebrowText;
  }
  if (blogPreviewSection.headingText) {
    content.blogPreview.headline = blogPreviewSection.headingText;
  }
  if (blogPreviewSection.buttonLabel) {
    content.blogPreview.ctaLabel = blogPreviewSection.buttonLabel;
  }
  if (blogPreviewSection.buttonUrl) {
    content.blogPreview.ctaHref = blogPreviewSection.buttonUrl;
  }
  if (
    Array.isArray(blogPreviewSection.selectedBlogs) &&
    blogPreviewSection.selectedBlogs.length > 0
  ) {
    content.blogPreview.blogSlugs = normalizeSelectedBlogSlugs(
      blogPreviewSection.selectedBlogs,
    );
  }

  content.hero.metrics = normalizeHeroMetrics(content.hero.metrics);
  content.trust.stats = normalizeOrderedItems(content.trust.stats).map(normalizeStat);
  content.trust.partnerLogos = normalizeOrderedItems(content.trust.partnerLogos);
  content.process.images = content.process.images.map(normalizeImage);

  return content;
}

export function subscribeHomePageContent(onData, onError) {
  let projectData = {};
  let homePageData = {};
  let homePageContentData = {};
  const homeCollectionDocs = {};
  const heroSectionDocs = {};

  function emit() {
    const homeCollectionData = Object.values(homeCollectionDocs).reduce(
      (acc, section) => ({ ...acc, ...section }),
      {},
    );
    const heroSectionData = Object.values(heroSectionDocs).reduce(
      (acc, section) => ({ ...acc, ...section }),
      {},
    );

    onData(
      normalizeHomePageContent({
        ...projectData,
        ...homePageData,
        ...homeCollectionData,
        heroSectionData,
        ...homePageContentData,
      }),
    );
  }

  const unsubscribeProject = onSnapshot(
    projectRef,
    (snapshot) => {
      projectData = snapshot.exists() ? snapshot.data() : {};
      emit();
    },
    onError,
  );

  const unsubscribeHomePage = onSnapshot(
    homePageRef,
    (snapshot) => {
      homePageData = snapshot.exists() ? snapshot.data() : {};
      emit();
    },
    onError,
  );

  const unsubscribeHomeCollection = onSnapshot(
    homeCollectionRef,
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "removed") {
          delete homeCollectionDocs[change.doc.ref.path];
          return;
        }

        homeCollectionDocs[change.doc.ref.path] = change.doc.data();
      });

      emit();
    },
    onError,
  );

  const unsubscribeHomePageContent = onSnapshot(
    homePageContentRef,
    (snapshot) => {
      homePageContentData = snapshot.exists() ? snapshot.data() : {};
      emit();
    },
    onError,
  );

  const unsubscribeHeroSections = heroSectionRefs.map((ref) =>
    onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.exists()) {
          heroSectionDocs[ref.path] = snapshot.data();
        } else {
          delete heroSectionDocs[ref.path];
        }

        emit();
      },
      onError,
    ),
  );

  return () => {
    unsubscribeProject();
    unsubscribeHomePage();
    unsubscribeHomeCollection();
    unsubscribeHomePageContent();
    unsubscribeHeroSections.forEach((unsubscribe) => unsubscribe());
  };
}
