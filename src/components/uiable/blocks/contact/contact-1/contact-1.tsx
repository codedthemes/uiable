// shadcn
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

//  ------------------------------ | CONTACT 1 | ------------------------------  //

export default function Contact1() {
  return (
    <div className="relative overflow-hidden bg-[url('https://cdn.uiable.com/block/img-city-bg.jpg')] bg-cover bg-center py-24 sm:py-32">
      <div className="absolute inset-0 z-20 bg-linear-to-b from-card/50 to-card"></div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="mx-auto flex max-w-108 flex-col items-center gap-2 text-center sm:gap-4">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Get in Touch
            </h2>
            <p className="max-w-90 text-slate-600 dark:text-slate-100">
              Get in touch for questions, support, or feedback. We’re here to
              help and hear from you.
            </p>
          </div>
          <div className="mx-auto w-330 max-w-full rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-14">
            <div className="flex flex-col items-center gap-6 lg:flex-row">
              <div className="w-full basis-full text-center lg:basis-5/12">
                <FieldGroup>
                  <div className="grid grid-cols-12 gap-6">
                    <Field className="col-span-6">
                      <FieldLabel htmlFor="fieldgroup-name">
                        First Name
                      </FieldLabel>
                      <Input id="fieldgroup-name" placeholder="Jordan" />
                    </Field>
                    <Field className="col-span-6">
                      <FieldLabel htmlFor="fieldgroup-lname">
                        Last Name
                      </FieldLabel>
                      <Input id="fieldgroup-lname" placeholder="Lee" />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                    <Input
                      id="fieldgroup-email"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="textarea-header-footer-12">
                      Messege
                    </FieldLabel>
                    <Textarea
                      id="textarea-header-footer-12"
                      placeholder="Enter your text here..."
                    />
                  </Field>
                  <Field orientation="horizontal" className="justify-center">
                    <Button type="reset" variant="outline" className="bg-card">
                      Reset
                    </Button>
                    <Button type="submit">Get Started</Button>
                  </Field>
                </FieldGroup>
              </div>
              <div className="w-full basis-full text-center lg:basis-7/12">
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <div className="w-full basis-full text-center lg:basis-6/12">
                    <div className="group rounded-2xl bg-background px-6 py-10 transition-all hover:bg-pink-500">
                      <div className="flex flex-col gap-6">
                        <h2 className="text-md font-medium text-slate-800 transition-all group-hover:text-white sm:text-2xl dark:text-slate-100">
                          Contact Us
                        </h2>
                        <div className="mx-auto inline-flex size-30 items-center justify-center rounded-full bg-pink-500 text-white transition-all group-hover:bg-white group-hover:text-pink-500">
                          <svg
                            className="size-16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 13c-2.76 0-5 2.23-5 5s2.24 5 5 5 5-2.24 5-5-2.23-5-5-5Zm-2.04 2.96H6a.68.68 0 0 1 0 1.36H3.96a.68.68 0 0 1 0-1.36Zm4.08 4.08H3.96a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h4.09c.38 0 .68.31.68.68 0 .37-.31.68-.69.68Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M17 3H7C4 3 2 4.5 2 8v3.14c0 .73.75 1.19 1.42.9a6.51 6.51 0 0 1 3.66-.45c2.62.43 4.76 2.5 5.29 5.1.15.76.17 1.5.07 2.21-.08.59.4 1.11.99 1.11H17c3 0 5-1.5 5-5V8c0-3.5-2-5-5-5Zm.47 5.59-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-md text-slate-800 transition-all group-hover:text-white sm:text-lg dark:text-slate-100">
                            Email
                          </p>
                          <a href="mailto:contact@example.com">
                            <p className="text-slate-600 transition-all group-hover:text-white dark:text-slate-400 dark:group-hover:text-white">
                              contact@example.com
                            </p>
                          </a>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-md text-slate-800 transition-all group-hover:text-white sm:text-lg dark:text-slate-100">
                            Phone
                          </p>
                          <a href="tel:+1 (555) 123-4567">
                            <p className="text-slate-600 transition-all group-hover:text-white dark:text-slate-400 dark:group-hover:text-white">
                              +1 (555) 123-4567
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full basis-full text-center lg:basis-6/12">
                    <div className="group rounded-2xl bg-background px-6 py-10 transition-all hover:bg-sky-500">
                      <div className="flex flex-col gap-6">
                        <h2 className="text-md font-medium text-slate-800 transition-all group-hover:text-white sm:text-2xl dark:text-slate-100">
                          Reach Us
                        </h2>
                        <div className="mx-auto inline-flex size-30 items-center justify-center rounded-full bg-sky-500 text-white transition-all group-hover:bg-white group-hover:text-sky-500">
                          <svg
                            className="size-16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M20.621 8.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28a5.436 5.436 0 0 0 3.78 1.53c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27Zm-8.62 5.01a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-md text-slate-800 transition-all group-hover:text-white sm:text-lg dark:text-slate-100">
                            Company Headquarters
                          </p>
                          <p className="text-slate-600 transition-all group-hover:text-white dark:text-slate-400 dark:group-hover:text-white">
                            118 E John Carpenter Fwy, Irving, Texas
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-md text-slate-800 transition-all group-hover:text-white sm:text-lg dark:text-slate-100">
                            Corporate Office
                          </p>
                          <p className="text-slate-600 transition-all group-hover:text-white dark:text-slate-400 dark:group-hover:text-white">
                            742 Evergreen Terrace, Springfield, Illinois
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
