import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "علیرضا ترابی | توسعه‌دهنده فرانت‌اند و طراح رابط کاربری",
  description:
    "نمونه‌کارهای علیرضا ترابی؛ توسعه‌دهنده فرانت‌اند و طراح رابط کاربری.",
  alternates: {
    canonical: "/fa",
    languages: {
      en: "/",
      fa: "/fa",
    },
  },
};

export default function PersianHome() {
  return <PortfolioPage locale="fa" />;
}