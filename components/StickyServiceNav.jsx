"use client";

import { services } from "@/data/services";

export default function StickyServiceNav() {
  return (
    <aside className="sticky top-28 hidden self-start border-l border-slate-300/80 pl-5 lg:block anim-fade-up">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
        Service index
      </p>
      <div className="grid gap-3">
        {services.map((service, index) => (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            className={`group grid grid-cols-[1.8rem_1fr] items-baseline gap-3 text-sm text-ink/62 transition hover:text-moss anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
          >
            <span className="font-serif text-lg text-moss/38 transition group-hover:text-moss">
              {String(index + 1).padStart(2, "0")}
            </span>
            {service.name}
          </a>
        ))}
      </div>
    </aside>
  );
}
