import * as React from "react"
import { SVGProps } from "react"

export const FaqsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M1 12.867a5.262 5.262 0 0 0 5.323 5.202h2.579c.701 0 1.372.288 1.857.795l1.374 1.437a1.157 1.157 0 0 0 1.647 0l2.134-2.232.701-.781c.13-.14.27-.27.42-.386A5.143 5.143 0 0 0 19 12.867V6.554a5.262 5.262 0 0 0-5.323-5.2H6.323A5.262 5.262 0 0 0 1 6.555v6.313Z"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.553 11.977a.75.75 0 1 0-1.392-.56l1.392.56Zm-1.832 1.27.473.582.003-.002-.476-.58Zm-5.467-.039-.486.572.004.002.482-.574Zm-.411-1.836a.75.75 0 1 0-1.4.537l1.4-.537Zm.05-4.874a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1.286a.75.75 0 0 0 1.5 0h-1.5Zm9.214-1.286a.75.75 0 1 0-1.5 0h1.5Zm-1.5 1.286a.75.75 0 0 0 1.5 0h-1.5Zm.054 3.633a3.14 3.14 0 0 1-.917 1.252l.953 1.158a4.64 4.64 0 0 0 1.356-1.85l-1.392-.56Zm-.914 1.25a3.54 3.54 0 0 1-4.511-.034l-.964 1.15a5.04 5.04 0 0 0 6.422.046l-.947-1.163Zm-4.508-.03c-.4-.34-.708-.775-.896-1.265l-1.4.537a4.632 4.632 0 0 0 1.325 1.87l.971-1.143Zm-2.346-6.14v1.287h1.5V6.498h-1.5Zm7.714 0v1.287h1.5V6.498h-1.5Z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={-0.355}
        y1={1.355}
        x2={21.856}
        y2={2.324}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={5.562}
        y1={6.498}
        x2={15.078}
        y2={6.943}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#127FC9" />
        <stop offset={1} stopColor="#12C99D" />
      </linearGradient>
    </defs>
  </svg>
)


