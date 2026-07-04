import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const metadata = { title: "Contact | Coozter" };

const contactDetails = [
  [FiMail, "Email", "hello@coozter.com"],
  [FiPhone, "Phone", "+91 98765 43210"],
  [FiMapPin, "Location", "Gurugram, Haryana"],
];

const responseSteps = [
  "We review your message and understand the business context.",
  "We reply with the right questions or a first call recommendation.",
  "If there is a fit, we map the first clear growth steps.",
];

export default function ContactPage() {
  return (
    <>
      <section className="container-pad pt-32 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center anim-fade-up">
          <p className="text-xl font-medium uppercase anim-enter-left">
            {" "}
            interested in availing in coozter?
          </p>
          <h1 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink sm:text-6xl md:text-7xl anim-left-to-right anim-delay-1">
            Contact Us
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-ink/64 sm:text-lg">
            Share a few details about your brand, channels, and goals. We will
            reply with a practical next step, not a generic sales pitch.
          </p>
        </div>
      </section>

      <section className="container-pad py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-4xl">
          {/* <div className="lg:sticky lg:top-28">
            <h2 className="font-serif text-4xl font-medium leading-tight text-ink md:text-5xl">
              Contact details
            </h2>
            <p className="mt-4 max-w-md text-base leading-8 text-ink/62">
              We work from Gurugram and collaborate with clients remotely across
              strategy, performance marketing, SEO, and affiliate branding.
            </p>

            <div className="mt-8 divide-y divide-slate-300/80 border-y border-slate-300/80">
              {contactDetails.map(([Icon, label, value], index) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 py-5 anim-fade-up anim-delay-${index + 1}`}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-moss/8 text-moss">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                      {label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-ink">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <ContactForm />
        </div>
      </section>

      {/* <AnimatedSection className="container-pad py-12 sm:py-14 lg:py-16">
        <div className="border-y border-slate-300/80 py-10">
          <h2 className="font-serif text-4xl font-medium text-ink md:text-5xl">
            What happens after you submit?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {responseSteps.map((item, index) => (
              <p
                key={item}
                className={`text-base leading-8 text-ink/64 anim-fade-up anim-delay-${index + 1}`}
              >
                <span className="mb-3 block font-serif text-4xl text-moss">
                  0{index + 1}
                </span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </AnimatedSection> */}

      {/* <AnimatedSection className="container-pad py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink md:text-5xl">
              Questions before we talk.
            </h2>
          </div>
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
      </AnimatedSection> */}

      <section className="container-pad pb-24">
        <div className="mb-6">
          <p className="eyebrow">Find us</p>
        </div>
        <div className="overflow-hidden rounded-[1rem] border border-slate-300/80 bg-white shadow-[0_18px_56px_rgba(14,62,128,0.08)]">
          <iframe
            title="Coozter Gurugram location map"
            src="https://www.google.com/maps?q=Gurugram,Haryana,India&output=embed"
            className="h-[360px] w-full border-0 md:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
