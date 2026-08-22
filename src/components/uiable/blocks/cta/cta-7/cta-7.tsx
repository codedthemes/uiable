//  ------------------------------ | CTA 7 | ------------------------------  //

export default function Cta7() {
  return (
    <section className="bg-slate-800 pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 flex flex-col items-center text-center md:col-span-8 md:col-start-3">
            <div className="flex flex-col items-center gap-2 text-center sm:gap-5">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-20 rounded-full bg-linear-to-r from-transparent to-rose-500 sm:w-25"></div>
                <span className="text-md font-semibold text-rose-500 sm:text-lg">
                  Download Our App
                </span>
                <div className="h-0.5 w-20 rounded-full bg-linear-to-r from-rose-500 to-transparent sm:w-25"></div>
              </div>
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <h2 className="text-lg font-medium text-slate-100 sm:text-3xl">
                  Download Our App Today Free
                </h2>
                <h2 className="text-lg font-medium text-slate-100 sm:text-3xl">
                  iPhone <span>&amp;</span> Android
                </h2>
              </div>

              <p className="max-w-100 text-slate-300">
                Download the app for a faster, smoother experience and enjoy
                exclusive features anytime, anywhere.
              </p>
            </div>
            <div className="mt-5 mb-8 flex flex-wrap justify-start gap-4">
              <a
                href="#"
                className="transition-all hover:translate-y-1 hover:opacity-90 hover:shadow-2xl"
                aria-label="Download on the App Store"
              >
                <div className="flex w-42 items-center justify-center gap-1.5 rounded-lg border border-white/50 bg-slate-950 px-4 py-2 text-white">
                  <div className="-ml-2 shrink-0">
                    <svg
                      className="size-8"
                      fill="#fff"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                  </div>
                  <div className="grow">
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-xs">Download on the</span>
                      <span className="text-md">App Store</span>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="transition-all hover:translate-y-1 hover:opacity-90 hover:shadow-2xl"
                aria-label="Get it on Google Play"
              >
                <div className="flex w-42 items-center justify-center gap-1.5 rounded-lg border border-white/50 bg-slate-950 px-4 py-2 text-white">
                  <div className="-ml-2 shrink-0">
                    <svg
                      className="size-8"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_87_8320"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="7"
                        y="3"
                        width="24"
                        height="26"
                      >
                        <path
                          d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z"
                          fill="#C4C4C4"
                        />
                      </mask>
                      <g mask="url(#mask0_87_8320)">
                        <path
                          d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z"
                          fill="url(#paint0_linear_87_8320)"
                        />
                        <path
                          d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z"
                          fill="url(#paint1_linear_87_8320)"
                        />
                        <path
                          d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z"
                          fill="url(#paint2_linear_87_8320)"
                        />
                        <path
                          d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z"
                          fill="url(#paint3_linear_87_8320)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_87_8320"
                          x1="15.6769"
                          y1="10.874"
                          x2="7.07106"
                          y2="19.5506"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00C3FF" />
                          <stop offset="1" stopColor="#1BE2FA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_87_8320"
                          x1="20.292"
                          y1="15.8176"
                          x2="31.7381"
                          y2="15.8176"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFCE00" />
                          <stop offset="1" stopColor="#FFEA00" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_87_8320"
                          x1="7.36932"
                          y1="30.1004"
                          x2="22.595"
                          y2="17.8937"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#DE2453" />
                          <stop offset="1" stopColor="#FE3944" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_87_8320"
                          x1="8.10725"
                          y1="1.90137"
                          x2="22.5971"
                          y2="13.7365"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#11D574" />
                          <stop offset="1" stopColor="#01F176" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="grow">
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-xs uppercase">Get it on</span>
                      <span className="text-md">Google Play</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-span-12 flex justify-center">
            <div className="relative mx-auto w-160 max-w-full">
              <img
                src="https://cdn.uiable.com/block/img-cta-app.png"
                alt="App Interface Preview"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
