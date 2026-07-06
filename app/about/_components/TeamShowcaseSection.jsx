"use client";

import AnimatedSection from "@/components/AnimatedSection";
import {
  divider,
  proofMetrics,
  sectionSpace,
  teamMembers,
} from "../_data/aboutContent";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiLinkedin, FiX } from "react-icons/fi";

const imageAnimations = [
  "anim-scale-in",
  "anim-slide-right",
  "anim-fade-up",
  "anim-slide-left",
];

export default function TeamShowcaseSection() {
  const [activeMember, setActiveMember] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AnimatedSection className={sectionSpace}>
      <div className="grid">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.7fr)] xl:items-start">
          <div className="anim-slide-left lg:max-w-4xl">
            <p className="eyebrow inline-flex items-center gap-3 text-moss">
              <span className="h-px w-9 bg-coral anim-reveal-line" />
              Meet our team
            </p>

            {/* <h2 className="mt-5 font-serif text-[2.4rem] leading-[1.3] text-ink sm:text-5xl md:text-6xl">
              The people shaping partner-led growth.
            </h2> */}
          </div>
          {/* 
          <p className="max-w-md text-base leading-7 text-ink/62 anim-fade-up anim-delay-1 lg:justify-self-end">
            Strategy, content, performance, and reporting sit close together so
            every campaign is planned with the full customer journey in view.
          </p> */}
        </div>

        <div
          className={`grid gap-9 xl:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.62fr)] xl:items-center`}
        >
          <div className="team-3d-stage ">
            <div className="team-3d-ring" />
            <div className="team-3d-path team-3d-path-one" />
            <div className="team-3d-path team-3d-path-two" />

            {teamMembers.map((member, index) => {
              const [name, role, focus, image] = member;
              return (
              <article
                key={name}
                className={`team-3d-person team-3d-person-${index + 1} cursor-pointer focus:z-[60] hover:z-[60]`}
                tabIndex={0}
                onMouseEnter={() => setActiveMember(member)}
                onFocus={() => setActiveMember(member)}
                onClick={() => setActiveMember(member)}
              >
                <div
                  className={`team-3d-frame ${imageAnimations[index] ?? "anim-fade-up"} anim-delay-${Math.min(
                    index + 1,
                    5,
                  )}`}
                >
                  <div
                    aria-label={`${name}, ${role} at Coozter`}
                    role="img"
                    className="team-3d-photo"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className="team-3d-shine" />
                  <div className="team-3d-caption">
                    <p>{role}</p>
                    <h3>{name}</h3>
                  </div>
                </div>
              </article>
              );
            })}
          </div>

          <div className="grid gap-3">
            {teamMembers.map(([name, role, focus], index) => (
              <div
                key={name}
                className={`border-b ${divider} py-4 anim-fade-up last:border-b-0 anim-delay-${Math.min(
                  index + 1,
                  5,
                )}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-moss">
                      {role}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl leading-tight text-ink">
                      {name}
                    </h3>
                  </div>
                  {/* <span className="font-serif text-4xl leading-none text-moss/24 transition duration-300 group-hover:text-moss/45">
                    0{index + 1}
                  </span> */}
                </div>

                <p className="mt-3 max-w-md text-sm leading-7 text-ink/62">
                  {focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={`grid gap-5 border-b ${divider} pb-6 sm:grid-cols-3`}>
          {proofMetrics.map(([number, label], index) => (
            <div
              key={label}
              className={`flex items-baseline justify-between gap-5 anim-fade-up sm:block anim-delay-${Math.min(
                index + 1,
                5,
              )}`}
            >
              <p className="font-serif text-4xl leading-none text-moss sm:text-5xl">
                {number}
              </p>
              <p className="mt-2 text-right text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.1em] text-ink/48 sm:text-left">
                {label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
      {mounted &&
        activeMember &&
        createPortal(
        <div
          className="fixed inset-0 z-[999] grid place-items-center bg-[#020b18]/72 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeMember[0]} profile`}
          onClick={() => setActiveMember(null)}
        >
          <div
            className="grid w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-sky-200/24 bg-[#061b3d] text-white shadow-[0_34px_120px_rgba(2,12,32,0.54)] md:grid-cols-[0.85fr_1.15fr]"
            onClick={(event) => event.stopPropagation()}
            onMouseLeave={() => setActiveMember(null)}
          >
            <div
              className="min-h-[18rem] bg-cover bg-center md:min-h-[28rem]"
              style={{ backgroundImage: `url(${activeMember[3]})` }}
              role="img"
              aria-label={`${activeMember[0]}, ${activeMember[1]}`}
            />
            <div className="relative p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setActiveMember(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/16"
                aria-label="Close profile"
              >
                <FiX />
              </button>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-sky-200/90">
                {activeMember[4]}
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-none text-white sm:text-5xl">
                {activeMember[0]}
              </h3>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-[#6ed6ff]">
                {activeMember[1]}
              </p>
              <p className="mt-6 text-base leading-8 text-white/78">
                {activeMember[6]}
              </p>
              <div className="mt-6 rounded-2xl border border-white/12 bg-white/8 p-5">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/54">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-7 text-white/76">
                  {activeMember[2]}
                </p>
              </div>
              <a
                href={`https://${activeMember[5]}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex max-w-full items-center gap-2 break-all rounded-full border border-sky-200/22 bg-[#0d5ee8]/78 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-[#176fff]"
              >
                <FiLinkedin className="shrink-0" />
                {activeMember[5]}
              </a>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </AnimatedSection>
  );
}
