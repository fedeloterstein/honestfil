import * as React from "react"
import { SVGProps } from "react"

export const PlusWhiteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 5.205v4.579M9.792 7.494H5.208"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M10.429 1.25H4.57C2.53 1.25 1.25 2.695 1.25 4.74v5.52c0 2.045 1.274 3.49 3.321 3.49h5.858c2.047 0 3.321-1.445 3.321-3.49V4.74c0-2.045-1.274-3.49-3.321-3.49Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)


