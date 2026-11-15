import type { Metadata } from "next";
import { FramedImage, PageBanner, YouTubeEmbed } from "@/components/content";

export const metadata: Metadata = { title: "Noize Production" };

const factories = [
  { name: "DENIM ASIA LTD (DAL)", location: "Gazipur", output: "1.2 M Units" },
  { name: "ULTIMATE FASHION LTD (UFL)", location: "Ashulia", output: "600,000 Units" },
];

export default function ProductionPage() {
  return (
    <>
      <PageBanner file="vertical.jpg" alt="Vertical production" />

      <section className="mb-(--space-section) px-[15px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-full px-[15px] sm:w-1/2">
            <div className="-mx-[15px] flex flex-wrap">
              <div className="w-full px-[15px] sm:w-1/2">
                <FramedImage file="pro11.jpg" alt="Automated garment production line" sizes="(min-width: 576px) 25vw, 100vw" />
              </div>
              <div className="w-full px-[15px] sm:w-1/2">
                <FramedImage file="pro22.jpg" alt="Noize factory floor" sizes="(min-width: 576px) 25vw, 100vw" />
              </div>
              <div className="mt-6 w-full px-[15px]">
                <YouTubeEmbed id="u_5RiF2xhjU" title="Noize production" />
              </div>
            </div>
          </div>

          <div className="w-full px-[15px] sm:w-1/2">
            <div className="prose-noize mt-5">
              <h1 className="content-heading leading-9">NOIZE PRODUCTION</h1>
              <p>
                One of a kind garmenting unit with automation. All garments are made using automatic machines, to ensure high
                efficiency, quality, and consistency.
              </p>
              <p>
                <strong>Total Monthly Production</strong>
                <br />
                FABRIC: 1.5 M YDS
                <br />
                GARMENTS: 1.8 M UNITS
              </p>
              <p>
                <strong>Garments Machines</strong>
                <br />
                MOST ADVANCED FULLY AUTOMATIC MACHINES BY JUKI, BROTHER, SIPAMI, VI.BE.MAC
              </p>
              {factories.map((factory, index) => (
                <p key={factory.name}>
                  {index + 1}) <strong>{factory.name}</strong>
                  <br />
                  Location: {factory.location}
                  <br />
                  Production/Month: {factory.output}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
