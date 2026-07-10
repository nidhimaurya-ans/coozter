"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { getBlogImage } from "../_data/blogImages";

export default function BlogPreview({
  post,
  featured = false,
  buttonLabel = "Read",
}) {
  const image = getBlogImage(post);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={
        featured
          ? "group grid gap-7 anim-fade-up lg:grid-cols-[1.05fr_0.95fr]"
          : "group overflow-hidden transition-all duration-500 hover:-translate-y-1"
      }
    >
      <div
        className={`${featured ? "min-h-[300px] md:min-h-[380px]" : "min-h-56"} relative overflow-hidden ${featured ? "rounded-[1.5rem] shadow-[0_24px_70px_rgba(14,62,128,0.15)] md:rounded-[1.75rem]" : ""}`}
      >
        <img
          src={image}
          alt={post.image || post.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className={featured ? "self-end pb-3" : "p-5 sm:p-6"}>
        <div className="mb-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em] text-ink/48">
          <span>{post.category}</span>
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
            className="inline-flex items-center gap-1 rounded-full bg-[#0d5ee8] px-3 py-1.5 font-semibold text-white shadow-[0_8px_20px_rgba(13,94,232,0.16)] transition hover:bg-[#084fc9] [&_*]:text-white"
          >
            <span className="text-white">{buttonLabel}</span>
            <FiArrowRight size={14} className="text-white" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
