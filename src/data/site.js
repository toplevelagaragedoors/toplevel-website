// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for business info (NAP), services and service areas.
// Change the domain below once the Hostinger domain is pointed at Netlify.
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://toplevelgaragedoorssc.com';

export const biz = {
  name: 'Top Level Garage Doors',
  legalName: 'Top Level Garage Doors',
  phone: '843-830-1627',
  phoneHref: 'tel:+18438301627',
  phoneRaw: '+18438301627',
  email: 'topleveldoorsandgatessc@gmail.com',
  emailHref: 'mailto:topleveldoorsandgatessc@gmail.com',
  city: 'Charleston',
  state: 'SC',
  stateFull: 'South Carolina',
  latitude: 32.8036,
  longitude: -79.9366,
  founded: '2015',
  yearsExperience: 10,
  hours: 'Sun-Thu 7am-7pm · Fri 7am-4pm · Sat closed',
  hoursShort: 'Sun-Thu 7am-7pm',
  hoursList: [
    { days: 'Sunday - Thursday', time: '7:00 AM - 7:00 PM' },
    { days: 'Friday', time: '7:00 AM - 4:00 PM' },
    { days: 'Saturday', time: 'Closed' },
  ],
  priceRange: '$$',
  radiusMiles: 20,
};

// Street address is deliberately not published - city and state only.
export const addressOneLine = `${biz.city}, ${biz.state}`;

// --- Services --------------------------------------------------------------
export const services = [
  { slug: 'springs-replacement', name: 'Springs Replacement', short: 'Torsion and extension springs replaced in matched pairs, sized to your door.', img: 'sv-springs-replacement', alt: 'Torsion springs mounted above a garage door on the spring bar' },
  { slug: 'opener-repair', name: 'Opener Repair', short: 'Gears, sprockets, trolleys, safety eyes and travel limits put right.', img: 'sv-opener-repair', alt: 'Garage door opener with the casing open showing the control board and chain drive' },
  { slug: 'opener-installation', name: 'Opener Installation', short: 'Chain, belt and wall-mount openers fitted and programmed.', img: 'sv-opener-installation', alt: 'LiftMaster garage door opener mounted to the ceiling with the rail fitted' },
  { slug: 'off-track-repair', name: 'Off-Track Repair', short: 'Doors off the rail reset safely, with the track checked for damage.', img: 'sv-off-track-repair', alt: 'Garage door roller and hinge bracket at the curve of a bent track' },
  { slug: 'rollers-replacement', name: 'Rollers Replacement', short: 'Sealed nylon rollers that run quieter and outlast steel by years.', img: 'sv-rollers-replacement', alt: 'New nylon garage door rollers beside a door with the old steel roller in the track' },
  { slug: 'hinges-replacement', name: 'Hinges Replacement', short: 'Worn or cracked hinges swapped before they pull the section out of line.', img: 'sv-hinges-replacement', alt: 'Galvanised garage door hinge and roller bracket fixed to a white door section' },
  { slug: 'tracks-replacement', name: 'Tracks Replacement', short: 'Bent or corroded track replaced and realigned to manufacturer spec.', img: 'sv-tracks-replacement', alt: 'Galvanised garage door track and curved radius section fixed to the door frame' },
  { slug: 'weather-strip-replacement', name: 'Bottom Weather Strip Replacement', short: 'New bottom seal to keep water, draughts and pests out of the garage.', img: 'sv-weather-strip-replacement', alt: 'New black bottom weather seal fitted along the base of a white garage door' },
  { slug: 'panels-repair', name: 'Panels Repair', short: 'Dented or damaged sections repaired where a full replacement is not needed.', img: 'sv-panels-repair', alt: 'Cracked and dented section on a white raised-panel garage door' },
  { slug: 'panels-replacement', name: 'Panels Replacement', short: 'Individual sections replaced and colour-matched to the existing door.', img: 'sv-panels-replacement', alt: 'Newly installed white long-panel garage door with window inserts' },
  { slug: 'new-door-installation', name: 'New Door Installation', short: 'Insulated steel, carriage house and full-view glass, measured on site.', img: 'sv-new-door-installation', alt: 'Newly installed brown carriage-style garage door with window inserts and decorative hardware' },
  { slug: 'new-opener-installation', name: 'New Opener Installation', short: 'Quiet belt drives and smart Wi-Fi units, installed and set up.', img: 'sv-new-opener-installation', alt: 'Newly installed LiftMaster garage door opener mounted to the rafters of a garage' },
  { slug: 'emergency-services', name: 'Emergency Services', short: 'Door stuck open or car trapped inside? You go to the front of the queue.', img: 'sv-emergency-services', alt: 'Sectional garage door closed from the inside with the opener light on' },
  { slug: 'service-and-maintenance', name: 'Service and Maintenance', short: 'Annual tune-ups that catch worn parts before they strand you.', img: 'sv-service-and-maintenance', alt: 'Wood-finish sectional garage door seen from inside with torsion spring, tracks and hinges' },
];


export const getService = (slug) => services.find((s) => s.slug === slug);

