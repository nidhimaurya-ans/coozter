import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const defaultAboutPageContent = {
  hero: {
    eyebrow: "About Coozter",
    title: "We help brands build, launch, and scale digital products",
    descriptionOne:
      "Coozter is an affiliate branding and performance marketing partner for companies that sell through credibility: expert content, search visibility, partner recommendations, and paid acquisition.",
    descriptionTwo:
      "We help leadership teams see where trust is already forming, then build the campaigns, pages, content, and reporting needed to convert that trust into revenue.",
    backgroundImageUrl: "/assets/about-hero.jpg",
    backgroundImageAlt: "Coozter about hero background",
    buttonLabel: "Explore Our Services",
    buttonUrl: "/services",
  },
  whyChoose: {
    eyebrow: "Why choose us",
    headline: "Why choose us",
    badgeText: "Built for growth",
    features: [
      {
        iconKey: "target",
        title: "Strategy First Approach",
        text: "We understand your goals, users, and business model before designing the right digital solution.",
        details: ["Discovery map", "Decision-led plan", "Clear next steps"],
      },
      {
        iconKey: "users",
        title: "Expert Product Team",
        text: "Designers, developers, and growth thinkers work together to deliver polished, scalable products.",
        details: ["UI systems", "Clean development", "Growth alignment"],
      },
      {
        iconKey: "layers",
        title: "Scalable Solutions",
        text: "We build websites, platforms, and systems that can grow with your business needs.",
        details: ["Flexible stack", "Modular sections", "Easy expansion"],
      },
      {
        iconKey: "check-circle",
        title: "Transparent Process",
        text: "Clear timelines, structured communication, and reliable updates from start to launch.",
        details: ["Weekly rhythm", "Shared milestones", "No hidden process"],
      },
      {
        iconKey: "trending-up",
        title: "Performance Focused",
        text: "Fast, responsive, SEO-friendly, and conversion-focused experiences for real results.",
        details: ["Fast loading", "SEO structure", "Conversion paths"],
      },
      {
        iconKey: "clock",
        title: "Long-Term Support",
        text: "We help you improve, maintain, and scale your product even after launch.",
        details: ["Maintenance", "Optimization", "Scale support"],
      },
    ],
  },
  beliefs: {
    eyebrow: "What we believe",
    headline: "Growth looks better when the customer journey is honest.",
    description:
      "The work is designed around how buyers actually build confidence: proof, comparison, timing, and repeat exposure.",
    values: [
      {
        title: "Specific beats loud.",
        text: "We look for the customer belief, partner context, and proof that actually changes a decision.",
      },
      {
        title: "Trust needs a system.",
        text: "Affiliates, creators, search pages, and paid campaigns should all support the same story.",
      },
      {
        title: "Reporting should create decisions.",
        text: "Clients should know what changed, why it matters, and where to invest next.",
      },
      {
        title: "Partnerships are performance channels.",
        text: "We treat referral paths with the same discipline as acquisition campaigns.",
      },
    ],
  },
  workModel: {
    eyebrow: "How we work",
    visualAlt:
      "Animated 3D workflow showing partner, search, campaign, and reporting signals",
    centerIconKey: "bar-chart",
    visualNodes: [
      { iconKey: "handshake", label: "Partners" },
      { iconKey: "search", label: "Intent" },
      { iconKey: "trending-up", label: "Testing" },
      { iconKey: "shield", label: "Reports" },
    ],
    items: [
      {
        iconKey: "handshake",
        title: "Partner-led visibility",
        text: "We give affiliates and partners the proof, angles, and landing paths they need to introduce the brand well.",
      },
      {
        iconKey: "search",
        title: "Search and content demand",
        text: "We build around what buyers already compare, trust, question, and search before contacting sales.",
      },
      {
        iconKey: "trending-up",
        title: "Performance feedback",
        text: "Paid campaigns and reporting show which messages, audiences, and pages deserve more budget.",
      },
      {
        iconKey: "shield",
        title: "Credible decision-making",
        text: "Every report explains the signal, the risk, and the next move instead of hiding behind metric noise.",
      },
    ],
  },
  team: {
    eyebrow: "Meet our team",
    headline: "The people shaping partner-led growth.",
    description:
      "Strategy, content, performance, and reporting sit close together so every campaign is planned with the full customer journey in view.",
    modalCompanyLabelSuffix: "Leadership",
    focusLabel: "Focus",
    companyLabel: "Company",
    members: [
      {
        name: "Nisha Kapoor",
        role: "Strategy Lead",
        focus: "Positioning, partner offer design, campaign direction.",
        imageUrl:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=86",
        imageAlt: "Nisha Kapoor, Strategy Lead at Coozter",
        company: "Coozter",
        linkedinUrl: "linkedin.com/in/nisha-kapoor-growth",
        bio: "Shapes partner-led growth strategy, market positioning, and campaign direction for leadership teams.",
      },
      {
        name: "Arjun Mehta",
        role: "Growth Lead",
        focus: "SEO, paid traffic, lead generation, conversion paths.",
        imageUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=86",
        imageAlt: "Arjun Mehta, Growth Lead at Coozter",
        company: "Coozter",
        linkedinUrl: "linkedin.com/in/arjun-mehta-growth",
        bio: "Leads acquisition systems across SEO, paid media, lead generation, and conversion journeys.",
      },
      {
        name: "Rhea Sanyal",
        role: "Content Systems",
        focus: "Messaging kits, editorial systems, landing page copy.",
        imageUrl:
          "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=86",
        imageAlt: "Rhea Sanyal, Content Systems at Coozter",
        company: "Coozter",
        linkedinUrl: "linkedin.com/in/rhea-sanyal-content",
        bio: "Builds content systems, proof-led messaging, and landing page narratives that support buyer trust.",
      },
      {
        name: "Kabir Anand",
        role: "Analytics Lead",
        focus: "Attribution, reporting, test readouts, revenue signals.",
        imageUrl:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=86",
        imageAlt: "Kabir Anand, Analytics Lead at Coozter",
        company: "Coozter",
        linkedinUrl: "linkedin.com/in/kabir-anand-analytics",
        bio: "Turns attribution, testing, and reporting into clear revenue decisions for clients.",
      },
    ],
  },
  proofMetrics: [
    { value: "4.8x", label: "campaign ROI" },
    { value: "32", label: "partner launches" },
    { value: "72%", label: "SEO visibility lift" },
  ],
};

