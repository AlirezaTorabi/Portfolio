import type { MetadataRoute } from "next";

// Required for `output: "export"` so the file is generated at build time.
export const dynamic = "force-static";

const BASE_URL = "https://alito.ir";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
    },
  ];
}
