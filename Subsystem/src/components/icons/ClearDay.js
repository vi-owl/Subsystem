import * as React from "react"

const ClearDay = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="10em"
    height="10em"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={26.75}
        y1={22.91}
        x2={37.25}
        y2={41.09}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.45} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <circle
      cx={32}
      cy={32}
      r={10.5}
      stroke="#f8af18"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      fill="url(#a)"
    />
    <path
      d="M32 15.71V9.5m0 45v-6.21m11.52-27.81 4.39-4.39M16.09 47.91l4.39-4.39m0-23-4.39-4.39m31.82 31.78-4.39-4.39M15.71 32H9.5m45 0h-6.21"
      fill="none"
      stroke="#fbbf24"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
    >
      <animateTransform
        attributeName="transform"
        dur="45s"
        values="0 32 32; 360 32 32"
        repeatCount="indefinite"
        type="rotate"
      />
    </path>
  </svg>
)

export default ClearDay
