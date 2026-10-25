export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="4 12 56 42"
      role="img"
      aria-label="Cooperativas da Reforma Agrária"
      className={className}
    >
      <path className="fill-brand-yellow" d="M6 46A26 26 0 0 1 58 46Z" />
      <path
        className="stroke-brand-teal"
        d="M32 46V32"
        fill="none"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path className="fill-brand-teal" d="M32 38C24 39 17 35 15 26C23 25 30 29 32 38Z" />
      <path className="fill-brand-navy" d="M32 32C32 23 38 16 48 15C49 24 43 31 32 32Z" />
      <rect className="fill-brand-navy" x="6" y="46" width="52" height="5" rx="2.5" />
    </svg>
  )
}
