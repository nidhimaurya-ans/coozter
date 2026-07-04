import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import BrandLogo from "./BrandLogo";
import NewsletterForm from "./NewsletterForm";

const serviceLinks = [
  "Affiliate Branding",
  "SEO Growth",
  "Paid Advertising",
  "Lead Generation",
  "Analytics",
];

const companyLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Blogs", "/blogs"],
  ["Contact", "/contact"],
];

const topicLinks = ["Affiliate Branding", "SEO", "Performance", "Content"];

export default function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden bg-[linear-gradient(135deg,#061a2f_0%,#071b33_48%,#1d5edb_100%)] text-white">
      <div className="container-pad relative ">
        <div className="grid gap-10  py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.72fr_0.72fr_0.72fr_1.08fr] lg:items-start">
          <div className="anim-fade-up lg:pr-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <BrandLogo />
            </Link>

            <p className="mt-5 max-w-sm text-[0.95rem] font-medium leading-7 text-white/72">
              We help companies build visibility, trust, partnerships, and
              revenue through affiliate branding and performance-focused
              marketing.
            </p>

            <div className="mt-7 grid gap-3 text-[0.95rem] font-medium text-white/76">
              <p className="grid grid-cols-[1rem_1fr] items-center gap-3">
                <FiMapPin size={16} className="text-sky-200" />
                <span>Gurugram, Haryana</span>
              </p>
              <p className="grid grid-cols-[1rem_1fr] items-center gap-3">
                <FiMail size={16} className="text-sky-200" />
                <span>hello@coozter.com</span>
              </p>
              <p className="grid grid-cols-[1rem_1fr] items-center gap-3">
                <FiPhone size={16} className="text-sky-200" />
                <span>+91 98765 43210</span>
              </p>
            </div>
          </div>

          <div className="anim-fade-up anim-delay-1 lg:pt-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-sky-100">
              Services
            </h2>
            <div className="mt-5 grid gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link}
                  href="/services"
                  className="block text-[0.95rem] font-medium text-white/72 transition hover:translate-x-1 hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="anim-fade-up anim-delay-2 lg:pt-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-sky-100">
              Company
            </h2>
            <div className="mt-5 grid gap-3">
              {companyLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-[0.95rem] font-medium text-white/72 transition hover:translate-x-1 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="anim-fade-up anim-delay-3 lg:pt-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-sky-100">
              Topics
            </h2>
            <div className="mt-5 grid gap-3">
              {topicLinks.map((topic) => (
                <Link
                  key={topic}
                  href="/blogs"
                  className="block text-[0.95rem] font-medium text-white/72 transition hover:translate-x-1 hover:text-white"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>

          <div className="anim-fade-up anim-delay-4 md:col-span-2 lg:col-span-1 lg:pt-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-sky-100">
              Field Notes
            </h2>
            <p className="mt-5 max-w-sm text-[0.95rem] font-medium leading-7 text-white/72">
              Monthly thinking on affiliate campaigns, search behavior, and
              practical growth systems.
            </p>
            <NewsletterForm dark />
            <div className="mt-7 flex gap-3 text-sm text-white/70">
              {[
                [FaLinkedinIn, "LinkedIn"],
                [FaXTwitter, "Twitter / X"],
                [FaInstagram, "Instagram"],
              ].map(([Icon, label]) => (
                <a
                  key={label}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/14 bg-white/8 transition hover:-translate-y-0.5 hover:border-sky-200/50 hover:bg-white hover:text-ink"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-7 text-[0.92rem] font-medium text-white/58 md:flex-row md:items-center anim-fade-up anim-delay-5">
          <p>Copyright 2026 Coozter. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
            <span>Where strategy, partnerships, and performance meet.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
