/** Site-wide content. Edit here instead of hunting through page markup. */

export const SITE_NAME = "Noize Jeans Ltd.";
export const SITE_URL = "https://noizejeans.com";
export const SITE_DESCRIPTION = "Noize Jeans Ltd. — sustainable denim production.";
export const CONTACT_EMAIL = "info@noizejeans.com";

export type NavItem = { href: string; label: string };

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Noize" },
  { href: "/design", label: "Design Studio" },
  { href: "/production", label: "Noize Production" },
  { href: "/sustainable", label: "Sustainable Production" },
];

export const secondaryNav: NavItem[] = [
  { href: "/care", label: "Noize Care" },
  { href: "/products", label: "Products" },
  { href: "/customer", label: "Customer" },
  { href: "/contact", label: "Find Us" },
];

export const officeCities = ["Dhaka", "Hong Kong", "Dubai", "Barcelona", "New York"];

export const phoneNumbers = [
  { city: "New York", number: "+13472443619" },
  { city: "Barcelona", number: "+34 667 18 81 71" },
  { city: "Dubai", number: "+971 58 524 8983" },
  { city: "Dhaka", number: "+880 17 1715 4231" },
];

export const officeAddresses = [
  { city: "Dhaka", lines: ["House: 16-17, Level: 7 & 8, Mika Corner Stone, Road: 12,", "Sector: 6, Uttara, Dhaka-1230, Bangladesh."] },
  { city: "Dubai", lines: ["1302 U-Bora Tower, Business Bay,", "Dubai – UAE"] },
  { city: "Barcelona", lines: ["Rambla de Catalunya, 15, 1-2, 08007,", "Barcelona, Spain."] },
  { city: "New York", lines: ["214 WEST, 39TH STREET, SUITE 801,", "NY – 10018, New York, USA"] },
];

/** Logos shown in the scrolling strip on the home and design pages. */
export const brandStrip = [
  { file: "primark.jpg", name: "Primark" },
  { file: "pimkie.jpg", name: "Pimkie" },
  { file: "new-york.jpg", name: "New York" },
  { file: "spring.jpg", name: "Springfield" },
  { file: "zara.jpg", name: "Zara" },
  { file: "bershka.jpg", name: "Bershka" },
  { file: "only.jpg", name: "Only" },
  { file: "mango.jpg", name: "Mango" },
  { file: "pull-bear.jpg", name: "Pull&Bear" },
  { file: "jay-jay.jpg", name: "Jay Jay" },
];

export const customers = [
  { file: "bershka.jpg", name: "Bershka" },
  { file: "zara.jpg", name: "Zara" },
  { file: "pull-bear.jpg", name: "Pull&Bear" },
  { file: "mango.jpg", name: "Mango" },
  { file: "new-york.jpg", name: "New York" },
  { file: "spring.jpg", name: "Springfield" },
  { file: "pimkie.jpg", name: "Pimkie" },
  { file: "jay-jay.jpg", name: "Jay Jay" },
  { file: "rof.jpg", name: "ROF" },
  { file: "jj-logo.jpg", name: "JJ" },
  { file: "only.jpg", name: "Only" },
  { file: "store-1.png", name: "Store" },
  { file: "primark.jpg", name: "Primark" },
  { file: "tally.jpg", name: "Tally Weijl" },
  { file: "true-religion.jpg", name: "True Religion" },
];

export const featuredProducts = [
  "DSC_0029.jpg", "IMG_9756-225x300.jpg", "IMG_9327.jpg", "IMG_0581-1-200x300.jpg",
  "IMG_0425-225x300.jpg", "IMG_9800-225x300.jpg", "latest/8.jpg", "latest/11.jpg",
  "DSC6562.jpg", "image00055.jpeg", "image00085.jpeg", "image00071.jpeg",
];

export const productCollections = [
  {
    key: "latest",
    label: "LATEST COLLECTION",
    images: ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.png", "8.jpg", "9.png", "10.png", "11.jpg", "12.png"].map((f) => `latest/${f}`),
  },
  {
    key: "men",
    label: "MEN",
    images: ["1.jpg", "2.jpg", "3.png", "4.png", "5.png", "6.png", "7.png", "8.jpg", "9.jpg", "10.jpg", "11.png", "12.png"].map((f) => `men/${f}`),
  },
  {
    key: "women",
    label: "WOMEN",
    images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.jpg", "7.jpg", "8.png", "9.jpg", "10.png", "11.png", "12.png"].map((f) => `women/${f}`),
  },
];
