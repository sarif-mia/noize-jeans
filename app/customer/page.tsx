import type { Metadata } from "next";
import { Picture } from "@/components/picture";
import { PageBanner } from "@/components/content";
import { img } from "@/lib/images";
import { customers } from "@/lib/site";

export const metadata: Metadata = { title: "Customers" };

export default function CustomerPage() {
  return (
    <>
      <PageBanner file="customers-banner2.jpg" alt="Our customers" />

      <section className="mb-(--space-section) px-[15px]">
        <h1 className="content-heading mb-[30px] text-center">OUR CUSTOMERS</h1>
        <div className="-mx-[15px] flex flex-wrap">
          {customers.map(({ file, name }) => (
            <div key={name} className="mb-5 flex w-1/2 items-center justify-center px-[15px] md:w-1/4">
              <Picture image={img(file, name)} sizes="(min-width: 768px) 25vw, 50vw" className="max-h-[100px] w-full object-contain md:max-h-[140px]" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
