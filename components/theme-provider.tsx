"use client"

import type React from "react"

import { ThemeProvider as NextThemesProvider } from "next-themes"

// Import the entire module and use type indexing
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

