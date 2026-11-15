import { Picture } from "@/components/picture";
import { cacheLife } from "next/cache";
import { img } from "@/lib/images";
import { CONTACT_EMAIL, officeCities, phoneNumbers } from "@/lib/site";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const footerText = "font-sans text-[13px] leading-[2.43] tracking-[2px]";
const footerHeading = "mt-6 mb-3 text-sm font-black tracking-[2px] text-white md:mt-0 md:mb-[45px]";

export function SiteFooter() {
  const compliance1 = img("complaince-1.jpg", "Noize compliance");
  const compliance2 = img("complaince-2.jpg", "Noize production");
  const logo = img("logo.png", "Noize Jeans");
  const footerLogo = img("footer-logo.png", "Noize Jeans");

  return (
    <>
      <section className="flex flex-wrap">
        <div className="w-full shadow-[0_0_10px_rgb(207_207_207/50%)] sm:w-1/3 sm:pt-[50px]">
          <Picture image={compliance1} sizes="(min-width: 576px) 33vw, 100vw" className="h-auto w-full p-6 md:p-10" />
        </div>
        <div className="flex w-full items-start justify-center bg-black p-6 sm:w-1/3 md:p-10">
          <Picture image={logo} sizes="300px" className="h-auto max-w-full" />
        </div>
        <div className="w-full shadow-[0_0_10px_rgb(207_207_207/50%)] sm:w-1/3">
          <Picture image={compliance2} sizes="(min-width: 576px) 33vw, 100vw" className="h-auto w-full p-6 md:p-10" />
        </div>
      </section>

      <footer className="bg-black px-2.5 py-[35px] text-white">
        <div className="mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="flex flex-wrap items-center">
            <div className="w-full text-center md:w-1/3 md:text-left">
              <h3 className={footerHeading}>OUR OFFICE LOCATIONS</h3>
              {officeCities.map((city) => (
                <p key={city} className={`${footerText} mb-0`}>{city}</p>
              ))}
            </div>

            <div className="w-full text-center md:w-1/3">
              <Picture image={footerLogo} sizes="253px" className="mx-auto mt-5 md:mt-[65px] md:pl-[30px]" />
            </div>

            <div className="mt-4 w-full text-center md:mt-0 md:w-1/3 md:text-right">
              <h3 className={footerHeading}>REACH US</h3>
              {phoneNumbers.map(({ city, number }, index) => (
                <p key={city} className={`${footerText} ${index === phoneNumbers.length - 1 ? "mb-4" : "mb-0"}`}>
                  {city}: <a href={`tel:${number.replace(/\s/g, "")}`} className="hover:underline">{number}</a>
                </p>
              ))}
              <p className={`${footerText} mb-0`}>
                <a className="text-muted hover:underline" href={`mailto:${CONTACT_EMAIL}`}>E: {CONTACT_EMAIL}</a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <hr className="border-[#333]" />
          <p className={`${footerText} text-center text-muted`}>
            &copy; <CopyrightYear /> NOIZE JEANS LTD. | Developed by:{" "}
            <a className="hover:underline" href="https://noizejeans.com">NOIZE IT DEPARTMENT</a>
          </p>
        </div>
      </footer>
    </>
  );
}
