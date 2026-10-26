import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GlyphBackground } from "@/components/animate-ui/backgrounds/glyph";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alireza Torabi | Frontend Developer & UI Designer",
  description:
    "Portfolio of Alireza Torabi, Frontend Developer and UI Designer.",
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 text-foreground"
          >
            <GlyphBackground interactive={false} />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}