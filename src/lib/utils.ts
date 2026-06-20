// third party
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//  ------------------------------ | LIB - UTILS | ------------------------------  //

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
