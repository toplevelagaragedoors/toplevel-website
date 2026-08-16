import { useEffect, useState } from 'react';

const TZ = 'America/New_York';

// Sunday = 0. Minutes from midnight, local to the business.
const SCHEDULE = [
  { open: 7 * 60, close: 19 * 60 }, // Sun
  { open: 7 * 60, close: 19 * 60 }, // Mon
  { open: 7 * 60, close: 19 * 60 }, // Tue
  { open: 7 * 60, close: 19 * 60 }, // Wed
  { open: 7 * 60, close: 19 * 60 }, // Thu
  { open: 7 * 60, close: 16 * 60 }, // Fri
  null, // Sat - closed
];

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const fmtTime = (mins) => {
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  const h = h24 % 12 === 0 ? 12 : h24 % 12;
  const suffix = h24 < 12 ? 'am' : 'pm';
  return m ? `${h}:${String(m).padStart(2, '0')}${suffix}` : `${h}${suffix}`;
};

/**
 * Reads the current time in the business's own timezone rather than the
 * visitor's, so someone browsing from California sees Charleston's hours.
 * Using Intl means daylight saving is handled by the platform - there is no
 * hardcoded offset to drift twice a year.
 */
export function getStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const get = (type) => parts.find((p) => p.type === type)?.value;
  const dayIdx = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  // Intl can return "24" for midnight in hour12:false
  const hour = Number(get('hour')) % 24;
  const minutes = hour * 60 + Number(get('minute'));

  const today = SCHEDULE[dayIdx];
  if (today && minutes >= today.open && minutes < today.close) {
    return { open: true, label: `Open now · closes ${fmtTime(today.close)}` };
  }

  // Opening later today?
  if (today && minutes < today.open) {
    return { open: false, label: `Closed · opens today ${fmtTime(today.open)}` };
  }

  // Otherwise find the next day that trades
  for (let i = 1; i <= 7; i += 1) {
    const idx = (dayIdx + i) % 7;
    const next = SCHEDULE[idx];
    if (next) {
      const when = i === 1 ? 'tomorrow' : DAYS[idx];
      return { open: false, label: `Closed · opens ${when} ${fmtTime(next.open)}` };
    }
  }
  return { open: false, label: 'Closed' };
}

export default function OpenStatus() {
  // Server-rendered markup must not assert a state it cannot know, so it
  // starts neutral and fills in once the client knows the real time.
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const tick = () => setStatus(getStatus());
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  if (!status) return <span className="topbar__item">Sun-Thu 7am-7pm · Fri 7am-4pm</span>;

  return (
    <span className="topbar__item">
      <span className={`pulse${status.open ? '' : ' pulse--off'}`} />
      {status.label}
    </span>
  );
}
