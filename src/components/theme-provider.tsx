import { ComponentProps } from "react"
// third party
import { ThemeProvider as NextThemesProvider } from "next-themes"

//  ------------------------------ | COMPONENT - THEME PROVIDER | ------------------------------  //

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
