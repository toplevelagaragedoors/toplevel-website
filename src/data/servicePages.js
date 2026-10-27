// ---------------------------------------------------------------------------
// Long-form content for individual service pages (/services/:slug).
//
// This is PAGE-SPECIFIC content, kept separate from the service summary list in
// site.js so the existing `services` array (used by the nav, carousels, footer
// and lead form) keeps its shape. ServiceDetail.jsx merges a base service from
// site.js with the matching entry here.
//
// Only slugs that appear here get a built, prerendered detail page. Everything
// else still folds up to /services via public/_redirects. Add a slug here (and
// to allRoutes in App.jsx) to publish the next page.
//
// Accuracy rules: no invented prices, timeframes, guarantees, awards, reviews
// or local claims. Business facts reuse what the site already states.
// ---------------------------------------------------------------------------

export const servicePages = {
  'springs-replacement': {
    primaryKeyword: 'garage door spring replacement',
    secondaryKeyword: 'garage door springs replacement',

    metaTitle: 'Garage Door Spring Replacement Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door spring replacement in Charleston, fixing snapped torsion springs and worn extension springs. Call us today!',

    h1: 'Professional Garage Door Spring Replacement',
    // Hero description: 25 words, primary keyword used naturally.
    heroDesc:
      'When a spring snaps, your garage door turns heavy, loud, or stuck. Our garage door spring replacement gets it working safely, often the same day.',

    // Why Choose Us: feeds the shared homepage "why" section, tailored to this
    // service. Verified points only, consistent with the rest of the site.
    whyLede:
      'A broken spring is one of the most common and most dangerous garage door failures. We size the right spring, fit it safely, and re-balance the door so it opens the way it should.',
    whyPoints: [
      'Licensed, insured and bonded, with proof on request',
      'Springs matched and sized to your specific door',
      'Same-day spring replacement across the Lowcountry',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Door re-balanced and cycle-tested after the springs are fitted',
    ],

    // What we offer: the genuine scope of this one service (six, for a uniform grid).
    servicesScope: [
      'Torsion spring replacement for standard and heavy, double-wide doors',
      'Extension spring replacement with safety cables where fitted',
      'Matched-pair replacement so both springs wear evenly',
      'High-cycle spring upgrades for doors used many times a day',
      'A full check of cables, drums and bearings while the door is open',
      'Door re-balancing and a full cycle test after the new springs are fitted',
    ],

    // Related services shown as a grid (links go to the Services hub only;
    // detail pages for these are not built yet). Slugs must exist in site.js.
    relatedSlugs: [
      'opener-repair',
      'off-track-repair',
      'rollers-replacement',
      'tracks-replacement',
      'hinges-replacement',
      'panels-repair',
    ],

    // Four distinct SEO content sections, each with its own layout.
    seoSections: [
      {
        layout: 'split',
        h2: 'Common signs your garage door springs need replacing soon',
        image: true,
        paras: [
          'A broken spring shows itself fast. The most obvious sign is a door that suddenly feels far too heavy to lift by hand, or an opener that strains, hums, and then gives up partway.',
          'Look along the spring bar above the door. A clear gap in the coil, a spring that has separated into two pieces, or a loud bang from the garage are all classic signs of a failed torsion spring.',
          'Other warnings are quieter: the door opens crookedly, closes faster than usual, or the cables hang loose. If you notice any of these, stop using the door and call us before forcing it.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Torsion and extension springs: which type your door uses',
        cards: [
          {
            title: 'Torsion springs',
            body: 'Mounted on a metal bar above the door, torsion springs wind and unwind to lift the weight. Most modern doors use them because they balance the door more smoothly and tend to last longer.',
          },
          {
            title: 'Extension springs',
            body: 'These run along the horizontal tracks on either side and stretch as the door closes. Older and lighter doors often use them, and they should always have a safety cable through the center.',
          },
          {
            title: 'Matched to your door',
            body: 'Spring size depends on the door weight, height and drum. We measure and match the right spring rather than fitting whatever is on the truck, so the door stays balanced.',
          },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why garage door spring replacement is a job for professionals',
        items: [
          {
            title: 'Springs hold extreme tension',
            body: 'A wound torsion spring stores enough energy to cause serious injury if it is released without the correct winding bars and technique.',
          },
          {
            title: 'Balance protects the whole system',
            body: 'An incorrectly sized or unevenly matched spring strains the opener, cables and tracks, and shortens the life of the door.',
          },
          {
            title: 'The right parts on the truck',
            body: 'We carry winding bars, matched springs and the common cables and drums, so a diagnosis usually becomes a finished, tested repair in the same visit.',
          },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects spring lifespan and garage door spring replacement cost',
        lead: 'A few things decide how long a spring lasts and what a replacement involves. These are the factors we weigh when we quote the work.',
        bullets: [
          {
            label: 'Cycle rating',
            text: 'One cycle is the door opening and closing once. A standard spring is often rated around 10,000 cycles, so a busy household wears springs out sooner than an occasional user.',
          },
          {
            label: 'Door weight',
            text: 'Insulated, double-wide and solid-wood doors are heavier and need stronger springs, which affects both the parts used and the balance of the system.',
          },
          {
            label: 'Coastal conditions',
            text: 'Lowcountry humidity and salt air can corrode springs and hardware faster than inland, which is worth keeping in mind on James Island, Folly Beach and the barrier islands.',
          },
          {
            label: 'What drives the quote',
            text: 'The spring type, the number of springs, the door weight, and whether cables or drums also need attention. You get the full price in writing before any work starts.',
          },
        ],
      },
    ],

    processSteps: [
      {
        title: 'Tell us what the door is doing',
        body: 'Call or send the form and describe the symptoms. A snapped spring, a door stuck part-way, or a loud bang usually points straight to the springs.',
      },
      {
        title: 'On-site diagnosis',
        body: 'A technician checks the springs, cables, drums and balance in person, with matched springs and common parts already on the truck.',
      },
      {
        title: 'Upfront price',
        body: 'You get the full cost in writing before any work begins. Approve it, decline it, or ask us to quote a high-cycle upgrade.',
      },
      {
        title: 'Replace and cycle-test',
        body: 'We fit the matched springs, re-balance the door, and run it through a full open-and-close cycle to confirm it is safe and quiet.',
      },
    ],

    serviceAreasIntro:
      'We replace garage door springs across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',

    faqs: [
      {
        q: 'How do I know if my garage door spring is broken?',
        a: 'The clearest signs are a door that is suddenly very heavy to lift, a visible gap in the spring coil above the door, a loud bang from the garage, or an opener that strains and stops partway. If you see any of these, stop using the door.',
      },
      {
        q: 'Can I replace a garage door spring myself?',
        a: 'We do not recommend it. Garage door springs are under extreme tension and can cause serious injury without the correct winding bars and technique. This is a repair best left to a trained technician.',
      },
      {
        q: 'Should both springs be replaced at the same time?',
        a: 'On a two-spring door we usually recommend replacing both at once. The springs wear at the same rate, so if one has failed the other is close behind, and a matched pair keeps the door balanced.',
      },
      {
        q: 'What types of springs do you replace?',
        a: 'We replace both torsion springs, mounted on the bar above the door, and extension springs that run along the side tracks. We size the replacement to your specific door rather than fitting a generic spring.',
      },
      {
        q: 'Do you offer same-day spring replacement?',
        a: 'Yes, same-day service is available across our Charleston and Lowcountry service area, and emergencies such as a car trapped inside are moved ahead of scheduled work, day or night.',
      },
      {
        q: 'How long does a garage door spring replacement take?',
        a: 'Most spring replacements are completed in a single visit, since we carry matched springs and common parts on the truck. The exact time depends on the door, the spring type and whether other hardware needs attention.',
      },
    ],
  },

  'emergency-services': {
    primaryKeyword: 'emergency garage door repair',
    secondaryKeyword: 'same day garage door repair',
    metaTitle: 'Emergency Garage Door Repair Services - Top Level',
    metaDescription:
      'Need emergency garage door repair in Charleston? Top Level Garage Door tackles doors stuck open, trapped cars and sudden breakdowns. Call us today!',
    h1: 'Emergency Garage Door Repair',
    heroDesc:
      'A door stuck open, a car trapped inside, or a snapped spring cannot wait. Our emergency garage door repair puts you first.',
    whyLede:
      'When a garage door fails at the worst moment, you need someone who answers and shows up. Urgent faults are moved ahead of scheduled work, day or night.',
    whyPoints: [
      'Urgent faults prioritised ahead of scheduled work',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day response across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Doors stuck open that will not close or secure the home',
      'Cars trapped behind a jammed or seized door',
      'Snapped springs that leave the door too heavy to lift',
      'Broken cables that drop the door off level',
      'Doors knocked off track by a vehicle or impact',
      'Failed openers that leave the door unusable',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'When a garage door problem becomes a real emergency',
        image: true,
        paras: [
          'Some faults can wait a day or two. A door that will not close leaves your home open, and a car trapped inside can stop your whole day, so those go to the front of the queue.',
          'A spring that snaps with a loud bang, a cable that drops the door crooked, or a door knocked off its track after a bump are all urgent and unsafe to keep using.',
          'If the door is stuck in a way that affects your security or traps a vehicle, call us rather than forcing it.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Garage door emergencies we respond to the fastest',
        cards: [
          { title: 'Door stuck open', body: 'A door that will not close leaves your garage and home exposed. We get it closed and secure, then fix the cause.' },
          { title: 'Car trapped inside', body: 'When a jammed door traps your vehicle, we prioritise getting it open safely so you are not stranded.' },
          { title: 'Snapped spring or cable', body: 'A failed spring or cable makes the door dangerously heavy. We replace it rather than risk forcing the door.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why a jammed garage door should never be forced',
        items: [
          { title: 'Stored tension', body: 'Springs and cables under load can let go without warning. Forcing a stuck door is exactly when people get hurt.' },
          { title: 'More damage', body: 'Running a door that is off track or off balance bends panels and tracks, turning a small repair into a big one.' },
          { title: 'Safety first', body: 'We make the door safe before anything else, then quote and complete the repair.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What to do while you wait for emergency repair',
        lead: 'A few simple steps keep everyone safe and stop a bad situation from getting worse before we arrive.',
        bullets: [
          { label: 'Do not force it', text: 'Stop trying to open or close a jammed door. Repeated attempts can snap a loaded cable or spring.' },
          { label: 'Keep clear', text: 'Keep children, pets and vehicles away from a door that is stuck part-way or hanging unevenly.' },
          { label: 'Secure the home', text: 'If the door is stuck open, stay nearby or secure valuables until we can close and lock it.' },
          { label: 'Call us', text: 'Describe what happened so we arrive with the right parts and can prioritise your call, day or night.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Call and describe the emergency', body: 'Tell us what the door is doing. A stuck door, trapped car, or snapped spring points us straight to the right parts.' },
      { title: 'Prioritised dispatch', body: 'Genuine emergencies are moved to the front of the queue, day or night, all week.' },
      { title: 'Make safe and price', body: 'We secure the door, diagnose the fault on site, and give you the full price before any repair begins.' },
      { title: 'Repair and test', body: 'We complete the repair, re-balance the door, and cycle-test it so you can use it safely again.' },
    ],
    serviceAreasIntro:
      'We respond to garage door emergencies across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'Are you available 24/7 for emergencies?', a: 'Yes. We are available 24/7, all week, so call any time, day or night. Genuine emergencies such as a car trapped inside go straight to the front of the queue.' },
      { q: 'What counts as a garage door emergency?', a: 'A door stuck open, a car trapped inside, a snapped spring or cable, or a door knocked off its track are the situations we treat as urgent and move ahead of scheduled work.' },
      { q: 'My car is trapped in the garage, what should I do?', a: 'Do not force the door. Call us and describe the fault so we arrive with the right parts and can open it safely without causing more damage.' },
      { q: 'Can you secure a door that will not close?', a: 'Yes. Getting a stuck-open door closed and secure is our first priority, and then we repair whatever caused it.' },
      { q: 'Does an emergency repair cost more?', a: 'You always get the full price in writing before we start, so there are no surprises. We do not invent emergency surcharges on the spot.' },
      { q: 'Should I keep using a door after a loud bang?', a: 'No. A loud bang usually means a spring has snapped. The door is now dangerously heavy, so stop using it and call us.' },
    ],
    relatedSlugs: ['springs-replacement', 'garage-door-cable-repair', 'off-track-repair', 'opener-repair', 'panels-repair'],
  },

  'garage-door-cable-repair': {
    primaryKeyword: 'garage door cable repair',
    secondaryKeyword: 'garage door cables repair',
    metaTitle: 'Garage Door Cable Repair Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door cable repair in Charleston, from snapped and frayed lift cables to cables slipped off the drum. Call today!',
    h1: 'Professional Garage Door Cable Repair',
    heroDesc:
      'A snapped lift cable leaves your garage door hanging crooked or stuck. Our garage door cable repair replaces and re-tensions them so it runs level.',
    whyLede:
      'Cables carry the weight of the door alongside the springs. When one frays or snaps, the door hangs unevenly and is unsafe to use, so we replace them in matched pairs.',
    whyPoints: [
      'Cables replaced in matched pairs and re-tensioned',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Snapped lift cable replacement on torsion and extension systems',
      'Frayed or rusted cables replaced before they fail',
      'Cables reseated when they slip off the drum',
      'Matched-pair replacement so both sides pull evenly',
      'Drum, spring and bearing checks while the cables are off',
      'Corrosion-resistant cables for coastal, salt-air homes',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'Common signs your garage door cables need repair',
        image: true,
        paras: [
          'A failing cable usually shows before it snaps. Look for frayed or broken strands near the bottom brackets or drums, and rust creeping along the cable.',
          'If the door hangs crooked, sits higher on one side, or a loose cable pools at the bottom of the track, a cable has slipped or given out.',
          'Once a cable snaps, the door can drop or jam. Stop using it and call us rather than forcing it up by hand.',
        ],
      },
      {
        layout: 'cards',
        h2: 'The cable problems we repair on garage doors',
        cards: [
          { title: 'Snapped cable', body: 'A broken cable drops the door off level and overloads the other side. We replace both and re-tension the system.' },
          { title: 'Frayed or rusted cable', body: 'Salt air and age fray and rust cables from the inside. We replace them before they let go without warning.' },
          { title: 'Cable off the drum', body: 'When a cable jumps the drum the door binds and runs crooked. We reseat it and fix what let it slip.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why garage door cable repair is not a safe DIY job',
        items: [
          { title: 'Springs stay loaded', body: 'The springs are still under full tension while you work on the cables, which is where serious injuries happen.' },
          { title: 'Balance is precise', body: 'Cables must be matched and tensioned evenly, or the door binds, wears fast and drops on one side.' },
          { title: 'The drum matters', body: 'A cable that slipped usually has an underlying cause at the drum or spring that needs fixing too.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door cable repair cost and lifespan',
        lead: 'Cables are an inexpensive part, but a few things decide the price of the repair and how long the new cables last.',
        bullets: [
          { label: 'Cable gauge', text: 'Heavier doors need thicker, higher-rated cables, which cost a little more but last longer.' },
          { label: 'Coastal exposure', text: 'Salt air corrodes standard cables faster, so corrosion-resistant cable is worth it near the water.' },
          { label: 'Door weight', text: 'Insulated and double-wide doors put more load on the cables and the rest of the lift system.' },
          { label: 'Matched pairs', text: 'Replacing both cables together keeps the door balanced and avoids a second call-out soon after.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Tell us what the door is doing', body: 'A crooked door, a loose cable, or a door that will not lift evenly usually points straight to the cables.' },
      { title: 'On-site diagnosis', body: 'We check both cables, the drums, springs and bearings in person to find why the cable failed.' },
      { title: 'Upfront price', body: 'You get the full cost in writing before any work begins, including any drum or spring work that is needed.' },
      { title: 'Replace and cycle-test', body: 'We fit matched cables, re-tension the system, and run the door through a full cycle to confirm it is level and safe.' },
    ],
    serviceAreasIntro:
      'We repair garage door cables across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'How do I know if my garage door cable is broken?', a: 'Look for frayed strands near the bottom brackets or drums, a door that hangs crooked or sits higher on one side, or a loose cable pooling in the track.' },
      { q: 'Can I still use the door with a broken cable?', a: 'No. A door with a failed cable is unbalanced and can drop or jam. Stop using it and call us before forcing it.' },
      { q: 'Do you replace both cables at once?', a: 'We usually recommend it. The cables wear at the same rate, so replacing the pair keeps the door balanced and saves a second visit.' },
      { q: 'Why do garage door cables snap?', a: 'Age, rust from coastal salt air, fraying against a worn drum, or a door that is out of balance all shorten cable life and lead to failure.' },
      { q: 'Are cables and springs the same thing?', a: 'No. The springs do most of the lifting, and the cables transfer that force to the door. They work together, and a cable job often includes checking the springs and drums.' },
      { q: 'Do coastal conditions affect cables?', a: 'Yes. Humidity and salt air corrode standard cables faster, so we fit corrosion-resistant cable on homes near the water.' },
    ],
    relatedSlugs: ['springs-replacement', 'off-track-repair', 'rollers-replacement', 'opener-repair', 'emergency-services'],
  },

  'service-and-maintenance': {
    primaryKeyword: 'garage door maintenance',
    secondaryKeyword: 'garage door service and maintenance',
    metaTitle: 'Garage Door Maintenance Services - Top Level',
    metaDescription:
      'Book garage door maintenance with Top Level Garage Door in Charleston: annual tune-ups, safety inspections and balance adjustments. Schedule yours today!',
    h1: 'Professional Garage Door Maintenance',
    heroDesc:
      'A yearly tune-up catches worn springs, cables and rollers before they fail. Our garage door maintenance keeps your door running quietly, safely and for longer.',
    whyLede:
      'Most breakdowns start as small, fixable wear. A regular maintenance visit lubricates the moving parts, re-balances the door, and flags anything heading toward failure.',
    whyPoints: [
      '25-point safety inspection on every maintenance visit',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Lubrication of rollers, hinges, bearings and springs',
      'Spring tension and door balance adjustment',
      'Cable, drum and track inspection for wear',
      'Opener force and safety-eye testing',
      'Tightening of loose hardware and fasteners',
      'A full 25-point safety check of the door and opener',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'Why regular garage door maintenance is worth the visit',
        image: true,
        paras: [
          'Your garage door is the heaviest moving thing in the house, and it cycles thousands of times a year. Small wear builds quietly until a part gives out at the worst moment.',
          'A maintenance visit is the cheapest work we do and the best way to avoid a breakdown. We lubricate, adjust the balance, and test the safety features in one visit.',
          'Most importantly, we catch a fraying cable or a tiring spring while it is still a planned repair, not a surprise one.',
        ],
      },
      {
        layout: 'cards',
        h2: 'What a garage door maintenance tune-up actually includes',
        cards: [
          { title: 'Lubricate and adjust', body: 'We lubricate the rollers, hinges and bearings and fine-tune the spring tension so the door runs quiet and balanced.' },
          { title: 'Inspect and test', body: 'We check the cables, drums, tracks and opener, and test the auto-reverse and safety eyes against current settings.' },
          { title: 'Catch wear early', body: 'We flag parts that are wearing so you can plan a repair instead of being caught out by a failure.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why a maintained garage door lasts years longer',
        items: [
          { title: 'Less friction', body: 'Lubricated, aligned parts move freely, so the opener and springs are not fighting extra resistance every cycle.' },
          { title: 'Balanced load', body: 'A correctly balanced door shares the work evenly, which protects the springs, cables and opener from early failure.' },
          { title: 'Small fixes, not big ones', body: 'Catching a worn roller or fraying cable early is a minor job compared with the damage it causes when it fails.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects how often your garage door needs maintenance',
        lead: 'Most doors benefit from a tune-up about once a year, but a few things move that up or down.',
        bullets: [
          { label: 'How often you use it', text: 'A door that opens many times a day wears faster than one used occasionally, and needs servicing sooner.' },
          { label: 'Coastal climate', text: 'Lowcountry humidity and salt air corrode hardware faster, so coastal homes benefit from more frequent checks.' },
          { label: 'Door age', text: 'Older doors and builder-grade hardware reach end of life sooner and are worth watching more closely.' },
          { label: 'Opener type', text: 'High-cycle and heavy commercial setups carry more load and warrant a tighter service schedule.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Book a tune-up', body: 'Call or send the form to schedule a maintenance visit at a time that suits you.' },
      { title: 'Full inspection', body: 'A technician runs a 25-point check of the springs, cables, rollers, tracks, hardware and opener.' },
      { title: 'Adjust and lubricate', body: 'We lubricate the moving parts, re-balance the door, and fine-tune the opener force and safety settings.' },
      { title: 'Report and advise', body: 'We tell you what is in good shape and what is wearing, and quote any repair you choose to schedule.' },
    ],
    serviceAreasIntro:
      'We service and maintain garage doors across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'How often should I service my garage door?', a: 'About once a year suits most homes. Doors used many times a day, older doors, and homes near the coast benefit from more frequent checks.' },
      { q: 'What do you do during a maintenance visit?', a: 'We lubricate the moving parts, adjust the spring tension and balance, inspect the cables, drums and tracks, test the opener and safety features, and tighten loose hardware.' },
      { q: 'Will maintenance stop my door from breaking down?', a: 'It greatly reduces the chance by catching worn parts early, but no service can guarantee a part will never fail. We will tell you what is wearing so you can plan ahead.' },
      { q: 'Is maintenance worth it for a newer door?', a: 'Yes. Builder-grade springs and rollers on newer doors often wear faster than people expect, and early adjustment keeps the whole system running longer.' },
      { q: 'Do you maintain commercial doors?', a: 'Yes. We service rolling steel doors, high-cycle operators and dock equipment, and can schedule visits outside business hours where needed.' },
      { q: 'Does coastal weather affect how often I should service?', a: 'It does. Salt air and humidity corrode hardware faster, so homes on the islands and near the water benefit from more regular maintenance.' },
    ],
    relatedSlugs: ['springs-replacement', 'rollers-replacement', 'opener-repair', 'hinges-replacement', 'weather-strip-replacement'],
  },

  'opener-repair': {
    primaryKeyword: 'garage door opener repair',
    secondaryKeyword: 'LiftMaster garage door opener repair',
    metaTitle: 'Garage Door Opener Repair Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door opener repair in Charleston, fixing openers that will not close, grind, hum or ignore the remote. Call today!',
    h1: 'Professional Garage Door Opener Repair',
    heroDesc:
      'When the opener hums, grinds, or will not respond, our garage door opener repair gets it working again, usually the same day.',
    whyLede:
      'An opener that stops is rarely the whole unit. Worn gears, a failed board, a misaligned safety eye or a dead remote are common faults, and far cheaper than a new opener.',
    whyPoints: [
      'We service LiftMaster, Chamberlain, Genie and Sommer openers',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Stripped drive gear and sprocket replacement',
      'Control board, capacitor and motor diagnosis',
      'Trolley, belt and chain repairs',
      'Safety-eye (photo-eye) alignment and replacement',
      'Travel-limit and force re-calibration',
      'Remote, keypad and wall-button reprogramming',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'Common signs your garage door opener needs repair',
        image: true,
        paras: [
          'The opener runs but the door does not move, or it hums and strains without lifting. That usually points to a stripped gear or a worn trolley rather than a dead motor.',
          'If the door reverses before it closes, the safety eyes are often misaligned or blocked. If nothing happens at all, it may be a board, capacitor or power fault.',
          'Intermittent remotes, a flashing light, or grinding on startup are all worth diagnosing before the opener gives out completely.',
        ],
      },
      {
        layout: 'cards',
        h2: 'The garage door opener faults we repair most often',
        cards: [
          { title: 'Worn gears and drive', body: 'A stripped drive gear is the classic fault where the motor runs but the door stays put. It is a common, affordable fix.' },
          { title: 'Safety-eye problems', body: 'A door that will not close and reverses on its own is usually a blocked or misaligned photo-eye, not a broken opener.' },
          { title: 'Remotes and settings', body: 'Dead remotes, unresponsive keypads and drifting travel limits are quick to diagnose and reprogram.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'When garage door opener repair beats a full replacement',
        items: [
          { title: 'The unit is sound', body: 'If the motor and rail are in good shape, replacing a gear, board or capacitor is far cheaper than a new opener.' },
          { title: 'Safety is retained', body: 'We recalibrate the force and test the auto-reverse so the repaired opener meets its safety settings.' },
          { title: 'Honest advice', body: 'If an opener is old and failing in several places, we will say so rather than keep patching it.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door opener repair cost and options',
        lead: 'A few things decide whether a repair is a quick fix or a bigger job, and whether repair or replacement makes more sense.',
        bullets: [
          { label: 'Part or board', text: 'A gear, trolley or safety eye is a small job; a control board or motor is a larger one.' },
          { label: 'Opener age', text: 'On a very old opener, the economics can tip toward replacement, and we will tell you when they do.' },
          { label: 'Drive type', text: 'Chain, belt and wall-mount openers use different parts, which affects availability and price.' },
          { label: 'Brand parts', text: 'We fit correct parts for LiftMaster, Chamberlain, Genie and Sommer units rather than generic substitutes.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Tell us what the opener is doing', body: 'Describe the symptoms, from a humming motor to a door that reverses, so we bring the likely parts.' },
      { title: 'On-site diagnosis', body: 'We test the drive, board, safety eyes, travel limits and remotes to find the real fault.' },
      { title: 'Upfront price', body: 'You get the full cost in writing before any work begins, and honest advice on repair versus replacement.' },
      { title: 'Repair and safety-test', body: 'We complete the repair, recalibrate the force and limits, and test the auto-reverse before we leave.' },
    ],
    serviceAreasIntro:
      'We repair garage door openers across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'Why will my garage door opener not close the door?', a: 'The most common cause is the safety photo-eyes being blocked or out of alignment. The door reverses as a safety feature. We realign and test them so it closes properly.' },
      { q: 'The opener runs but the door does not move, why?', a: 'That usually means a stripped drive gear or a disconnected or worn trolley. Both are common, affordable repairs that we carry parts for.' },
      { q: 'Do you repair LiftMaster and Chamberlain openers?', a: 'Yes. We service LiftMaster, Chamberlain, Genie and Sommer openers and fit correct parts for each rather than generic substitutes.' },
      { q: 'Should I repair or replace an old opener?', a: 'If the motor and rail are sound, a gear, board or capacitor repair is far cheaper. If an old opener is failing in several places, we will tell you when replacement is the better value.' },
      { q: 'My remote stopped working, is that the opener?', a: 'Often it is just a battery or a remote that needs reprogramming. If several remotes fail at once, the receiver or logic board may need attention.' },
      { q: 'Is a grinding noise from the opener serious?', a: 'Grinding on startup usually means the drive gear is wearing. It is best repaired early, before the gear strips completely and leaves the door stuck.' },
    ],
    relatedSlugs: ['opener-installation', 'springs-replacement', 'off-track-repair', 'service-and-maintenance', 'emergency-services'],
  },

  'garage-door-replacement': {
    primaryKeyword: 'garage door replacement',
    secondaryKeyword: 'new garage door installation',
    metaTitle: 'Garage Door Replacement Services - Top Level',
    metaDescription:
      'Top Level Garage Door offers garage door replacement in Charleston, fitting new insulated, carriage-house and glass doors beyond repair. Get a quote today!',
    h1: 'Professional Garage Door Replacement',
    heroDesc:
      'When a door is beyond economical repair, a new one transforms the house. Our garage door replacement is measured on site and fitted to last.',
    whyLede:
      'A replacement is the right call when repairs stop making sense or the door is badly damaged. We measure on site, match the style to your home, and remove the old door.',
    whyPoints: [
      'Insulated steel, carriage-house and full-view glass doors',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'On-site measuring for a correct, non-standard fit',
      'Insulated steel doors for comfort and quieter operation',
      'Carriage-house and full-view glass styles',
      'New tracks, springs, rollers and hardware with the door',
      'Removal and disposal of your old door',
      'Style and colour matching for HOA requirements',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'When garage door replacement makes more sense than repair',
        image: true,
        paras: [
          'A sound door with one failed part is almost always worth repairing. A replacement makes sense when the door is rotten, badly dented, or has reached the end of its life.',
          'Older one-piece and uninsulated doors, repeated repairs on the same door, and storm or impact damage are the usual reasons homeowners decide to replace.',
          'A new insulated door is also quieter, more secure, and a noticeable lift to the look of the house.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Garage door styles we install across the Lowcountry',
        cards: [
          { title: 'Insulated steel', body: 'The most popular choice. Insulated steel is durable, low-maintenance, quieter to run and better in the Lowcountry heat.' },
          { title: 'Carriage house', body: 'Classic swing-style looks on a modern sectional door, a good fit for traditional and historic homes.' },
          { title: 'Full-view glass', body: 'Aluminium and glass doors for a bright, modern frontage, popular on contemporary builds.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why professional garage door replacement protects your investment',
        items: [
          { title: 'Measured on site', body: 'We measure the opening, headroom and backroom in person so the door, tracks and springs are sized correctly.' },
          { title: 'Springs sized to the door', body: 'A new door needs springs matched to its weight, or it will wear out hardware and openers early.' },
          { title: 'Old door handled', body: 'We remove and dispose of the old door and leave the opening clean and ready.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door replacement cost and choices',
        lead: 'The price of a new door depends on what you choose and what the opening needs, and we quote it in writing after measuring.',
        bullets: [
          { label: 'Size', text: 'A single door costs less than a double, and non-standard openings may need custom sizing.' },
          { label: 'Material and insulation', text: 'Steel, carriage-house and full-view glass sit at different price points, as does the level of insulation.' },
          { label: 'Windows and hardware', text: 'Window inserts, decorative hardware and upgraded locks add to both the look and the cost.' },
          { label: 'Removal', text: 'Taking out and disposing of the old door and fitting new tracks and springs are part of the job.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Free on-site measure and quote', body: 'We measure the opening and talk through styles, insulation and budget, then quote in writing.' },
      { title: 'Choose your door', body: 'You pick the style, colour, windows and hardware, and we confirm sizing and lead time.' },
      { title: 'Schedule the install', body: 'We book a fitting date and order the door and the matching tracks, springs and hardware.' },
      { title: 'Fit, test and walk through', body: 'We remove the old door, fit the new one, set the springs and opener, test it, and show you how it runs.' },
    ],
    serviceAreasIntro:
      'We supply and fit replacement garage doors across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'Should I repair or replace my garage door?', a: 'If the door is structurally sound and only a part has failed, repair is better value. Replacement makes sense when the door is rotten, badly damaged, or needing repeated repairs.' },
      { q: 'How long does a garage door replacement take?', a: 'Most standard single and double doors are fitted in a single visit once the door is in. Custom and full-view glass doors can take longer to order.' },
      { q: 'What is the difference between a single and double door?', a: 'A single door covers one bay and a double covers a two-car opening. We measure on site to confirm the right size rather than assuming a stock width.' },
      { q: 'Are new garage doors insulated?', a: 'Many are. Insulated steel doors are the most popular choice here because they are quieter, more durable and better in the Lowcountry heat. We will explain the options.' },
      { q: 'Do you remove the old door?', a: 'Yes. Removal and disposal of the old door, and fitting new tracks, springs and hardware, are included in the replacement.' },
      { q: 'Can you match my HOA requirements?', a: 'Yes. We handle style and colour matching for neighbourhoods with architectural guidelines, so your new door clears review.' },
    ],
    relatedSlugs: ['panels-replacement', 'opener-installation', 'springs-replacement', 'weather-strip-replacement', 'service-and-maintenance'],
  },

  'opener-installation': {
    primaryKeyword: 'garage door opener installation',
    secondaryKeyword: 'garage door opener replacement',
    metaTitle: 'Garage Door Opener Installation Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door opener installation in Charleston, fitting and programming new chain, belt and wall-mount units. Book today!',
    h1: 'Professional Garage Door Opener Installation',
    heroDesc:
      'Upgrading a noisy unit or replacing a dead one, our garage door opener installation fits and programs chain, belt and wall-mount openers.',
    whyLede:
      'The right opener depends on your door weight, ceiling space and how quietly it needs to run. We help you choose, then fit and program it so it is safe from day one.',
    whyPoints: [
      'Chain, belt and wall-mount openers supplied and fitted',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'New chain-drive opener installation',
      'Quieter belt-drive openers for attached garages',
      'Wall-mount (jackshaft) openers for high-lift and low-headroom doors',
      'Replacing an old or failed opener on an existing door',
      'Safety-eye fitting and force calibration',
      'Remote, keypad and smartphone-control setup',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'Choosing the right garage door opener for your home',
        image: true,
        paras: [
          'The best opener depends on your door and your garage. A heavier insulated or double-wide door needs more lifting power than a light single door.',
          'If a bedroom sits above or beside the garage, a belt drive is worth the upgrade for how much quieter it runs. Tight ceilings may call for a wall-mount unit.',
          'We match the opener to the door weight and the space, so it runs smoothly and does not wear itself out.',
        ],
      },
      {
        layout: 'cards',
        h2: 'The garage door openers we install and program',
        cards: [
          { title: 'Chain drive', body: 'Durable and cost-effective, chain drives suit detached garages and buyers who want reliability at a lower price.' },
          { title: 'Belt drive', body: 'The quietest standard option, ideal for garages under or beside living space where noise matters.' },
          { title: 'Wall-mount jackshaft', body: 'Mounts beside the door to free up ceiling space, perfect for high-lift and low-headroom installations.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why professional garage door opener installation is worth it',
        items: [
          { title: 'Set up safely', body: 'We fit and align the safety eyes and set the force and travel limits so the auto-reverse works correctly.' },
          { title: 'Right power for the door', body: 'An underpowered opener struggles and fails early. We match the horsepower to the door weight.' },
          { title: 'Warranty protected', body: 'Correct installation keeps the manufacturer warranty intact and the opener running as it should.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door opener installation cost and choice',
        lead: 'A few things decide which opener suits your garage and what the installation costs.',
        bullets: [
          { label: 'Drive type', text: 'Chain, belt and wall-mount openers sit at different price points and suit different garages.' },
          { label: 'Door weight', text: 'Heavier doors need more horsepower, which affects the model we recommend.' },
          { label: 'Smart features', text: 'Smartphone control, battery backup and keypads add convenience and a little to the cost.' },
          { label: 'Old opener removal', text: 'Replacing a dead opener includes taking out the old unit and reusing or renewing the rail where suitable.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Assess the door and space', body: 'We check the door weight, ceiling height and wiring to recommend the right opener for your garage.' },
      { title: 'Recommend an opener', body: 'We explain chain, belt and wall-mount options and the features worth having, then quote in writing.' },
      { title: 'Install and program', body: 'We fit the opener, wire it in, fit the safety eyes, and program the remotes, keypad and any smart control.' },
      { title: 'Test and hand over', body: 'We set the force and travel limits, test the auto-reverse, and show you how everything works.' },
    ],
    serviceAreasIntro:
      'We install garage door openers across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'Which garage door opener is the quietest?', a: 'A belt-drive opener is the quietest standard choice, which makes it the usual pick for garages under or next to a bedroom or living space.' },
      { q: 'Can you replace my old opener?', a: 'Yes. We remove the old or dead opener, reuse or renew the rail where suitable, fit the new unit, and program it to your door.' },
      { q: 'What horsepower opener do I need?', a: 'It depends on the door weight and size. We match the power to your door so the opener is not straining, which is what shortens an opener life.' },
      { q: 'Can you set up smartphone control?', a: 'Yes. On compatible openers we set up smartphone control, keypads and additional remotes as part of the installation.' },
      { q: 'Do new openers include safety sensors?', a: 'Yes. Photo-eye safety sensors are standard and required. We fit and align them and test the auto-reverse before we finish.' },
      { q: 'How long does opener installation take?', a: 'A standard opener is usually installed and programmed in a single visit. Wall-mount and high-lift setups can take a little longer.' },
    ],
    relatedSlugs: ['opener-repair', 'springs-replacement', 'garage-door-replacement', 'service-and-maintenance', 'off-track-repair'],
  },

  'off-track-repair': {
    primaryKeyword: 'garage door off-track repair',
    secondaryKeyword: 'garage door off track repair',
    metaTitle: 'Garage Door Off-Track Repair Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door off-track repair in Charleston, resetting doors that jumped the rail, jammed or came off a bump. Call us today!',
    h1: 'Professional Garage Door Off-Track Repair',
    heroDesc:
      'A door off its track is heavy and unsafe to force. Our garage door off-track repair resets it and fixes whatever knocked it off.',
    whyLede:
      'A door jumps the track after an impact, a broken cable, or worn rollers. We reset it safely, then fix the underlying cause so it does not happen again.',
    whyPoints: [
      'The root cause fixed, not just the door reset',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Doors reset safely back onto the tracks',
      'Broken or slipped cables replaced and re-seated',
      'Worn or shattered rollers replaced',
      'Bent track sections straightened or replaced',
      'Alignment and balance checked through a full cycle',
      'Panel and hardware damage from the impact assessed',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'Common reasons a garage door comes off its track',
        image: true,
        paras: [
          'Most off-track doors trace back to one of three things: a broken cable that lets one side drop, worn rollers that jump the rail, or a knock from a vehicle or bumper.',
          'A door that is already out of balance puts extra strain on the rollers and track, which makes a derailment more likely over time.',
          'Whatever the cause, a door off its track is heavy and unstable, so it should not be forced back by hand.',
        ],
      },
      {
        layout: 'cards',
        h2: 'What we check during a garage door off-track repair',
        cards: [
          { title: 'Cables and rollers', body: 'We check for a snapped cable or worn rollers, the two most common reasons a door leaves the track.' },
          { title: 'Tracks and brackets', body: 'We inspect the track for bends and the brackets for loosening, and straighten or replace what is damaged.' },
          { title: 'Balance and panels', body: 'We re-balance the door and check the panels and hardware for damage from the derailment.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why forcing an off-track garage door makes it worse',
        items: [
          { title: 'It is unstable', body: 'A door off the rail can drop or swing. Trying to lift or push it back is how people get hurt and panels get bent.' },
          { title: 'Hidden damage', body: 'The derailment often damages rollers, cables or track that need replacing, not just repositioning.' },
          { title: 'Balance matters', body: 'Reset without fixing the cause and re-balancing, the door will simply jump the track again.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects off-track garage door repair cost and time',
        lead: 'Resetting the door is only part of the job. The price depends on what caused the derailment and what it damaged.',
        bullets: [
          { label: 'The cause', text: 'A worn roller is a smaller fix than a snapped cable or a track bent by a vehicle.' },
          { label: 'Roller and cable damage', text: 'Derailments often shatter rollers or slip cables, which are replaced as part of the repair.' },
          { label: 'Bent track', text: 'A lightly bent track can sometimes be straightened; a badly damaged section is replaced.' },
          { label: 'Panel damage', text: 'If the door bent or cracked a section coming off, that is assessed separately.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Tell us what happened', body: 'Describe how the door came off, whether after a bump, a bang, or on its own, so we arrive prepared.' },
      { title: 'Stabilise and diagnose', body: 'We make the door safe, then check the cables, rollers, track and panels to find the cause and any damage.' },
      { title: 'Upfront price', body: 'You get the full cost in writing before any work begins, including any parts the derailment damaged.' },
      { title: 'Reset, repair and test', body: 'We reset the door, replace what is worn or broken, re-balance it, and cycle-test it before we leave.' },
    ],
    serviceAreasIntro:
      'We fix off-track garage doors across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'Can I use a garage door that is off its track?', a: 'No. An off-track door is heavy and unstable and can drop or jam. Stop using it and call us rather than trying to force it back.' },
      { q: 'What knocks a garage door off its track?', a: 'A broken cable, worn rollers, a loose track, or a knock from a vehicle are the usual causes. A door that is out of balance makes it more likely.' },
      { q: 'Will you fix what caused it, not just reset the door?', a: 'Yes. Resetting the door without fixing the worn roller, broken cable or bent track just leads to it coming off again, so we fix the cause.' },
      { q: 'Is my door ruined if it came off the track?', a: 'Often not. Many off-track doors are reset and repaired. We only recommend replacement if the panels or track are too damaged to repair safely.' },
      { q: 'How long does off-track repair take?', a: 'A straightforward reset with a roller or cable replacement is usually done in one visit. A bent track or panel damage can add time.' },
      { q: 'A car bumped the door and it came off, can you help?', a: 'Yes. We assess the track, rollers, cables and panels for impact damage, reset what we can, and quote any parts that need replacing.' },
    ],
    relatedSlugs: ['garage-door-cable-repair', 'rollers-replacement', 'tracks-replacement', 'springs-replacement', 'panels-repair'],
  },

  'rollers-replacement': {
    primaryKeyword: 'garage door roller replacement',
    secondaryKeyword: 'garage door rollers replacement',
    metaTitle: 'Garage Door Roller Replacement Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door roller replacement in Charleston, swapping worn, noisy and cracked rollers for quiet nylon ones. Call today!',
    h1: 'Professional Garage Door Roller Replacement',
    heroDesc:
      'Grinding and juddering usually mean worn rollers. Our garage door roller replacement fits sealed nylon rollers that run quietly and last years longer.',
    whyLede:
      'Rollers take the whole door up and down thousands of times a year. When they wear, the door gets loud and rough, and the extra friction wears everything else faster.',
    whyPoints: [
      'Sealed nylon rollers that outlast steel by years',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Worn, cracked or seized rollers replaced',
      'Quiet sealed nylon rollers fitted as standard',
      'Bearing-fitted rollers for heavy and double-wide doors',
      'Hinge and roller-carrier checks while access is open',
      'Track cleaning and alignment after fitting',
      'Corrosion-resistant rollers for coastal homes',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'Common signs your garage door rollers need replacing',
        image: true,
        paras: [
          'Worn rollers make themselves heard. A grinding or rumbling door, a judder as it moves, or a squeal on each cycle all point to rollers at the end of their life.',
          'You may also see a door that moves unevenly, or rollers that look chipped, flat-spotted, or wobble loose in their stems when you look closely.',
          'Because rollers run on every cycle, worn ones quietly add friction that wears the opener, springs and tracks too.',
        ],
      },
      {
        layout: 'cards',
        h2: 'Nylon and steel garage door rollers, and which lasts',
        cards: [
          { title: 'Sealed nylon', body: 'Quiet, smooth and long-lasting. Sealed nylon rollers are our standard because they outlast steel and run far quieter.' },
          { title: 'Steel rollers', body: 'Common on builder-grade doors and cheaper up front, but louder and shorter-lived, especially in salt air.' },
          { title: 'Matched to door weight', body: 'Heavier doors get bearing-fitted rollers rated for the load so they roll smoothly and last.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why worn garage door rollers wear out other parts',
        items: [
          { title: 'Added friction', body: 'A rough roller drags on the track, so the opener and springs work harder on every cycle.' },
          { title: 'Off-track risk', body: 'A seized or shattered roller can let the door jump the track, turning a small job into a bigger one.' },
          { title: 'Noise and wear', body: 'The grinding you hear is metal wearing metal, which spreads to the track and hinges over time.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door roller replacement cost and life',
        lead: 'Rollers are an affordable part, and a few things decide the price and how long the new ones last.',
        bullets: [
          { label: 'Roller type', text: 'Sealed nylon costs a little more than steel up front and pays it back in quiet, long life.' },
          { label: 'Number of rollers', text: 'A standard door has around ten rollers, and we usually replace the full set so they wear evenly.' },
          { label: 'Door weight', text: 'Heavier doors need bearing-fitted rollers rated for the load, which affects the part used.' },
          { label: 'Coastal exposure', text: 'Salt air rusts steel rollers fast, so corrosion-resistant rollers are worth it near the water.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Tell us how the door sounds', body: 'Grinding, juddering or squealing on each cycle usually points straight to worn rollers.' },
      { title: 'On-site check', body: 'We inspect the rollers, hinges and track, and confirm the right roller type for your door weight.' },
      { title: 'Upfront price', body: 'You get the full cost in writing before any work begins, including any worn hinges we find.' },
      { title: 'Replace and test', body: 'We fit the new rollers, clean and align the track, and cycle-test the door so it runs quiet and smooth.' },
    ],
    serviceAreasIntro:
      'We replace garage door rollers across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'How do I know if my garage door rollers are worn?', a: 'Listen for grinding, rumbling or squealing, and watch for a door that judders or moves unevenly. Worn rollers often look chipped, flat-spotted or loose in their stems.' },
      { q: 'Are nylon rollers better than steel?', a: 'For most homes, yes. Sealed nylon rollers run much quieter and last years longer than steel, and they do not rust, which matters in coastal air.' },
      { q: 'How many rollers does a garage door have?', a: 'A standard sectional door has around ten rollers. We usually replace the full set so they all wear at the same rate.' },
      { q: 'Can worn rollers damage my garage door?', a: 'Yes. The added friction wears the opener, springs and track, and a seized roller can let the door jump off the track.' },
      { q: 'How long does roller replacement take?', a: 'Replacing a full set of rollers is usually a single, straightforward visit.' },
      { q: 'Do coastal conditions affect roller choice?', a: 'They do. Salt air rusts steel rollers quickly, so we fit sealed nylon or corrosion-resistant rollers on homes near the water.' },
    ],
    relatedSlugs: ['hinges-replacement', 'tracks-replacement', 'springs-replacement', 'off-track-repair', 'service-and-maintenance'],
  },

  'hinges-replacement': {
    primaryKeyword: 'garage door hinge replacement',
    secondaryKeyword: 'garage door hinges replacement',
    metaTitle: 'Garage Door Hinge Replacement Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door hinge replacement in Charleston, replacing cracked, bent and rusted hinges before a section sags. Call today!',
    h1: 'Professional Garage Door Hinge Replacement',
    heroDesc:
      'Worn or cracked hinges make a door bind, squeak and sag. Our garage door hinge replacement swaps them before they crack a panel.',
    whyLede:
      'Hinges hold the sections together and let the door flex as it rolls up. A cracked hinge throws the door out of alignment and can crack the panel it is bolted to.',
    whyPoints: [
      'Numbered, correctly-gauged hinges fitted to each joint',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Cracked or bent hinge replacement',
      'Correct hinge numbering for each position on the door',
      'Rusted hinge and fastener replacement',
      'Roller-carrier hinge replacement',
      'Section alignment checked after fitting',
      'Corrosion-resistant hardware for salt-air homes',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'Common signs your garage door hinges need replacing',
        image: true,
        paras: [
          'A failing hinge usually squeaks or grinds at the section joints, and the door may bind or catch as it folds around the curve of the track.',
          'Look for cracks or bends in the hinge plates, rust at the knuckle, and gaps opening up between sections as the door moves.',
          'Left alone, a cracked hinge lets the sections shift, which can crack the panel it is bolted to and pull the door out of line.',
        ],
      },
      {
        layout: 'cards',
        h2: 'The garage door hinge problems we put right',
        cards: [
          { title: 'Cracked hinges', body: 'A cracked hinge lets the section move independently, which stresses the panel and the rollers around it.' },
          { title: 'Rusted hinges', body: 'Coastal salt air rusts hinges and fasteners until they seize or snap. We fit corrosion-resistant replacements.' },
          { title: 'Wrong-gauge hinges', body: 'Hinges are numbered for their position. The wrong gauge binds the door, so we fit the correct ones.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why a cracked garage door hinge should not wait',
        items: [
          { title: 'Panel damage', body: 'A loose section works against the panel and can crack it, turning a cheap hinge job into a panel repair.' },
          { title: 'Alignment', body: 'A failed hinge lets sections drift out of line, which strains the rollers, track and opener.' },
          { title: 'Roller carriers', body: 'Some hinges carry a roller. If one cracks, the door can bind or jump the track.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door hinge replacement cost and scope',
        lead: 'Hinges are inexpensive, and a few things decide how many you need and what the job involves.',
        bullets: [
          { label: 'How many', text: 'A single cracked hinge is a small fix; a door with widespread rust may need most of them replaced.' },
          { label: 'Position and gauge', text: 'Hinges are numbered by position. We fit the correct gauge so the door folds smoothly.' },
          { label: 'Rust', text: 'Seized, rusted hardware takes longer to remove and benefits from corrosion-resistant replacements.' },
          { label: 'Door size', text: 'Larger and double-wide doors have more hinges and heavier-duty hardware.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Tell us what the door is doing', body: 'Squeaking at the joints, binding as it folds, or a visible cracked hinge all point to hinge wear.' },
      { title: 'On-site check', body: 'We inspect each hinge position, the panels around them, and the rollers they carry.' },
      { title: 'Upfront price', body: 'You get the full cost in writing before any work begins, with the correct numbered hinges specified.' },
      { title: 'Replace and align', body: 'We fit the right hinges, check the section alignment, and cycle-test the door so it folds smoothly.' },
    ],
    serviceAreasIntro:
      'We replace garage door hinges across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'What are the signs of a bad garage door hinge?', a: 'Squeaking or grinding at the section joints, a door that binds as it folds, visible cracks or bends in the hinge plates, and gaps opening between sections.' },
      { q: 'Can a cracked hinge damage my garage door?', a: 'Yes. A loose section works against the panel it is bolted to and can crack it, and it pulls the door out of alignment, which strains other parts.' },
      { q: 'Why are garage door hinges numbered?', a: 'Each position on the door uses a specific hinge gauge. Fitting the wrong number binds the door, so we match the correct hinge to each joint.' },
      { q: 'My hinges just squeak, do they need replacing?', a: 'Not always. A dry hinge often just needs lubrication. If the plate is cracked, bent or rusted through, it needs replacing.' },
      { q: 'How long does hinge replacement take?', a: 'Replacing a few hinges is usually a quick, single visit. A door needing most of its hinges takes a little longer.' },
      { q: 'Do coastal conditions rust hinges faster?', a: 'Yes. Salt air corrodes hinges and fasteners quickly, so we fit corrosion-resistant hardware on homes near the water.' },
    ],
    relatedSlugs: ['rollers-replacement', 'panels-repair', 'tracks-replacement', 'springs-replacement', 'service-and-maintenance'],
  },

  'tracks-replacement': {
    primaryKeyword: 'garage door track replacement',
    secondaryKeyword: 'garage door tracks replacement',
    metaTitle: 'Garage Door Track Replacement Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door track replacement in Charleston, replacing bent, corroded and misaligned tracks so it runs straight. Call today!',
    h1: 'Professional Garage Door Track Replacement',
    heroDesc:
      'Bent or corroded tracks make a door stick, grind or jump the rail. Our garage door track replacement restores straight, manufacturer-spec travel.',
    whyLede:
      'Tracks guide the rollers and keep the door square as it travels. Once a track is bent or rusted through, no amount of adjustment keeps the door running smoothly.',
    whyPoints: [
      'Tracks replaced and realigned to manufacturer spec',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Bent vertical and horizontal track replacement',
      'Corroded or rusted-through track replacement',
      'Track realignment and bracket re-securing',
      'Low-headroom and high-lift track configurations',
      'Roller and cable checks during track work',
      'Galvanised track for coastal, salt-air exposure',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'Common signs your garage door tracks need replacing',
        image: true,
        paras: [
          'A damaged track shows as a door that sticks or grinds at the same spot, pulls to one side, or leaves a gap where the rollers no longer sit square.',
          'Look for visible bends, dents, or rust eating through the rail, and brackets that have worked loose from the wall or ceiling.',
          'When the track is the problem, the door fights it on every cycle, which wears the rollers and risks a derailment.',
        ],
      },
      {
        layout: 'cards',
        h2: 'The garage door track problems we repair and replace',
        cards: [
          { title: 'Bent tracks', body: 'A bent rail pinches the rollers and makes the door stick. Light bends can sometimes be straightened; bad ones are replaced.' },
          { title: 'Corroded tracks', body: 'Salt-air rust weakens the track until it flexes and misaligns. We fit galvanised track built for coastal homes.' },
          { title: 'Misaligned brackets', body: 'Loose or shifted brackets let the track move. We re-secure and realign them to manufacturer spec.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why bent garage door tracks cannot just be bent back',
        items: [
          { title: 'Metal fatigue', body: 'A track bent once is weakened at that point. Bending it back leaves a weak spot that soon fails again.' },
          { title: 'Precise spacing', body: 'Tracks must sit at an exact distance and angle. Guesswork leaves the door binding or jumping the rail.' },
          { title: 'Roller wear', body: 'A deformed track grinds the rollers flat, so track work usually pairs with a roller check.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door track replacement cost and scope',
        lead: 'The price depends on how much track is damaged and what caused it.',
        bullets: [
          { label: 'Which sections', text: 'Replacing one bent vertical section costs less than replacing the full track system on both sides.' },
          { label: 'The cause', text: 'A vehicle impact often damages more than just the track, so we check the rollers, cables and panels too.' },
          { label: 'Headroom configuration', text: 'Low-headroom and high-lift setups use specific track, which affects the parts needed.' },
          { label: 'Coastal exposure', text: 'Galvanised, corrosion-resistant track is worth fitting on homes exposed to salt air.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Tell us what the door is doing', body: 'Sticking at one spot, pulling to one side, or a visibly bent rail all point to track trouble.' },
      { title: 'On-site check', body: 'We inspect the track, brackets, rollers and cables to see what is damaged and why.' },
      { title: 'Upfront price', body: 'You get the full cost in writing before any work begins, including any rollers the track has worn.' },
      { title: 'Replace and align', body: 'We fit new track to spec, re-secure the brackets, and cycle-test the door so it runs straight.' },
    ],
    serviceAreasIntro:
      'We replace garage door tracks across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'Can a bent garage door track be straightened instead of replaced?', a: 'A light bend can sometimes be straightened, but a track bent once is weakened there. A badly bent or kinked section is safer to replace than to keep bending back.' },
      { q: 'What bends garage door tracks?', a: 'A knock from a vehicle, a door forced while off balance, loose brackets, or years of salt-air corrosion are the usual causes.' },
      { q: 'Will new rollers fix a sticking door?', a: 'Only if the rollers are the problem. If the track is bent or misaligned, new rollers will still bind, so we check both.' },
      { q: 'How long does track replacement take?', a: 'Replacing a vertical section is usually a single visit. A full track system or impact damage can take longer.' },
      { q: 'Can you work with low-headroom or high-lift tracks?', a: 'Yes. We fit low-headroom and high-lift track configurations, which are common on elevated and tight-ceiling garages here.' },
      { q: 'Do coastal conditions affect tracks?', a: 'Yes. Salt air corrodes standard track, so we fit galvanised, corrosion-resistant track on homes near the water.' },
    ],
    relatedSlugs: ['off-track-repair', 'rollers-replacement', 'hinges-replacement', 'springs-replacement', 'service-and-maintenance'],
  },

  'weather-strip-replacement': {
    primaryKeyword: 'garage door weather strip replacement',
    secondaryKeyword: 'bottom garage door weather seal replacement',
    metaTitle: 'Garage Door Weather Strip Replacement Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door weather strip replacement in Charleston, renewing worn bottom seals and perimeter stripping. Call us today!',
    h1: 'Professional Garage Door Weather Strip Replacement',
    heroDesc:
      'A perished bottom seal lets in water, draughts and pests. Our garage door weather strip replacement fits a fresh seal that closes the gap.',
    whyLede:
      'The bottom seal and perimeter stripping are the cheapest parts on the door and the first line against Lowcountry rain, heat and pests. Replacing them is quick and makes an immediate difference.',
    whyPoints: [
      'Bottom seals and perimeter stripping both replaced',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'New bottom weather seal (astragal) fitted to the door',
      'Worn or missing bottom retainer replaced where needed',
      'Perimeter stop-moulding weatherstripping',
      'Threshold seals for uneven or sloped floors',
      'Pest and debris exclusion at the base of the door',
      'Seal matched to your door profile and gap size',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'Signs your garage door weather strip needs replacing',
        image: true,
        paras: [
          'A failing seal is easy to spot: daylight under a closed door, water tracking in after rain, leaves and grit blowing in, and a draught you can feel along the bottom.',
          'The rubber itself tells the story too, going hard, cracked, flattened, or torn away from the retainer at the base of the door.',
          'In the Lowcountry, a good seal also helps keep heat, humidity and insects out of the garage.',
        ],
      },
      {
        layout: 'cards',
        h2: 'The garage door seals and weatherstripping we replace',
        cards: [
          { title: 'Bottom seal', body: 'The astragal seal along the base is the main defence against water and pests. We fit a fresh seal matched to your door.' },
          { title: 'Perimeter stripping', body: 'The stop-moulding stripping around the sides and top blocks draughts and wind-driven rain where the door meets the frame.' },
          { title: 'Threshold seal', body: 'On uneven or sloped floors, a threshold seal on the ground closes a gap the door seal alone cannot.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why a failed garage door seal costs more than it seems',
        items: [
          { title: 'Water damage', body: 'Rain tracking under the door damages stored items and flooring, and keeps the slab damp.' },
          { title: 'Pests and debris', body: 'A worn seal is an open invitation to insects, rodents, leaves and grit.' },
          { title: 'Comfort and energy', body: 'For attached and conditioned garages, a good seal helps hold temperature and keep humidity out.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door weather strip replacement cost',
        lead: 'Weatherstripping is one of the most affordable jobs we do, and a few things decide the exact price.',
        bullets: [
          { label: 'Seal type', text: 'A bottom seal alone is cheaper than also renewing the perimeter stripping and a threshold seal.' },
          { label: 'Door width', text: 'Double-wide doors need more seal, which is the main driver of material cost.' },
          { label: 'Floor evenness', text: 'A sloped or uneven floor may need a threshold seal to fully close the gap.' },
          { label: 'Retainer condition', text: 'If the retainer that holds the seal is damaged, it is replaced along with the seal.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Tell us what you are seeing', body: 'Daylight under the door, water after rain, or a draught along the base all point to a worn seal.' },
      { title: 'On-site check', body: 'We check the bottom seal, retainer, perimeter stripping and the floor to see what needs renewing.' },
      { title: 'Upfront price', body: 'You get the full cost in writing before any work begins, matched to your door profile and gap.' },
      { title: 'Fit and test', body: 'We fit the new seal and stripping and close the door to confirm the gap is sealed along its length.' },
    ],
    serviceAreasIntro:
      'We replace garage door weather seals across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'How do I know if my garage door weather strip is worn?', a: 'Look for daylight under a closed door, water tracking in after rain, draughts along the base, and rubber that has gone hard, cracked or flattened.' },
      { q: 'Will a new seal stop water getting in?', a: 'A fresh bottom seal greatly reduces water entry. On a sloped or uneven floor, a threshold seal may also be needed to fully close the gap.' },
      { q: 'What is the difference between the bottom seal and weatherstripping?', a: 'The bottom seal runs along the base of the door. Weatherstripping is the stop-moulding seal around the sides and top where the door meets the frame.' },
      { q: 'Does a garage door seal keep pests out?', a: 'Yes. A good bottom seal closes the gap that insects, rodents and debris use to get in, which is a common reason homeowners replace it.' },
      { q: 'How long does weather strip replacement take?', a: 'It is one of the quickest jobs we do and is usually completed in a single short visit.' },
      { q: 'My garage floor is uneven, can you still seal the gap?', a: 'Yes. On uneven or sloped floors we can add a threshold seal on the ground to close the gap the door seal alone leaves.' },
    ],
    relatedSlugs: ['panels-repair', 'service-and-maintenance', 'rollers-replacement', 'hinges-replacement', 'springs-replacement'],
  },

  'panels-repair': {
    primaryKeyword: 'garage door panel repair',
    secondaryKeyword: 'garage door panels repair',
    metaTitle: 'Garage Door Panel Repair Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door panel repair in Charleston, fixing dented, bowed and impact-damaged sections without a new door. Call today!',
    h1: 'Professional Garage Door Panel Repair',
    heroDesc:
      'A dented section does not always mean a new door. Our garage door panel repair restores strength and looks without a full replacement.',
    whyLede:
      'Minor dents and damaged hardware on one section can often be repaired without replacing the whole door. We assess honestly whether a repair will hold or a replacement is better value.',
    whyPoints: [
      'Honest repair-or-replace advice on damaged sections',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Dent repair on steel sections where practical',
      'Strut reinforcement for bowed or weakened panels',
      'Damaged hinges, struts and hardware replaced',
      'Assessment of hidden structural damage',
      'Guidance on repair versus section replacement',
      'Colour and style matching considerations',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'When a garage door panel can be repaired, not replaced',
        image: true,
        paras: [
          'Shallow dents in a steel section, a bowed panel that needs a strut, and damaged hinges or hardware on an otherwise sound door are often repairable.',
          'Repair makes sense when the section keeps its strength and the door still runs true, and when the panel model is hard to match or source.',
          'We assess the damage honestly and tell you when a repair will hold and when replacing the section is the better value.',
        ],
      },
      {
        layout: 'cards',
        h2: 'The garage door panel problems we assess and repair',
        cards: [
          { title: 'Dents and dings', body: 'Shallow dents in a steel section can often be improved, keeping the door looking right without a full replacement.' },
          { title: 'Bowed sections', body: 'A section that has bowed can often be reinforced with a strut to restore strength and straight travel.' },
          { title: 'Impact damage', body: 'After a knock, we check the panel, hinges and rollers and advise whether repair or section replacement is right.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why a damaged panel is more than a cosmetic issue',
        items: [
          { title: 'Strength', body: 'Sections carry real load. A weakened panel can flex, which strains the hinges, rollers and track.' },
          { title: 'Operation', body: 'A bowed or bent section can bind in the track or throw the door off balance as it travels.' },
          { title: 'Weather', body: 'Cracks and gaps let water and air in, especially on insulated doors.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door panel repair cost and feasibility',
        lead: 'Whether a panel is worth repairing depends on the damage and the door, and we will tell you honestly.',
        bullets: [
          { label: 'Damage extent', text: 'A shallow dent is a candidate for repair; a torn or deeply creased section usually needs replacing.' },
          { label: 'Material', text: 'Steel sections respond differently to repair than aluminium or glass panels.' },
          { label: 'Panel age and availability', text: 'When a matching section is hard to source, repairing the existing one can be the practical choice.' },
          { label: 'Structural damage', text: 'If the frame, hinges or struts are compromised, that is factored into the assessment.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Tell us what happened', body: 'Describe the dent or damage and how it occurred so we can advise on the likely options.' },
      { title: 'On-site assessment', body: 'We check the panel, struts, hinges and rollers for hidden damage and test how the door runs.' },
      { title: 'Honest recommendation and price', body: 'We tell you whether a repair will hold or a section replacement is better value, with the price in writing.' },
      { title: 'Repair and test', body: 'We carry out the agreed repair, re-balance the door, and cycle-test it so it runs true.' },
    ],
    serviceAreasIntro:
      'We repair garage door panels across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'Can my dented garage door panel be repaired?', a: 'Often, yes, for shallow dents in a steel section. We assess the damage in person and tell you honestly whether a repair will hold or the section is better replaced.' },
      { q: 'Should I repair or replace the damaged section?', a: 'If the section keeps its strength and the door runs true, repair is good value, especially when the panel is hard to match. We advise based on the actual damage.' },
      { q: 'Will a panel repair be invisible?', a: 'A repair restores strength and improves the look, but we are honest that it is a repair, not a brand-new panel. Where appearance is critical, section replacement may suit better.' },
      { q: 'Does a dent affect how the door operates?', a: 'It can. A bowed or bent section may bind in the track or throw the door off balance, which is why we check operation, not just looks.' },
      { q: 'Is my garage door weaker after panel damage?', a: 'A damaged or poorly reinforced section can flex and strain the hinges and rollers. We assess the structure and reinforce or replace as needed.' },
      { q: 'How long does panel repair take?', a: 'Many panel repairs are completed in a single visit. Sourcing a matching section, if replacement is needed, can take longer.' },
    ],
    relatedSlugs: ['panels-replacement', 'garage-door-replacement', 'off-track-repair', 'hinges-replacement', 'service-and-maintenance'],
  },

  'panels-replacement': {
    primaryKeyword: 'garage door panel replacement',
    secondaryKeyword: 'garage door panels replacement',
    metaTitle: 'Garage Door Panel Replacement Services - Top Level',
    metaDescription:
      'Top Level Garage Door handles garage door panel replacement in Charleston, swapping single or multiple damaged sections and colour-matching. Call today!',
    h1: 'Professional Garage Door Panel Replacement',
    heroDesc:
      'When a section is too damaged to repair, our garage door panel replacement swaps it and colour-matches the new section to the existing door.',
    whyLede:
      'Replacing a single section can restore a door for a fraction of a full replacement, as long as the model is still available. We check availability and match the new panel to the rest of the door.',
    whyPoints: [
      'New sections colour and profile-matched to your door',
      'Licensed, insured and bonded, with proof on request',
      'More than 10 years of hands-on garage door experience',
      'Upfront pricing in writing before any work begins',
      'Our own technicians, never subcontracted',
      'Same-day service across Charleston and the Lowcountry',
    ],
    servicesScope: [
      'Single and multiple section replacement',
      'Colour and panel-profile matching to the existing door',
      'Model and availability checks before quoting',
      'New hinges, struts and hardware with the section',
      'Full re-balance after the section is fitted',
      'Guidance when a full replacement is better value',
    ],
    seoSections: [
      {
        layout: 'split',
        h2: 'When garage door panel replacement beats repairing the section',
        image: true,
        paras: [
          'When a section is torn, deeply creased, rotted or rusted through, a repair will not restore its strength, and replacing just that section is the better fix.',
          'Section replacement keeps the rest of a sound door in service and costs far less than a whole new door, provided the model and panel are still available.',
          'We check availability first, because on a discontinued door a full replacement can be the more practical route.',
        ],
      },
      {
        layout: 'cards',
        h2: 'What garage door panel replacement involves on your door',
        cards: [
          { title: 'Match the section', body: 'We identify your door model and match the new section for colour and panel profile so it blends in.' },
          { title: 'Fit and re-balance', body: 'We fit the section with new hinges and hardware and re-balance the door so it runs true.' },
          { title: 'When to replace fully', body: 'If several sections are damaged or the model is discontinued, we will tell you when a full door is better value.' },
        ],
      },
      {
        layout: 'reasons',
        h2: 'Why matched garage door panel replacement protects the door',
        items: [
          { title: 'Strength restored', body: 'A new section brings back the load-bearing strength a damaged panel lost, protecting the hinges and track.' },
          { title: 'Balance maintained', body: 'Sections differ in weight. A correctly matched panel keeps the door balanced against the springs.' },
          { title: 'Appearance', body: 'Colour and profile matching keeps the door looking like one door, not a patched one.' },
        ],
      },
      {
        layout: 'twocol',
        h2: 'What affects garage door panel replacement cost and options',
        lead: 'The price depends on what needs matching and how many sections are involved.',
        bullets: [
          { label: 'Number of sections', text: 'Replacing one section costs less than several, and at some point a full door is better value.' },
          { label: 'Model availability', text: 'A current model is easy to match; a discontinued door may limit the options.' },
          { label: 'Material and style', text: 'Steel, carriage-house and glass sections sit at different price points.' },
          { label: 'Matching', text: 'Close colour and profile matching keeps the door looking uniform, which we confirm before ordering.' },
        ],
      },
    ],
    processSteps: [
      { title: 'Tell us what is damaged', body: 'Describe which section is damaged and how, and share the door brand if you know it.' },
      { title: 'Identify and check availability', body: 'We identify the model and confirm the matching section can be sourced before quoting.' },
      { title: 'Upfront price', body: 'You get the full cost in writing before any work begins, including the hinges and hardware for the section.' },
      { title: 'Fit, match and re-balance', body: 'We fit the matched section, re-balance the door, and cycle-test it so it runs true and looks right.' },
    ],
    serviceAreasIntro:
      'We replace garage door sections across Charleston County and the surrounding Lowcountry. See the full list of areas we cover, or call and we will confirm we reach you.',
    faqs: [
      { q: 'Can you replace just one garage door section?', a: 'Yes, when the rest of the door is sound and the matching section is available. Replacing one section costs far less than a whole new door.' },
      { q: 'Will the new panel match my existing door?', a: 'We match the colour and panel profile as closely as the model allows. On current doors the match is very close; weathering can mean a slight difference on older doors.' },
      { q: 'What if my garage door model is discontinued?', a: 'If the section cannot be sourced, a single-section replacement may not be possible. In that case we will explain when a full door replacement is the practical choice.' },
      { q: 'Should I replace one section or the whole door?', a: 'If only one section is damaged and it matches, replacement is good value. If several are damaged or the door is near end of life, a full replacement often makes more sense.' },
      { q: 'How long does panel replacement take?', a: 'Once the matching section is in, fitting is usually a single visit. Sourcing the section can add lead time.' },
      { q: 'Does replacing a section affect the door balance?', a: 'It can, because sections vary in weight. We re-balance the door against the springs after fitting so it runs correctly.' },
    ],
    relatedSlugs: ['panels-repair', 'garage-door-replacement', 'springs-replacement', 'weather-strip-replacement', 'service-and-maintenance'],
  },
};

export const getServicePage = (slug) => servicePages[slug];
export const hasServicePage = (slug) => Object.prototype.hasOwnProperty.call(servicePages, slug);
