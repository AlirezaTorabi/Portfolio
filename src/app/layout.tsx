import type { Metadata, Viewport } from "next";
import { Caveat, Geist_Mono, Quicksand } from "next/font/google";
import localFont from "next/font/local";
import ScrollReset from "@/components/ScrollReset";
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

const vazirmatn = localFont({
  src: "../../public/font/vazirmatn/Vazirmatn-ghalamoom.com_/Vazirmatn-ghalamoom.com/static/Vazirmatn-Regular.ttf",
  variable: "--font-vazirmatn",
  display: "swap",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

const sgKara = localFont({
  src: "../../public/font/SG-kara/SG-kara/SG kara/SGKara-Light.ttf",
  variable: "--font-sg-kara",
  display: "swap",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alito.ir"),
  title: "Alireza Torabi | Frontend Developer & UI Designer",
  description:
    "Portfolio of Alireza Torabi, Frontend Developer and UI Designer.",
};

export const viewport: Viewport = {
  themeColor: "#f5f2ed",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const themeScript = `
    (function() {
      try {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = storedTheme || (prefersDark ? 'dark' : 'light');
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        root.style.colorScheme = theme;
      } catch (e) {}
    })();
  `;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      dir="ltr"
      data-scroll-behavior="smooth"
      className={`${quicksand.variable} ${caveat.variable} ${geistMono.variable} ${vazirmatn.variable} ${sgKara.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ScrollReset />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}