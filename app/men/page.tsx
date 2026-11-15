import type { Metadata } from "next";
import { PhotoGallery } from "@/components/photo-gallery";
import { galleryImages } from "@/lib/images";

export const metadata: Metadata = { title: "Men Products" };

export default function MenPage() {
  return <PhotoGallery title="Men All Images" images={galleryImages("men", "Men collection")} />;
}
