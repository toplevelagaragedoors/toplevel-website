// ---------------------------------------------------------------------------
// Content for individual location pages (/service-areas/<slug>-sc).
//
// These are service-AREA pages: Top Level Garage Door serves these cities. No
// physical address, no per-city storefront, no travel distances, and no
// distance-based scheduling are stated or implied. Real neighborhoods and
// landmarks are used only to describe coverage, never to claim projects,
// offices, or customer stories. Each page is tailored to its city's genuine
// context, not a name-swap of a shared template.
//
// Shared, verifiable business facts (TRUST) are spread into each page's
// whyPoints after a city-specific first point.
// ---------------------------------------------------------------------------

const TRUST = [
  'Licensed, insured and bonded, with proof on request',
  'More than 10 years of hands-on garage door experience',
  'Upfront pricing in writing before any work begins',
  'Our own technicians, never subcontracted',
  'Same-day service across Charleston and the Lowcountry',
];

export const locationPages = {
  'daniel-island-sc': {
    cityName: 'Daniel Island',
    metaTitle: 'Garage Door Repair in Daniel Island - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in Daniel Island? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in Daniel Island',
    heroDesc:
      'On a newer island where most homes share a build era, we replace tiring springs, worn rollers and failing openers, and match replacement doors to the Daniel Island look.',
    whyLede:
      'Daniel Island is a newer, master-planned community where homes share a similar build era and a consistent architectural style. We fix the fault cleanly and, when a door needs replacing, match its style and colour to the surrounding homes.',
    whyPoints: ['Replacement doors matched in style and colour to the neighbourhood', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'What a repair on a newer Daniel Island door involves',
        image: true,
        paras: [
          'Most Daniel Island homes are relatively new, so the faults we see are builder-grade springs tiring, rollers wearing noisy, and openers needing a gear, board or safety-eye fix rather than a full replacement.',
          'We diagnose the actual cause on site, fit parts sized to your specific door, then re-balance and cycle-test it before we leave.',
          'When a door is genuinely beyond economical repair, we fit a replacement and match its style and colour to the surrounding homes.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults on Daniel Island homes',
        cards: [
          { title: 'Springs sized to the door', body: 'On newer doors the original springs tire first. We replace them in matched pairs, sized to the weight of your door so it lifts evenly again.' },
          { title: 'Rollers and hinges', body: 'Builder-grade rollers and hinges wear and get noisy. Sealed nylon rollers run quietly and last far longer than the steel originals.' },
          { title: 'Openers', body: 'A worn gear, failed board, blocked safety eye or dead remote usually stops an opener, and is normally an affordable repair rather than a replacement.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why Daniel Island homeowners call a local team',
        items: [
          { title: 'Matched replacements', body: 'When a door needs replacing we match its style and colour to the surrounding homes, so it suits the street.' },
          { title: 'Parts sized to your door', body: 'Springs and rollers are chosen for the exact weight and size of your door, not fitted generically, so the door stays balanced.' },
          { title: 'Tidy, tested work', body: 'We clear up after the repair and cycle-test the door before we go, so you are not left with a half-finished job.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What shapes the cost and timing of a Daniel Island repair',
        lead: 'No two doors fail the same way. A few things decide the price and how soon your door is working again.',
        bullets: [
          { label: 'The failed part', text: 'A roller, hinge or safety eye is a quick job; springs, cables or a control board mean more parts and labour.' },
          { label: 'Door size and weight', text: 'Insulated and double-wide doors need heavier-duty springs and careful re-balancing afterwards.' },
          { label: 'Repair or replace', text: 'If a door is past economical repair, we quote a style-matched replacement so you can compare.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover the communities around Daniel Island. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'Mount Pleasant', slug: 'mount-pleasant-sc' },
      { name: 'North Charleston', slug: 'north-charleston-sc' },
      { name: 'Hanahan', slug: 'hanahan-sc' },
    ],
    poiIntro:
      'We cover all of Daniel Island, from the parks and the village centre to the newer subdivisions.',
    poiBody:
      'Daniel Island is largely master-planned, so builder-grade springs and openers here tend to reach the end of their life on a fairly predictable schedule. We size every replacement part to the specific door, and when a full door is needed we match its style and colour to the surrounding homes.',
    pois: ['Daniel Island Park', 'Smythe Park', "Codner's Ferry", 'Etiwan Park'],
    faqs: [
      { q: 'Do you repair garage doors throughout Daniel Island?', a: 'Yes. We cover the whole island, from the village and parks to the newer subdivisions, for spring and cable work, opener repairs, off-track doors, panel repair and full replacements.' },
      { q: 'Can you match a new door to the look of my street?', a: 'Yes. When a door needs replacing we match its style and colour to the surrounding homes. We do not handle HOA paperwork, but we can supply the door details you need to submit.' },
      { q: 'My garage door is only a few years old. Why does it already need work?', a: 'Newer homes are often fitted with builder-grade springs, rollers and openers that wear sooner than people expect. Upgrading to sealed nylon rollers or a higher-cycle spring at the first repair usually lasts far longer.' },
      { q: 'Do you replace a door that is beyond repair?', a: 'Yes. If a repair is not worthwhile, we measure on site and fit a new insulated steel, carriage-house or full-view glass door, matched to your home.' },
      { q: 'Will I know the price before work starts?', a: 'Yes. You get the price in writing before we begin. Estimates for new doors and openers are free; a repair visit may carry a diagnostic fee, which is waived in full once you approve the work.' },
    ],
  },

  'folly-beach-sc': {
    cityName: 'Folly Beach',
    metaTitle: 'Garage Door Repair in Folly Beach - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in Folly Beach? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in Folly Beach',
    heroDesc:
      'Oceanfront salt air corrodes garage door hardware quickly. On Folly we replace rusted springs, cables and openers on cottages and rental homes, and fit corrosion-resistant parts that last.',
    whyLede:
      'Folly Beach is mostly cottages and short-term rentals right in the salt air, where ordinary steel hardware rusts out fast and a stuck door can cost a booking. We fit corrosion-resistant parts and work around check-in windows where we can.',
    whyPoints: ['Corrosion-resistant hardware fitted as standard on salt-exposed doors', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'What salt air does to Folly Beach garage doors',
        image: true,
        paras: [
          'On the beach, salt gets into everything. Springs, cables, tracks and fasteners corrode from the inside far sooner than they would inland, so repairs here often mean replacing rusted parts before they snap.',
          'We fit galvanized and stainless-grade hardware, clear sand and grit from the tracks, then re-balance and cycle-test the door.',
          'On rental cottages we try to schedule around your changeover days, so a repair does not cost you a booking.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults on Folly Beach cottages',
        cards: [
          { title: 'Corroded springs and cables', body: 'Salt rusts springs and cables from the inside until they fail. We replace them in matched pairs with corrosion-resistant parts.' },
          { title: 'Sand-bound tracks and rollers', body: 'Sand and grit grind in the tracks until the door sticks. We clean and realign them and fit sealed nylon rollers that shrug off grit.' },
          { title: 'Weather-beaten openers', body: 'Damp, salty air is hard on opener boards and remotes. We repair the electronics or fit a unit better suited to a beach garage.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why Folly Beach owners and hosts call a local team',
        items: [
          { title: 'Built for salt air', body: 'We fit corrosion-resistant springs, rollers and fasteners as standard, because ordinary steel does not last long this close to the water.' },
          { title: 'Changeover-friendly', body: 'Tell us your rental check-in and check-out days and we will work around them where we can, so a repair does not block a booking.' },
          { title: 'Finished in one visit', body: 'With common parts on the van, most diagnoses become a finished, tested repair the same day.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What shapes the cost of a Folly Beach repair',
        lead: 'A few things decide the price and how quickly we can get a Folly door running again.',
        bullets: [
          { label: 'How far the rust has gone', text: 'A lightly corroded part is a quick swap; a seized system needs more hardware replaced.' },
          { label: 'Hardware grade', text: 'Corrosion-resistant springs, rollers and fasteners cost a little more but last far longer in salt air.' },
          { label: 'Rental timing', text: 'We schedule around changeover days where we can, and genuine emergencies are handled around the clock.' },
          { label: 'Door type', text: 'Larger or insulated cottage doors need heavier parts and more careful balancing.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover the nearby islands and West Ashley. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'James Island', slug: 'james-island-sc' },
      { name: 'Johns Island', slug: 'johns-island-sc' },
    ],
    poiIntro:
      'We cover the whole island, from Center Street and the Folly River to the cottages along East and West Ashley Avenue.',
    poiBody:
      'Whether a home sits back near Center Street or right on the water, every Folly Beach garage shares constant salt exposure, so corrosion-resistant springs, cables and fasteners are the sensible choice island-wide. Short-term rentals are common here, so we schedule around changeover days whenever we can.',
    pois: ['Center Street', 'East Ashley Avenue', 'West Ashley Avenue', 'Folly River'],
    faqs: [
      { q: 'Do you repair garage doors across Folly Beach?', a: 'Yes. We cover the whole island, from Center Street to the cottages along East and West Ashley Avenue, for spring and cable work, openers, off-track doors and replacements.' },
      { q: 'Why do garage doors rust so fast on Folly?', a: 'Direct salt exposure corrodes ordinary steel springs, cables, tracks and fasteners from the inside. Fitting galvanized and stainless-grade hardware is the main way to make a repair last here.' },
      { q: 'Can you work around my rental changeovers?', a: 'Yes. Give us your check-in and check-out days when you call and we will schedule around them where we can, so a repair does not cost you a booking.' },
      { q: 'How do I make beach hardware last longer?', a: 'Rinse the door and tracks with fresh water now and then, keep the rollers lightly lubricated, and choose corrosion-resistant parts at the first repair. We can show you what to watch for.' },
      { q: 'Are estimates free?', a: 'Estimates for new doors and openers are free. A repair visit may carry a diagnostic fee, which is disclosed when you book and waived once you approve the work.' },
    ],
  },

  'goose-creek-sc': {
    cityName: 'Goose Creek',
    metaTitle: 'Garage Door Repair in Goose Creek - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in Goose Creek? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in Goose Creek',
    heroDesc:
      "Across Goose Creek's subdivisions we fix tired springs, worn rollers and failing openers, and we keep scheduling flexible for the many Joint Base Charleston families who live here.",
    whyLede:
      'Goose Creek is home to a lot of Joint Base Charleston families, so we keep appointments flexible around deployments and PCS moves, and we aim to fix the fault properly in a single visit.',
    whyPoints: ['Flexible scheduling for deployment and PCS timelines', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'The garage door faults we see most in Goose Creek',
        image: true,
        paras: [
          'Goose Creek is mostly settled residential streets, so the faults we see most are tired springs, worn rollers, opener gears and safety-eye problems, with the occasional door knocked off its track.',
          'We find the real cause on site, fit parts matched to your door, and re-balance and cycle-test it before we leave.',
          'Where a household is mid-move or mid-deployment, we try to fit the appointment around the family schedule.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults across Goose Creek',
        cards: [
          { title: 'Tired springs', body: 'Springs wear out with everyday use and make the door heavy or impossible to lift. We replace them in matched pairs and re-tension the system.' },
          { title: 'Opener faults', body: 'Worn gears, a failed board, a blocked safety eye or a dead remote are the usual opener problems, and most are an affordable repair.' },
          { title: 'Off-track doors', body: 'A door that has jumped the track is unsafe to force. We reset it, check the rollers and track, and fix whatever caused it.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why Goose Creek families rely on a local team',
        items: [
          { title: 'Scheduling that flexes', body: 'We keep appointments flexible around deployments and PCS timelines, so a repair fits around a demanding calendar.' },
          { title: 'Parts matched to the door', body: 'Springs and rollers are sized to your specific door so it stays balanced and the opener is not left straining.' },
          { title: 'Done in one visit', body: 'Most diagnoses become a finished, cycle-tested repair the same day.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What a Goose Creek repair costs, and how soon',
        lead: 'A few things decide the price and how soon the door is working again.',
        bullets: [
          { label: 'The failed part', text: 'A roller or safety eye is a small job; springs, cables or a control board take more parts and time.' },
          { label: 'Door weight', text: 'Insulated and double-wide doors need stronger parts and careful re-balancing afterwards.' },
          { label: 'Repair or replace', text: 'If a door is past its best, we quote a replacement alongside the repair so you can compare.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover Hanahan, Ladson and Summerville nearby. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'Hanahan', slug: 'hanahan-sc' },
      { name: 'Ladson', slug: 'ladson-sc' },
      { name: 'Summerville', slug: 'summerville-sc' },
    ],
    poiIntro:
      'We cover Goose Creek from Crowfield Plantation and Liberty Hall through Devon Forest and the Montague Plantation area.',
    poiBody:
      'Goose Creek is mostly settled residential streets, from Crowfield Plantation through Devon Forest, and a large share of households here are Joint Base Charleston families. That is why we keep appointments flexible around deployments and PCS moves.',
    pois: ['Crowfield Plantation', 'Liberty Hall', 'Devon Forest', 'Montague Plantation'],
    faqs: [
      { q: 'Do you repair garage doors in Goose Creek?', a: 'Yes. We cover Goose Creek from Crowfield Plantation and Liberty Hall through Devon Forest, for springs and cables, openers, off-track doors, panel repair and replacements.' },
      { q: 'Can you work around a deployment or PCS move?', a: 'Yes. A lot of our Goose Creek customers are Joint Base Charleston families, so we keep scheduling flexible around deployments and PCS timelines. Let us know your dates when you call.' },
      { q: 'My door suddenly got very heavy. What is wrong?', a: 'That is almost always a broken spring. Do not force the door or use the opener on it, as a one-spring door can be dangerous to lift. We can usually replace springs the same day.' },
      { q: 'How often should a garage door be serviced?', a: 'About once a year. A tune-up to lubricate, balance and tighten the hardware catches worn parts early and is a lot cheaper than a breakdown.' },
      { q: 'Do you charge to come out?', a: 'Estimates for new doors and openers are free. A repair visit may carry a diagnostic fee, disclosed when you book and waived in full once you approve the work.' },
    ],
  },

  'hanahan-sc': {
    cityName: 'Hanahan',
    metaTitle: 'Garage Door Repair in Hanahan - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in Hanahan? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in Hanahan',
    heroDesc:
      'From Tanner Plantation to Eagle Landing, we replace worn springs, rollers and failing openers, and upgrade builder-grade hardware so the next failure is a lot further off.',
    whyLede:
      'Many Hanahan neighbourhoods were built within a few years of each other, so homes on a street often reach spring and opener wear around the same time. A quick check can catch it before the door gives out.',
    whyPoints: ['Spring and opener checks for same-era neighbourhoods', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'Why Hanahan doors tend to wear on a similar timeline',
        image: true,
        paras: [
          'Because many Hanahan neighbourhoods went up close together in time with similar builder-grade hardware, springs, rollers and openers tend to wear on a similar timeline across a street.',
          'So the faults we see most are tiring springs, noisy rollers and openers needing a gear or safety-eye fix. We find the cause on site, re-balance the door and cycle-test it.',
          'At the first repair it is usually worth upgrading to a higher-cycle spring and sealed nylon rollers, which outlast the builder-grade originals.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults across Hanahan',
        cards: [
          { title: 'Builder-grade springs', body: 'The original springs tire first. We replace them in matched pairs and can fit higher-cycle springs that last noticeably longer.' },
          { title: 'Noisy steel rollers', body: 'Builder-grade steel rollers wear and get loud. Sealed nylon rollers run quietly and last years longer.' },
          { title: 'Opener faults', body: 'Worn gears, a failed board, a blocked safety eye or a dead remote are the usual causes, and most are an affordable repair.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why Hanahan homeowners choose a local team',
        items: [
          { title: 'We know the hardware', body: 'We see the same builder-grade springs and rollers across Hanahan, so we know what wears first and what is worth upgrading.' },
          { title: 'A check before it fails', body: 'If neighbours are replacing springs, yours are likely on a similar timeline, and a quick inspection catches it early.' },
          { title: 'Upgrades worth doing once', body: 'Fitting higher-cycle springs and nylon rollers at the first repair usually saves a repeat visit later.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What a Hanahan repair costs, and how fast',
        lead: 'A few things decide the price and how quickly we can help.',
        bullets: [
          { label: 'The failed part', text: 'A roller or safety eye is a small job; springs, cables or a control board take more parts and time.' },
          { label: 'Upgrade or like-for-like', text: 'Higher-cycle springs and nylon rollers cost a little more but outlast the builder-grade originals.' },
          { label: 'Door weight', text: 'Insulated and double-wide doors need stronger parts and careful re-balancing.' },
          { label: 'Urgency', text: 'Same-day appointments are available most days, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover North Charleston, Goose Creek and Daniel Island nearby. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'North Charleston', slug: 'north-charleston-sc' },
      { name: 'Goose Creek', slug: 'goose-creek-sc' },
      { name: 'Daniel Island', slug: 'daniel-island-sc' },
    ],
    poiIntro:
      'We cover Hanahan from Tanner Plantation and Eagle Landing through the Yeamans Hall and Foster Creek areas.',
    poiBody:
      'Neighbourhoods like Tanner Plantation and Eagle Landing were built close together in time, so when one street starts needing springs and openers, the rest are often not far behind. That makes a quick inspection worthwhile before a door gives out.',
    pois: ['Tanner Plantation', 'Eagle Landing', 'Yeamans Hall', 'Foster Creek'],
    faqs: [
      { q: 'Do you repair garage doors in Hanahan?', a: 'Yes. We cover Hanahan from Tanner Plantation and Eagle Landing through Yeamans Hall and Foster Creek, for springs and cables, openers, off-track doors, panels and replacements.' },
      { q: 'Why do whole streets seem to need springs around the same time?', a: 'Many Hanahan neighbourhoods were built within a few years of each other using similar builder-grade hardware, so springs and openers reach the end of their life on a similar schedule.' },
      { q: 'Is it worth upgrading my springs and rollers?', a: 'Usually, yes. Higher-cycle springs and sealed nylon rollers cost a little more than builder-grade replacements but last considerably longer and run more quietly, so the upgrade often pays off.' },
      { q: 'Can you fix a door that reverses or will not close?', a: 'Often that is a blocked or misaligned safety eye, a travel-limit setting or a worn gear. We diagnose the opener and usually put it right the same visit.' },
      { q: 'Will I get the price before work begins?', a: 'Yes, in writing. Estimates for new doors and openers are free, and a repair visit may carry a diagnostic fee that is waived once you approve the work.' },
    ],
  },

  'isle-of-palms-sc': {
    cityName: 'Isle of Palms',
    metaTitle: 'Garage Door Repair in Isle of Palms - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in Isle of Palms? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in Isle of Palms',
    heroDesc:
      'On Isle of Palms we work on elevated beach homes and Wild Dunes rentals, replacing salt-corroded springs and cables and servicing the high-lift openers that raised houses rely on.',
    whyLede:
      'Isle of Palms is largely elevated beach homes and Wild Dunes rental properties. Salt air corrodes hardware quickly, and raised houses often have little ceiling room, so high-lift openers are common. We fit corrosion-resistant parts and work around rental changeovers.',
    whyPoints: ['Corrosion-resistant hardware and high-lift openers for raised homes', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'Salt, sand and high-lift openers on Isle of Palms',
        image: true,
        paras: [
          'Salt exposure corrodes springs, cables, tracks and fasteners quickly here, so repairs often mean replacing rusted parts before they fail outright.',
          'Many island homes are raised with little headroom, so high-lift and wall-mount jackshaft openers are common. We repair and set them so the door runs safely.',
          'We fit corrosion-resistant hardware, clear sand from the tracks, and cycle-test the door so it runs cleanly in the beach air.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults on Isle of Palms homes',
        cards: [
          { title: 'Corroded springs and cables', body: 'Salt rusts springs and cables from the inside. We replace them in matched pairs with corrosion-resistant parts.' },
          { title: 'High-lift and wall-mount openers', body: 'Raised homes with little ceiling room run high-lift or jackshaft openers. We repair and adjust them so the door lifts safely.' },
          { title: 'Grit-worn rollers', body: 'Sand and salt wear rollers rough until the door drags. Sealed nylon rollers run smoother and resist the grit.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why Isle of Palms owners and hosts call a local team',
        items: [
          { title: 'Built for the beach', body: 'We fit corrosion-resistant hardware as standard, because ordinary steel rusts out fast this close to the surf.' },
          { title: 'At home on raised houses', body: 'High-lift and wall-mount openers on elevated homes are routine for us, not a special case.' },
          { title: 'Rental-aware scheduling', body: 'We work around Wild Dunes and rental changeovers where we can, so a repair does not block a booking.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What shapes the cost of an Isle of Palms repair',
        lead: 'A few things decide the price and how soon the door is working again.',
        bullets: [
          { label: 'How far the rust has gone', text: 'A lightly corroded part is a quick swap; a seized system needs more hardware replaced.' },
          { label: 'Hardware grade', text: 'Corrosion-resistant springs, rollers and fasteners cost a little more but last far longer in salt air.' },
          { label: 'Opener setup', text: 'High-lift and wall-mount openers on raised homes can take a little longer to set correctly.' },
          { label: 'Rental timing', text: 'We work around changeovers where we can, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      "We also cover Sullivan's Island and Mount Pleasant nearby. Browse all our service areas, or call and we will confirm we reach you.",
    nearby: [
      { name: "Sullivan's Island", slug: 'sullivans-island-sc' },
      { name: 'Mount Pleasant', slug: 'mount-pleasant-sc' },
    ],
    poiIntro:
      'We cover the whole island, from Wild Dunes and Front Beach to the homes along Palm Boulevard toward Breach Inlet.',
    poiBody:
      'From the Wild Dunes resort community to the homes near the county park and Breach Inlet, Isle of Palms is largely raised, salt-exposed construction. That shapes what we fit, from corrosion-resistant springs and cables to the high-lift and wall-mount openers raised homes need.',
    pois: ['Wild Dunes', 'Front Beach', 'Breach Inlet', 'Isle of Palms County Park'],
    faqs: [
      { q: 'Do you repair garage doors across Isle of Palms?', a: 'Yes. We cover the whole island, from Wild Dunes and Front Beach to the homes toward Breach Inlet, for spring and cable work, openers, off-track doors and replacements.' },
      { q: 'My elevated home has no ceiling room for a standard opener. Can you help?', a: 'Yes. High-lift and wall-mount jackshaft openers are made for raised homes with little headroom, and we both repair and install them.' },
      { q: 'Does salt air really shorten the life of the hardware?', a: 'Yes. Direct salt exposure corrodes ordinary springs, cables, tracks and fasteners from the inside, which is why we fit corrosion-resistant hardware here as standard.' },
      { q: 'Can you fit a repair around a Wild Dunes rental turnover?', a: 'We schedule around check-in and check-out windows where we can. Tell us your changeover days when you book and we will do our best to work around them.' },
      { q: 'What is the one thing that extends hardware life here?', a: 'Choosing corrosion-resistant parts at the first repair, plus an occasional fresh-water rinse and light lubrication. We can point out what to keep an eye on.' },
    ],
  },

  'james-island-sc': {
    cityName: 'James Island',
    metaTitle: 'Garage Door Repair in James Island - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in James Island? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in James Island',
    heroDesc:
      'James Island sits in humid, marsh air that rusts ordinary hardware. We fix springs, openers and tracks with galvanized and stainless parts chosen to stand up to it.',
    whyLede:
      'James Island is established neighbourhoods and newer homes alike, all sitting in humid, marsh air rather than open surf. That damp still corrodes ordinary steel, so we specify galvanized tracks, sealed nylon rollers and stainless fasteners so the fix lasts.',
    whyPoints: ['Galvanized, corrosion-resistant hardware for marsh-air homes', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'How marsh air shapes garage door repair on James Island',
        image: true,
        paras: [
          'Humidity and marsh air corrode standard steel more slowly than open beachfront but faster than inland, so over time springs, cables, tracks and fasteners rust and stiffen.',
          'Alongside that we see the usual worn rollers, opener gears and off-track doors, just with corrosion in the picture.',
          'We fit galvanized and stainless-grade parts, re-balance the door and cycle-test it so it runs cleanly.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults across James Island',
        cards: [
          { title: 'Rust-stiffened springs and cables', body: 'Marsh damp works into springs and cables over time. We replace them in matched pairs with corrosion-resistant parts.' },
          { title: 'Rusted tracks and rollers', body: 'Standard steel rollers and tracks rust and bind. We fit sealed nylon rollers and galvanized track that hold up to the damp.' },
          { title: 'Openers and off-track doors', body: 'Worn gears, safety-eye faults and doors off the rail are common, and we reset and repair them safely.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why James Island homeowners choose a local team',
        items: [
          { title: 'Specified for the damp', body: 'Galvanized tracks, sealed nylon rollers and stainless fasteners are worth fitting here, and we use them as standard.' },
          { title: 'Established and newer homes alike', body: 'From older neighbourhoods to newer builds, we match parts to the door in front of us rather than a stock kit.' },
          { title: 'Done in one visit', body: 'With the common parts on the van, a diagnosis usually becomes a finished repair the same day.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What a James Island repair costs, and how soon',
        lead: 'A few things decide the price and how quickly we can help.',
        bullets: [
          { label: 'How far the corrosion has gone', text: 'A lightly rusted part is a quick swap; a seized system needs more hardware replaced.' },
          { label: 'Hardware grade', text: 'Galvanized and stainless-grade parts cost a little more but last far longer in marsh air.' },
          { label: 'The failed part', text: 'A roller or safety eye is a small job; springs, cables or a control board take more time.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover Folly Beach, Johns Island and West Ashley nearby. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'Folly Beach', slug: 'folly-beach-sc' },
      { name: 'Johns Island', slug: 'johns-island-sc' },
      { name: 'West Ashley', slug: 'west-ashley-sc' },
    ],
    poiIntro:
      'We cover James Island from Riverland Terrace and Harbor View to Fort Johnson, Stiles Point and Clarks Point.',
    poiBody:
      'Riverland Terrace, Harbor View, Fort Johnson and Stiles Point all sit in the humid, marsh air of the island, which corrodes standard steel hardware over time. Wherever a home sits, galvanized tracks, sealed nylon rollers and stainless fasteners are worth specifying so the repair lasts.',
    pois: ['Riverland Terrace', 'Fort Johnson', 'Harbor View', 'Stiles Point'],
    faqs: [
      { q: 'Do you repair garage doors on James Island?', a: 'Yes. We cover James Island from Riverland Terrace and Harbor View to Fort Johnson and Stiles Point, for springs and cables, openers, off-track doors and replacements.' },
      { q: 'Does marsh air really affect a garage door?', a: 'Yes, over time. Humidity and marsh air corrode standard steel springs, cables, tracks and fasteners faster than inland, which is why we fit galvanized and stainless-grade hardware here.' },
      { q: 'My rollers and tracks are rusty and the door sticks. Can that be fixed?', a: 'Usually, yes. We clean and realign the track, replace rusted rollers with sealed nylon, and only replace the track itself if it is too far gone.' },
      { q: 'How can I slow the corrosion down?', a: 'Keep the tracks clean, lubricate the rollers and hinges a couple of times a year, and choose corrosion-resistant parts when something needs replacing. We can show you the points to check.' },
      { q: 'Are estimates free?', a: 'Estimates for new doors and openers are free. A repair visit may carry a diagnostic fee, disclosed when you book and waived once you approve the work.' },
    ],
  },

  'johns-island-sc': {
    cityName: 'Johns Island',
    metaTitle: 'Garage Door Repair in Johns Island - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in Johns Island? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in Johns Island',
    heroDesc:
      'From Maybank Highway to River Road, we repair springs, openers and off-track doors on everything from homes to workshops and barns, including the oversized openings we measure on site.',
    whyLede:
      'Johns Island mixes older homesteads with new subdivisions, and detached workshops, barns and outbuildings are common. Many run oversized or non-standard openings, so we measure on site rather than assuming a stock door or spring will fit.',
    whyPoints: ['On-site measuring for oversized and non-standard openings', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'Repairing oversized and non-standard doors on Johns Island',
        image: true,
        paras: [
          'Johns Island has everything from original homesteads to new subdivisions, plus detached workshops and barns, so the doors and openings vary far more than a typical neighbourhood.',
          'Many openings are oversized or non-standard, which is why we measure on site rather than assuming a stock door or spring will fit.',
          'We handle springs, cables, openers and off-track doors, re-balance the door and cycle-test it before we leave.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults across Johns Island',
        cards: [
          { title: 'Springs sized to the door', body: 'Oversized and heavy doors need springs matched to their weight. We measure and fit the right spring rather than a generic one.' },
          { title: 'Openers for big doors', body: 'Large and barn-style doors need enough opener power. We repair and set openers that can handle the weight.' },
          { title: 'Off-track doors and worn rollers', body: 'Older and oversized openings are prone to doors jumping the track. We reset them safely and fix the underlying cause.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why Johns Island homeowners choose a local team',
        items: [
          { title: 'We measure, not assume', body: 'Oversized and non-standard openings are common here, so we measure on site and fit parts matched to your door.' },
          { title: 'Workshops and outbuildings', body: 'Detached garages, workshops and barn-style doors are routine for us, not an exception.' },
          { title: 'Done in one visit', body: 'Most call-outs become a finished, cycle-tested repair in a single visit.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What shapes the cost of a Johns Island repair',
        lead: 'A few things decide the price and how soon the door is working again.',
        bullets: [
          { label: 'Door size', text: 'Oversized and barn-style doors need stronger springs and heavier hardware than a standard door.' },
          { label: 'The failed part', text: 'A roller or safety eye is a small job; springs, cables or a control board take more time.' },
          { label: 'Standard or custom', text: 'A stock-size door is quicker; a non-standard opening may need parts ordered to fit.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover James Island, West Ashley and Folly Beach nearby. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'James Island', slug: 'james-island-sc' },
      { name: 'West Ashley', slug: 'west-ashley-sc' },
      { name: 'Folly Beach', slug: 'folly-beach-sc' },
    ],
    poiIntro:
      'We cover Johns Island from the Maybank Highway corridor and River Road to the Fenwick Hall area and the newer subdivisions.',
    poiBody:
      'Johns Island mixes older homesteads along River Road with newer subdivisions near the Maybank Highway corridor, plus plenty of detached workshops and barns. Because openings here are often oversized or non-standard, we measure on site rather than assuming a stock door or spring will fit.',
    pois: ['Maybank Highway', 'Fenwick Hall', 'River Road', 'The Villages in St. Johns Woods'],
    faqs: [
      { q: 'Do you repair garage doors on Johns Island?', a: 'Yes. We cover Johns Island from the Maybank Highway corridor to River Road and the newer subdivisions, for springs and cables, openers, off-track doors and replacements.' },
      { q: 'My garage opening is an unusual size. Can you still help?', a: 'Yes. Oversized and non-standard openings are common on Johns Island, so we measure on site and fit springs and doors matched to your opening rather than a stock size.' },
      { q: 'Do you work on detached workshops and barns?', a: 'Yes. Detached garages, workshops and barn-style doors are routine for us, including the heavier springs and openers larger doors need.' },
      { q: 'My big door is too heavy for its opener. What are the options?', a: 'Either the opener is underpowered for the door or the springs have weakened. We check the balance first, since a correctly sprung door takes most of the load off the opener.' },
      { q: 'Do you charge for an estimate?', a: 'Estimates for new doors and openers are free. A repair visit may carry a diagnostic fee, disclosed up front and waived once you approve the work.' },
    ],
  },

  'ladson-sc': {
    cityName: 'Ladson',
    metaTitle: 'Garage Door Repair in Ladson - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in Ladson? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in Ladson',
    heroDesc:
      "Across Ladson's subdivisions we fix springs, openers, worn rollers and off-track doors, on everything from established homes to newer builds.",
    whyLede:
      'Ladson spans subdivisions of mixed ages, from longer-established streets to newer builds, so the doors we see range from worn originals to builder-grade hardware just starting to tire. We diagnose what is actually wrong and fix it properly the first time.',
    whyPoints: ['Repairs and upgrades for doors of every age and condition', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'The range of garage door faults we see in Ladson',
        image: true,
        paras: [
          'Ladson is a mix of established subdivisions and newer builds, so we see everything from worn original springs and openers to builder-grade hardware just starting to tire.',
          'The usual faults are tiring springs, noisy rollers, opener gears and safety-eye problems, and the occasional off-track door.',
          'We find the real cause on site, fit parts matched to your door, and re-balance and cycle-test it before we leave.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults across Ladson',
        cards: [
          { title: 'Worn or broken springs', body: 'Springs wear with use until the door turns heavy or stops lifting. We replace them in matched pairs and re-tension the system.' },
          { title: 'Opener faults', body: 'Worn gears, a failed board, a blocked safety eye or a dead remote are the usual opener problems, and most are an affordable repair.' },
          { title: 'Noisy rollers and off-track doors', body: 'Worn rollers get loud and can let a door jump the track. We fit sealed nylon rollers and reset the door safely.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why Ladson homeowners choose a local team',
        items: [
          { title: 'Older and newer homes alike', body: 'We work on worn original doors and newer builder-grade hardware every week, so we know what tends to fail on each.' },
          { title: 'Parts matched to the door', body: 'Springs and rollers are sized to your specific door so it stays balanced and the opener is not overworked.' },
          { title: 'Done in one visit', body: 'Most diagnoses become a finished, cycle-tested repair the same day.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What a Ladson repair costs, and how soon',
        lead: 'A few things decide the price and how soon the door is working again.',
        bullets: [
          { label: 'The failed part', text: 'A roller or safety eye is a small job; springs, cables or a control board take more parts and time.' },
          { label: 'Door age', text: 'An older door may need a few worn parts replaced together; a newer one is often a single fault.' },
          { label: 'Repair or replace', text: 'If a door is past economical repair, we quote a replacement alongside it so you can compare.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover Summerville, Goose Creek and North Charleston nearby. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'Summerville', slug: 'summerville-sc' },
      { name: 'Goose Creek', slug: 'goose-creek-sc' },
      { name: 'North Charleston', slug: 'north-charleston-sc' },
    ],
    poiIntro:
      'We cover Ladson along the College Park Road corridor and through the Coosaw Creek, Wescott Plantation and Oakbrook areas.',
    poiBody:
      'Ladson is settled residential territory, from the College Park Road corridor through Coosaw Creek and Oakbrook, with subdivisions built across a range of years. That mix is why we see such a spread of door conditions, from worn originals to newer builder-grade hardware.',
    pois: ['College Park Road', 'Coosaw Creek', 'Wescott Plantation', 'Oakbrook'],
    faqs: [
      { q: 'Do you repair garage doors in Ladson?', a: 'Yes. We cover Ladson along the College Park Road corridor and through Coosaw Creek and Oakbrook, for springs and cables, openers, off-track doors and replacements.' },
      { q: 'My garage door is old. Is it worth repairing or replacing?', a: 'It depends on the door. On a sound older door a repair makes sense; if several parts are worn at once or the door itself is failing, we will quote a replacement so you can compare the value.' },
      { q: 'The door is noisy and shakes when it opens. What causes that?', a: 'Usually worn steel rollers, dry hinges or loose hardware. Sealed nylon rollers and a proper service quieten most doors considerably.' },
      { q: 'Can you replace just one damaged section?', a: 'Often, yes. If a single panel is dented we can usually replace that section rather than the whole door, provided the model and colour can still be matched.' },
      { q: 'Will I know the cost before you start?', a: 'Yes, in writing. Estimates for new doors and openers are free, and a repair visit may carry a diagnostic fee that is waived once you approve the work.' },
    ],
  },

  'mount-pleasant-sc': {
    cityName: 'Mount Pleasant',
    metaTitle: 'Garage Door Repair in Mount Pleasant - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in Mount Pleasant? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in Mount Pleasant',
    heroDesc:
      'From the Old Village to Park West and Carolina Park, we replace the builder-grade springs, rollers and openers that newer Mount Pleasant subdivisions tend to wear out, and upgrade them to last.',
    whyLede:
      'Mount Pleasant runs from the historic Old Village to large newer communities like Park West and Carolina Park. Those newer subdivisions were built with builder-grade springs and steel rollers that tend to start failing around year six or seven, so if your neighbours are replacing springs, yours are on a similar clock.',
    whyPoints: ['High-cycle upgrades for failing builder-grade springs and rollers', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'Why builder-grade doors fail across Mount Pleasant',
        image: true,
        paras: [
          'Much of Mount Pleasant is newer subdivisions built with builder-grade springs and steel rollers, which tend to start failing around year six or seven.',
          'So the faults we see most are tiring springs, noisy rollers and openers needing a gear or safety-eye fix, often across a whole neighbourhood at once.',
          'We diagnose the real cause, offer high-cycle spring and nylon roller upgrades, and re-balance and cycle-test the door before we leave.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults across Mount Pleasant',
        cards: [
          { title: 'Builder-grade springs', body: 'Original springs tire around year six or seven. We replace them in matched pairs and can upgrade to higher-cycle springs.' },
          { title: 'Steel rollers', body: 'Builder-grade steel rollers get loud and wear fast. Sealed nylon rollers run quieter and last years longer.' },
          { title: 'Opener faults', body: 'A worn drive gear, a failed logic board or a misaligned safety eye usually stops the opener, and is normally an affordable fix.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why Mount Pleasant homeowners choose a local team',
        items: [
          { title: 'We know the subdivisions', body: 'We see the same builder-grade hardware fail across Mount Pleasant newer communities, so we know what to check and what to upgrade.' },
          { title: 'A check before it fails', body: 'If your neighbours are replacing springs, yours are likely on the same timeline, and a quick inspection catches it early.' },
          { title: 'Historic and new homes', body: 'From Old Village cottages to the newest subdivisions, we match the parts and the approach to the door.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What shapes the cost of a Mount Pleasant repair',
        lead: 'A few things decide the price and how quickly we can help.',
        bullets: [
          { label: 'The failed part', text: 'A roller or safety eye is a small job; springs, cables or a control board take more time.' },
          { label: 'Upgrade or like-for-like', text: 'High-cycle springs and nylon rollers cost a little more but outlast the builder-grade originals.' },
          { label: 'Door weight', text: 'Insulated and double-wide doors need stronger parts and careful re-balancing.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      "We also cover Daniel Island, Isle of Palms and Sullivan's Island nearby. Browse all our service areas, or call and we will confirm we reach you.",
    nearby: [
      { name: 'Daniel Island', slug: 'daniel-island-sc' },
      { name: 'Isle of Palms', slug: 'isle-of-palms-sc' },
      { name: "Sullivan's Island", slug: 'sullivans-island-sc' },
    ],
    poiIntro:
      'We cover Mount Pleasant from Old Village and I’On through Park West, Carolina Park and Belle Hall.',
    poiBody:
      'From the historic Old Village to newer communities like Park West and Carolina Park, much of Mount Pleasant is recent construction built with builder-grade springs and steel rollers. Those tend to start failing around year six or seven, so if your neighbours are replacing springs, yours are likely on a similar clock.',
    pois: ['Old Village', 'I’On', 'Park West', 'Carolina Park', 'Belle Hall'],
    faqs: [
      { q: 'Do you repair garage doors in Mount Pleasant?', a: 'Yes. We cover Mount Pleasant from Old Village through Park West and Carolina Park, for springs and cables, openers, off-track doors, panels and replacements.' },
      { q: 'Why do springs in newer Mount Pleasant homes fail around the same age?', a: 'Many newer subdivisions were built with builder-grade springs and steel rollers that tend to start failing around year six or seven, so neighbours often need them around the same time.' },
      { q: 'Can you upgrade my builder-grade hardware?', a: 'Yes. We fit high-cycle springs and sealed nylon rollers that run quieter and outlast the originals, which is usually worth doing at the first repair.' },
      { q: 'Do you work on older Old Village doors too?', a: 'Yes. Older and custom doors are no problem; we match parts to the door and, where a door is beyond repair, fit a replacement in a suitable style.' },
      { q: 'Are estimates free?', a: 'Estimates for new doors and openers are free. A repair visit may carry a diagnostic fee, disclosed when you book and waived once you approve the work.' },
    ],
  },

  'north-charleston-sc': {
    cityName: 'North Charleston',
    metaTitle: 'Garage Door Repair in North Charleston - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in North Charleston? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in North Charleston',
    heroDesc:
      'From the bungalows of Park Circle to the Northwoods area, we handle residential and commercial garage doors across North Charleston, fixing springs, cables, openers and off-track doors.',
    whyLede:
      'North Charleston is large and varied, from the established bungalows of Park Circle to Northwoods and the newer areas, with both homes and businesses. We cover residential and commercial garage doors across the city.',
    whyPoints: ['Residential and commercial garage doors across the city', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'Repairing homes and businesses across North Charleston',
        image: true,
        paras: [
          'North Charleston covers a lot of ground, from the older bungalows around Park Circle to Northwoods and the newer subdivisions, so the doors range from decades-old to recent builds.',
          'On older homes we often replace worn springs, cables and openers; on newer ones it is usually builder-grade hardware starting to tire.',
          'We diagnose the real cause on site, fit parts matched to the door, and re-balance and cycle-test it before we leave.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults across North Charleston',
        cards: [
          { title: 'Springs and cables', body: 'A broken spring or frayed cable makes the door too heavy to lift. We replace them in matched pairs and re-tension the system.' },
          { title: 'Openers', body: 'Worn gears, a failed board, a blocked safety eye or a dead remote are the usual opener faults, and most are an affordable repair.' },
          { title: 'Off-track and worn rollers', body: 'Worn rollers get loud and can let a door jump the track. We fit sealed nylon rollers and reset the door safely.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why North Charleston homeowners and businesses call us',
        items: [
          { title: 'Homes and businesses', body: 'We cover residential and commercial garage doors, so one local team can look after both.' },
          { title: 'Older and newer stock', body: 'From decades-old bungalows to new subdivisions, we match the parts and the fix to the door in front of us.' },
          { title: 'Done in one visit', body: 'Most call-outs are diagnosed and repaired in a single visit.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What a North Charleston repair costs, and how soon',
        lead: 'A few things decide the price and how quickly we can help.',
        bullets: [
          { label: 'The failed part', text: 'A roller or safety eye is a small job; springs, cables or a control board take more parts and time.' },
          { label: 'Residential or commercial', text: 'A home door and a larger commercial door are different jobs, with different parts and labour.' },
          { label: 'Door age', text: 'Older doors may need several worn parts replaced together; newer ones are often a single fault.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover Hanahan, Daniel Island and Ladson nearby. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'Hanahan', slug: 'hanahan-sc' },
      { name: 'Daniel Island', slug: 'daniel-island-sc' },
      { name: 'Ladson', slug: 'ladson-sc' },
    ],
    poiIntro:
      'We cover North Charleston from Park Circle and Northwoods to the Rivers Avenue and Ashley Phosphate areas.',
    poiBody:
      'North Charleston spans everything from the established bungalows of Park Circle and Northwoods homes to the busy Rivers Avenue and Ashley Phosphate corridors. Across that mix we handle both residential and commercial garage doors.',
    pois: ['Park Circle', 'Rivers Avenue corridor', 'Ashley Phosphate', 'Northwoods', 'Tanger Outlets area'],
    faqs: [
      { q: 'Do you repair garage doors in North Charleston?', a: 'Yes. We cover North Charleston from Park Circle and Northwoods to the Rivers Avenue and Ashley Phosphate areas, for residential and commercial garage doors.' },
      { q: 'Do you handle commercial garage doors as well as homes?', a: 'Yes. We work on both residential and commercial garage doors across North Charleston. Tell us the door type and size when you call and we will come prepared.' },
      { q: 'My Park Circle bungalow has an old door. Can it be repaired?', a: 'Often, yes. On a sound older door we repair the worn parts; if the door itself is past its best, we will quote a modern replacement so you can compare.' },
      { q: 'The door closes then reverses straight back up. Why?', a: 'That is usually a blocked or misaligned safety eye, a travel-limit setting or debris on the floor. We diagnose the opener and normally correct it the same visit.' },
      { q: 'Do you charge for a quote?', a: 'Estimates for new doors and openers are free. A repair visit may carry a diagnostic fee, disclosed when you book and waived in full once you approve the work.' },
    ],
  },

  'sullivans-island-sc': {
    cityName: "Sullivan's Island",
    metaTitle: "Garage Door Repair in Sullivan's Island - Top Level",
    metaDescription:
      "Looking for Garage Door Repair in Sullivan's Island? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!",
    h1: "Garage Door Repair in Sullivan's Island",
    heroDesc:
      "Sullivan's Island is historic, mostly custom homes in constant salt air. We replace corroded springs and cables and service the high-lift openers that its elevated houses rely on.",
    whyLede:
      "Sullivan's Island is a historic, residential island of largely custom and older homes, with little of the rental turnover of its neighbours. The constant salt air still corrodes ordinary hardware, and many elevated homes need high-lift or wall-mount openers, so we fit corrosion-resistant parts and take care to suit each individual door.",
    whyPoints: ['Corrosion-resistant hardware and high-lift openers for island homes', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: "Salt air and historic homes on Sullivan's Island",
        image: true,
        paras: [
          'Direct salt exposure corrodes springs, cables, tracks and fasteners quickly, so repairs here often mean replacing rusted parts before they fail.',
          'Many homes are historic or custom and sit elevated with little ceiling room, so high-lift or wall-mount jackshaft openers are common, and the doors themselves are often one-off sizes.',
          'We fit corrosion-resistant hardware, size parts to each individual door, and cycle-test it so it runs cleanly in the island air.',
        ],
      },
      {
        layout: 'cards',
        h2: "Common garage door faults on Sullivan's Island homes",
        cards: [
          { title: 'Corroded springs and cables', body: 'Salt rusts springs and cables from the inside. We replace them in matched pairs with corrosion-resistant parts.' },
          { title: 'High-lift and wall-mount openers', body: 'Elevated homes with little headroom run high-lift or jackshaft openers. We repair and set them so the door lifts safely.' },
          { title: 'Custom and older doors', body: 'Historic homes often have one-off door sizes. We measure and fit parts to the specific door rather than a stock kit.' },
        ],
      },
      {
        layout: 'reasons',
        h2: "Why Sullivan's Island homeowners choose a local team",
        items: [
          { title: 'Built for salt air', body: 'We fit corrosion-resistant hardware as standard, because ordinary steel rusts out fast this close to the water.' },
          { title: 'At home on historic houses', body: 'Custom door sizes and high-lift openers on older, elevated homes are routine for us, not a special case.' },
          { title: 'Careful, tested work', body: 'We size parts to each door and cycle-test it before we leave, so a one-off door is treated as one.' },
        ],
      },
      {
        layout: 'twocol',
        h2: "What shapes the cost of a Sullivan's Island repair",
        lead: 'A few things decide the price and how soon the door is working again.',
        bullets: [
          { label: 'How far the rust has gone', text: 'A lightly corroded part is a quick swap; a seized system needs more hardware replaced.' },
          { label: 'Hardware grade', text: 'Corrosion-resistant springs, rollers and fasteners cost a little more but last far longer in salt air.' },
          { label: 'Custom sizing', text: 'A one-off or non-standard door may need parts ordered to fit, which can add a little time.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover Isle of Palms and Mount Pleasant nearby. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'Isle of Palms', slug: 'isle-of-palms-sc' },
      { name: 'Mount Pleasant', slug: 'mount-pleasant-sc' },
    ],
    poiIntro:
      "We cover the whole of Sullivan's Island, from Fort Moultrie and the lighthouse to Middle Street and the homes toward Breach Inlet.",
    poiBody:
      "From Fort Moultrie and the Sullivan's Island Lighthouse to the homes along Middle Street and out toward Breach Inlet, this is historic, elevated, salt-exposed territory with many one-off, custom homes. That makes corrosion-resistant hardware, high-lift openers and parts sized to the individual door the norm rather than the exception.",
    pois: ['Fort Moultrie', "Sullivan's Island Lighthouse", 'Middle Street', 'Breach Inlet'],
    faqs: [
      { q: "Do you repair garage doors on Sullivan's Island?", a: 'Yes. We cover the whole island, from Fort Moultrie and Middle Street to the homes toward Breach Inlet, for spring and cable work, openers, off-track doors and replacements.' },
      { q: 'My home is historic with an unusual door. Can you still help?', a: 'Yes. Custom and one-off door sizes are common on the island, so we measure on site and fit parts matched to your door rather than a stock kit.' },
      { q: 'My elevated home has no ceiling room for a standard opener. What are my options?', a: 'High-lift and wall-mount jackshaft openers are made for raised homes with little headroom, and we both repair and install them.' },
      { q: 'Does salt air affect doors here as much as on the beachfront?', a: "Yes. Sullivan's Island sits in the same direct salt air, so ordinary springs, cables and fasteners corrode quickly. We fit corrosion-resistant hardware as standard." },
      { q: 'Will I get the price in advance?', a: 'Yes, in writing. Estimates for new doors and openers are free, and a repair visit may carry a diagnostic fee that is waived once you approve the work.' },
    ],
  },

  'summerville-sc': {
    cityName: 'Summerville',
    metaTitle: 'Garage Door Repair in Summerville - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in Summerville? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in Summerville',
    heroDesc:
      'From the new-build communities of Nexton and Cane Bay to downtown Summerville, we replace the builder-grade springs, rollers and openers that wear sooner than owners expect, and upgrade them to last.',
    whyLede:
      'Summerville has grown fast, and new-build communities like Nexton and Cane Bay are almost entirely builder-grade hardware that wears sooner than owners expect. Upgrading to nylon rollers and a high-cycle spring at the first repair usually pays for itself within a few years.',
    whyPoints: ['High-cycle upgrades for fast-wearing new-build hardware', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'Why new-build doors need work sooner in Summerville',
        image: true,
        paras: [
          'Summerville has grown quickly, and new-build neighbourhoods like Nexton and Cane Bay are almost entirely builder-grade hardware that wears sooner than people expect.',
          'So the faults we see most are tiring springs, noisy steel rollers and openers needing a gear or safety-eye fix.',
          'We diagnose the real cause, offer nylon roller and high-cycle spring upgrades, and re-balance and cycle-test the door before we leave.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults across Summerville',
        cards: [
          { title: 'Builder-grade springs', body: 'New-build springs wear sooner than owners expect. We replace them in matched pairs and can fit higher-cycle springs.' },
          { title: 'Steel rollers', body: 'The steel rollers in new builds wear and get noisy early. Sealed nylon rollers run quietly and last far longer.' },
          { title: 'Opener faults', body: 'Opener trouble is usually a worn gear, a dead remote or a blocked safety eye, and most are an affordable repair rather than a replacement.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why Summerville homeowners choose a local team',
        items: [
          { title: 'We know new builds', body: 'We see the same builder-grade hardware across Summerville new communities, so we know what wears first and what is worth upgrading.' },
          { title: 'Upgrades that pay off', body: 'Nylon rollers and a high-cycle spring at the first repair usually pay for themselves within a few years.' },
          { title: 'New and older homes', body: 'From Nexton and Cane Bay to the older houses downtown, we match the parts and the fix to the door.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What a Summerville repair costs, and how soon',
        lead: 'A few things decide the price and how soon the door is working again.',
        bullets: [
          { label: 'The failed part', text: 'A roller or safety eye is a small job; springs, cables or a control board take more time.' },
          { label: 'Upgrade or like-for-like', text: 'High-cycle springs and nylon rollers cost a little more but outlast the builder-grade originals.' },
          { label: 'Door weight', text: 'Insulated and double-wide doors need stronger parts and careful re-balancing.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover Ladson and Goose Creek nearby. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'Ladson', slug: 'ladson-sc' },
      { name: 'Goose Creek', slug: 'goose-creek-sc' },
    ],
    poiIntro:
      'We cover Summerville from Nexton and Cane Bay to downtown Summerville, Legend Oaks and the Wescott area.',
    poiBody:
      'From the fast-growing Nexton and Cane Bay communities to downtown Summerville and Legend Oaks, much of the town is recent construction fitted with builder-grade hardware. Upgrading to nylon rollers and a high-cycle spring at the first repair usually pays for itself within a few years.',
    pois: ['Nexton', 'Cane Bay', 'Downtown Summerville', 'Legend Oaks', 'Wescott'],
    faqs: [
      { q: 'Do you repair garage doors in Summerville?', a: 'Yes. We cover Summerville from Nexton and Cane Bay to downtown and Legend Oaks, for springs and cables, openers, off-track doors, panels and replacements.' },
      { q: 'My home is a new build. Why does the garage door already need work?', a: 'New-build communities are almost entirely builder-grade hardware, which wears sooner than people expect. Upgrading to nylon rollers and a high-cycle spring usually pays for itself within a few years.' },
      { q: 'What is the difference between builder-grade and high-cycle springs?', a: 'Builder-grade springs are rated for fewer open-close cycles, so they tire sooner. High-cycle springs cost a little more but last considerably longer before they need replacing.' },
      { q: 'Do you work on older downtown Summerville homes too?', a: 'Yes. Older and custom doors are no problem; we match parts to the door and fit a suitable replacement where one is beyond economical repair.' },
      { q: 'Are estimates free?', a: 'Estimates for new doors and openers are free. A repair visit may carry a diagnostic fee, disclosed when you book and waived once you approve the work.' },
    ],
  },

  'west-ashley-sc': {
    cityName: 'West Ashley',
    metaTitle: 'Garage Door Repair in West Ashley - Top Level',
    metaDescription:
      'Looking for Garage Door Repair in West Ashley? Top Level Garage Door handles door malfunctions, uneven movement, and sudden breakdowns. Call us today!',
    h1: 'Garage Door Repair in West Ashley',
    heroDesc:
      'A lot of West Ashley homes date to the 1960s and 70s, so alongside everyday repairs we give honest advice on when an aging one-piece door is better replaced than patched.',
    whyLede:
      'A good deal of West Ashley housing stock dates to the 1960s and 70s, which means original one-piece tilt-up doors and openers well past their prime. On those, we give honest repair-or-replace advice rather than patching a door that will fail again.',
    whyPoints: ['Honest repair-or-replace advice on older doors', ...TRUST],
    seoSections: [
      {
        layout: 'split',
        h2: 'Older doors and honest advice in West Ashley',
        image: true,
        paras: [
          'A lot of West Ashley homes date to the 1960s and 70s, so we still see original one-piece tilt-up doors and openers that are well past their prime.',
          'On those older doors a repair can be a false economy, so we give honest advice on whether a repair will hold or a modern sectional door is better value.',
          'On newer West Ashley homes it is the usual springs, cables, rollers and opener faults, which we fix and cycle-test on site.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Common garage door faults across West Ashley',
        cards: [
          { title: 'Aging one-piece doors', body: 'Original tilt-up doors and their openers are often past their prime. We advise honestly on repair versus a modern sectional door.' },
          { title: 'Springs and cables', body: 'A broken spring or frayed cable makes the door too heavy to lift. We replace them in matched pairs and re-tension the system.' },
          { title: 'Openers and rollers', body: 'Worn gears, dead remotes and noisy rollers are common on older and newer doors alike, and usually an affordable repair.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why West Ashley homeowners choose a local team',
        items: [
          { title: 'Honest repair-or-replace', body: 'On older West Ashley doors we tell you plainly when a repair will hold and when a replacement is the better value.' },
          { title: 'Old and new doors alike', body: 'From 1960s tilt-up doors to newer sectional ones, we have the parts and the know-how for both.' },
          { title: 'Done in one visit', body: 'Most diagnoses become a finished, cycle-tested repair the same day.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What shapes the cost of a West Ashley repair',
        lead: 'A few things decide the price and how quickly we can help.',
        bullets: [
          { label: 'Door age and type', text: 'An older one-piece tilt-up door can cost more to keep patching than to replace with a modern sectional.' },
          { label: 'The failed part', text: 'A roller or safety eye is a small job; springs, cables or a control board take more time.' },
          { label: 'Repair or replace', text: 'Where it is a close call we quote both, so you can choose the better value.' },
          { label: 'Urgency', text: 'Same-day appointments are usually available, and genuine emergencies are handled around the clock.' },
        ],
      },
    ],
    serviceAreasIntro:
      'We also cover James Island and Johns Island nearby. Browse all our service areas, or call and we will confirm we reach you.',
    nearby: [
      { name: 'James Island', slug: 'james-island-sc' },
      { name: 'Johns Island', slug: 'johns-island-sc' },
    ],
    poiIntro:
      'We cover West Ashley from Avondale and Byrnes Downs to Shadowmoss, Drayton and the Highway 61 corridor.',
    poiBody:
      'From Avondale and Byrnes Downs to Shadowmoss and the Highway 61 corridor, a lot of West Ashley housing stock dates to the 1960s and 70s. On those older one-piece tilt-up doors a repair can be a false economy, so we give honest advice on whether to repair or replace.',
    pois: ['Avondale', 'Byrnes Downs', 'Shadowmoss', 'Drayton', 'Citadel Mall area'],
    faqs: [
      { q: 'Do you repair garage doors in West Ashley?', a: 'Yes. We cover West Ashley from Avondale and Byrnes Downs to Shadowmoss and the Highway 61 corridor, for springs and cables, openers, off-track doors and replacements.' },
      { q: 'My garage door is very old. Is it worth repairing?', a: 'On a sound older door, yes. But on an original one-piece tilt-up door a repair can be a false economy, and we will tell you honestly when a modern sectional door is better value.' },
      { q: 'What is the difference between a one-piece and a sectional door?', a: 'A one-piece tilt-up door swings out as a single slab; a modern sectional door lifts in panels on tracks. Sectionals are safer, better insulated and easier to automate, which is why most replacements are sectional.' },
      { q: 'Can you reuse my old opener with a new door?', a: 'Sometimes, if it is in good order and powerful enough. More often an aging opener is best replaced alongside the door, and we will tell you which applies.' },
      { q: 'Do you charge for an estimate?', a: 'Estimates for new doors and openers are free. A repair visit may carry a diagnostic fee, disclosed up front and waived in full once you approve the work.' },
    ],
  },
};

export const getLocationPage = (slug) => locationPages[slug];
export const hasLocationPage = (slug) => Object.prototype.hasOwnProperty.call(locationPages, slug);
