"use client";

import { Picture } from "@/components/picture";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import type { SiteImage } from "@/lib/images";

/** Responsive image grid that opens a full-screen lightbox on click. */
export function PhotoGallery({ title, images }: { title: string; images: SiteImage[] }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="mb-(--space-section)">
      <div className="px-[15px]">
        <h1 className="text-2xl font-bold uppercase">{title}</h1>
        <div className="-mx-[15px] flex flex-wrap">
          {images.map((image, index) => (
            <div key={image.src} className="mb-[5px] w-1/2 px-[15px] md:w-1/3 lg:w-1/4">
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Open ${image.alt}`}
                className="block w-full cursor-zoom-in"
              >
                <Picture image={image} sizes="(min-width: 992px) 25vw, (min-width: 768px) 33vw, 50vw" className="h-auto w-full" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={openIndex >= 0}
        index={openIndex}
        close={() => setOpenIndex(-1)}
        plugins={[Captions]}
        slides={images.map(({ src, width, height, alt }) => ({
          // Serve the lightbox through the Next.js image optimizer instead of the multi-MB originals.
          src: `/_next/image?url=${encodeURIComponent(src)}&w=1920&q=75`,
          width,
          height,
          alt,
          title: alt,
        }))}
      />
    </section>
  );
}
