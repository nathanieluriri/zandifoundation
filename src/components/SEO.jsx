import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteDetails = {
    name: 'Zainab and Ismail Diabetes and Child Care Initiative',
    alternateName: 'ZandI Foundation',
    // Updated default description per task
    description: 'The Zainab and Ismail Diabetes and Child Care Initiative provides free diabetes screenings, orphan support, and scholarships in Abuja. Join our mission today.',
    url: 'https://zandifoundation.org',
    image: 'https://images.unsplash.com/photo-1680778468132-603f082fa4f5', // Hero image as default OG image
    logo: 'https://horizons-cdn.hostinger.com/0c5bbcf8-d3c8-4ae2-a678-6693f78cd4dd/deec0fb5dd1ff029cefe2133b063ca77.png',
    twitterHandle: '@zandifoundation',
    // Updated keywords per task
    keywords: 'NGO Nigeria, Diabetes Care Abuja, Orphanage Support, ZandI Foundation, Child Welfare, Charity Abuja, Diabetes Prevention, Education Scholarships Nigeria',
    themeColor: '#1A3A52',
    address: {
      street: 'Block C9, Flat 1, FCDA Owners Occupier Estate',
      city: 'Abuja',
      region: 'FCT',
      country: 'Nigeria'
    },
    contact: {
      phone: '+234 903 508 5013',
      email: 'zeebuumar@gmail.com'
    },
    registration: 'IT 8365812'
  };

  // Updated default title per task
  const metaTitle = title || "ZandI Foundation | Diabetes Care & Child Support in Nigeria";
  const metaDescription = description || siteDetails.description;
  const metaKeywords = keywords || siteDetails.keywords;
  const metaImage = image || siteDetails.image;
  const metaUrl = url || siteDetails.url;

  // Specific OG Title/Desc per task
  const ogTitle = title || "Caring for Children, Preventing Diabetes - ZandI Foundation";
  const ogDescription = description || "Empowering communities in Abuja through health education and child support. Registered NGO (CAC IT 8365812).";

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": `${siteDetails.url}/#organization`,
        "name": siteDetails.name,
        "alternateName": siteDetails.alternateName,
        "url": siteDetails.url,
        "logo": {
          "@type": "ImageObject",
          "url": siteDetails.logo
        },
        "description": siteDetails.description,
        "email": siteDetails.contact.email,
        "telephone": siteDetails.contact.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteDetails.address.street,
          "addressLocality": siteDetails.address.city,
          "addressRegion": siteDetails.address.region,
          "addressCountry": "NG"
        },
        "sameAs": [
          "https://facebook.com/zandifoundation",
          "https://twitter.com/zandifoundation",
          "https://instagram.com/zandifoundation"
        ],
        "identifier": {
          "@type": "PropertyValue",
          "name": "CAC Registration",
          "value": siteDetails.registration
        },
        "foundingDate": "2025-03-25"
      },
      {
        "@type": "WebSite",
        "@id": `${siteDetails.url}/#website`,
        "url": siteDetails.url,
        "name": siteDetails.alternateName,
        "description": siteDetails.description,
        "publisher": {
          "@id": `${siteDetails.url}/#organization`
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <html lang="en-NG" />
      <meta charSet="utf-8" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={siteDetails.themeColor} />
      <meta name="author" content={siteDetails.alternateName} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${siteDetails.alternateName}`} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteDetails.alternateName} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:creator" content={siteDetails.twitterHandle} />
      <meta name="twitter:site" content={siteDetails.twitterHandle} />

      {/* External Resources Prefetching */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />

      {/* Favicons */}
      <link rel="icon" type="image/png" href={siteDetails.logo} />
      <link rel="apple-touch-icon" href={siteDetails.logo} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;