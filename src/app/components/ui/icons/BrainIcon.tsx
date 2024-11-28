import { SVGProps } from "react";

export function BrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 13.5V11h2a1 1 0 0 0 1-1V6a5.5 5.5 0 1 0-8 4.9v2.6"></path>
        <path d="M5.5 3.312a3.25 3.25 0 0 0-1.436 3.9c.12.335.48.503.824.412c1.737-.46 3.505-1.705 4.58-2.675c.285-.257.343-.687.09-.975A3.25 3.25 0 0 0 5.5 3.312"></path>
      </g>
    </svg>
  );
}
