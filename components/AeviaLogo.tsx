export function AeviaLogo({ className = "", showTagline = false }: { className?: string; showTagline?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric symbol — inspired by the angular A with chevrons */}
      <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silver" x1="0" y1="0" x2="36" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#c0c8d8" />
            <stop offset="100%" stopColor="#8896aa" />
          </linearGradient>
        </defs>
        {/* Left chevrons */}
        <path d="M8 16L13 9L14.5 10.5L10.5 16L14.5 21.5L13 23L8 16Z" fill="url(#silver)" />
        <path d="M4 16L10 8L11.5 9.5L7 16L11.5 22.5L10 24L4 16Z" fill="url(#silver)" opacity="0.7" />
        {/* Right chevrons */}
        <path d="M28 16L23 9L21.5 10.5L25.5 16L21.5 21.5L23 23L28 16Z" fill="url(#silver)" />
        <path d="M32 16L26 8L24.5 9.5L29 16L24.5 22.5L26 24L32 16Z" fill="url(#silver)" opacity="0.7" />
        {/* Central A shape */}
        <path d="M18 4L23 16H20.5L18 10.5L15.5 16H13L18 4Z" fill="url(#silver)" />
        <path d="M14.5 17.5H21.5L22.5 20H13.5L14.5 17.5Z" fill="url(#silver)" opacity="0.6" />
        {/* Bottom legs */}
        <path d="M13.5 20H15.5L16.5 24H13L13.5 20Z" fill="url(#silver)" opacity="0.8" />
        <path d="M22.5 20H20.5L19.5 24H23L22.5 20Z" fill="url(#silver)" opacity="0.8" />
      </svg>

      {/* Wordmark */}
      <div>
        <div className="text-white font-bold text-xl tracking-[0.15em] leading-none">
          AEVIA
        </div>
        {showTagline && (
          <div className="text-zinc-400 text-[9px] tracking-[0.2em] uppercase mt-0.5 leading-none">
            Agence Web · Solutions Digitales
          </div>
        )}
      </div>
    </div>
  );
}
