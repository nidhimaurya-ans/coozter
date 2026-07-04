import ContactForm from "@/components/ContactForm";

export default function AffiliateContactSection() {
  return (
    <section className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 border-t border-slate-300/80 pt-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-moss">Lead form</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
            Tell us where partner growth is stuck.
          </h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
