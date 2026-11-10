type LogoProps = {
  className?: string;
};

const Logo = ({ className = "h-[26px] w-auto" }: LogoProps) => (
  <svg viewBox="0 0 340 90" role="img" aria-label="CodeLabs" className={className}>
    <text x="0" y="64" fontSize="64" fontWeight="600" letterSpacing="-3" className="fill-fg font-display">
      <tspan className="fill-brand">co</tspan>delabs<tspan className="fill-brand">.</tspan>
    </text>
  </svg>
);

export default Logo;
