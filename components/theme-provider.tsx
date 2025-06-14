"use client"

import { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


export function ThemeProvider({children,...props}:ThemeProviderProps){
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}