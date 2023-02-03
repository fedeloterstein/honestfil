import * as React from "react"
import { SVGProps } from "react"

export const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={42}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 22.008c8.12-1.582 2.154-7.674 9.579-11.485 7.69-3.946 9.635 12.655 17.033 8.13C32.408 15.72 36.156 3.863 41 1.02"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)


