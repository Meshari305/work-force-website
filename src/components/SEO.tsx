import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  locale: string;
  path: string;
  imageUrl?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = 'Saudi staffing company, temporary staffing Saudi Arabia, fast recruitment GCC, hire in Saudi Arabia, Work Force',
  locale,
  path,
  imageUrl = '/og-image.jpg',
  type = 'website'
}: SEOProps): Metadata {
  const baseUrl = 'https://workforce.sa';
  const fullUrl = `${baseUrl}/${locale}${path}`;

  return {
    title: `${title} | Work Force - Fast Staffing in Saudi Arabia`,
    description,
    keywords,
    authors: [{ name: 'Work Force' }],
    creator: 'Work Force',
    publisher: 'Work Force',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-SA': `/en${path}`,
        'ar-SA': `/ar${path}`,
        'x-default': `/en${path}`,
      },
    },
    openGraph: {
      title: `${title} | Work Force`,
      description,
      url: fullUrl,
      siteName: 'Work Force',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Work Force`,
        },
      ],
      locale: locale === 'ar' ? 'ar_SA' : 'en_SA',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Work Force`,
      description,
      images: [imageUrl],
      creator: '@workforce_sa',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-site-verification',
      yandex: 'your-yandex-verification',
      yahoo: 'your-yahoo-verification',
    },
  };
}

interface StructuredDataProps {
  type: 'Organization' | 'WebPage' | 'Service' | 'JobPosting';
  data: Record<string, unknown>;
  locale: string;
}

export function generateStructuredData({ type, data, locale }: StructuredDataProps) {
  const baseUrl = 'https://workforce.sa';
  
  const baseOrganization = {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Work Force",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`,
      "width": 400,
      "height": 400
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-11-123-4567",
      "contactType": "customer service",
      "email": "info@workforce.sa",
      "availableLanguage": ["en", "ar"]
    },
    "sameAs": [
      "https://linkedin.com/company/workforce-sa",
      "https://twitter.com/workforce_sa"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Human Resources Services",
    "description": locale === 'ar' 
      ? "Work Force شركة سعودية للتوريد والتوظيف تساعد الجهات في بناء فرق العمل بسرعة مع امتثال كامل واستقطاب عالمي"
      : "Work Force is a Saudi staffing & recruitment company helping organizations ramp teams fast — with full compliance and global sourcing"
  };

  switch (type) {
    case 'Organization':
      return {
        "@context": "https://schema.org",
        ...baseOrganization,
        ...data
      };

    case 'WebPage':
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": data.url,
        "name": data.title,
        "description": data.description,
        "inLanguage": locale,
        "isPartOf": {
          "@type": "WebSite",
          "url": baseUrl,
          "name": "Work Force"
        },
        "about": baseOrganization,
        "publisher": baseOrganization
      };

    case 'Service':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.name,
        "description": data.description,
        "provider": baseOrganization,
        "areaServed": {
          "@type": "Country",
          "name": "Saudi Arabia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Staffing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Temporary Staffing"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Permanent Recruitment"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Government Relations"
              }
            }
          ]
        }
      };

    case 'JobPosting':
      return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": data.title,
        "description": data.description,
        "hiringOrganization": baseOrganization,
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA"
          }
        },
        "datePosted": data.datePosted || new Date().toISOString(),
        "employmentType": data.employmentType || "FULL_TIME",
        "industry": data.industry
      };

    default:
      return baseOrganization;
  }
}

export function StructuredDataScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}