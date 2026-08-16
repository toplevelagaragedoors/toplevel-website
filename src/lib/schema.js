import { SITE_URL, biz, areas } from '../data/site.js';

const ID = `${SITE_URL}/#business`;

export const postalAddress = {
  '@type': 'PostalAddress',
  addressLocality: biz.city,
  addressRegion: biz.state,
  addressCountry: 'US',
};

/** Real trading hours. Google cross-checks these against the Business
 *  Profile, so they must match it exactly. */
export const openingHours = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '07:00',
    closes: '19:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Friday'],
    opens: '07:00',
    closes: '16:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '00:00',
    closes: '00:00',
  },
];

/** Organization + LocalBusiness for the homepage. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'HomeAndConstructionBusiness', 'LocalBusiness'],
        '@id': ID,
        name: biz.name,
        legalName: biz.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}/img/logo.png`,
        image: `${SITE_URL}/img/og-image.jpg`,
        telephone: biz.phoneRaw,
        email: biz.email,
        address: postalAddress,
        geo: { '@type': 'GeoCoordinates', latitude: biz.latitude, longitude: biz.longitude },
        openingHoursSpecification: openingHours,
        priceRange: biz.priceRange,
        foundingDate: biz.founded,
        slogan: 'Garage door repair done right the first time.',
        description:
          'Licensed garage door repair, spring replacement, opener service and new door installation in Charleston, South Carolina and surrounding Lowcountry communities.',
        areaServed: areas.map((a) => ({
          '@type': 'City',
          name: a.name,
          address: { '@type': 'PostalAddress', addressRegion: 'SC', addressCountry: 'US' },
        })),
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: { '@type': 'GeoCoordinates', latitude: biz.latitude, longitude: biz.longitude },
          geoRadius: '32186',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: biz.phoneRaw,
          contactType: 'customer service',
          areaServed: 'US-SC',
          availableLanguage: ['English', 'Spanish'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: biz.name,
        publisher: { '@id': ID },
        inLanguage: 'en-US',
      },
    ],
  };
}

/** Service schema for an individual service page. */
export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: `${service.name} in ${biz.city}, ${biz.state}`,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': ID,
      name: biz.name,
      telephone: biz.phoneRaw,
      address: postalAddress,
    },
    areaServed: areas.map((a) => ({ '@type': 'City', name: `${a.name}, SC` })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/services/${service.slug}`,
    },
  };
}

/** LocalBusiness schema tuned for a specific city page. */
export function areaSchema(area) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/service-areas/${area.slug}#business`,
    name: `${biz.name} - ${area.name}`,
    parentOrganization: { '@id': ID },
    url: `${SITE_URL}/service-areas/${area.slug}`,
    telephone: biz.phoneRaw,
    email: biz.email,
    image: `${SITE_URL}/img/og-image.jpg`,
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', latitude: biz.latitude, longitude: biz.longitude },
    openingHoursSpecification: openingHours,
    priceRange: biz.priceRange,
    areaServed: { '@type': 'City', name: `${area.name}, South Carolina` },
    description: `Garage door repair, spring replacement, opener service and new door installation in ${area.name}, SC. Licensed, insured, open Sunday to Friday.`,
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** trail: [{name, path}] - the current page should be last. */
export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: SITE_URL + t.path,
    })),
  };
}

export function combine(...schemas) {
  return { '@context': 'https://schema.org', '@graph': schemas.filter(Boolean).map(({ '@context': _c, ...rest }) => rest) };
}
