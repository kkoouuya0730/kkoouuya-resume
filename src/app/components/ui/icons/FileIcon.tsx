import { SVGProps } from "react";

export function FileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M8 12v-2h8v2zm0-4V6h8v2zm-2 6h7.5q.725 0 1.35.313t1.05.887l2.1 2.75V4H6zm0 6h11.05l-2.725-3.575q-.15-.2-.362-.312T13.5 16H6zm12 2H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22M6 20V4zm0-4v-2z"
      ></path>
    </svg>
  );
}
