import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PROOFS = [
  {
    title: "You own everything.",
    body: "Domain, hosting, content, data, creative assets, automations. Signed over at onboarding. In writing. No handover fees, ever.",
  },
  {
    title: "Housecall Pro native.",
    body: "Official Affiliate Partner. We know the HCP AI stack cold and we train your team on it.",
  },
  {
    title: "Real AI, not AI slop.",
    body: "We're not shipping half-baked AI experiments. Every integration we build is a proven system that's increased revenue and internal efficiency for real home service operators. If it doesn't move a number, we don't ship it.",
  },
  {
    title: "Operator-led.",
    body: "Founded and led by a marketing operator who runs the same systems on his own businesses. Every play we run is one we've run on our own P&L first.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 2xl:py-32 bg-asp-black text-white overflow-hidden">
      {/* Team photo backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "url(/images/backgrounds/team-at-work.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 0% 100%, rgba(76, 201, 240, 0.22), transparent 70%), radial-gradient(ellipse 50% 40% at 100% 0%, rgba(76, 201, 240, 0.14), transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 2xl:mb-16 max-w-3xl mx-auto">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              The difference
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5 leading-tight">
              Premium work, without the traps most agencies set.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              Most home service marketing agencies rent you traffic, rent you tools, and either keep your data when you leave — or charge you a steep fee to hand it over. We work the other way around. You own your website, your ad accounts, your CRM data, your content, your automations. Everything we build goes in your name from day one, at no exit cost.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROOFS.map((p, i) => (
              <div
                key={p.title}
                className="rounded-[var(--radius-asp-2xl)] bg-asp-black border-2 border-asp-blue-light/30 hover:border-asp-blue-light/70 transition-colors p-7 lg:p-9"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 font-black text-3xl text-asp-blue-light leading-none">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-black text-xl 2xl:text-2xl mb-2 text-white">{p.title}</h3>
                    <p className="text-white/70 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
