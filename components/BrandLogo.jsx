export default function BrandLogo({ dark = false, className = "" }) {
  return (
    <span className={`group flex min-w-max items-center gap-3 ${className}`}>
      <LogoMark dark={dark} />
      <Wordmark dark={dark} />
    </span>
  );
}

function LogoMark({ dark = false }) {
  return (
    <span
      className={`relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full anim-pop anim-delay-1 ${
        dark
          ? "bg-white text-ink"
          : "bg-[linear-gradient(135deg,#071b33_0%,#1d5edb_58%,#2bbcff_100%)] text-white"
      }`}
      aria-hidden="true"
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.72),transparent_28%),radial-gradient(circle_at_78%_78%,rgba(43,188,255,0.38),transparent_34%)]" />
      <span
        className={`absolute left-[9px] top-[8px] h-6 w-6 rounded-full border-[3px] ${
          dark
            ? "border-moss border-r-transparent"
            : "border-white border-r-white/20"
        }`}
      />
      <span
        className={`absolute left-[18px] top-[10px] h-2 w-2 rounded-full ${
          dark ? "bg-coral" : "bg-white"
        }`}
      />
      <span
        className={`absolute bottom-[10px] right-[9px] h-2.5 w-2.5 rounded-full ${
          dark ? "bg-moss" : "bg-coral"
        }`}
      />
      <span
        className={`absolute bottom-[12px] left-[13px] h-px w-[18px] rotate-[-24deg] ${
          dark ? "bg-moss/45" : "bg-white/55"
        }`}
      />
    </span>
  );
}

function Wordmark({ dark = false }) {
  return (
    <span className="relative inline-flex items-baseline leading-none">
      <span
        className={`font-serif text-[1.62rem] font-medium italic leading-none tracking-[0.035em] sm:text-[1.95rem] ${
          dark
            ? "bg-[linear-gradient(135deg,#ffffff_0%,#dff7ff_34%,#2bbcff_100%)]"
            : "bg-[linear-gradient(135deg,#0f6fb8_0%,#2bbcff_46%,#1d5edb_100%)]"
        } bg-clip-text text-transparent transition duration-300 group-hover:brightness-110`}
      >
        Coozter
      </span>
      <span
        className={`absolute -bottom-1 left-[0.18rem] h-px w-[78%] origin-left scale-x-75 rounded-full transition-transform duration-300 group-hover:scale-x-100 ${
          dark
            ? "bg-[linear-gradient(90deg,#ffffff,#2bbcff,transparent)]"
            : "bg-[linear-gradient(90deg,#1d5edb,#2bbcff,transparent)]"
        }`}
      />
    </span>
  );
}
