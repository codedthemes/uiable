import type { SVGAttributes } from "react";

//  ------------------------------ | BASEUI ICON | ------------------------------  //

export default function BaseUi(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3135_5)">
        <path
          d="M13.082 6.562C13.0108 6.55842 12.9396 6.56953 12.8729 6.59462C12.8062 6.61972 12.7453 6.65827 12.6941 6.70788C12.6429 6.75749 12.6024 6.8171 12.5752 6.88301C12.548 6.94892 12.5347 7.01972 12.536 7.091V24C14.8064 24.0047 16.9892 23.1244 18.6212 21.5461C20.2532 19.9677 21.2058 17.8154 21.2768 15.5461C21.3479 13.2769 20.5318 11.0692 19.0018 9.39184C17.4717 7.71444 15.3482 6.69934 13.082 6.562ZM11.446 9.6V24C6.62602 24 2.71802 19.702 2.71802 14.4V0C7.53802 0 11.446 4.298 11.446 9.6Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3135_5">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
