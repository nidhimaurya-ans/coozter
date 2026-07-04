import { FiCheckCircle } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { sectionSpace } from "../_data/servicesContent";

export default function GrowthOperatingSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <div className="grid gap-10 rounded-[2rem] border border-slate-300/80 bg-white p-6 shadow-[0_24px_80px_rgba(14,62,128,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10 xl:gap-16">
        <div>
          <p className="eyebrow">Growth operating layer</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">
            One system for campaigns, content, partners, and reporting.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/64">
            Coozter helps teams move beyond disconnected channel activity by
            creating a shared operating model for planning, execution,
            attribution, and optimization.
          </p>
          <ul className="mt-7 grid gap-3">
            {[
              "Clear service ownership across every active channel",
              "Partner and campaign assets connected to conversion points",
              "Reporting that shows progress and the next decision",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-7 text-ink/68"
              >
                <FiCheckCircle className="mt-1 shrink-0 text-moss" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <FeatureDashboard />
      </div>
    </AnimatedSection>
  );
}

function FeatureDashboard() {
  return (
    <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#f8fcff,#e9f6ff)] p-4 ring-1 ring-slate-300/80">
      <div className="rounded-[1.35rem] bg-white p-5 shadow-[0_18px_56px_rgba(14,62,128,0.07)]">
        <div className="flex items-center justify-between border-b border-slate-300/80 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-moss">
              System preview
            </p>
            <p className="mt-1 font-serif text-3xl text-ink">Growth command</p>
          </div>
          <span className="rounded-full bg-moss/8 px-3 py-1 text-xs font-semibold text-moss">
            Healthy
          </span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            ["Campaign performance", "4.8x ROI", "bg-blue-50"],
            ["Reporting cadence", "9 KPIs", "bg-sky-50"],
            ["Automation queue", "18 tasks", "bg-white"],
            ["Partner motion", "32 live", "bg-blue-50"],
          ].map(([title, value, bg], index) => (
            <div
              key={title}
              className={`${bg} rounded-[1.1rem] border border-slate-300/80 p-4 transition hover:-translate-y-1`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/45">
                {title}
              </p>
              <p className="mt-4 font-serif text-4xl text-ink">{value}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                <span
                  className="block h-full rounded-full bg-[linear-gradient(90deg,#1d5edb,#2bbcff)]"
                  style={{ width: `${68 + index * 7}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