function getAboutPageRef() {
  return db ? doc(db, "projects", "coozter", "pages", "about") : null;
}

function getAboutCollectionRef() {
  return db ? collection(db, "projects", "coozter", "about") : null;
}

function getAboutPageContentRef() {
  return db
    ? doc(db, "projects", "coozter", "about", "aboutPageContent")
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
    data.aboutPage?.[key],
    data.about?.[key],
    data.sections?.[key],
  ].filter(Boolean);

  return sections.reduce((acc, section) => ({ ...acc, ...section }), {});
}

function normalizeFeature(item = {}) {
  return {
    iconKey: item.iconKey || "target",
    title: item.title || "",
    text: item.descriptionText || item.text || "",
    details: Array.isArray(item.details) ? item.details.filter(Boolean) : [],
  };
}

function normalizeTextItem(item = {}) {
  return {
    title: item.title || "",
    text: item.descriptionText || item.text || "",
    iconKey: item.iconKey || "",
  };
}

function normalizeVisualNode(item = {}) {
  return {
    iconKey: item.iconKey || "",
    label: item.label || "",
  };
}

function normalizeTeamMember(item = {}) {
  return {
    name: item.name || "",
    role: item.role || "",
    focus: item.focusText || item.focus || "",
    imageUrl: item.imageUrl || "",
    imageAlt: item.imageAltText || item.imageAlt || "",
    company: item.companyName || item.company || "Coozter",
    linkedinUrl: item.linkedinUrl || "",
    bio: item.bioText || item.bio || "",
  };
}

function normalizeMetric(item = {}) {
  if (Array.isArray(item)) return { value: item[0] || "", label: item[1] || "" };
  return {
    value: item.value || "",
    label: item.label || "",
  };
}

