type BrandMonogramProps = {
  className?: string;
};

export default function BrandMonogram({ className = "" }: BrandMonogramProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brand-at-gradient" x1="20" y1="18" x2="95" y2="102" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8DB4FF" />
          <stop offset="0.45" stopColor="#4B6FFF" />
          <stop offset="1" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id="brand-at-glow" x1="34" y1="24" x2="86" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F8FBFF" />
          <stop offset="1" stopColor="#DCE8FF" />
        </linearGradient>
      </defs>

      <rect x="10" y="10" width="100" height="100" rx="28" fill="rgba(17,24,39,0.04)" stroke="rgba(17,24,39,0.18)" />
      <path
        d="M36 88L58 28L80 88M46 63H70"
        stroke="url(#brand-at-gradient)"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M80 28V88M68 28H92"
        stroke="url(#brand-at-glow)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M90 26C96 32 100 40 100 49" stroke="rgba(75,111,255,0.75)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="92" cy="24" r="4.5" fill="#4B6FFF" />
      <circle cx="35" cy="31" r="3" fill="rgba(75,111,255,0.25)" />
    </svg>
  );
}
