import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const defaultBlogPageContent = {
  hero: {
    eyebrow: "Coozter Field Notes",
    title: "Clear thinking on partners, search, campaigns, and brand trust.",
    description:
      "Practical notes from the work behind affiliate branding, performance marketing, search visibility, and useful reporting.",
    searchPlaceholder: "Search articles...",
    featuredBadge: "Featured",
    insightLabel: "Field insight",
    notesLabel: "notes",
  },
  articleList: {
    eyebrow: "All articles",
    title: "Latest thinking from the field.",
    articleFoundSingularText: "article found",
    articleFoundPluralText: "articles found",
    emptyMoreArticlesText: "No more articles match this filter yet.",
    emptyTitle: "No articles found",
    emptyDescription: "Try another keyword or category.",
  },
  buttons: {
    featuredButtonLabel: "Read article",
    cardButtonLabel: "Read article",
    previewButtonLabel: "Read",
    backButtonLabel: "Back to articles",
    allArticlesLabel: "All articles",
  },
  detail: {
    fieldNoteBadge: "Field note",
    contentsTitle: "Contents",
    contents: [
      { label: "Opening", targetId: "opening" },
      { label: "What changes", targetId: "what-changes" },
      { label: "Practical read", targetId: "practical-read" },
      { label: "Related", targetId: "related" },
    ],
    defaultExtraParagraph:
      "In practice, this means naming the decision you want the asset or campaign to support. If the answer is vague, the work will drift. If the answer is clear, the channel has something useful to do.",
    sideCardOne: {
      eyebrow: "Useful when",
      description:
        "Your team needs clearer decisions from content, partners, or performance channels.",
    },
    sideCardTwo: {
      eyebrow: "Article type",
      description:
        "Strategy note for teams building visibility, partner trust, and measurable demand.",
    },
    cta: {
      title: "Bring this thinking into your growth plan.",
      description:
        "We can help translate the ideas into search pages, partner assets, campaigns, and reporting.",
      buttonLabel: "Plan My Growth",
      buttonUrl: "/contact",
    },
    related: {
      eyebrow: "Continue reading",
      title: "Related articles",
      allArticlesLabel: "All articles",
      allArticlesUrl: "/blogs",
    },
    recentTitle: "Recent articles",
    copyLinkLabel: "Copy link",
    newsletter: {
      title: "Newsletter",
      description:
        "Get one practical note each month on affiliate branding, search, performance, and reporting.",
    },
  },
};

const blogPageContentRef = doc(
  db,
  "projects",
  "coozter",
  "blogSettings",
  "blogPageContent",
);
const blogPageContentRefs = [
  blogPageContentRef,
  doc(db, "projects", "coozter", "blogs", "blogPageContent"),
  doc(db, "projects", "coozter", "blog", "blogPageContent"),
  doc(db, "projects", "coozter", "pages", "blogs"),
  doc(db, "projects", "coozter", "pages", "blog"),
];

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

      if (value && typeof value === "object" && !Array.isArray(value)) {
        acc[key] = {
          ...(defaultSection[key] || {}),
          ...value,
        };
        return acc;
      }

      acc[key] = value ?? defaultSection[key];
      return acc;
    },
    { ...defaultSection },
  );
}

function normalizeContents(items = []) {
  return normalizeOrderedItems(items).map((item) => ({
    label: item.label || "",
    targetId: item.targetId || "",
  }));
}

