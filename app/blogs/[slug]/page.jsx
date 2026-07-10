import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiCalendar,
  FiClock,
  FiShare2,
  FiUser,
} from "react-icons/fi";
import { blogs } from "@/data/blogs";
import CopyLinkButton from "../_components/CopyLinkButton";
import { getBlogImage } from "../_data/blogImages";

export const dynamic = "force-dynamic";

const fallbackBlogPageContent = {
  buttons: {
    backButtonLabel: "Back to articles",
  },
  detail: {
    fieldNoteBadge: "Field note",
    defaultExtraParagraph:
      "In practice, this means naming the decision you want the asset or campaign to support. If the answer is vague, the work will drift. If the answer is clear, the channel has something useful to do.",
    copyLinkLabel: "Copy link",
    recentTitle: "Recent articles",
    related: {
      allArticlesLabel: "All articles",
      title: "Related articles",
    },
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await loadBlog(slug);
  return { title: post ? `${post.title} | Coozter` : "Blog | Coozter" };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await loadBlog(slug);
  if (!post) notFound();
  const blogPageContent = await loadBlogPageContent();
  const allPosts = await loadBlogs();
  const related = allPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const recent = allPosts.filter((item) => item.slug !== post.slug).slice(0, 4);
  const image = getBlogImage(post);
  const heroImage = post.imageUrl || image;
  const bodyImage = post.secondaryImageUrl || post.contentImageUrl || image;
  const bodyImageAlt =
    post.secondaryImageAlt || post.contentImageAlt || post.image || post.title;
  const tags =
    Array.isArray(post.tags) && post.tags.length > 0
      ? post.tags
      : [post.category, post.readTime].filter(Boolean);

  return (
    <main className="bg-[linear-gradient(135deg,#ffffff_0%,#f3fbff_46%,#dcefff_100%)] px-4 py-28 text-[#171717] sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <div className="px-0 py-6">
          <Link
            href="/blogs"
            className="mb-10 inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-ink/70 transition hover:border-[#0d5ee8] hover:text-[#0d5ee8]"
          >
            {blogPageContent.buttons.backButtonLabel}
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
            <header className="max-w-3xl">
              <h1 className="max-w-3xl font-serif text-4xl font-bold leading-[1.12] tracking-[-0.01em] text-ink sm:text-5xl lg:text-[4.2rem]">
                {post.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-ink/68">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold text-ink/72">
                <span className="inline-flex items-center gap-2">
                  <FiUser className="text-moss" size={16} />
                  {post.author}
                </span>
                <span className="h-5 w-px bg-slate-300" />
                <span>{post.category}</span>
                <span className="h-5 w-px bg-slate-300" />
                <span className="inline-flex items-center gap-2">
                  <FiCalendar className="text-moss" size={15} />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiClock className="text-moss" size={15} />
                  {post.readTime}
                </span>
              </div>
            </header>

            <div className="relative min-h-[260px] overflow-hidden bg-slate-100 shadow-[0_18px_46px_rgba(15,23,42,0.12)] sm:min-h-[330px] lg:mt-6">
              <img
                src={heroImage}
                alt={post.image || post.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="min-w-0">
              <section className="max-w-3xl">
                <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  {post.title}
                </h2>
                <div className="mt-6 space-y-5 text-[0.98rem] font-medium leading-8 text-ink/78">
                  {post.body.slice(0, 2).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <figure className="my-11 max-w-4xl">
                <div className="relative min-h-[260px] overflow-hidden bg-slate-100 sm:min-h-[420px]">
                  <img
                    src={bodyImage}
                    alt={bodyImageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-xs font-semibold text-ink/70">
                  {bodyImageAlt}
                </figcaption>
              </figure>

              <section className="max-w-3xl space-y-10">
                {post.body.slice(2).map((paragraph, index) => (
                  <div key={paragraph}>
                    {index === 0 && (
                      <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
                        {post.pullQuote || blogPageContent.detail.fieldNoteBadge}
                      </h2>
                    )}
                    <p className="text-[0.98rem] font-medium leading-8 text-ink/78">
                      {paragraph}
                    </p>
                  </div>
                ))}
                {post.pullQuote && (
                  <blockquote className="border-l-4 border-[#0d5ee8] pl-5 font-serif text-2xl font-bold leading-snug text-ink">
                    {post.pullQuote}
                  </blockquote>
                )}
                <p className="text-[0.98rem] font-medium leading-8 text-ink/78">
                  {blogPageContent.detail.defaultExtraParagraph}
                </p>
              </section>

              <div className="mt-12 flex flex-col gap-5 border-y border-slate-200 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f7f0f2] px-4 py-2 text-xs font-semibold text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-ink/70 transition hover:border-[#0d5ee8] hover:text-[#0d5ee8]"
                    aria-label={blogPageContent.detail.related.allArticlesLabel}
                  >
                    <FiShare2 size={16} />
                  </Link>
                  <CopyLinkButton label={blogPageContent.detail.copyLinkLabel} />
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28">
              <h2 className="font-serif text-2xl font-bold text-ink">
                {blogPageContent.detail.recentTitle}
              </h2>
              <div className="mt-4 divide-y divide-slate-200">
                {recent.map((item) => (
                  <Link
                    href={`/blogs/${item.slug}`}
                    key={item.slug}
                    className="block py-5 text-sm font-bold leading-6 text-ink transition hover:text-[#0d5ee8]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </aside>
          </div>

          <section className="mt-14">
            <h2 className="font-serif text-4xl font-bold text-ink">
              {blogPageContent.detail.related.title}
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((item) => (
                <RelatedArticle key={item.slug} post={item} />
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

function RelatedArticle({ post }) {
  const image = post.imageUrl || getBlogImage(post);

  return (
    <article>
      <Link href={`/blogs/${post.slug}`} className="group block">
        <div className="relative min-h-[180px] overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={post.image || post.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <p className="mt-5 text-xs font-semibold text-ink/45">{post.category}</p>
        <h3 className="mt-3 font-serif text-xl font-bold leading-tight text-ink transition group-hover:text-[#0d5ee8]">
          {post.title}
        </h3>
        <p className="mt-3 text-sm font-medium leading-6 text-ink/68">
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}

async function loadBlog(slug) {
  return blogs.find((item) => item.slug === slug) || null;
}

async function loadBlogs() {
  return blogs;
}

async function loadBlogPageContent() {
  return fallbackBlogPageContent;
}
