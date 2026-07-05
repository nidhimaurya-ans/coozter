import AnimatedSection from "@/components/AnimatedSection";

const process = [
  ["Diagnose", "Demand, offer clarity, channel data, and trust signals are mapped before any campaign work starts."],
  ["Position", "Audience, proof, message, and conversion paths are sharpened so every channel knows what to say."],
  ["Build", "Landing pages, partner kits, content briefs, ad tests, and tracking are created around one growth logic."],
  ["Launch", "Focused tests go live with enough structure to learn from traffic, leads, and sales conversations."],
  ["Optimize", "Channel mix, creative, pages, and reporting improve from quality signals instead of guesswork."],
  ["Report", "You get a clear read on what changed, why it matters, and what should happen next."],
];

export default function HomeProcessSection() {
  return (
    <div className="container-pad section-space">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:items-center xl:gap-48">
        <div
          className="relative min-h-[460px] overflow-hidden bg-cover bg-center shadow-soft anim-image-zoom lg:min-h-[640px] rounded-sm  anim-left-to-right"
          role="img"
          aria-label="Team planning marketing campaigns in a workspace"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=82')",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.08)_0%,rgba(7,27,51,0.18)_40%,rgba(7,27,51,0.88)_100%)]" />
          <div className="relative flex min-h-[460px] flex-col justify-between p-6 text-white lg:min-h-[640px] lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-100">
             
            </p>
            <p className="max-w-[28rem] font-serif text-[2.1rem] leading-[1.02] sm:text-5xl">
              Partners, search, content, and paid traffic planned as one
              measurable path.
            </p>
          </div>
        </div>

        <div>
          <h2 className=" font-serif text-[2.18rem] font-medium leading-[0.98] text-ink sm:text-5xl">
            From scattered activity to clear momentum.
          </h2>
          <div className="mt-9  ">
            {process.map(([title, text], index) => (
              <div
                key={title}
                className={`grid gap-4 border-b border-moss/14 py-3  sm:grid-cols-[1.5rem_0.45fr_1fr] anim-fade-down anim-delay-${Math.min(index + 1, 5)}`}
              >
                <span className="font-serif text-3xl " />
                <h3 className="font-serif text-2xl font-medium text-ink">
                  {title}
                </h3>
                <p className="text-md leading-7 font-[8px] text-ink/64">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
