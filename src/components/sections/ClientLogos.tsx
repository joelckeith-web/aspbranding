// Home service businesses only. Removed 2026-09-21 per Joel: Premier Creative
// Group, Continuum Outpatient Center, LGR (the file is named crest-gold.png but
// the mark is the LGR Law Firm crest), Awkward Recovery, and MichiganLawsuit
// (ml-monogram.jpg). Heights are tuned per aspect ratio so each mark carries
// similar visual weight in the marquee.
const CLIENTS = [
  { name: "Titan Inspection Services", file: "titan-inspection.jpg", height: "127px" },
  { name: "Viking Heating & Air Conditioning", file: "viking-hvac.jpg", height: "127px" },
  { name: "Good Faith Inspections", file: "good-faith-inspections.png", height: "92px" },
  { name: "Mr. Wright Flooring", file: "mrwright-flooring.png", height: "92px" },
  { name: "Outdoor Renovations", file: "outdoor-renovations.jpg", height: "88px" },
  { name: "Airstrike HVAC", file: "airstrike-hvac.jpg", height: "88px" },
  { name: "1874 Design Studio", file: "1874-design-studio.svg", height: "88px" },
  { name: "Extraordinary Flooring", file: "extraordinary-flooring-logo.svg", height: "79px" },
  { name: "Mr. Rooter", file: "mrr-color-logo.svg", height: "79px" },
  { name: "Window World", file: "brand-logo.svg", height: "79px" },
  { name: "Alpha Solutions", file: "alpha-solutions.webp", height: "72px" },
  { name: "QC Mechanical", file: "qc-mechanical.png", height: "58px" },
];

export function ClientLogos() {
  const allClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-8 md:py-10 bg-white relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-bold mb-8 px-4">
          Trusted by Growing Businesses
        </p>
        <div className="overflow-hidden">
          <div className="logo-marquee flex items-center gap-20">
            {allClients.map((client, i) => (
              <img
                key={`${client.name}-${i}`}
                src={`/images/clients/${client.file}`}
                alt={client.name}
                style={{ height: client.height, width: "auto" }}
                className="object-contain flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
