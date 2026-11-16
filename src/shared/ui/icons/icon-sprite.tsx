const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const IconSprite = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
    <symbol id="icon-whatsapp" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
      />
    </symbol>
    <symbol id="icon-signal" viewBox="0 0 18 12">
      <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="currentColor" />
      <rect x="10" y="3" width="3" height="9" rx="1" fill="currentColor" />
      <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
    </symbol>
    <symbol id="icon-wifi" viewBox="0 0 16 12">
      <path d="M8 11.5 5.6 8.9a3.4 3.4 0 0 1 4.8 0z" fill="currentColor" />
      <path d="M3.3 6.6a6.6 6.6 0 0 1 9.4 0l-1.4 1.4a4.6 4.6 0 0 0-6.6 0z" fill="currentColor" />
      <path d="M1 4.3a9.9 9.9 0 0 1 14 0l-1.4 1.4a7.9 7.9 0 0 0-11.2 0z" fill="currentColor" />
    </symbol>
    <symbol id="icon-battery" viewBox="0 0 27 12">
      <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity="0.45" />
      <rect x="2" y="2" width="17" height="8" rx="1.6" fill="currentColor" />
      <path d="M24.5 4v4c.8-.3 1.5-1 1.5-2s-.7-1.7-1.5-2z" fill="currentColor" opacity="0.45" />
    </symbol>
    <symbol id="icon-home" viewBox="0 0 24 24">
      <path {...stroke} d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="icon-calendar" viewBox="0 0 24 24">
      <rect {...stroke} x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path {...stroke} d="M3.5 10h17M8 3v4M16 3v4" />
    </symbol>
    <symbol id="icon-card" viewBox="0 0 24 24">
      <rect {...stroke} x="3" y="5.5" width="18" height="13" rx="3" />
      <path {...stroke} d="M3 10h18M7 14.5h4" />
    </symbol>
    <symbol id="icon-user" viewBox="0 0 24 24">
      <circle {...stroke} cx="12" cy="8.5" r="3.8" />
      <path {...stroke} d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </symbol>
    <symbol id="icon-users" viewBox="0 0 24 24">
      <circle {...stroke} cx="9" cy="8" r="3.5" />
      <path {...stroke} d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle {...stroke} cx="17" cy="9" r="2.5" />
      <path {...stroke} d="M16 14.2a5 5 0 0 1 5.5 4.8" />
    </symbol>
    <symbol id="icon-box" viewBox="0 0 24 24">
      <path {...stroke} d="M12 3 20 7.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9" />
    </symbol>
    <symbol id="icon-chart" viewBox="0 0 24 24">
      <path {...stroke} d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </symbol>
    <symbol id="icon-shield" viewBox="0 0 24 24">
      <path {...stroke} d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z" />
    </symbol>
    <symbol id="icon-search" viewBox="0 0 24 24">
      <circle {...stroke} cx="11" cy="11" r="6.5" strokeWidth={2} />
      <path {...stroke} d="m16 16 4.5 4.5" strokeWidth={2} />
    </symbol>
    <symbol id="icon-sun" viewBox="0 0 24 24">
      <circle {...stroke} cx="12" cy="12" r="4" />
      <path {...stroke} d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
    </symbol>
    <symbol id="icon-chevron-down" viewBox="0 0 24 24">
      <path {...stroke} strokeWidth={2.4} d="m6 9 6 6 6-6" />
    </symbol>
    <symbol id="icon-check" viewBox="0 0 24 24">
      <path {...stroke} strokeWidth={3} d="m5 12 5 5 9-10" />
    </symbol>
    <symbol id="icon-messenger" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.15.26.36.27.58l.05 1.78c.02.57.6.94 1.12.71l1.99-.88c.17-.07.36-.09.53-.04.91.25 1.89.38 2.9.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2Zm6 7.46-2.94 4.66a1.5 1.5 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66a1.5 1.5 0 0 1 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63Z"
      />
    </symbol>
    <symbol id="icon-globe" viewBox="0 0 24 24">
      <circle {...stroke} cx="12" cy="12" r="9" />
      <path {...stroke} d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </symbol>
    <symbol id="icon-star" viewBox="0 0 24 24">
      <path fill="currentColor" d="m12 2.8 2.8 5.7 6.3.9-4.55 4.43 1.07 6.27L12 17.14l-5.63 2.96 1.08-6.27L2.9 9.4l6.3-.91L12 2.8Z" />
    </symbol>
  </svg>
);

export default IconSprite;
