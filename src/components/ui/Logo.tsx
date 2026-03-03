import React from "react";

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 100 100" 
    fill="none" 
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Clean perfectly geometric "coda" 2x2 grid ligature */}
    
    {/* Top Left: 'c' */}
    <path d="M 39.31 22.69 A 16 16 0 1 0 39.31 45.31" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    
    {/* Top Right: 'o' */}
    <circle cx="72" cy="34" r="16" stroke="currentColor" strokeWidth="4" />
    
    {/* Bottom Left: 'd' */}
    <circle cx="28" cy="78" r="16" stroke="currentColor" strokeWidth="4" />
    {/* Stem for 'd' */}
    <line x1="44" y1="50" x2="44" y2="94" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

    {/* Bottom Right: 'a' */}
    <circle cx="72" cy="78" r="16" stroke="currentColor" strokeWidth="4" />
    {/* Stem for 'a' */}
    <line x1="88" y1="62" x2="88" y2="94" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);
