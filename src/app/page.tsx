import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fa: "/fa",
    },
  },
};

export default function Home() {
  return <PortfolioPage locale="en" />;
}
