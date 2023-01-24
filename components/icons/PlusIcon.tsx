import * as React from "react"
import { SVGProps } from "react"

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 10.491v10.99"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.5 15.986h-11"
      stroke="url(#b)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M23.029 1H8.97C4.071 1 1 4.468 1 9.378v13.244C1 27.532 4.057 31 8.971 31H23.03C27.943 31 31 27.532 31 22.622V9.378C31 4.468 27.943 1 23.029 1Z"
      stroke="url(#c)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={15.178}
        y1={10.491}
        x2={16.944}
        y2={10.502}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={9.672}
        y1={15.272}
        x2={21.706}
        y2={19.612}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={-1.258}
        y1={1}
        x2={35.749}
        y2={2.732}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
    </defs>
  </svg>
)


