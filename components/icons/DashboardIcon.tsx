import * as React from "react"
import { SVGProps } from "react"

export const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m6.037 12.318 2.495-3.242 2.845 2.235 2.44-3.15"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={16.663}
      cy={3.5}
      r={1.602}
      stroke="url(#b)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.437 2.6H6.381c-2.51 0-4.066 1.777-4.066 4.287v6.735c0 2.51 1.526 4.28 4.066 4.28h7.17c2.51 0 4.065-1.77 4.065-4.28V7.757"
      stroke="url(#c)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={5.452}
        y1={8.161}
        x2={14.997}
        y2={8.997}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={14.82}
        y1={1.898}
        x2={18.772}
        y2={2.083}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={1.163}
        y1={2.6}
        x2={20.038}
        y2={3.483}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
    </defs>
  </svg>
)

