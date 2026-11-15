import type { Metadata } from "next";
import { Picture } from "@/components/picture";
import { PageBanner, YouTubeEmbed } from "@/components/content";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Noize Care" };

export default function CarePage() {
  return (
    <>
      <PageBanner file="we-care.jpg" alt="Noize Care" />

      <section className="mb-(--space-section) px-[15px]">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-full px-[15px] sm:w-1/2">
            <Picture image={img("noize-care-1.jpg", "Noize Care community support")} sizes="(min-width: 576px) 50vw, 100vw" className="h-auto w-full" />
          </div>
          <div className="w-full px-[15px] sm:w-1/2">
            <h1 className="mt-5 mb-6">NOIZE CARE</h1>
            <div className="mb-6">
              <YouTubeEmbed id="bWCcOduZS7U" title="Noize Care" />
            </div>
            <p>
              Noize Jeans cares about ethical sustainability as much as about its environmental impact. For this reason, we have
              taken several steps towards better conditions for our employees. Besides providing all necessary factory facilities
              including safety, better wages and health care, we offer the possibility of children’s daycare for parents during
              their working hours.
            </p>
            <p>
              We believe that our ethical responsibility does not end there. This led us to take an action and help local
              communities in Dhaka, who have been affected by the covid pandemic. In order to improve the situation, we have
              distributed the most important goods for people in need. The giveaway included food, clothes, sanitary basics for
              women.
            </p>
            <p>
              Since our mission is to be also ethically conscious company, we keep developing this concept and focus on areas where
              help is needed the most.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
