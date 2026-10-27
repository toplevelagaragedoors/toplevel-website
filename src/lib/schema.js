import { SITE_URL, biz, areas } from '../data/site.js';

const ID = `${SITE_URL}/#localbusiness`;

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
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
];

/** Single LocalBusiness entity for the homepage. The homepage carries
 *  LocalBusiness only (no Organization, WebSite, WebPage, Service, FAQPage or
 *  BreadcrumbList), per the site schema policy. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
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
    hasMap: 'https://www.google.com/maps/place/?q=place_id:ChIJV-AOlCqOuaoR-WFmMieNl_E',
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
