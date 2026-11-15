"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, secondaryNav, type NavItem } from "@/lib/site";

const barBase = "absolute left-0 block h-[3px] w-full bg-[#616161] transition-transform duration-250";

function MenuLink({ item, onNavigate, current }: { item: NavItem; onNavigate: () => void; current: boolean }) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={current ? "page" : undefined}
      className="relative block py-[5px] font-sans text-xs tracking-[4px] text-white transition-colors before:absolute before:-left-[17px] before:content-['•'] hover:text-[#ccc]"
    >
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Lock page scroll while the menu is open and allow Escape to close it.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-(--header-height) items-center justify-center bg-white">
      <Link href="/" aria-label="Noize Jeans home" className="flex h-full items-center justify-center">
        <Image src="/images/logo.png" alt="Noize Jeans" width={300} height={298} className="h-auto w-[60px]" preload />
        <Image src="/images/logonew2.png" alt="" width={263} height={67} className="h-auto w-[150px] md:w-auto" preload />
      </Link>

      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
        className="absolute left-5 top-1/2 z-12 size-[26px] -translate-y-1/2 cursor-pointer md:left-[30px]"
      >
        <span className={`${barBase} top-1/2 -mt-[1.5px] ${open ? "rotate-45" : ""}`} />
        <span className={`${barBase} top-1/2 -mt-[1.5px] ${open ? "rotate-[135deg]" : "-translate-y-2"}`} />
        <span className={`${barBase} top-1/2 -mt-[1.5px] ${open ? "opacity-0" : "translate-y-2"}`} />
      </button>

      <nav
        id="site-menu"
        aria-label="Primary navigation"
        inert={!open}
        className={`fixed top-(--header-height) z-11 h-[340px] w-[210px] max-w-[calc(100vw-20px)] overflow-y-auto bg-black pt-3.5 pr-5 pb-5 pl-[42px] transition-[left,opacity] duration-300 ${
          open ? "left-0 opacity-100" : "-left-full opacity-0"
        }`}
      >
        <ul>
          {primaryNav.map((item) => (
            <li key={item.href}>
              <MenuLink item={item} onNavigate={close} current={pathname === item.href} />
            </li>
          ))}
          <li className="pt-2 font-sans text-xs tracking-[4px] text-white">More Noize</li>
          {secondaryNav.map((item) => (
            <li key={item.href} className="pl-[25px]">
              <MenuLink item={item} onNavigate={close} current={pathname === item.href} />
            </li>
          ))}
        </ul>
      </nav>

      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-10 bg-black/45 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
    </header>
  );
}
