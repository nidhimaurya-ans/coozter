"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { getBlogImage } from "../_data/blogImages";

export default function BlogPreview({ post, featured = false }) {
  const image = getBlogImage(post.slug);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={
        featured
          ? "group grid gap-7 anim-fade-up lg:grid-cols-[1.05fr_0.95fr]"
          : "group overflow-hidden rounded-[1.5rem] border border-slate-300/80 bg-white shadow-[0_18px_56px_rgba(14,62,128,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_28px_82px_rgba(14,62,128,0.14)]"
      }
    >
      <div
        className={`${featured ? "min-h-[300px] md:min-h-[380px]" : "min-h-56"} relative overflow-hidden ${featured ? "rounded-[1.5rem] shadow-[0_24px_70px_rgba(14,62,128,0.15)] md:rounded-[1.75rem]" : ""}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.03)_0%,rgba(7,27,51,0.2)_48%,rgba(7,27,51,0.78)_100%)]" />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-moss shadow-[0_12px_34px_rgba(14,62,128,0.12)]">
          {post.category}
        </span>
        <p className="absolute bottom-5 left-5 right-5 max-w-sm text-sm leading-6 text-white/76">
          {post.image}
        </p>
      </div>
      <div className={featured ? "self-end pb-3" : "p-5 sm:p-6"}>
        <div className="mb-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em] text-ink/48">
          <span>{post.readTime}</span>
          <span>{post.date}</span>
        </div>
        <h3
          className={`${featured ? "font-serif text-4xl md:text-5xl" : "font-serif text-3xl"} leading-tight text-ink`}
        >
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-4 text-base leading-7 text-ink/66">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between border-t border-slate-300/80 pt-4 text-sm">
          <p className="font-semibold text-ink">By {post.author}</p>
          <Link
            href={`/blogs/${post.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-moss transition hover:text-coral"
          >
            Read <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
