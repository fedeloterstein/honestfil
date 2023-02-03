import * as React from "react"
import { SVGProps } from "react"

export const AlertIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M12.287 9.683 8.652 3.778a1.332 1.332 0 0 0-2.292 0L2.724 9.683a1.426 1.426 0 0 0 1.146 2.192h7.271a1.426 1.426 0 0 0 1.146-2.192Z"
      stroke="#FFD83D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.505 8.125V5M7.505 10v-.625"
      stroke="#FFD83D"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
)


