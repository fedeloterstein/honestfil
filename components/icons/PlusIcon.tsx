import * as React from "react"
import { SVGProps } from "react"

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 12.491v10.99"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.5 17.986h-11"
      stroke="url(#b)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M25.029 3H10.97C6.071 3 3 6.468 3 11.378v13.244C3 29.532 6.057 33 10.971 33H25.03C29.943 33 33 29.532 33 24.622V11.378C33 6.468 29.943 3 25.029 3Z"
      stroke="url(#c)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={17.178}
        y1={12.491}
        x2={18.944}
        y2={12.502}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={11.672}
        y1={17.272}
        x2={23.706}
        y2={21.612}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={0.742}
        y1={3}
        x2={37.749}
        y2={4.732}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
    </defs>
  </svg>
)

