// Home service businesses only. Removed 2026-09-21 per Joel: Premier Creative
// Group, Continuum Outpatient Center, LGR (the file is named crest-gold.png but
// the mark is the LGR Law Firm crest), Awkward Recovery, and MichiganLawsuit
// (ml-monogram.jpg).
//
// `ratio` is each mark's true width/height AFTER the source files were trimmed
// of their built-in padding. The files arrived with wildly different dead space
// — Viking filled 35% of its canvas, Outdoor Renovations 45%, Alpha 91% — which
// is why a single box size made some read tiny and others huge.
//
// Sizing is by equal AREA, not equal height or equal box: h = sqrt(AREA / ratio).
// A 3.75:1 wordmark and a 1:1 badge then occupy the same amount of ink, which is
// what the eye actually reads as "the same size".
const LOGO_AREA = 5200; // px², tuned so the tallest mark lands near 72px

const CLIENTS = [
  { name: "Titan Inspection Services", file: "titan-inspection.jpg", ratio: 1.49 },
  { name: "Viking Heating & Air Conditioning", file: "viking-hvac.jpg", ratio: 2.46 },
  { name: "Good Faith Inspections", file: "good-faith-inspections.png", ratio: 1.03 },
  { name: "Mr. Wright Flooring", file: "mrwright-flooring.png", ratio: 1.15 },
  { name: "Outdoor Renovations", file: "outdoor-renovations.jpg", ratio: 1.04 },
  { name: "Airstrike HVAC", file: "airstrike-hvac.jpg", ratio: 1.87 },
  { name: "1874 Design Studio", file: "1874-design-studio.svg", ratio: 1.0 },
  { name: "Extraordinary Flooring", file: "extraordinary-flooring-logo.svg", ratio: 1.21 },
  { name: "Mr. Rooter", file: "mrr-color-logo.svg", ratio: 1.71 },
  { name: "Window World", file: "brand-logo.svg", ratio: 2.87 },
  { name: "Alpha Solutions", file: "alpha-solutions.webp", ratio: 2.87 },
  { name: "QC Mechanical", file: "qc-mechanical.png", ratio: 3.75 },
];

/** Equal-area sizing: every mark gets the same visual weight. */
function sizeFor(ratio: number) {
  const height = Math.sqrt(LOGO_AREA / ratio);
  return { height: `${Math.round(height)}px`, width: `${Math.round(height * ratio)}px` };
}

export function ClientLogos() {
  return (
    <section className="py-8 md:py-10 bg-white relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-center text-xs uppercase tracking-widest text-asp-black/55 font-bold mb-8 px-4">
          Trusted by Growing Businesses
        </p>

        <div className="overflow-hidden">
          {/*
            Seamless loop: the track holds the list exactly twice and animates to
            translateX(-50%), landing the second copy where the first began.
            Spacing lives inside each item (pr-*) rather than as a flex gap — a
            gap sits *between* items, so N copies give N-1 gaps and the wrap
            point drifts by one gap width. That drift is what made the old
            3-copy / -33.333% version snap back before it finished.
          */}
          <div className="logo-marquee flex w-max items-center">
            {[...CLIENTS, ...CLIENTS].map((client, i) => {
              const isClone = i >= CLIENTS.length;
              const { height, width } = sizeFor(client.ratio);
              return (
                <div
                  key={`${client.name}-${i}`}
                  className="flex shrink-0 items-center justify-center pr-14 md:pr-20"
                  style={{ height: "80px" }}
                  aria-hidden={isClone ? "true" : undefined}
                >
                  <img
                    src={`/images/clients/${client.file}`}
                    alt={isClone ? "" : client.name}
                    style={{ height, width }}
                    className="object-contain"
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
