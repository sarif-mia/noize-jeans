import type { Metadata } from "next";
import { PageBanner } from "@/components/content";
import { CONTACT_EMAIL, officeAddresses } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Contact Us" };

const infoText = "font-sans font-medium leading-[1.1] tracking-[1.5px] text-[#333] [overflow-wrap:anywhere] md:tracking-[4px]";
const infoHeading = "font-helvetica text-[15px] font-bold";

export default function ContactPage() {
  return (
    <>
      <PageBanner file="find-us.jpg" alt="Find Noize Jeans" />

      <section className="flex flex-wrap items-center justify-between gap-6 p-[15px] md:px-[15px] md:py-5">
        <div className="w-full min-w-0 md:flex-[1_1_48%]">
          <iframe
            src="https://maps.google.com/maps?q=Mika%20Corner%20Stone,%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Noize Jeans Dhaka location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] w-full max-w-full border-0 md:h-[450px] md:w-[600px]"
          />
        </div>

        <div className={`mt-7 w-full min-w-0 md:mt-0 md:flex-[1_1_40%] ${infoText}`}>
          <h2 className="text-2xl leading-[1.25] md:text-[30px] md:leading-[1.1]">FIND US ANYTIME AND GET INVOLVED</h2>
          {officeAddresses.map(({ city, lines }) => (
            <address key={city} className="mb-[15px] not-italic">
              <h3 className={infoHeading}>{city}:</h3>
              <p className="text-sm">
                {lines[0]}
                <br /> {lines[1]}
              </p>
            </address>
          ))}
        </div>
      </section>

      <section className="mb-(--space-section) p-[15px] md:grid md:grid-cols-2 md:gap-5 md:py-5">
        <div className="hidden md:block" />
        <div className="min-w-0">
          <div className={infoText}>
            <h3 className={infoHeading}>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">{CONTACT_EMAIL}</a>
            </h3>
            <h3 className={infoHeading}>Leave Message</h3>
          </div>
          <p>Your email address will not be published. Required fields are marked.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
