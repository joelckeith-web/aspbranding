// Shared JSON-LD helpers for non-blog pages.
// Keeps schema markup out of render logic so components stay focused on UI.

interface FaqItemShape {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

export function FaqPageSchema({ items }: { items: FaqItemShape[] }) {
  if (!items || items.length === 0) return null;

  const mainEntity = items
    .map((item) => {
      const name = item.question ?? item.q;
      const text = item.answer ?? item.a;
      if (!name || !text) return null;
      return {
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      };
    })
    .filter(Boolean);

  if (mainEntity.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity,
        }),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  if (!items || items.length === 0) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  price,
  priceCurrency = "USD",
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  price?: string;
  priceCurrency?: string;
}) {
  const offers = price
    ? {
        "@type": "Offer",
        price,
        priceCurrency,
        availability: "https://schema.org/InStock",
        url,
      }
    : undefined;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name,
          description,
          url,
          serviceType: serviceType ?? "Marketing",
          provider: { "@id": "https://www.aspbranding.com/#organization" },
          areaServed: { "@type": "Country", name: "United States" },
          ...(offers && { offers }),
        }),
      }}
    />
  );
}