// --- Service areas (within ~20 miles of 838 Morrison Dr) --------------------
export const areas = [
  {
    slug: 'charleston',
    name: 'Charleston',
    distance: 'Home base',
    blurb:
      'Our shop sits on Morrison Drive, so the peninsula, Wagener Terrace and Hampton Park get our fastest response times of anywhere we serve.',
    note:
      'Historic downtown properties bring their own quirks: undersized single-car openings, carriage-style doors on original framing, and hardware that has spent a century in salt air. We carry the low-headroom track and reproduction-style hardware those homes need.',
    landmarks: ['The Peninsula', 'Wagener Terrace', 'Hampton Park Terrace', 'Cannonborough', 'Harleston Village'],
  },
  {
    slug: 'north-charleston',
    name: 'North Charleston',
    distance: '7 miles',
    blurb:
      'From Park Circle bungalows to the warehouse corridor off Rivers Avenue, we handle both sides of North Charleston - residential and commercial.',
    note:
      'North Charleston is where most of our commercial work lives. Rolling steel doors, dock equipment and high-cycle operators along the Rivers Avenue and Ashley Phosphate industrial parks get scheduled service outside business hours.',
    landmarks: ['Park Circle', 'Rivers Avenue corridor', 'Ashley Phosphate', 'Northwoods', 'Tanger Outlets area'],
  },
  {
    slug: 'mount-pleasant',
    name: 'Mount Pleasant',
    distance: '6 miles',
    blurb:
      'Across the Ravenel, we cover Old Village through Carolina Park with same-day appointments most weekdays.',
    note:
      'Newer Mount Pleasant subdivisions run builder-grade springs and steel rollers that start failing around year six or seven. If your neighbors are replacing springs, yours are on the same clock - worth a proactive inspection.',
    landmarks: ['Old Village', 'I’On', 'Park West', 'Carolina Park', 'Belle Hall'],
  },
  {
    slug: 'west-ashley',
    name: 'West Ashley',
    distance: '6 miles',
    blurb:
      'Avondale, Byrnes Downs and the Highway 61 corridor - a short run across the Ashley from our shop.',
    note:
      'A lot of West Ashley housing stock dates to the 1960s and 70s, which means original one-piece tilt-up doors and openers well past retirement. Replacement here is often cheaper than chasing repairs.',
    landmarks: ['Avondale', 'Byrnes Downs', 'Shadowmoss', 'Drayton', 'Citadel Mall area'],
  },
  {
    slug: 'james-island',
    name: 'James Island',
    distance: '5 miles',
    blurb:
      'Riverland Terrace to Fort Johnson Road, with quick access from the peninsula for same-day repairs.',
    note:
      'Island humidity and marsh air are hard on hardware. Galvanized tracks, sealed nylon rollers and stainless fasteners are worth specifying here - standard steel components rust out noticeably faster.',
    landmarks: ['Riverland Terrace', 'Fort Johnson', 'Harbor View', 'Stiles Point', 'Clarks Point'],
  },
  {
    slug: 'johns-island',
    name: 'Johns Island',
    distance: '12 miles',
    blurb:
      'Maybank Highway out to Kiawah River Drive, covering both older homesteads and the new-build subdivisions.',
    note:
      'Detached workshops and outbuildings are common on Johns Island, and many run oversized or non-standard openings. We measure on site rather than assuming a stock size.',
    landmarks: ['Maybank Highway', 'Fenwick Hall', 'The Villages in St. Johns Woods', 'River Road'],
  },
  {
    slug: 'daniel-island',
    name: 'Daniel Island',
    distance: '9 miles',
    blurb:
      'Full residential service across Daniel Island Park and Smythe Park, including HOA-compliant replacements.',
    note:
      'Daniel Island architectural guidelines are specific about door style and color. We handle the submission-ready documentation so your replacement clears review the first time.',
    landmarks: ['Daniel Island Park', 'Smythe Park', 'Codner’s Ferry', 'Etiwan Park'],
  },
  {
    slug: 'sullivans-island-and-isle-of-palms',
    name: "Sullivan's Island & Isle of Palms",
    distance: '11 miles',
    blurb:
      'Beachfront and elevated homes on both barrier islands, including high-lift installations under raised houses.',
    note:
      'Elevated beach houses often need high-lift or wall-mount jackshaft openers because there is no ceiling room for a standard rail. Direct salt exposure also makes corrosion-resistant hardware essential rather than optional.',
    landmarks: ["Sullivan's Island", 'Isle of Palms', 'Wild Dunes', 'Breach Inlet'],
  },
  {
    slug: 'folly-beach',
    name: 'Folly Beach',
    distance: '11 miles',
    blurb:
      'Repairs and replacements for beach cottages, elevated homes and rental properties on the island.',
    note:
      'Rental turnovers do not wait, so Folly jobs get scheduled around check-in windows where we can. Salt-grade hardware is standard on every install we do out here.',
    landmarks: ['Center Street', 'East Ashley', 'West Ashley Avenue', 'Folly River'],
  },
  {
    slug: 'hanahan',
    name: 'Hanahan',
    distance: '10 miles',
    blurb:
      'Tanner Plantation through Eagle Landing, with same-day appointments available most days.',
    note:
      'Hanahan has a high concentration of homes built in the same few years, which means whole streets hit spring and opener end-of-life together. Ask about neighbor scheduling - we discount same-day multi-stop visits.',
    landmarks: ['Tanner Plantation', 'Eagle Landing', 'Yeamans Hall', 'Foster Creek'],
  },
  {
    slug: 'goose-creek',
    name: 'Goose Creek',
    distance: '16 miles',
    blurb:
      'Full residential coverage from Crowfield Plantation to Liberty Hall, including Joint Base Charleston families.',
    note:
      'We work with a lot of military families here and keep scheduling flexible around deployments and PCS timelines. Ask about our service member discount when you call.',
    landmarks: ['Crowfield Plantation', 'Liberty Hall', 'Devon Forest', 'Montague Plantation'],
  },
  {
    slug: 'ladson',
    name: 'Ladson',
    distance: '17 miles',
    blurb: 'Residential repair and replacement throughout Ladson and the College Park Road corridor.',
    note:
      'Ladson sits at the outer edge of our same-day zone, so booking before noon gives the best chance of a technician reaching you the same afternoon.',
    landmarks: ['College Park Road', 'Coosaw Creek', 'Wescott Plantation', 'Oakbrook'],
  },
  {
    slug: 'summerville',
    name: 'Summerville',
    distance: '20 miles',
    blurb:
      'The outer edge of our radius - Nexton, Cane Bay and downtown Summerville all covered.',
    note:
      'Summerville new-build neighborhoods are almost entirely builder-grade hardware. Upgrading to nylon rollers and a high-cycle spring at the first service call usually pays for itself within a few years.',
    landmarks: ['Nexton', 'Cane Bay', 'Downtown Summerville', 'Legend Oaks', 'Wescott'],
  },
];

