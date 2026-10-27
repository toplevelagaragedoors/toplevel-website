// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for business info (NAP), services and service areas.
// Change the domain below once the Hostinger domain is pointed at Netlify.
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://toplevelgaragedoorssc.com';

export const biz = {
  name: 'Top Level Garage Door',
  legalName: 'Top Level Garage Door',
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
  hours: 'Open 24/7, all week',
  hoursShort: 'Open 24/7',
  hoursList: [{ days: 'Monday - Sunday', time: 'Open 24 hours' }],
  priceRange: '$$',
  radiusMiles: 20,
};

// Street address is deliberately not published - city and state only.
export const addressOneLine = `${biz.city}, ${biz.state}`;

// --- Services --------------------------------------------------------------
export const services = [
  { slug: 'garage-door-cable-repair', name: 'Cable Repair', short: 'Snapped or frayed lift cables replaced and re-tensioned so the door runs level.', img: 'sv-off-track-repair', alt: 'Garage door hanging unevenly off its tracks inside a residential garage' },
  { slug: 'springs-replacement', name: 'Springs Replacement', short: 'Torsion and extension springs replaced in matched pairs, sized to your door.', img: 'sv-springs-replacement', alt: 'Torsion springs on the spring bar above a white garage door with window inserts' },
  { slug: 'opener-repair', name: 'Opener Repair', short: 'Gears, sprockets, trolleys, safety eyes and travel limits put right.', img: 'sv-opener-repair', alt: 'Garage door opener with the casing open showing the control board and chain drive' },
  { slug: 'opener-installation', name: 'Opener Installation', short: 'Chain, belt and wall-mount openers fitted and programmed.', img: 'sv-opener-installation', alt: 'LiftMaster garage door opener mounted to the ceiling with the rail fitted' },
  { slug: 'off-track-repair', name: 'Off-Track Repair', short: 'Doors off the rail reset safely, with the track checked for damage.', img: 'sv-off-track-repair', alt: 'White sectional garage door sagging off the right track, viewed from inside the garage' },
  { slug: 'rollers-replacement', name: 'Rollers Replacement', short: 'Sealed nylon rollers that run quieter and outlast steel by years.', img: 'sv-rollers-replacement', alt: 'New sealed nylon garage door rollers with metal stems and ball bearings' },
  { slug: 'hinges-replacement', name: 'Hinges Replacement', short: 'Worn or cracked hinges swapped before they pull the section out of line.', img: 'sv-hinges-replacement', alt: 'Galvanised garage door hinge bolted to a white door section with the roller seated in the track' },
  { slug: 'tracks-replacement', name: 'Tracks Replacement', short: 'Bent or corroded track replaced and realigned to manufacturer spec.', img: 'sv-tracks-replacement', alt: 'Curved galvanised garage door tracks with mounting bracket and cable drum' },
  { slug: 'weather-strip-replacement', name: 'Bottom Weather Strip Replacement', short: 'New bottom seal to keep water, draughts and pests out of the garage.', img: 'sv-weather-strip-replacement', alt: 'New black bottom weather seal fitted along the base of a white garage door' },
  { slug: 'panels-repair', name: 'Panels Repair', short: 'Dented or damaged sections repaired where a full replacement is not needed.', img: 'sv-panels-repair', alt: 'Cracked and dented section on a white raised-panel garage door' },
  { slug: 'panels-replacement', name: 'Panels Replacement', short: 'Individual sections replaced and colour-matched to the existing door.', img: 'sv-panels-replacement', alt: 'Newly installed white long-panel garage door with window inserts' },
  { slug: 'garage-door-replacement', name: 'Garage Door Replacement', short: 'Insulated steel, carriage house and full-view glass doors, measured and fitted on site.', img: 'sv-new-door-installation', alt: 'Newly installed brown carriage-style garage door with window inserts and decorative hardware' },
  { slug: 'emergency-services', name: 'Emergency Services', short: 'Door stuck open or car trapped inside? You go to the front of the queue.', img: 'sv-emergency-services', alt: 'Car crashed through a white sectional garage door, with the door panels and track torn off' },
  { slug: 'service-and-maintenance', name: 'Service and Maintenance', short: 'Annual tune-ups that catch worn parts before they strand you.', img: 'sv-service-and-maintenance', alt: 'Technician lubricating a garage door hinge and roller during a maintenance visit' },
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
    slug: 'isle-of-palms',
    name: 'Isle of Palms',
    distance: '11 miles',
    blurb:
      'Beachfront cottages, elevated homes and Wild Dunes rentals, where salt air and tall pilings shape every door.',
    note:
      'Elevated homes on Isle of Palms often need high-lift or wall-mount jackshaft openers because there is no ceiling room for a standard rail, and rental turnovers mean fast, reliable repairs matter.',
    landmarks: ['Wild Dunes', 'Front Beach', 'Breach Inlet', 'Isle of Palms County Park'],
  },
  {
    slug: 'sullivans-island',
    name: "Sullivan's Island",
    distance: '11 miles',
    blurb:
      'Historic beach homes from Fort Moultrie to the Stations, where direct salt exposure makes corrosion-resistant hardware essential.',
    note:
      "Direct salt exposure on Sullivan's Island makes galvanized tracks, sealed nylon rollers and stainless fasteners worth specifying, and many elevated homes need high-lift or wall-mount openers.",
    landmarks: ['Fort Moultrie', "Sullivan's Island Lighthouse", 'Breach Inlet', 'Middle Street'],
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
  { n: 17, caption: 'Installation of Sandstone Color, Long Panels Door' },
];

