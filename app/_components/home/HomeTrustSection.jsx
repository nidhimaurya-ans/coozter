import AnimatedSection from "@/components/AnimatedSection";
import MarqueeLogos from "@/components/MarqueeLogos";

const stats = ["32 partner launches", "+148% qualified leads", "4.8x campaign ROI"];

export default function HomeTrustSection() {
  return (
    <AnimatedSection className="py-5">
      <div className="container-pad">
        <div className="grid gap-8  border-moss/12 py-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.6fr)] lg:items-end">
          <p className="max-w-4xl font-serif text-[2.05rem] leading-[1.08] text-ink md:text-[3.25rem] anim-left-to-right">
            Strategy, campaigns, and reporting built for teams that want marketing to make sense again
          </p>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 anim-slide-left">
            {stats.map((item, index) => (
              <div
                key={item}
                className={`flex items-center justify-between gap-4 pt-3 text-sm anim-fade-up anim-delay-${index + 1}`}
              >
                <span className="font-semibold text-ink">{item.split(" ")[0]}</span>
                <span className="text-right text-ink/58">
                  {item.replace(item.split(" ")[0], "").trim()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MarqueeLogos />
    </AnimatedSection>
  );
}
