import type { MetadataRoute } from "next";
import { primaryNav, secondaryNav, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...primaryNav, ...secondaryNav].map((item) => item.href).concat(["/men", "/women"]);
  return paths.map((path) => ({ url: new URL(path, SITE_URL).toString() }));
}
