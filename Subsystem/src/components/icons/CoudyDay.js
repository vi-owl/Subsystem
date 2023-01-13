import * as React from "react"

const CoudyDay = (props) => (
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
        x1={16.5}
        y1={19.67}
        x2={21.5}
        y2={28.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.45} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={22.56}
        y1={21.96}
        x2={39.2}
        y2={50.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.45} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
    </defs>
    <circle
      cx={19}
      cy={24}
      r={5}
      stroke="#f8af18"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      fill="url(#a)"
    />
    <path
      d="M19 15.67V12.5m0 23v-3.17m5.89-14.22 2.24-2.24M10.87 32.13l2.24-2.24m0-11.78-2.24-2.24m16.26 16.26-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
      fill="none"
      stroke="#fbbf24"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 19 24; 360 19 24"
        dur="45s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      fill="url(#b)"
    />
  </svg>
)

export default CoudyDay
