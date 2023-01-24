import * as React from "react"
import { SVGProps } from "react"

export const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M9.6 1.45H4.4c-1.812 0-2.95 1.283-2.95 3.1v4.9c0 1.817 1.132 3.1 2.95 3.1H9.6c1.818 0 2.95-1.283 2.95-3.1v-4.9c0-1.817-1.132-3.1-2.95-3.1Z"
      stroke="#53D258"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 4.548v4.904M4.751 6.807 7 4.548l2.249 2.259"
      stroke="#53D258"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)


