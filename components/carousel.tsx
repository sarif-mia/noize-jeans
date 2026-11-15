"use client";

import { Children, useCallback, useEffect, useState, type ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
  label: string;
  interval?: number;
  showIndicators?: boolean;
  className?: string;
};

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 8 8" aria-hidden="true" className="size-4 md:size-5" fill="currentColor">
      <path d={direction === "left" ? "M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z" : "M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z"} />
    </svg>
  );
}

/** Sliding carousel with autoplay, pause-on-hover, keyboard arrows and indicators (Bootstrap-style look). */
export function Carousel({ children, label, interval = 5000, showIndicators = false, className = "" }: CarouselProps) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), interval);
    return () => clearInterval(timer);
  }, [paused, count, interval, index]);

  const control =
    "absolute top-1/2 z-1 flex h-[50px] w-[7.5%] -translate-y-1/2 cursor-pointer items-center justify-center bg-black text-white md:w-[3.5%]";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(index - 1);
        if (event.key === "ArrowRight") go(index + 1);
      }}
    >
      <div className="flex transition-transform duration-600 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slideIndex + 1} of ${count}`}
            aria-hidden={slideIndex !== index}
            inert={slideIndex !== index}
            className="w-full shrink-0"
          >
            {slide}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button type="button" className={`${control} left-0`} onClick={() => go(index - 1)} aria-label="Previous slide">
            <Chevron direction="left" />
          </button>
          <button type="button" className={`${control} right-0`} onClick={() => go(index + 1)} aria-label="Next slide">
            <Chevron direction="right" />
          </button>
        </>
      )}

      {showIndicators && count > 1 && (
        <div className="absolute inset-x-[15%] bottom-2.5 z-1 flex justify-center gap-[6px]">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Go to slide ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              onClick={() => go(dotIndex)}
              className={`h-[13px] w-[30px] cursor-pointer border-y-[5px] border-transparent bg-white bg-clip-padding transition-opacity duration-600 ${
                dotIndex === index ? "opacity-100" : "opacity-50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
