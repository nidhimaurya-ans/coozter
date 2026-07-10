"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import NewsletterForm from "@/components/NewsletterForm";
import { blogs as fallbackBlogs } from "@/data/blogs";
import { subscribePublishedBlogs } from "@/src/services/blogService";
import useBlogPageContent from "@/src/hooks/useBlogPageContent";
import { getBlogImage } from "./_data/blogImages";

export default function BlogsPage() {
  const blogPageContent = useBlogPageContent();
  const [posts, setPosts] = useState(fallbackBlogs);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const unsubscribe = subscribePublishedBlogs(
      (items) => {
        if (items.length > 0) {
          setPosts(items);
        }
      },
      (error) => {
        console.error("Unable to load Firebase blogs", error);
      },
    );

    return unsubscribe;
  }, []);

  const categories = useMemo(() => {
    const unique = posts
      .map((post) => post.category)
      .filter(Boolean)
      .filter((item, index, items) => items.indexOf(item) === index);

    return ["All", ...unique];
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery = `${post.title} ${post.excerpt}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);
  const categoryCounts = useMemo(() => {
    return categories.reduce((acc, item) => {
      acc[item] =
        item === "All"
          ? posts.length
          : posts.filter((post) => post.category === item).length;
      return acc;
    }, {});
  }, [categories, posts]);

  const featured = filtered[0] || posts[0] || fallbackBlogs[0];
  const remaining = filtered.slice(1);

  return (
    <div className="flex flex-col gap-5">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#eff9ff_42%,#dbeeff_100%)] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-pad relative pb-8 lg:pb-10">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.98fr)_minmax(420px,0.82fr)] xl:items-center xl:gap-16">
            <div className="max-w-4xl anim-fade-up">
              <p className="mb-5 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-moss">
                <span className="h-px w-10 bg-coral anim-reveal-line" />
                {blogPageContent.hero.eyebrow}
              </p>
              <h1 className="max-w-[12.5ch] font-serif text-[3.15rem] font-medium leading-[0.98] text-ink sm:text-[3.4rem] lg:text-[4.15rem]">
                {blogPageContent.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ink/64 sm:text-lg">
                {blogPageContent.hero.description}
              </p>

              <div className="mt-8 max-w-2xl rounded-[1.5rem] border border-white/80 bg-white/72 p-4 shadow-[0_24px_80px_rgba(14,62,128,0.1)] backdrop-blur anim-fade-up anim-delay-2">
                <label className="sr-only" htmlFor="blog-search">
                  Search articles
                </label>
                <div className="relative">
                  <FiSearch
                    size={19}
                    className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-moss"
                  />
                  <input
                    id="blog-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={blogPageContent.hero.searchPlaceholder}
                    className="w-full rounded-full border border-slate-300/80 bg-white py-4 pl-12 pr-5 text-sm text-ink shadow-[0_14px_36px_rgba(14,62,128,0.08)] outline-none transition placeholder:text-ink/38 focus:border-coral focus:shadow-[0_18px_52px_rgba(43,188,255,0.18)]"
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold leading-none transition-all duration-300 ${
                        category === item
                          ? "bg-blue-500 text-white shadow-[0_14px_34px_rgba(7,27,51,0.18)] [&_*]:text-white"
                          : "border border-slate-300/80 bg-white/80 text-ink/68 hover:-translate-y-0.5 hover:border-coral/50 hover:bg-white hover:text-moss"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <BlogHeroVisual
              featured={featured}
              postCount={posts.length}
              content={blogPageContent.hero}
            />
          </div>
        </div>
      </section>

      <AnimatedSection className="container-pad py-5">
        {filtered.length > 0 ? (
          <FeaturedArticle post={featured} labels={blogPageContent.buttons} />
        ) : (
          <EmptyState content={blogPageContent.articleList} />
        )}
      </AnimatedSection>

      {filtered.length > 0 && (
        <AnimatedSection className="container-pad py-5">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-300/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">{blogPageContent.articleList.eyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
                {blogPageContent.articleList.title}
              </h2>
            </div>
            <p className="w-max rounded-full bg-moss/8 px-4 py-2 text-sm font-semibold text-white">
              {filtered.length}{" "}
              {filtered.length === 1
                ? blogPageContent.articleList.articleFoundSingularText
                : blogPageContent.articleList.articleFoundPluralText}
            </p>
          </div>

          {remaining.length > 0 ? (
            <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
              {remaining.map((post, index) => (
                <ArticleCard
                  key={post.slug}
                  post={post}
                  index={index}
                  labels={blogPageContent.buttons}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-slate-300/80 bg-white p-8 text-ink/62 shadow-[0_18px_60px_rgba(14,62,128,0.07)]">
              {blogPageContent.articleList.emptyMoreArticlesText}
            </div>
          )}
        </AnimatedSection>
      )}
    </div>
  );
}

function BlogHeroVisual({ featured, postCount, content }) {
  const image = getBlogImage(featured);

  return (
    <div className="relative min-h-[420px] anim-blur-in anim-delay-2 sm:min-h-[470px] xl:min-h-[500px]">
      <div className="absolute right-0 top-0 h-[310px] w-[92%] overflow-hidden rounded-[1.35rem] border border-white/80 bg-white shadow-[0_30px_90px_rgba(14,62,128,0.14)] sm:h-[385px] sm:w-[84%] sm:rounded-[1.75rem] xl:h-[410px]">
        <div
          className="h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.04)_0%,rgba(7,27,51,0.24)_48%,rgba(7,27,51,0.82)_100%)]" />
        <div className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-moss shadow-[0_12px_34px_rgba(14,62,128,0.12)]">
          {content.featuredBadge}
        </div>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-100">
            {featured.category}
          </p>
          <p className="max-w-md font-serif text-2xl leading-tight sm:text-[2.45rem]">
            {featured.title}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 w-[88%] rounded-[1.2rem] border border-white/80 bg-white/90 p-4 shadow-[0_24px_80px_rgba(14,62,128,0.12)] backdrop-blur anim-fade-up anim-delay-4 sm:w-[70%] sm:rounded-[1.35rem] sm:p-5">
        <div className="flex items-center gap-3 text-moss">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-coral/14">
            <FiTrendingUp size={18} className="text-white" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em]">
              {content.insightLabel}
            </p>
            <p className="mt-1 text-sm text-ink/62">
              {featured.readTime} · {featured.date}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-ink/64 line-clamp-3">
          {featured.excerpt}
        </p>
      </div>

      <div className="absolute right-7 top-8 hidden rounded-2xl bg-ink px-4 py-3 text-white shadow-[0_18px_52px_rgba(7,27,51,0.22)] anim-fade-up anim-delay-5 sm:block">
        <div className="flex items-center gap-2">
          <FiBookOpen size={17} />
          <span className="text-xs font-semibold uppercase tracking-[0.12em]">
            {postCount} {content.notesLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

function FeaturedArticle({ post, labels }) {
  return (
    <article className="group grid overflow-hidden rounded-[1.75rem] border border-slate-300/80 bg-white shadow-[0_24px_80px_rgba(14,62,128,0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_34px_100px_rgba(14,62,128,0.16)] lg:grid-cols-[1fr_1fr]">
      <BlogThumb post={post} featured />
      <div className="flex min-h-full flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.12em] text-ink/45">
          <span className="rounded-full bg-white px-3 py-1 font-semibold text-blue-500">
            {post.category}
          </span>
          <span>{post.readTime}</span>
          <span>{post.date}</span>
        </div>
        <h2 className=" font-serif text-4xl leading-tight text-ink md:text-[3.35rem]">
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-ink/64">
          {post.excerpt}
        </p>
        <div className="mt-7 flex flex-col gap-4 border-t border-slate-300/80 pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-ink">By {post.author}</span>
          <Link
            href={`/blogs/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#0d5ee8] px-4 py-2 font-semibold text-white shadow-[0_10px_24px_rgba(13,94,232,0.18)] transition hover:bg-[#084fc9] [&_*]:text-white"
          >
            <span className="text-white">{labels.featuredButtonLabel}</span>
            <FiArrowRight size={16} className="text-white" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ArticleCard({ post, index, labels }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-300/80 bg-white shadow-[0_18px_56px_rgba(14,62,128,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-coral/40 hover:shadow-[0_28px_82px_rgba(14,62,128,0.14)] anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
    >
      <BlogThumb post={post} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.68rem] uppercase tracking-[0.12em] text-ink/45">
          <span className="rounded-full bg-white/88 px-3 py-1 font-semibold text-moss border border-gray-300">
            {post.category}
          </span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-serif text-[1.9rem] leading-tight text-ink">
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink/62 line-clamp-4">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-slate-300/80 pt-4 text-xs text-ink/50">
          <span>{post.author}</span>
          <Link
            href={`/blogs/${post.slug}`}
            className="inline-flex min-w-[6.8rem] items-center justify-center gap-1.5 rounded-full bg-[#0d5ee8] px-4 py-2 font-semibold !text-white shadow-[0_8px_20px_rgba(13,94,232,0.16)] transition hover:bg-[#084fc9] [&_*]:!text-white"
          >
            <span className="!text-white">{labels.cardButtonLabel}</span>
            <FiArrowRight size={13} className="!text-white" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function BlogThumb({ post, featured = false }) {
  const image = getBlogImage(post);

  return (
    <div
      className={`${featured ? "min-h-[320px] lg:min-h-[480px]" : "min-h-[220px]"} relative shrink-0 overflow-hidden bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.04)_0%,rgba(7,27,51,0.18)_42%,rgba(7,27,51,0.78)_100%),linear-gradient(135deg,rgba(29,94,219,0.16),transparent_50%)]" />
        <div className="absolute left-6 top-6 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-moss shadow-[0_12px_34px_rgba(14,62,128,0.12)]">
          {post.category}
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="max-w-sm text-sm leading-6 text-warm/82">
            {post.image}
          </p>
        </div>
        <div className="absolute right-5 top-5 grid h-10 w-10 translate-x-3 -translate-y-3 place-items-center rounded-full bg-white text-moss opacity-0 shadow-[0_12px_34px_rgba(14,62,128,0.14)] transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
          <FiArrowRight size={17} />
        </div>
      </div>
    </div>
  );
}

function EmptyState({ content }) {
  return (
    <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-300/80 bg-white p-10 text-center shadow-[0_24px_80px_rgba(14,62,128,0.1)]">
      <p className="font-serif text-4xl text-ink">{content.emptyTitle}</p>
      <p className="mt-4 text-ink/62">{content.emptyDescription}</p>
    </div>
  );
}
