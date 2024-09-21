import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
