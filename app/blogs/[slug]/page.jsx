import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowRight,
  FiClock,
  FiEdit3,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import NewsletterForm from "@/components/NewsletterForm";
import MagneticButton from "@/components/MagneticButton";
import { blogs } from "@/data/blogs";
import BlogPreview from "../_components/BlogPreview";
import { getBlogImage } from "../_data/blogImages";

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  return { title: post ? `${post.title} | Coozter` : "Blog | Coozter" };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = blogs.filter((item) => item.slug !== post.slug).slice(0, 2);
  const image = getBlogImage(post.slug);
  const contents = [
    ["Opening", "opening"],
    ["What changes", "what-changes"],
    ["Practical read", "practical-read"],
    ["Related", "related"],
  ];

  return (
    <>
      <article className="overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f3fbff_46%,#dcefff_100%)] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-pad relative pb-14 lg:pb-20">
          <Link
            href="/blogs"
            className="relative inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/76 px-4 py-2 text-sm font-semibold text-ink/70 shadow-[0_14px_38px_rgba(14,62,128,0.08)] transition hover:-translate-y-0.5 hover:border-coral/50 hover:text-moss anim-fade-up"
          >
            <FiArrowLeft size={15} />
            Back to articles
          </Link>

          <div className="relative mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(440px,0.92fr)] lg:items-end xl:gap-16">
            <div className="anim-fade-up anim-delay-1">
              <p className="mb-6 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-moss">
                <span className="h-px w-10 bg-coral anim-reveal-line" />
                {post.category}
              </p>
              <h1
                id="opening"
                className="display-title max-w-5xl font-serif text-ink"
              >
                {post.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/64">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-ink/62">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/76 px-4 py-2 shadow-[0_12px_34px_rgba(14,62,128,0.07)]">
                  <FiEdit3 size={15} className="text-moss" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/76 px-4 py-2 shadow-[0_12px_34px_rgba(14,62,128,0.07)]">
                  <FiClock size={15} className="text-moss" />
                  {post.readTime}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/76 px-4 py-2 shadow-[0_12px_34px_rgba(14,62,128,0.07)]">
                  {post.date}
                </span>
              </div>
            </div>

            <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/85 bg-white shadow-[0_30px_90px_rgba(14,62,128,0.14)] anim-blur-in anim-delay-2 sm:min-h-[460px]">
              <div
                className="absolute inset-0 bg-cover bg-center anim-image-zoom"
                style={{ backgroundImage: `url(${image})` }}
                aria-label={post.image}
                role="img"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.02)_0%,rgba(7,27,51,0.18)_45%,rgba(7,27,51,0.82)_100%)]" />
              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-moss shadow-[0_14px_38px_rgba(14,62,128,0.12)]">
                Field note
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="max-w-md text-sm leading-6 text-white/78">
                  {post.image}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="container-pad py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,760px)_minmax(230px,1fr)] xl:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[1.35rem] border border-slate-300/80 bg-white/82 p-5 shadow-[0_18px_56px_rgba(14,62,128,0.08)] backdrop-blur">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                Contents
              </p>
              {contents.map(([label, target]) => (
                <a
                  key={target}
                  href={`#${target}`}
                  className="block border-l border-slate-300/80 px-4 py-2 text-sm text-ink/58 transition hover:border-coral hover:text-moss"
                >
                  {label}
                </a>
              ))}
            </div>
          </aside>

          <div>
            <div className="prose-growth anim-fade-up">
              {post.body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  id={index === 1 ? "what-changes" : undefined}
                >
                  {paragraph}
                </p>
              ))}
              <blockquote id="practical-read">{post.pullQuote}</blockquote>
              <p>
                In practice, this means naming the decision you want the asset
                or campaign to support. If the answer is vague, the work will
                drift. If the answer is clear, the channel has something useful
                to do.
              </p>
            </div>
          </div>

          <aside className="lg:pt-12">
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#071b33,#0d55b0)] p-6 text-white shadow-[0_24px_70px_rgba(14,62,128,0.16)] anim-fade-up anim-delay-2">
              <FiTrendingUp size={22} className="text-sky-200" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100">
                Useful when
              </p>
              <p className="mt-3 text-lg font-semibold leading-7">
                Your team needs clearer decisions from content, partners, or
                performance channels.
              </p>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-slate-300/80 bg-white p-6 shadow-[0_18px_56px_rgba(14,62,128,0.08)] anim-fade-up anim-delay-3">
              <FiLayers size={21} className="text-moss" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">
                Article type
              </p>
              <p className="mt-3 text-sm leading-7 text-ink/64">
                Strategy note for teams building visibility, partner trust, and
                measurable demand.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <AnimatedSection className="container-pad py-10 lg:py-16" id="related">
        <div className="grid gap-8 rounded-[2rem] bg-[linear-gradient(135deg,#071b33,#0a3b7a_58%,#0f6fb8)] p-8 text-warm shadow-[0_28px_90px_rgba(7,27,51,0.18)] md:grid-cols-[1fr_0.8fr] md:p-10">
          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Bring this thinking into your growth plan.
            </h2>
            <p className="mt-4 max-w-xl text-warm/70">
              We can help translate the ideas into search pages, partner
              assets, campaigns, and reporting.
            </p>
          </div>
          <div className="self-end">
            <MagneticButton href="/contact" variant="light">
              Plan My Growth
            </MagneticButton>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad py-12 lg:py-18">
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-300/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Continue reading</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Related articles
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-semibold text-moss transition hover:text-coral"
          >
            All articles <FiArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {related.map((item) => (
            <BlogPreview key={item.slug} post={item} />
          ))}
        </div>
      </AnimatedSection>

      <section className="container-pad pb-24">
        <div className="rounded-[2rem] border border-slate-300/80 bg-white p-7 shadow-[0_22px_70px_rgba(14,62,128,0.08)] md:p-9">
          <h2 className="font-serif text-4xl text-ink">Newsletter</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ink/60">
            Get one practical note each month on affiliate branding, search,
            performance, and reporting.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
