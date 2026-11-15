import type { Metadata } from "next";
import { Picture } from "@/components/picture";
import { PageBanner, YouTubeEmbed } from "@/components/content";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Sustainable Production" };

const downloads = [
  { href: "/documents/profile.pdf", file: "download-noize-1-e1599660662687.png", alt: "Download Noize Jeans profile (PDF)" },
  { href: "/documents/NoizeJeans_Sustainable.pdf", file: "download-sd-1-e1599660628558.png", alt: "Download sustainable denim profile (PDF)" },
];

export default function SustainablePage() {
  return (
    <>
      <PageBanner file="sp-p-2.jpg" alt="Sustainable production" />

      <section className="mb-(--space-section) px-[15px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-full px-[15px] md:w-1/3">
            <Picture image={img("sustainability2.jpg", "Sustainable denim")} sizes="(min-width: 768px) 33vw, 100vw" className="h-auto w-full" />
          </div>
          <div className="w-full px-[15px] md:w-2/3">
            <h1 className="content-heading mb-6 leading-[1.1]">Sustainable Production</h1>
            <div className="mb-6">
              <YouTubeEmbed id="l15HDEXzYE4" title="Noize Sustainable Production" />
            </div>
            <p>
              All our denims produced are low impact on the environment, made using water less than 30 liters and much fewer
              chemicals by using advanced laundry technologies. We are one of the most advanced and updated production companies in
              the country with all the latest machines to produce sustainable denims.
            </p>
            <p>
              We are very proud of what we have accomplished so far, and by continuing our practical approach to sustainability, we
              will take further steps to maintain our leading position in the denim industry. In the coming years, focus will be to
              produce with zero carbon footprints and to take an active part in working towards a more sustainable society.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-(--space-section) px-[15px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-full px-[15px] md:ml-[33.333%] md:w-2/3">
            <h3 className="font-bold">Machines Brands:</h3>
            <p>Jeanologia, Tonello, Brongo &amp; Mactec</p>
            <h3 className="mb-6 font-bold">Download Profiles:</h3>
            <div className="-mx-[15px] flex flex-wrap">
              {downloads.map((doc) => (
                <div key={doc.href} className="w-full px-[15px] sm:w-1/4">
                  <a href={doc.href} target="_blank" rel="noopener" className="inline-block">
                    <Picture image={img(doc.file, doc.alt)}
                      sizes="180px"
                      className="h-auto max-w-full border border-[#ccc] p-[5px] md:h-[216px] md:w-[180px]"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
