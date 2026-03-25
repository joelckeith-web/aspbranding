const CLIENTS = [
  { name: "Outdoor Renovations", file: "outdoor-renovations.jpg", height: "88px" },
  { name: "Titan Inspection Services", file: "titan-inspection.jpg", height: "127px" },
  { name: "Viking Heating & Air Conditioning", file: "viking-hvac.jpg", height: "127px" },
  { name: "Airstrike HVAC", file: "airstrike-hvac.jpg", height: "88px" },
  { name: "Crest Gold", file: "crest-gold.png", height: "79px" },
  { name: "Awkward Recovery", file: "awkward-recovery.jpg", height: "105px" },
  { name: "Atomic Souls", file: "atomic-souls-text.png", height: "79px" },
  { name: "ML Monogram", file: "ml-monogram.jpg", height: "88px" },
  { name: "Window World", file: "brand-logo.svg", height: "79px" },
  { name: "Mr. Rooter", file: "mrr-color-logo.svg", height: "79px" },
  { name: "PCG", file: "pcg-logo-color.svg", height: "57px" },
  { name: "Client", file: "logo-square-color.webp", height: "79px" },
  { name: "Extraordinary Flooring", file: "extraordinary-flooring-logo.svg", height: "79px" },
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
