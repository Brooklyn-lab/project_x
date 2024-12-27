"use client"

import { myTheme } from "@/theme"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

export default function StylesProvider(props: PropsWithChildren) {
  return <ThemeProvider theme={myTheme}>{props.children}</ThemeProvider>
}