export function normalizeAboutPageContent(data = {}) {
  const heroSection = getSection(data, "heroSection");
  const whyChooseSection = getSection(data, "whyChooseSection");
  const beliefsSection = getSection(data, "beliefsSection");
  const workModelSection = getSection(data, "workModelSection");
  const teamSection = getSection(data, "teamSection");

  const content = {
    hero: mergeSection(defaultAboutPageContent.hero, data.hero),
    whyChoose: mergeSection(defaultAboutPageContent.whyChoose, data.whyChoose),
    beliefs: mergeSection(defaultAboutPageContent.beliefs, data.beliefs),
    workModel: mergeSection(defaultAboutPageContent.workModel, data.workModel),
    team: mergeSection(defaultAboutPageContent.team, data.team),
    proofMetrics:
      Array.isArray(data.proofMetrics) && data.proofMetrics.length > 0
        ? data.proofMetrics
        : defaultAboutPageContent.proofMetrics,
  };

  if (heroSection.eyebrowText) content.hero.eyebrow = heroSection.eyebrowText;
  if (heroSection.headingText) content.hero.title = heroSection.headingText;
  if (heroSection.descriptionOne) {
    content.hero.descriptionOne = heroSection.descriptionOne;
  }
  if (heroSection.descriptionTwo) {
    content.hero.descriptionTwo = heroSection.descriptionTwo;
  }
  if (heroSection.backgroundImageUrl) {
    content.hero.backgroundImageUrl = heroSection.backgroundImageUrl;
  }
  if (heroSection.backgroundImageAltText) {
    content.hero.backgroundImageAlt = heroSection.backgroundImageAltText;
  }
  if (heroSection.buttonLabel) content.hero.buttonLabel = heroSection.buttonLabel;
  if (heroSection.buttonUrl) content.hero.buttonUrl = heroSection.buttonUrl;

  if (whyChooseSection.eyebrowText) {
    content.whyChoose.eyebrow = whyChooseSection.eyebrowText;
  }
  if (whyChooseSection.headingText) {
    content.whyChoose.headline = whyChooseSection.headingText;
  }
  if (whyChooseSection.badgeText) {
    content.whyChoose.badgeText = whyChooseSection.badgeText;
  }
  if (Array.isArray(whyChooseSection.features) && whyChooseSection.features.length) {
    content.whyChoose.features = normalizeOrderedItems(
      whyChooseSection.features,
    ).map(normalizeFeature);
  }

  if (beliefsSection.eyebrowText) {
    content.beliefs.eyebrow = beliefsSection.eyebrowText;
  }
  if (beliefsSection.headingText) {
    content.beliefs.headline = beliefsSection.headingText;
  }
  if (beliefsSection.descriptionText) {
    content.beliefs.description = beliefsSection.descriptionText;
  }
  if (Array.isArray(beliefsSection.values) && beliefsSection.values.length) {
    content.beliefs.values = normalizeOrderedItems(beliefsSection.values).map(
      normalizeTextItem,
    );
  }

  if (workModelSection.eyebrowText) {
    content.workModel.eyebrow = workModelSection.eyebrowText;
  }
  if (workModelSection.visualAltText) {
    content.workModel.visualAlt = workModelSection.visualAltText;
  }
  if (workModelSection.centerIconKey) {
    content.workModel.centerIconKey = workModelSection.centerIconKey;
  }
  if (Array.isArray(workModelSection.visualNodes) && workModelSection.visualNodes.length) {
    content.workModel.visualNodes = normalizeOrderedItems(
      workModelSection.visualNodes,
    ).map(normalizeVisualNode);
  }
  if (Array.isArray(workModelSection.items) && workModelSection.items.length) {
    content.workModel.items = normalizeOrderedItems(workModelSection.items).map(
      normalizeTextItem,
    );
  }

  if (teamSection.eyebrowText) content.team.eyebrow = teamSection.eyebrowText;
  if (teamSection.headingText) content.team.headline = teamSection.headingText;
  if (teamSection.descriptionText) {
    content.team.description = teamSection.descriptionText;
  }
  if (teamSection.modalCompanyLabelSuffix) {
    content.team.modalCompanyLabelSuffix = teamSection.modalCompanyLabelSuffix;
  }
  if (teamSection.focusLabel) content.team.focusLabel = teamSection.focusLabel;
  if (teamSection.companyLabel) content.team.companyLabel = teamSection.companyLabel;
  if (Array.isArray(teamSection.members) && teamSection.members.length) {
    content.team.members = normalizeOrderedItems(teamSection.members).map(
      normalizeTeamMember,
    );
  }

  if (Array.isArray(data.proofMetrics) && data.proofMetrics.length) {
    content.proofMetrics = normalizeOrderedItems(data.proofMetrics).map(
      normalizeMetric,
    );
  }

  return content;
}

export function subscribeAboutPageContent(onData, onError) {
  let aboutPageData = {};
  let aboutPageContentData = {};
  const aboutCollectionDocs = {};

  const aboutPageRef = getAboutPageRef();
  const aboutCollectionRef = getAboutCollectionRef();
  const aboutPageContentRef = getAboutPageContentRef();

  if (!aboutPageRef || !aboutCollectionRef || !aboutPageContentRef) {
    onData(defaultAboutPageContent);
    return () => {};
  }

  function emit() {
    const aboutCollectionData = Object.values(aboutCollectionDocs).reduce(
      (acc, section) => ({ ...acc, ...section }),
      {},
    );

    onData(
      normalizeAboutPageContent({
        ...aboutPageData,
        ...aboutCollectionData,
        ...aboutPageContentData,
      }),
    );
  }

  const unsubscribeAboutPage = onSnapshot(
    aboutPageRef,
    (snapshot) => {
      aboutPageData = snapshot.exists() ? snapshot.data() : {};
      emit();
    },
    onError,
  );

  const unsubscribeAboutCollection = onSnapshot(
    aboutCollectionRef,
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "removed") {
          delete aboutCollectionDocs[change.doc.ref.path];
          return;
        }

        aboutCollectionDocs[change.doc.ref.path] = change.doc.data();
      });

      emit();
    },
    onError,
  );

  const unsubscribeAboutPageContent = onSnapshot(
    aboutPageContentRef,
    (snapshot) => {
      aboutPageContentData = snapshot.exists() ? snapshot.data() : {};
      emit();
    },
    onError,
  );

  return () => {
    unsubscribeAboutPage();
    unsubscribeAboutCollection();
    unsubscribeAboutPageContent();
  };
}
