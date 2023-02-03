import * as React from "react"
import { SVGProps } from "react"

export const BoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m6.574 12.79 3.416 3.348 7.343-8.368"
      stroke="#14C332"
      strokeWidth={2.391}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={0.5}
      y={0.5}
      width={22.908}
      height={22.908}
      rx={3.5}
      stroke="#14C332"
    />
  </svg>
)


