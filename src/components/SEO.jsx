import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteDetails = {
    name: 'Zainab and Ismail Diabetes and Child Care Initiative (ZandI Foundation)',
    alternateName: 'ZandI Foundation',
    description: 'Zainab and Ismail Diabetes and Child Care Initiative (ZandI Foundation) delivers child-focused diabetes prevention, health outreach, and welfare support in Abuja, Nigeria.',
    url: 'https://zandifoundation.org',
    image: 'https://images.unsplash.com/photo-1680778468132-603f082fa4f5',
    logo: 'https://res.cloudinary.com/dtueats6s/image/upload/v1771339693/zainifoundation_crop_d1a199.png',
    twitterHandle: '@zandifoundation',
    keywords: 'Zainab and Ismail Diabetes and Child Care Initiative, ZandI Foundation, NGO Nigeria, Diabetes Care Abuja, Child Welfare, Charity Abuja, Diabetes Prevention, Education Scholarships Nigeria',
    themeColor: '#1A3A52',
    address: {
      street: 'NNPC Estate, Lifecamp, Abuja',
      city: 'Abuja',
      region: 'FCT',
      country: 'Nigeria'
    },
    contact: {
      phone: '+234 903 508 5013',
      email: 'zandiinitiative@gmail.com'
    },
    registration: 'IT 8365812'
  };

  const metaTitle = title || 'Zainab and Ismail Diabetes and Child Care Initiative (ZandI Foundation)';
  const metaDescription = description || siteDetails.description;
  const metaKeywords = keywords || siteDetails.keywords;
  const metaImage = image || siteDetails.image;
  const metaUrl = url || siteDetails.url;

  const ogTitle = title || 'Caring for Children, Preventing Diabetes - ZandI Foundation';
  const ogDescription = description || 'Empowering communities in Abuja through health education and child support. Registered NGO (CAC IT 8365812).';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NGO',
        '@id': `${siteDetails.url}/#organization`,
        name: siteDetails.name,
        alternateName: siteDetails.alternateName,
        url: siteDetails.url,
        logo: {
          '@type': 'ImageObject',
          url: siteDetails.logo
        },
        description: siteDetails.description,
        email: siteDetails.contact.email,
        telephone: siteDetails.contact.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteDetails.address.street,
          addressLocality: siteDetails.address.city,
          addressRegion: siteDetails.address.region,
          addressCountry: 'NG'
        },
        sameAs: [
          'https://facebook.com/zandifoundation',
          'https://twitter.com/zandifoundation',
          'https://instagram.com/zandifoundation'
        ],
        identifier: {
          '@type': 'PropertyValue',
          name: 'CAC Registration',
          value: siteDetails.registration
        },
        foundingDate: '2025-03-25',
        areaServed: 'Nigeria',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteDetails.contact.phone,
          email: siteDetails.contact.email,
          contactType: 'customer support',
          areaServed: 'NG',
          availableLanguage: ['en']
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${siteDetails.url}/#website`,
        url: siteDetails.url,
        name: siteDetails.name,
        description: siteDetails.description,
        inLanguage: 'en-NG',
        publisher: {
          '@id': `${siteDetails.url}/#organization`
        }
      }
    ]
  };

  return (
    <Helmet>
      <html lang="en-NG" />
      <meta charSet="utf-8" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={siteDetails.themeColor} />
      <meta name="author" content={siteDetails.name} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${siteDetails.name}`} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="canonical" href={metaUrl} />
      <meta name="geo.region" content="NG-FC" />
      <meta name="geo.placename" content="Abuja" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteDetails.alternateName} />
      <meta property="og:locale" content="en_NG" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:creator" content={siteDetails.twitterHandle} />
      <meta name="twitter:site" content={siteDetails.twitterHandle} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />

      <link rel="icon" type="image/png" href={siteDetails.logo} />
      <link rel="apple-touch-icon" href={siteDetails.logo} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
