import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/content";
import { ProductTabs } from "@/components/product-tabs";
import { img } from "@/lib/images";
import { productCollections } from "@/lib/site";

export const metadata: Metadata = { title: "Products" };

const ctaButton =
  "inline-block rounded border border-primary bg-primary px-5 py-3 text-white transition-colors hover:border-[#0062cc] hover:bg-[#0069d9]";

export default function ProductsPage() {
  const collections = productCollections.map(({ key, label, images }) => ({
    key,
    label,
    images: images.map((file, index) => img(file, `${key[0].toUpperCase()}${key.slice(1)} collection ${index + 1}`)),
  }));

  return (
    <>
      <PageBanner file="products-3.jpg" alt="Noize Jeans products" />
      <ProductTabs collections={collections} />
      <nav aria-label="More product collections" className="mx-[15px] mt-6 mb-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/men" className={ctaButton}>View More Men Products</Link>
        <Link href="/women" className={ctaButton}>View More Women Products</Link>
      </nav>
    </>
  );
}
