import type { Metadata } from "next";
import { FramedImage, PageBanner, YouTubeEmbed } from "@/components/content";

export const metadata: Metadata = { title: "About Us" };

const columnImageSizes = "(min-width: 768px) 33vw, 100vw";

export default function AboutPage() {
  return (
    <>
      <PageBanner file="about-banner-33.jpg" alt="Noize Jeans team" />

      <section className="mb-(--space-section) px-[15px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="order-2 w-full px-[15px] md:order-1 md:w-1/3">
            <FramedImage file="anuragsir5.jpg" alt="Noize Jeans leadership" sizes={columnImageSizes} />
          </div>

          <div className="order-1 w-full px-[15px] md:order-2 md:w-1/3">
            <h1 className="content-heading text-center">CONCEPT NOIZE</h1>
            <div className="border border-line p-[5px]">
              <YouTubeEmbed id="JYZZ9IQFt84" title="Concept Noize" />
            </div>
            <div className="prose-noize mt-5 text-justify">
              <p>
                Fast fashion &amp; Value retailing has grown faster than any other major retail format in recent years. Large format
                stores carrying the latest fashion and offering great deals are where the trend is moving. This is not possible
                without managing a proper supply chain as shelves and hangers in stores cannot be empty or stand thin.
              </p>
              <p>
                We at Noize have taken this concept seriously and have established ourselves as a perfect supply chain partner to
                provide what is required. It doesn’t pre-exist, and it doesn’t happen by accident. It is the right combination of
                all the rules of product development and right sourcing that creates both the perception and the reality that true
                value exists. It takes more than price. We are in the enviable position of being able to offer both leading-edge
                fashion apparel for each of our specific target markets, together with that magical price-value equation.
              </p>
              <p>
                At the same time, all our products follow a sustainable production process. Every product produced in our
                factories is made using sustainable raw materials, less energy, less water, and low-impact chemicals.
              </p>
              <p>We are currently one of the most advanced and sustainable production companies in Bangladesh.</p>
            </div>
          </div>

          <div className="order-3 w-full px-[15px] md:w-1/3">
            <FramedImage file="manishsir.jpg" alt="Noize Jeans leadership" sizes={columnImageSizes} />
          </div>
        </div>
      </section>
    </>
  );
}
