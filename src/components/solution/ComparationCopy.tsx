export default function ComparisonCopy({
  label,
  title,
  text,
  emphasized = false,
}: {
  label: string;
  title: string;
  text: string;
  emphasized?: boolean;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-1 font-inter text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#2c5128]/65">
        {label}
      </p>
      <h3
        className={`break-words font-bebas text-lg uppercase leading-tight sm:text-xl ${
          emphasized ? "text-[#2c5128]" : "text-[#284b26]"
        }`}
      >
        {title}
      </h3>
      <p className="mt-1 break-words font-inter text-sm leading-relaxed text-[#171915]">
        {text}
      </p>
    </div>
  );
}
