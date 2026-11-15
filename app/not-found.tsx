import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-[15px] py-(--space-section) text-center">
      <h1 className="content-heading">PAGE NOT FOUND</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="mt-2 bg-black px-5 py-3 text-sm tracking-[2px] text-white hover:bg-[#333]">
        BACK TO HOME
      </Link>
    </section>
  );
}
