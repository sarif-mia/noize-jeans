import Image, { type ImageProps } from "next/image";
import type { SiteImage } from "@/lib/images";

type PictureProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & { image: SiteImage };

/** next/image fed from an `img()` lookup, so width, height and alt always travel together. */
export function Picture({ image, ...props }: PictureProps) {
  return <Image src={image.src} width={image.width} height={image.height} alt={image.alt} {...props} />;
}
