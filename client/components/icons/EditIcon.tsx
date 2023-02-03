import * as React from "react"
import { SVGProps } from "react"

export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#5E5D75"
      strokeWidth={1.5}
      strokeLinejoin="round"
    >
      <path d="M10.555 2.914c.56-.605.839-.908 1.136-1.085a2.33 2.33 0 0 1 2.327-.035c.302.168.59.462 1.166 1.05.576.59.864.883 1.028 1.192a2.47 2.47 0 0 1-.034 2.377c-.173.303-.47.589-1.062 1.16l-7.053 6.793c-1.123 1.082-1.685 1.623-2.387 1.897s-1.474.254-3.017.213l-.21-.005c-.47-.012-.705-.018-.841-.174-.137-.154-.118-.394-.08-.872l.02-.26c.104-1.347.157-2.02.42-2.626.263-.606.717-1.097 1.624-2.08l6.963-7.545ZM9.75 3 15 8.25" />
      <path d="M10.5 16.5h6" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)

