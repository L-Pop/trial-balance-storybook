import React from "react";

type IconProps = { size?: number; color?: string };

export const UnfoldIcon = ({ size = 14, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M4 5.5 7 2.5 10 5.5M4 8.5 7 11.5 10 8.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SortAscendingIcon = ({ size = 14, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M4 8.5 7 5.5 10 8.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SortDescendingIcon = ({ size = 14, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M4 5.5 7 8.5 10 5.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FilterActiveIcon = ({ size = 14, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 3h9L8 7.2v3.3L6 12V7.2L2.5 3Z" fill={color} />
  </svg>
);

export const StatusReconciledIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="var(--ext-success)" />
    <path d="M4.8 8.2 6.8 10.2 11.2 5.6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StatusPendingIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="var(--sys-on-surface-variant)" />
    <path d="M8 4.5v3.8l2.6 1.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StatusFlaggedIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="var(--sys-error)" />
    <path d="M8 4.5v4M8 10.7v.1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const MoreIcon = ({ size = 16, color = "var(--sys-on-surface-variant)" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="3.4" r="1.15" fill={color} />
    <circle cx="8" cy="8" r="1.15" fill={color} />
    <circle cx="8" cy="12.6" r="1.15" fill={color} />
  </svg>
);

export const SearchIcon = ({ size = 18, color = "var(--sys-on-surface-variant)" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5" stroke={color} strokeWidth="1.5" />
    <path d="m12 12 3.5 3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const FilterIcon = ({ size = 18, color = "var(--sys-on-surface-variant)" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 4.5h12L10.5 9.2v4.1L7.5 15V9.2L3 4.5Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