export const getArea = (slug) => areas.find((a) => a.slug === slug);

// --- Shared FAQ (home page) -------------------------------------------------
// Project photography. `n` is the original photo number, so each caption
// stays welded to its own image regardless of which entries are shown.
export const projects = [
  { n: 1, caption: 'LiftMaster Opener Installation' },
  { n: 2, caption: 'Spring Replacement' },
  { n: 3, caption: 'New Tracks System Installation' },
  { n: 4, caption: 'New Door Installation, Wood Like Design' },
  { n: 5, caption: 'Porcelain Heavy Duty Door Springs’s Replacement - before' },
  { n: 6, caption: 'Porcelain Heavy Duty Door Springs’s Replacement - after' },
  { n: 7, caption: 'Springs Replacement for Heavy Duty Wood Door' },
  { n: 8, caption: 'Custom Springs Replacement and Heavy Duty Opener Installation' },
  { n: 9, caption: 'Spring’s Replacement' },
  { n: 11, caption: 'Single Door Installation, Long Panels Design' },
  { n: 12, caption: 'Installation of Single and Double Door Insulated by Steelback' },
  { n: 14, caption: 'Wood Design Door, Springs and Tracks' },
  { n: 15, caption: 'Springs Replacement and Opener Installation' },
  { n: 17, caption: 'Installation of Sandstone Color, Long Panels Door' },
];

export const homeFaqs = [
  {
    q: 'How quickly can you get to me?',
    a: 'Same day service inside our service area. Emergencies - a door stuck open, a car trapped, a snapped spring - go ahead of scheduled work. We are open Sunday to Thursday 7am-7pm and Friday until 4pm.',
  },
  {
    q: 'Is the estimate really free?',
    a: 'Estimates for new doors, new openers and replacement quotes are free with no obligation. Repair visits carry a diagnostic fee that we waive in full when you approve the work.',
  },
  {
    q: 'Are you fully licensed and insured?',
    a: 'Yes. Proof is available on request.',
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Yes. It depends on the quality, condition and kind of the job, and on the products used. We will tell you exactly what is covered before the work starts.',
  },
  {
    q: 'What brands do you service?',
    a: 'All of the major ones - Clopay, Amarr, Wayne Dalton, Overhead Door, Raynor and CHI, plus LiftMaster, Chamberlain, Genie and Sommer openers. If it opens, we can work on it.',
  },
];


export const trustPoints = [
  { label: 'Experience', value: '10+ yrs', note: 'In the industry' },
  { label: 'Open', value: 'Sun-Fri', note: 'Six days a week' },
  { label: 'Typical response', value: 'Same day', note: 'Service' },
  { label: 'Pricing', value: 'Upfront', note: 'Before work begins' },
];


export const processSteps = [
  {
    title: 'Call or send the form',
    body: 'Tell us what the door is doing. We diagnose a surprising amount over the phone and will say plainly whether it is urgent.',
  },
  {
    title: 'We send a technician',
    body: 'A technician comes out to diagnose the issue properly, with the common parts already on the truck.',
  },
  {
    title: 'Price upon the job',
    body: 'You get the full cost before a wrench comes out. Approve it, decline it, or ask us to quote an alternative.',
  },
  {
    title: 'We get it done',
    body: 'We complete the repair quickly, test the door through a full cycle, and walk you through what changed.',
  },
];
