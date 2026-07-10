import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

const blogsCollection = collection(db, "projects", "coozter", "blogs");

function getDateValue(value) {
  if (!value) return 0;
  if (typeof value?.toMillis === "function") return value.toMillis();
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}

function normalizeBlog(docId, data = {}) {
  const slug = data.slug || docId;
  const publishedAt = data.publishedAt || data.date || data.createdAt;
  const body =
    Array.isArray(data.body)
      ? data.body
      : Array.isArray(data.content)
        ? data.content
        : Array.isArray(data.paragraphs)
          ? data.paragraphs
          : typeof data.body === "string"
            ? data.body.split("\n").filter(Boolean)
            : typeof data.content === "string"
              ? data.content.split("\n").filter(Boolean)
              : [];

  return {
    slug,
    title: data.title || "Untitled article",
    category: data.category || "General",
    author: data.author || "Coozter Team",
    date:
      data.displayDate ||
      data.date ||
      (publishedAt?.toDate
        ? publishedAt.toDate().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        : ""),
    readTime: data.readTime || "5 min read",
    excerpt: data.excerpt || data.description || "",
    image: data.imageAlt || data.image || "",
    imageUrl: data.imageUrl || data.coverImage || data.thumbnail || "",
    secondaryImageUrl:
      data.secondaryImageUrl || data.contentImageUrl || data.bodyImageUrl || "",
    secondaryImageAlt:
      data.secondaryImageAlt || data.contentImageAlt || data.bodyImageAlt || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    body,
    pullQuote: data.pullQuote || "",
    status: data.status || (data.published ? "published" : "draft"),
    published: data.published === true || data.isPublished === true,
    isActive: data.isActive,
    order: Number.isFinite(data.order) ? data.order : 999,
    publishedAt,
    updatedAt: data.updatedAt || null,
  };
}

function sortBlogs(posts) {
  return [...posts].sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return getDateValue(b.publishedAt) - getDateValue(a.publishedAt);
  });
}

function isPublished(post) {
  return (
    post.published === true ||
    post.isActive === true ||
    String(post.status || "").toLowerCase() === "published"
  );
}

function isBlogPostDoc(item) {
  return !["blogPageContent", "settings", "blogSettings"].includes(item.id);
}

export async function getPublishedBlogs() {
  const snapshot = await getDocs(blogsCollection);
  return sortBlogs(
    snapshot.docs
      .filter(isBlogPostDoc)
      .map((item) => normalizeBlog(item.id, item.data()))
      .filter(isPublished),
  );
}

export function subscribePublishedBlogs(onData, onError) {
  return onSnapshot(
    blogsCollection,
    (snapshot) => {
      onData(
        sortBlogs(
          snapshot.docs
            .filter(isBlogPostDoc)
            .map((item) => normalizeBlog(item.id, item.data()))
            .filter(isPublished),
        ),
      );
    },
    onError,
  );
}

export async function getBlogBySlug(slug) {
  const directSnapshot = await getDoc(doc(blogsCollection, slug));

  if (directSnapshot.exists()) {
    const post = normalizeBlog(directSnapshot.id, directSnapshot.data());
    return isPublished(post) ? post : null;
  }

  const q = query(blogsCollection, where("slug", "==", slug));
  const snapshot = await getDocs(q);
  const post = snapshot.docs
    .filter(isBlogPostDoc)
    .map((item) => normalizeBlog(item.id, item.data()))
    .find(isPublished);

  return post || null;
}
