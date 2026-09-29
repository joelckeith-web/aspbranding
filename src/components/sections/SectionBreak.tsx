import Image from "next/image";

interface SectionBreakProps {
  /** Background of the band the break sits on. Defaults to white. */
  variant?: "light" | "surface" | "dark";
}

/**
 * Logo section break: the ASP mark centred with a rule running out either side.
 * Used to separate major bands on the service pages.
 */
export function SectionBreak({ variant = "light" }: SectionBreakProps) {
  const bg =
    variant === "dark"
      ? "bg-asp-black"
      : variant === "surface"
        ? "bg-asp-surface-light"
        : "bg-white";
  const rule = variant === "dark" ? "bg-white/20" : "bg-asp-blue/20";

  return (
    <div className={`${bg} py-8 md:py-10`}>
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 lg:px-8">
        <span className={`h-px flex-1 ${rule}`} aria-hidden="true" />
        <Image
          src={variant === "dark" ? "/images/logos/asp-white.png" : "/images/logos/asp-black.png"}
          alt=""
          width={776}
          height={400}
          className="h-12 w-auto shrink-0 md:h-14"
          aria-hidden="true"
        />
        <span className={`h-px flex-1 ${rule}`} aria-hidden="true" />
      </div>
    </div>
  );
}
