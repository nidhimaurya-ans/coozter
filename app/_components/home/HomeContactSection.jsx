import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { FiCheckCircle, FiMail, FiMessageSquare } from "react-icons/fi";

const contactSteps = [
  "Share your growth goal and current channels.",
  "We review the brief and identify the first useful questions.",
  "You get a practical next step instead of a generic pitch.",
];

export default function HomeContactSection() {
  return (
    <AnimatedSection className="container-pad py-5">
      <div className="grid gap-8 overflow-hidden py-5 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
        <div className="relative min-h-[28rem] overflow-hidden rounded-[1.25rem] bg-[linear-gradient(135deg,#061a2f_0%,#071b33_48%,#0d55b0_100%)] p-6 text-white shadow-soft anim-left-to-right md:p-8">
          <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-64 w-64 rounded-full border border-sky-300/20 anim-rotate-slow" />
          <div className="pointer-events-none absolute bottom-[-4rem] left-[-4rem] h-48 w-48 rounded-full bg-blue-500/18 blur-sm" />

          <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-sky-100">
            Start the conversation
          </p>
          <h2 className="mt-5 max-w-[10ch] font-serif text-[2.8rem] font-medium leading-[0.96] sm:text-6xl">
            Get in touch.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/70">
            Tell us what you are trying to grow. We will help turn scattered
            marketing activity into a clearer operating plan.
          </p>

          <div className="mt-10 grid gap-4">
            {contactSteps.map((step, index) => (
              <div
                key={step}
                className={`flex gap-4 pt-4 anim-fade-down anim-delay-${index + 1}`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-500/20 text-sky-100">
                  <FiCheckCircle />
                </span>
                <p className="text-sm leading-6 text-white/72">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <span className="inline-flex items-center gap-2">
              <FiMail className="text-sky-100" />
              hello@coozter.com
            </span>
            <span className="inline-flex items-center gap-2">
              <FiMessageSquare className="text-sky-100" />
              Reply with next steps
            </span>
          </div>
        </div>

        <div className="anim-slide-left">
          <ContactForm />
        </div>
      </div>
    </AnimatedSection>
  );
}
