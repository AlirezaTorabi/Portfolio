import type { MetadataRoute } from "next";

// Required for `output: "export"` so the file is generated at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://alito.ir/sitemap.xml",
  };
}
