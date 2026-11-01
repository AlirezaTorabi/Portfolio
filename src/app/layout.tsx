import type { Metadata, Viewport } from "next";
import { Caveat, Geist_Mono, Quicksand, Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alito.ir"),
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
      dir="ltr"
          data-scroll-behavior="smooth"
      className={`${quicksand.variable} ${caveat.variable} ${geistMono.variable} ${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}