import type { Metadata } from "next";
import { PhotoGallery } from "@/components/photo-gallery";
import { galleryImages } from "@/lib/images";

export const metadata: Metadata = { title: "Women Products" };

export default function WomenPage() {
  return <PhotoGallery title="Women All Images" images={galleryImages("women", "Women collection")} />;
}