export function normalizeBlogPageContent(data = {}) {
  const heroSection = data.heroSection || {};
  const articleListSection = data.articleListSection || {};
  const detailPage = data.detailPage || {};

  const content = {
    hero: mergeSection(defaultBlogPageContent.hero, data.hero),
    articleList: mergeSection(defaultBlogPageContent.articleList, data.articleList),
    buttons: mergeSection(defaultBlogPageContent.buttons, data.buttons),
    detail: mergeSection(defaultBlogPageContent.detail, data.detail),
  };

  if (heroSection.eyebrowText) content.hero.eyebrow = heroSection.eyebrowText;
  if (heroSection.headingText) content.hero.title = heroSection.headingText;
  if (heroSection.descriptionText) {
    content.hero.description = heroSection.descriptionText;
  }
  if (heroSection.searchPlaceholder) {
    content.hero.searchPlaceholder = heroSection.searchPlaceholder;
  }
  if (heroSection.featuredBadgeText) {
    content.hero.featuredBadge = heroSection.featuredBadgeText;
  }
  if (heroSection.insightLabel) content.hero.insightLabel = heroSection.insightLabel;
  if (heroSection.notesLabel) content.hero.notesLabel = heroSection.notesLabel;

  if (articleListSection.eyebrowText) {
    content.articleList.eyebrow = articleListSection.eyebrowText;
  }
  if (articleListSection.headingText) {
    content.articleList.title = articleListSection.headingText;
  }
  if (articleListSection.articleFoundSingularText) {
    content.articleList.articleFoundSingularText =
      articleListSection.articleFoundSingularText;
  }
  if (articleListSection.articleFoundPluralText) {
    content.articleList.articleFoundPluralText =
      articleListSection.articleFoundPluralText;
  }
  if (articleListSection.emptyMoreArticlesText) {
    content.articleList.emptyMoreArticlesText =
      articleListSection.emptyMoreArticlesText;
  }
  if (articleListSection.emptyTitle) {
    content.articleList.emptyTitle = articleListSection.emptyTitle;
  }
  if (articleListSection.emptyDescription) {
    content.articleList.emptyDescription = articleListSection.emptyDescription;
  }

  if (detailPage.fieldNoteBadgeText) {
    content.detail.fieldNoteBadge = detailPage.fieldNoteBadgeText;
  }
  if (detailPage.contentsTitle) {
    content.detail.contentsTitle = detailPage.contentsTitle;
  }
  if (Array.isArray(detailPage.contents) && detailPage.contents.length) {
    content.detail.contents = normalizeContents(detailPage.contents);
  }
  if (detailPage.defaultExtraParagraph) {
    content.detail.defaultExtraParagraph = detailPage.defaultExtraParagraph;
  }
  if (detailPage.sideCardOne) {
    content.detail.sideCardOne = mergeSection(
      defaultBlogPageContent.detail.sideCardOne,
      {
        eyebrow: detailPage.sideCardOne.eyebrowText,
        description: detailPage.sideCardOne.descriptionText,
      },
    );
  }
  if (detailPage.sideCardTwo) {
    content.detail.sideCardTwo = mergeSection(
      defaultBlogPageContent.detail.sideCardTwo,
      {
        eyebrow: detailPage.sideCardTwo.eyebrowText,
        description: detailPage.sideCardTwo.descriptionText,
      },
    );
  }
  if (detailPage.ctaSection) {
    content.detail.cta = mergeSection(defaultBlogPageContent.detail.cta, {
      title: detailPage.ctaSection.headingText,
      description: detailPage.ctaSection.descriptionText,
      buttonLabel: detailPage.ctaSection.buttonLabel,
      buttonUrl: detailPage.ctaSection.buttonUrl,
    });
  }
  if (detailPage.relatedSection) {
    content.detail.related = mergeSection(defaultBlogPageContent.detail.related, {
      eyebrow: detailPage.relatedSection.eyebrowText,
      title: detailPage.relatedSection.headingText,
      allArticlesLabel: detailPage.relatedSection.allArticlesLabel,
      allArticlesUrl: detailPage.relatedSection.allArticlesUrl,
    });
  }
  if (detailPage.recentTitle) {
    content.detail.recentTitle = detailPage.recentTitle;
  }
  if (detailPage.copyLinkLabel) {
    content.detail.copyLinkLabel = detailPage.copyLinkLabel;
  }
  if (detailPage.newsletterSection) {
    content.detail.newsletter = mergeSection(
      defaultBlogPageContent.detail.newsletter,
      {
        title: detailPage.newsletterSection.headingText,
        description: detailPage.newsletterSection.descriptionText,
      },
    );
  }

  return content;
}

export async function getBlogPageContent() {
  const snapshots = await Promise.all(blogPageContentRefs.map((ref) => getDoc(ref)));
  const data = snapshots.reduce(
    (acc, snapshot) => (snapshot.exists() ? { ...acc, ...snapshot.data() } : acc),
    {},
  );

  return normalizeBlogPageContent(data);
}

export function subscribeBlogPageContent(onData, onError) {
  const pageDocs = {};

  function emit() {
    const data = Object.values(pageDocs).reduce(
      (acc, section) => ({ ...acc, ...section }),
      {},
    );

    onData(normalizeBlogPageContent(data));
  }

  const unsubscribers = blogPageContentRefs.map((ref) =>
    onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.exists()) {
          pageDocs[ref.path] = snapshot.data();
        } else {
          delete pageDocs[ref.path];
        }

        emit();
      },
      onError,
    ),
  );

  return () => {
    unsubscribers.forEach((unsubscribe) => unsubscribe());
  };
}
