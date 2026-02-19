import { Helmet } from "react-helmet-async";

const SITE_URL = "https://axiscolleges.org";
const SITE_NAME = "ICCIST 2026 - Axis Colleges";
const DEFAULT_TITLE = "ICCIST 2026 - International Conference on Computational Intelligence and Smart Technologies";
const DEFAULT_DESCRIPTION = "Join ICCIST 2026 by Axis Colleges for research, paper presentations, and discussions in AI, ML, data science, IT, and smart technologies.";
const DEFAULT_IMAGE = "/assets/brand/axis-logo.webp";
const DEFAULT_KEYWORDS = [
  "ICCIST 2026",
  "Axis Colleges",
  "International conference",
  "Computational intelligence",
  "Smart technologies",
  "AI conference India",
  "Machine learning conference",
  "Research paper submission",
  "Computer science conference",
  "Information technology conference"
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "Axis Colleges",
  alternateName: "Axis Institute of Technology and Management",
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_IMAGE}`,
  sameAs: [
    "https://facebook.com/axiscolleges",
    "https://instagram.com/axiscolleges",
    "https://twitter.com/axiscolleges",
    "https://www.linkedin.com/school/axis-colleges/posts/?feedView=all"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: "Axis Colleges"
  }
};

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  keywords = DEFAULT_KEYWORDS,
  type = "website",
  structuredData = [],
  faqs = []
}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const pageImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const schemas = [organizationSchema, websiteSchema, ...structuredData];

  if (faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    });
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <html lang="en-IN" />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(", ") : keywords} />
      <meta name="author" content="Axis Colleges" />
      <meta name="publisher" content="Axis Colleges" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Kanpur" />
      <meta name="geo.position" content="26.4499;80.3319" />
      <meta name="ICBM" content="26.4499, 80.3319" />
      <meta name="language" content="English" />
      <meta name="coverage" content="India" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="students, researchers, academicians, professionals" />

      {schemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
