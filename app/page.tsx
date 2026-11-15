import Image from "next/image";
import { Picture } from "@/components/picture";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { BrandStrip } from "@/components/content";
import { img } from "@/lib/images";
import { featuredProducts } from "@/lib/site";

const heroSlides = [
  img("home.jpg", "Noize Jeans denim production"),
  img("showrooms.jpg", "Noize Jeans showrooms"),
  img("advanced-auto.jpg", "Advanced automated machinery"),
  img("laser.jpg", "Laser finishing technology"),
];

const collectionLinks = [
  { href: "/design", image: img("desstud-1.jpg", "Explore the Noize Design Studio") },
  { href: "/sustainable", image: img("suspro3.jpg", "Explore sustainable production") },
];

export default function HomePage() {
  const products = featuredProducts.map((file, index) => img(file, `Featured product ${index + 1}`));
  // Each desktop slide shows four products, advancing one product per slide.
  const desktopSlides = products.map((_, start) => [0, 1, 2, 3].map((offset) => products[(start + offset) % products.length]));

  return (
    <>
      <Carousel label="Noize Jeans highlights" showIndicators>
        {heroSlides.map((slide, index) => (
          <Picture key={slide.src} image={slide} sizes="100vw" preload={index === 0} className="block h-auto w-full" />
        ))}
      </Carousel>

      <section className="px-[15px]">
        <div className="-mx-[15px] flex flex-wrap">
          {collectionLinks.map(({ href, image }) => (
            <div key={href} className="w-full overflow-hidden px-[15px] transition-transform duration-300 hover:scale-[1.03] sm:w-1/2">
              <Link href={href} className="block">
                <Picture image={image} sizes="(min-width: 576px) 50vw, 100vw" className="h-auto w-full pt-[15px] md:pt-[30px]" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-(--space-section) px-[15px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="flex w-full items-center justify-center px-[15px] sm:w-1/3">
            <h2 className="my-6 text-center font-helvetica text-[26px] leading-[1.2] font-black tracking-[3px] text-ink sm:my-0 md:text-[32px] md:leading-[38px] md:tracking-[6px]">
              FEATURED PRODUCTS
            </h2>
          </div>

          <div className="w-full px-[15px] sm:w-2/3">
            {/* Desktop: four products per slide */}
            <Carousel label="Featured products" interval={6000} className="hidden sm:block">
              {desktopSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="flex h-[300px] gap-2 overflow-hidden">
                  {slide.map((product, i) => (
                    <div key={`${product.src}-${i}`} className="relative h-full flex-1">
                      <Image src={product.src} alt={product.alt} fill sizes="(min-width: 576px) 17vw, 50vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>

            {/* Mobile: one product per slide */}
            <Carousel label="Featured products" interval={6000} className="sm:hidden">
              {products.map((product) => (
                <div key={product.src} className="relative h-[360px]">
                  <Image src={product.src} alt={product.alt} fill sizes="100vw" className="object-cover" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <BrandStrip />
    </>
  );
}
