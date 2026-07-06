export default function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto text-center" : ""} max-w-4xl ${className}`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${isCenter ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-serif text-[2.1rem] font-medium leading-[1.04] text-ink sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-ink/66 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
