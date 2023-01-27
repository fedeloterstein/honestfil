import * as React from "react"
import { SVGProps } from "react"

export const HeartFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 18.991-2.923-3-2.9-3a4.3 4.3 0 0 1 0-5.91 3.839 3.839 0 0 1 5.61.31l.213.21.21-.219a3.839 3.839 0 0 1 5.61-.31 4.3 4.3 0 0 1 0 5.91l-2.9 3-2.92 3.01Z"
      fill="#F46565"
      stroke="#F46565"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

