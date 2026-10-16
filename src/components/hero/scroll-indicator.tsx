"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const scrollDown = () => {
    window.scrollBy({
      top: Math.max(window.innerHeight * 0.8, 1),
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollDown}
      aria-label="Rolar para baixo"
      className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-[#f1ebe2]/85 transition-colors hover:text-[#f1ebe2]"
    >
      <ChevronDown className="size-8 animate-[scroll-bounce_2.4s_ease-in-out_infinite]" />
    </button>
  );
}
