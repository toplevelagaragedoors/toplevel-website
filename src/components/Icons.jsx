const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const S = ({ size = 20, children, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...base} {...rest}>
    {children}
  </svg>
);

export const Phone = (p) => (
  <S {...p}>
    <path d="M6.2 3.5h3l1.4 3.6-1.9 1.4a12 12 0 0 0 5.8 5.8l1.4-1.9 3.6 1.4v3a1.7 1.7 0 0 1-1.9 1.7A15.6 15.6 0 0 1 4.5 5.4 1.7 1.7 0 0 1 6.2 3.5Z" />
  </S>
);

export const Check = (p) => (
  <S {...p}>
    <path d="m4.5 12.5 4.6 4.6L19.5 6.7" />
  </S>
);

export const Clock = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.7" />
    <path d="M12 6.9V12l3.4 2" />
  </S>
);

export const Shield = (p) => (
  <S {...p}>
    <path d="M12 3 5 5.7v5.4c0 4.3 2.9 7.8 7 9.4 4.1-1.6 7-5.1 7-9.4V5.7Z" />
    <path d="m9.2 12 2 2 3.6-3.9" />
  </S>
);

export const Pin = (p) => (
  <S {...p}>
    <path d="M12 21s6.6-5.4 6.6-10.2A6.6 6.6 0 0 0 5.4 10.8C5.4 15.6 12 21 12 21Z" />
    <circle cx="12" cy="10.6" r="2.4" />
  </S>
);

export const Mail = (p) => (
  <S {...p}>
    <rect x="3" y="5.4" width="18" height="13.2" rx="1.8" />
    <path d="m3.6 6.6 8.4 6 8.4-6" />
  </S>
);

export const Arrow = (p) => (
  <S {...p}>
    <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" />
  </S>
);

/* --- Service icons: drawn from garage door hardware ---------------------- */

export const IconDoor = (p) => (
  <S {...p} strokeWidth={1.4}>
    <path d="M3 9.4 12 4l9 5.4" />
    <rect x="5.2" y="9.4" width="13.6" height="10.6" rx="0.8" />
    <path d="M5.2 13h13.6M5.2 16.5h13.6" />
  </S>
);

export const IconSpring = (p) => (
  <S {...p} strokeWidth={1.4}>
    <path d="M3 8h1.6M19.4 8H21M3 16h1.6M19.4 16H21" />
    <path d="M4.8 6.6h14.4v10.8H4.8z" opacity="0.25" />
    <path d="M5.4 7.2c2 0 2 9.6 4 9.6s2-9.6 4-9.6 2 9.6 4 9.6" />
  </S>
);

export const IconOpener = (p) => (
  <S {...p} strokeWidth={1.4}>
    <rect x="3.4" y="8.6" width="7.4" height="6.8" rx="1.2" />
    <path d="M10.8 12h9.8M13.6 9.6v4.8M16.6 9.6v4.8M19.6 9.6v4.8" />
    <path d="M7.1 5.6V8.6" />
  </S>
);

export const IconInstall = (p) => (
  <S {...p} strokeWidth={1.4}>
    <path d="M3 10 12 3.6 21 10" />
    <path d="M5.6 10v10h12.8V10" />
    <path d="M9.4 14.2h5.2v5.8H9.4z" />
  </S>
);

export const IconCable = (p) => (
  <S {...p} strokeWidth={1.4}>
    <circle cx="7" cy="6.6" r="2.6" />
    <circle cx="17" cy="17.4" r="2.6" />
    <path d="M7 9.2c0 4.4 3 5.2 5 6.2M17 14.8c0-4.4-3-5.2-5-6.2" />
  </S>
);

export const IconTrack = (p) => (
  <S {...p} strokeWidth={1.4}>
    <path d="M4.6 3.4v17.2M19.4 3.4v17.2" />
    <path d="M4.6 8.6h6.2l3.4 3.4h5.2" />
    <circle cx="8.4" cy="15.4" r="2" />
  </S>
);

export const IconCommercial = (p) => (
  <S {...p} strokeWidth={1.4}>
    <path d="M3 20.4h18" />
    <path d="M5 20.4V6.2h9.2v14.2M14.2 10.4H19v10" />
    <path d="M7.4 9.4h4.4M7.4 13h4.4M7.4 16.6h4.4" />
  </S>
);

export const IconEmergency = (p) => (
  <S {...p} strokeWidth={1.4}>
    <path d="M12 3.4 3.4 19h17.2Z" />
    <path d="M12 9.6v4M12 16.2h.01" />
  </S>
);

// Ordered set, cycled across the service cards.
export const icons = [
  IconSpring,
  IconOpener,
  IconInstall,
  IconTrack,
  IconCable,
  IconDoor,
  IconCommercial,
  IconEmergency,
];
