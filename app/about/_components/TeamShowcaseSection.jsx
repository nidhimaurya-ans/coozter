"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { divider, sectionSpace } from "../_data/aboutContent";
import useAboutPageContent from "@/src/hooks/useAboutPageContent";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiLinkedin, FiX } from "react-icons/fi";

const imageAnimations = [
  "anim-scale-in",
  "anim-slide-right",
  "anim-fade-up",
  "anim-slide-left",
];

export default function TeamShowcaseSection() {
  const { team } = useAboutPageContent();
  const [activeMember, setActiveMember] = useState(null);
  const [mounted, setMounted] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));

    return () => {
      cancelAnimationFrame(frame);
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const openMember = (member) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setActiveMember(member);
  };

  const closeMember = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => setActiveMember(null), 140);
  };

  return (
    <AnimatedSection className={sectionSpace}>
      <div className="grid">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.7fr)] xl:items-start">
          <div className="anim-slide-left lg:max-w-4xl">
            <p className="eyebrow inline-flex items-center gap-3 text-moss">
              <span className="h-px w-9 bg-coral anim-reveal-line" />
              {team.eyebrow}
            </p>

            <h2 className="sr-only">{team.headline}</h2>
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

            {team.members.map((member, index) => {
              return (
                <article
                  key={member.name}
                  className={`team-3d-person team-3d-person-${index + 1} cursor-pointer focus:z-[60] hover:z-[60]`}
                  tabIndex={0}
                  onMouseEnter={() => openMember(member)}
                  onMouseLeave={closeMember}
                  onFocus={() => openMember(member)}
                  onClick={() => openMember(member)}
                >
                  <div
                    className={`team-3d-frame ${imageAnimations[index] ?? "anim-fade-up"} anim-delay-${Math.min(
                      index + 1,
                      5,
                    )}`}
                  >
                    <div
                      aria-label={
                        member.imageAlt ||
                        `${member.name}, ${member.role} at ${member.company}`
                      }
                      role="img"
                      className="team-3d-photo"
                      style={{ backgroundImage: `url(${member.imageUrl})` }}
                    />
                    <div className="team-3d-shine" />
                    <div className="team-3d-caption">
                      <p>{member.role}</p>
                      <h3>{member.name}</h3>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grid gap-3">
            {team.members.map((member, index) => (
              <div
                key={member.name}
                className={`border-b ${divider} py-4 anim-fade-up last:border-b-0 anim-delay-${Math.min(
                  index + 1,
                  5,
                )}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-moss">
                      {member.role}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl leading-tight text-ink">
                      {member.name}
                    </h3>
                  </div>
                  {/* <span className="font-serif text-4xl leading-none text-moss/24 transition duration-300 group-hover:text-moss/45">
                    0{index + 1}
                  </span> */}
                </div>

                <p className="mt-3 max-w-md text-sm leading-7 text-ink/62">
                  {member.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {activeMember && (
              <motion.div
                className="pointer-events-none fixed inset-0 z-[999] grid place-items-center overflow-y-auto bg-[#020b18]/76 px-4 py-6 backdrop-blur-md"
                role="dialog"
                aria-modal="true"
                aria-label={`${activeMember.name} profile`}
                onClick={() => setActiveMember(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <motion.div
                  className="pointer-events-auto relative grid max-h-[calc(100dvh-3rem)] w-full max-w-5xl overflow-y-auto rounded-[1.35rem] border border-sky-200/28 bg-[linear-gradient(135deg,#061a2f_0%,#071b33_48%,#0d55b0_100%)] text-white shadow-[0_34px_120px_rgba(2,12,32,0.54)] md:grid-cols-[0.88fr_1.12fr]"
                  onClick={(event) => event.stopPropagation()}
                  onMouseEnter={() => {
                    if (closeTimer.current) {
                      clearTimeout(closeTimer.current);
                    }
                  }}
                  onMouseLeave={closeMember}
                  initial={{ opacity: 0, y: 34, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.96 }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(43,188,255,0.2),transparent_22rem),radial-gradient(circle_at_86%_82%,rgba(13,94,232,0.28),transparent_20rem)]" />

                  <motion.div
                    className="relative min-h-[18rem] overflow-hidden md:min-h-[31rem]"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${activeMember.imageUrl})` }}
                      role="img"
                      aria-label={
                        activeMember.imageAlt ||
                        `${activeMember.name}, ${activeMember.role}`
                      }
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,47,0.02)_0%,rgba(6,26,47,0.34)_58%,rgba(6,26,47,0.78)_100%)]" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-[1rem] border border-white/18 p-4 backdrop-blur-md">
                      <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-sky-100">
                        {activeMember.company} {team.modalCompanyLabelSuffix}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">
                        {activeMember.name}
                      </h3>
                    </div>
                  </motion.div>

                  <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                    <motion.p
                      className="inline-flex rounded-full border border-sky-200/28  px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-sky-100"
                      initial={{ opacity: 0, x: 22 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12, duration: 0.38 }}
                    >
                      {activeMember.role}
                    </motion.p>
                    <motion.h3
                      className="mt-5 font-serif text-4xl font-extrabold leading-none text-white sm:text-5xl"
                      initial={{ opacity: 0, x: 26 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.18, duration: 0.4 }}
                    >
                      {activeMember.name}
                    </motion.h3>
                    <motion.p
                      className="mt-5 max-w-xl text-base leading-8 text-white/78"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.24, duration: 0.4 }}
                    >
                      {activeMember.bio}
                    </motion.p>

                    <motion.div
                      className="mt-7 grid gap-4 sm:grid-cols-2"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.42 }}
                    >
                      <div className=" p-5 backdrop-blur">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-sky-100/80">
                          {team.focusLabel}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/76">
                          {activeMember.focus}
                        </p>
                      </div>
                      <div className=" p-5 backdrop-blur">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-sky-100/80">
                          {team.companyLabel}
                        </p>
                        <p className="mt-3 text-sm font-extrabold text-white">
                          {activeMember.company}
                        </p>
                      </div>
                    </motion.div>

                    <motion.a
                      href={
                        activeMember.linkedinUrl?.startsWith("http")
                          ? activeMember.linkedinUrl
                          : `https://${activeMember.linkedinUrl}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex max-w-full items-center gap-2 break-all rounded-full border border-sky-200/24 bg-[#0d5ee8] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#176fff]"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.36, duration: 0.42 }}
                    >
                      <FiLinkedin className="shrink-0" />
                      {activeMember.linkedinUrl}
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </AnimatedSection>
  );
}
