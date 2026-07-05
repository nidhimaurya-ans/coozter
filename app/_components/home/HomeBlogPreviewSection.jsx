import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { blogs } from "@/data/blogs";
import { getBlogImage } from "@/app/blogs/_data/blogImages";
import { FiArrowRight, FiBookOpen, FiClock } from "react-icons/fi";

const previewPosts = blogs.slice(3, 6);

export default function HomeBlogPreviewSection() {
  const [featured, ...sidePosts] = previewPosts;

  return (
    <AnimatedSection className="container-pad py-5">
      <div className="overflow-hidden py-5">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="anim-left-to-right">
            <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-moss">
              Field notes
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-[2.35rem] font-medium leading-[0.98] text-ink sm:text-5xl">
              Growth ideas worth opening next.
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-moss/20 px-5 py-3 text-sm font-bold text-moss transition hover:-translate-y-1 hover:border-coral/50"
          >
            More blogs
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <Link
            href={`/blogs/${featured.slug}`}
            className="group relative min-h-[25rem] overflow-hidden rounded-[1.25rem] border border-slate-300/80 bg-white shadow-soft anim-hero-zoom-out"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${getBlogImage(featured.slug)})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.03)_0%,rgba(7,27,51,0.24)_44%,rgba(7,27,51,0.86)_100%)]" />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/88 px-3 py-1.5 text-xs font-bold text-moss">
              <FiBookOpen />
              {featured.category}
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-sky-100">
                <FiClock />
                {featured.readTime}
              </p>
              <h3 className="mt-3 max-w-xl font-serif text-4xl leading-tight">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/74">
                {featured.excerpt}
              </p>
            </div>
          </Link>

          <div className="grid gap-5 md:grid-cols-2">
            {sidePosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className={`group relative min-h-[25rem] overflow-hidden rounded-[1.25rem] border border-slate-300/80 bg-white shadow-soft transition hover:-translate-y-1 anim-${index === 0 ? "blur-in" : "slide-left"} anim-delay-${index + 2}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${getBlogImage(post.slug)})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.02)_0%,rgba(7,27,51,0.18)_40%,rgba(7,27,51,0.82)_100%)]" />
                <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white/88 px-3 py-1.5 text-xs font-bold text-moss">
                    {post.category}
                  </span>
                  <span className="rounded-full bg-ink/70 px-3 py-1.5 text-xs font-bold text-white">
                    {post.readTime}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="font-serif text-3xl leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
