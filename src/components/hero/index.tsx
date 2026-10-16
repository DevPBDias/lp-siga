import Image from "next/image";
import hero_image from "@/src/assets/images/hero.png";
import app_image from "@/src/assets/images/hero-app.png";
import ScrollIndicator from "./scroll-indicator";
import Reveal from "../ui/reveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero_image}
          alt="Hero Background"
          fill
          className="object-cover object-center opacity-100"
        />
        {/* Subtle overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#172516]/75 via-[#172516]/40 to-[#172516]/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#172516]/25 via-transparent to-[#172516]/75" />
      </div>

      {/* Subtle print-like grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(241, 235, 226, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(241, 235, 226, 0.16) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Reveal className="relative z-10 w-full max-w-[1350px] mx-auto px-6 py-24 lg:py-32">
        <div className="md:max-w-[45%] flex flex-col gap-4 lg:gap-6">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-3 font-inter text-[clamp(0.625rem,1.2vw,1rem)] text-[#f1ebe2]/85">
            <span className="h-px w-8 bg-[#f1ebe2]/70" />
            Feito para criadores de gado com ou sem registro na ABCZ
          </span>

          {/* Main headline */}
          <h1 className="text-left font-bebas uppercase text-[clamp(3.5rem,6vw,7rem)] leading-[0.86] tracking-tight text-[#f1ebe2]">
            Seu rebanho
            <span className="block">sob controle</span>
            <span className="block">na palma da mão</span>
          </h1>
          {/* Subtitle */}

          <p className="inline-flex items-center font-inter text-[clamp(0.825rem,1.5vw,1.125rem)] text-[#f1ebe2]">
            O Siga Cattle reúne rebanho, reprodução, pesagens, vacinas e vendas
            em um só aplicativo. Funciona no curral, mesmo sem sinal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 lg:gap-8 w-full">
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center border border-[#f1ebe2] bg-[#172516]/20 px-6 py-3 text-base font-semibold text-[#f1ebe2] shadow-[4px_4px_0_0_#F7E9D4] transition-colors hover:bg-[#f1ebe2]/20"
            >
              Quero testar
            </a>
            <a
              href="#demo"
              className="inline-flex cursor-pointer items-center justify-center bg-[#2c5128] px-6 py-3 text-base font-semibold text-[#f1ebe2] shadow-[4px_4px_0_0_#F7E9D4] transition-colors hover:bg-[#2c5128]/85"
            >
              Como funciona
            </a>
          </div>
        </div>
      </Reveal>

      {/* App Image */}
      <Reveal className="hidden md:block absolute z-20 bottom md:bottom-42 xl:bottom-24 2xl:bottom-42 right-4 w-[clamp(24rem,40vw,38rem)] h-[clamp(24rem,40vw,38rem)] lg:left-auto lg:right-[clamp(2rem,6vw,5rem)] lg:translate-x-0">
        <Image
          src={app_image}
          alt="App Image"
          priority
          className="size-full object-contain object-center opacity-100"
        />
      </Reveal>

      <ScrollIndicator />
    </section>
  );
}
