"use client";

import Image from "next/image";
import { useState } from "react";
import thumbnail from "@/src/assets/images/video_thumbnail.jpg";

type DemoVideoPlayerProps = {
  embedUrl: string;
};

export default function DemoVideoPlayer({ embedUrl }: DemoVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        className="aspect-video w-full"
        src={`${embedUrl}?autoplay=1&playsinline=1&rel=0`}
        title="Demonstração do aplicativo SIGA Cattle"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label="Reproduzir vídeo demonstrativo do SIGA Cattle"
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden bg-[#2c5128]"
    >
      <Image
        src={thumbnail}
        alt="Capa do vídeo demonstrativo do SIGA Cattle"
        fill
        sizes="(min-width: 1024px) 55vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        priority={false}
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
        <span className="flex size-16 items-center justify-center rounded-full border-2 border-[#f1ebe2] bg-[#2c5128]/90 text-[#f1ebe2] transition-transform group-hover:scale-110 sm:size-20">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-1 size-7 sm:size-9"
          >
            <path d="M8 5.14v13.72a.75.75 0 0 0 1.13.65l11.06-6.86a.75.75 0 0 0 0-1.28L9.13 4.5A.75.75 0 0 0 8 5.14Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
