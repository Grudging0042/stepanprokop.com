/**
 * JSON-LD Structured Data Components
 * These components add structured data to pages for better SEO
 */

interface PersonSchema {
  name: string;
  url: string;
  jobTitle: string;
  description?: string;
  image?: string;
  sameAs?: string[]; // Social media profiles
  email?: string;
  address?: {
    addressLocality: string;
    addressCountry: string;
  };
}

interface PersonJsonLdProps {
  person: PersonSchema;
}

/**
 * Person JSON-LD structured data component
 * Use this on homepage or about page
 */
export function PersonJsonLd({ person }: PersonJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: person.url,
    jobTitle: person.jobTitle,
    ...(person.description && { description: person.description }),
    ...(person.image && { image: person.image }),
    ...(person.sameAs && { sameAs: person.sameAs }),
    ...(person.email && { email: person.email }),
    ...(person.address && {
      address: {
        "@type": "PostalAddress",
        addressLocality: person.address.addressLocality,
        addressCountry: person.address.addressCountry,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface WebsiteSchema {
  name: string;
  url: string;
  description: string;
  author: {
    name: string;
    url: string;
  };
}

interface WebsiteJsonLdProps {
  website: WebsiteSchema;
}

/**
 * Website JSON-LD structured data component
 * Use this on homepage
 */
export function WebsiteJsonLd({ website }: WebsiteJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: website.name,
    url: website.url,
    description: website.description,
    author: {
      "@type": "Person",
      name: website.author.name,
      url: website.author.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

