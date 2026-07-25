import React from 'react';

// The ↗ character renders as a blue emoji on iOS, so the icon is drawn instead.
export function ArrowUpRight({ className }) {
  return (
    <svg
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.75 11.25 11.25 4.75" />
      <path d="M5.75 4.75h5.5v5.5" />
    </svg>
  );
}
