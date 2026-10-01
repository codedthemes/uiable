// types
import type { SVGAttributes } from "react"

//  ------------------------------ | MOTION ICON | ------------------------------  //

export default function Motion(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 25.364 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      aria-hidden="true"
    >
      <path
        d="M 9.587 0 L 4.57 9 L 0 9 L 3.917 1.972 C 4.524 0.883 6.039 0 7.301 0 Z M 20.794 2.25 C 20.794 1.007 21.817 0 23.079 0 C 24.341 0 25.364 1.007 25.364 2.25 C 25.364 3.493 24.341 4.5 23.079 4.5 C 21.817 4.5 20.794 3.493 20.794 2.25 Z M 10.443 0 L 15.013 0 L 9.997 9 L 5.427 9 Z M 15.841 0 L 20.411 0 L 16.494 7.028 C 15.887 8.117 14.372 9 13.11 9 L 10.825 9 Z"
        fill="currentColor"
      />
    </svg>
  )
}
