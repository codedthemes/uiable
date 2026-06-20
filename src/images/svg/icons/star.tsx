import type { SVGAttributes } from "react";

//  ------------------------------ | STAR ICON | ------------------------------  //

export default function Star(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 0L9.88653 2.63808C10.9094 5.6818 13.3316 8.04921 16.3979 9.00213L18 9.5L16.3979 9.99787C13.3316 10.9508 10.9094 13.3182 9.88653 16.3619L9 19L8.71227 17.5787C7.96008 13.8632 5.17156 10.8924 1.51099 9.90683L0 9.5L1.51099 9.09317C5.17156 8.10757 7.96007 5.13681 8.71227 1.42126L9 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
