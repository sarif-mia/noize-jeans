/**
 * Server-only helpers that read image dimensions from /public at build time,
 * so every next/image gets real width/height (no layout shift) without
 * hand-maintained sizes.
 */
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

export type SiteImage = { src: string; width: number; height: number; alt: string };

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp)$/i;
const sizeCache = new Map<string, { width: number; height: number }>();

function dimensions(relativePath: string) {
  const cached = sizeCache.get(relativePath);
  if (cached) return cached;

  const { width, height, orientation } = imageSize(readFileSync(path.join(IMAGES_DIR, relativePath)));
  // EXIF orientations 5-8 are rotated 90°; the optimizer auto-rotates, so swap to match.
  const rotated = orientation !== undefined && orientation >= 5;
  const size = rotated ? { width: height, height: width } : { width, height };
  sizeCache.set(relativePath, size);
  return size;
}

/** Look up an image under /public/images by its relative path, e.g. `img("home.jpg")`. */
export function img(relativePath: string, alt = ""): SiteImage {
  return { src: encodeURI(`/images/${relativePath}`), alt, ...dimensions(relativePath) };
}

/** Every image in a /public/images sub-folder, naturally sorted (1, 2, … 10). */
export function galleryImages(collection: string, altPrefix: string): SiteImage[] {
  return readdirSync(path.join(IMAGES_DIR, collection))
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => img(`${collection}/${file}`, `${altPrefix} ${index + 1}`));
}
