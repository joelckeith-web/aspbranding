// Home service businesses only. Removed 2026-09-21 per Joel: Premier Creative
// Group, Continuum Outpatient Center, LGR (the file is named crest-gold.png but
// the mark is the LGR Law Firm crest), Awkward Recovery, and MichiganLawsuit
// (ml-monogram.jpg).
//
// No per-logo heights any more. Every mark sits in an identical fixed box and
// scales with object-contain, so a 3.74:1 wordmark and a 1:1 badge carry the
// same visual weight. That uniform item width is also what makes the marquee
// loop exactly — see the note on the track below.
const CLIENTS = [
  { name: "Titan Inspection Services", file: "titan-inspection.jpg" },
  { name: "Viking Heating & Air Conditioning", file: "viking-hvac.jpg" },
  { name: "Good Faith Inspections", file: "good-faith-inspections.png" },
  { name: "Mr. Wright Flooring", file: "mrwright-flooring.png" },
  { name: "Outdoor Renovations", file: "outdoor-renovations.jpg" },
  { name: "Airstrike HVAC", file: "airstrike-hvac.jpg" },
  { name: "1874 Design Studio", file: "1874-design-studio.svg" },
  { name: "Extraordinary Flooring", file: "extraordinary-flooring-logo.svg" },
  { name: "Mr. Rooter", file: "mrr-color-logo.svg" },
  { name: "Window World", file: "brand-logo.svg" },
  { name: "Alpha Solutions", file: "alpha-solutions.webp" },
  { name: "QC Mechanical", file: "qc-mechanical.png" },
];

export function ClientLogos() {
  return (
    <section className="py-8 md:py-10 bg-white relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-bold mb-8 px-4">
          Trusted by Growing Businesses
        </p>

        <div className="overflow-hidden">
          {/*
            Seamless loop: the track holds the list exactly twice and animates to
            translateX(-50%), which lands the second copy precisely where the
            first began. Spacing lives inside each item (pr-*) rather than as a
            flex gap, because a gap sits *between* items — N copies give N-1 gaps,
            so the wrap point drifts by one gap width. That drift is what made the
            old 3-copy / -33.333% version snap back before it finished.
          */}
          <div className="logo-marquee flex w-max">
            {[...CLIENTS, ...CLIENTS].map((client, i) => {
              const isClone = i >= CLIENTS.length;
              return (
                <div
                  key={`${client.name}-${i}`}
                  className="flex h-10 w-36 shrink-0 items-center justify-center pr-12 md:h-12 md:w-44 md:pr-16"
                  aria-hidden={isClone ? "true" : undefined}
                >
                  <img
                    src={`/images/clients/${client.file}`}
                    alt={isClone ? "" : client.name}
                    className="max-h-full max-w-full object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
