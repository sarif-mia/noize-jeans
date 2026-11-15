import { Picture } from "@/components/picture";
import { img } from "@/lib/images";
import { brandStrip } from "@/lib/site";

/** Full-bleed banner image at the top of an inner page. */
export function PageBanner({ file, alt }: { file: string; alt: string }) {
  return (
    <section className="mb-(--space-section) w-full">
      <Picture image={img(file, alt)} sizes="100vw" preload className="h-auto w-full" />
    </section>
  );
}

/** Responsive 16:9 YouTube embed (privacy-enhanced domain, lazy-loaded). */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden">
      <iframe
        className="absolute inset-0 size-full border-0"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

/** Animated strip of partner brand logos. */
export function BrandStrip() {
  return (
    <section aria-label="Brands we work with" className="flex h-[200px] items-center justify-center overflow-hidden bg-white">
      <div className="mt-5 flex items-center">
        {brandStrip.map(({ file, name }) => (
          <Picture key={file} image={img(file, name)} sizes="200px" className="m-2.5 h-auto max-w-full animate-brand-slide" />
        ))}
      </div>
    </section>
  );
}

/** Image with the thin bordered frame used on About and Production. */
export function FramedImage({ file, alt, sizes }: { file: string; alt: string; sizes: string }) {
  return (
    <div className="border border-line p-[5px]">
      <Picture image={img(file, alt)} sizes={sizes} className="h-auto w-full" />
    </div>
  );
}
