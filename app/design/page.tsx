import type { Metadata } from "next";
import { Picture } from "@/components/picture";
import { Carousel } from "@/components/carousel";
import { BrandStrip, YouTubeEmbed } from "@/components/content";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Design Studio" };

const citySlides = [
  img("Dhaka.jpg", "Noize design studio, Dhaka"),
  img("Dubai.jpg", "Noize design studio, Dubai"),
  img("Barcelona3.jpg", "Noize design studio, Barcelona"),
  img("USAA-1.jpg", "Noize design studio, New York"),
];

const copy = "font-helvetica text-sm leading-[1.43]";

export default function DesignPage() {
  return (
    <>
      <Carousel label="Noize design studios" showIndicators>
        {citySlides.map((slide, index) => (
          <Picture key={slide.src} image={slide} sizes="100vw" preload={index === 0} className="block h-auto w-full" />
        ))}
      </Carousel>

      <section className="mb-(--space-section) px-[15px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="mt-[30px] w-full px-[15px] sm:w-1/2">
            <div className="space-y-[30px] p-2.5">
              <Picture image={img("ds1.jpg", "Design studio at work")} sizes="(min-width: 576px) 50vw, 100vw" className="h-auto w-full" />
              <Picture image={img("ds2.jpg", "Design samples")} sizes="(min-width: 576px) 50vw, 100vw" className="h-auto w-full" />
            </div>
          </div>

          <div className="mt-[30px] w-full px-[15px] sm:w-1/2">
            <h1 className="text-[2em] font-medium">DESIGN STUDIO</h1>
            <div className="mb-6">
              <YouTubeEmbed id="RklxBCMSGIw" title="Noize Design Studio" />
            </div>
            <p className={copy}>Our team of Designers constantly follows the latest fashion trends and translates them into commercial business.</p>
            <p className={copy}>
              Following the same approach, we prepare our collection by choosing the right fabrics and techniques. We aim to find the
              best in every personality and match it with the uniqueness of each brand we work with.
            </p>
            <p className={copy}>
              We present our collection to customers six times a year, reducing their workload and time. Our design team
              continuously provides complete design solutions.
            </p>
          </div>
        </div>
      </section>

      <BrandStrip />
    </>
  );
}
