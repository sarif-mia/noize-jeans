"use client";

import { Picture } from "@/components/picture";
import { useRef, useState, type KeyboardEvent } from "react";
import type { SiteImage } from "@/lib/images";

type Collection = { key: string; label: string; images: SiteImage[] };

/** Accessible pill tabs for the product categories (Latest / Men / Women). */
export function ProductTabs({ collections }: { collections: Collection[] }) {
  const [active, setActive] = useState(collections[0]?.key);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent, position: number) => {
    const offsets: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    if (!(event.key in offsets)) return;
    event.preventDefault();
    const next = (position + offsets[event.key] + collections.length) % collections.length;
    setActive(collections[next].key);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <section className="px-[15px]">
        <h1 className="text-center">CATEGORIES</h1>
        <div role="tablist" aria-label="Product categories" className="mx-auto flex flex-wrap items-center justify-center py-2.5 md:p-5">
          {collections.map((collection, position) => {
            const selected = collection.key === active;
            return (
              <button
                key={collection.key}
                ref={(node) => { tabRefs.current[position] = node; }}
                id={`${collection.key}-tab`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${collection.key}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(collection.key)}
                onKeyDown={(event) => onKeyDown(event, position)}
                className={`m-1 cursor-pointer rounded px-3 py-2.5 text-[13px] text-white transition-colors md:m-[5px] md:px-5 md:py-[15px] md:text-base ${
                  selected ? "bg-accent" : "bg-black hover:bg-[#333]"
                }`}
              >
                {collection.label}
              </button>
            );
          })}
        </div>
        <hr className="mt-0" />
      </section>

      <section className="px-[15px]">
        {collections.map((collection) => (
          <div
            key={collection.key}
            id={`${collection.key}-panel`}
            role="tabpanel"
            aria-labelledby={`${collection.key}-tab`}
            hidden={collection.key !== active}
            className="-mx-[15px] flex flex-wrap"
          >
            {collection.images.map((image) => (
              <div key={image.src} className="w-1/2 px-[15px] md:w-1/6">
                <div className="mx-auto my-[5px] w-auto max-w-full animate-portfolio-in overflow-hidden rounded-[5px] border-2 border-black shadow-[0_3px_5px_-1px_rgb(0_0_0/20%),0_5px_8px_rgb(0_0_0/14%),0_1px_14px_rgb(0_0_0/12%)] transition-shadow duration-400 hover:shadow-[0_12px_16px_rgb(0_0_0/24%),0_17px_50px_rgb(0_0_0/19%)] md:w-[180px]">
                  <Picture
                    image={image}
                    sizes="(min-width: 768px) 180px, 50vw"
                    className="block h-auto w-full rounded-[3px] object-cover md:h-[250px]"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
