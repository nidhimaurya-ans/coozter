import AnimatedSection from "@/components/AnimatedSection";
import { reportRows } from "../_data/digitalMarketingContent";

export default function ReportingPreviewSection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 border-y border-slate-300/80 py-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
          Reporting preview
        </h2>
        <div>
          {reportRows.map((row) => (
            <div
              key={row}
              className="flex justify-between gap-5 border-b border-slate-300/80 py-4 text-sm last:border-b-0"
            >
              <span className="font-semibold text-ink">{row}</span>
              <span className="text-right text-ink/56">Reviewed monthly</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