export const homeFaqs = [
  {
    q: 'How quickly can you get to me?',
    a: 'Same day service inside our service area. Emergencies - a door stuck open, a car trapped, a snapped spring - go ahead of scheduled work. We are open 24/7, all week.',
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
  { label: 'Open', value: '24/7', note: 'All week' },
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

// --- Customer reviews -------------------------------------------------------
// Genuine five-star Google reviews, used verbatim (minor punctuation only).
// These are general company reviews, not tied to any one service. Do not add
// Review or AggregateRating schema for them.
export const reviews = [
  {
    name: 'Shiri Cohe',
    text: 'Great experience! My garage door was off track and needed new rollers. The technician did an excellent job, and now the door works perfectly. Fast, professional service at a fair price. Highly recommend!',
  },
  {
    name: 'Bar Abuhazira',
    text: 'Great experience! Nick was super friendly, professional, and really helpful. He fixed my garage door quickly and made sure everything was working perfectly. Really appreciate his work. Highly recommend!',
  },
  {
    name: 'Robert Leibo',
    text: 'Absolutely amazing experience. I had my old garage door opener replaced with a new LiftMaster opener that includes a battery backup and built-in camera, and I couldn’t be happier! The new opener is incredibly quiet, smooth, and works perfectly. The service was truly above and beyond my expectations! Nick, the technician, was absolutely outstanding. He was professional, knowledgeable, friendly, and went the extra mile to make sure everything was installed perfectly and that I understood how everything worked. It’s rare to find this level of customer service these days. Great quality, excellent workmanship, and an amazing experience overall. I highly recommend this company to anyone looking for garage door services, and definitely ask for Nick! You won’t be disappointed!',
  },
  {
    name: 'Yarden Ohana',
    text: 'Great experience with Top Level! Sean did an excellent job fixing my garage doors in Moncks Corner, and I’m very happy with the service. Highly recommend Sean and the team to anyone looking for local garage door repair. Thank you, Sean, for a job well done!',
  },
  {
    name: 'B',
    text: 'Great service! Very professional and friendly. Highly recommend!',
  },
  {
    name: 'Briliant Shamailov',
    text: 'Excellent service from start to finish! I had my garage door springs replaced, and the whole experience was fantastic. Very professional, friendly, and efficient service. The technician arrived on time, explained everything clearly, and got the job done quickly. The price was very reasonable and affordable. Great quality work at a great price! I highly recommend them to anyone who needs garage door repairs or services. Definitely a 5-star experience!',
  },
];
