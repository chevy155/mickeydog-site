import React from "react";

export default function FrenchieSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M256 32c-28 0-52 22-56 50l-6 42c-2 14-12 22-26 22-18 0-32 14-32 32v32l-16 32c-8 16-8 36 0 52l16 32v32c0 18 14 32 32 32h16v16c0 26 22 48 48 48h64c26 0 48-22 48-48v-16h16c18 0 32-14 32-32v-32l16-32c8-16 8-36 0-52l-16-32v-32c0-18-14-32-32-32-14 0-24-8-26-22l-6-42c-4-28-28-50-56-50h-16z"
        fill="currentColor"
      />
    </svg>
  );
}
