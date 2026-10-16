"use client";

import Image from "next/image";
import pastureImage from "@/src/assets/images/hero.png";
import instagramIcon from "@/src/assets/icons/instagram.png";
import { whatsappDisplayNumber, whatsappNumber } from "@/src/constants/contact";
import { useEffect, useState } from "react";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/";

const footerLinks = [
  { label: "O desafio", href: "#challenge" },
  { label: "A solução", href: "#solution" },
  { label: "Demonstração", href: "#demo" },
  { label: "Aplicativo", href: "#app" },
  { label: "Fazendas reais", href: "#real-farms" },
  { label: "Contato", href: "#contact" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className="relative isolate overflow-hidden bg-[#1f4e13] text-[#f1ebe2]">
      <Image
        src={pastureImage}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-35 mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#286b12]/85"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(18, 55, 13, 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(18, 55, 13, 0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-6 pt-16 sm:px-10 lg:px-14 lg:pt-20">
        <div className="grid gap-12 border-b border-[#f1ebe2]/30 pb-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <a
              href="#top"
              className="font-bebas text-5xl uppercase leading-none tracking-wide sm:text-6xl"
            >
              SIGA Cattle
            </a>
            <p className="mt-5 max-w-xs font-inter text-sm leading-relaxed text-[#f1ebe2]/85">
              Gestão pecuária integrada para acompanhar seu rebanho em qualquer
              lugar, mesmo sem conexão com a internet.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-bebas text-xl uppercase tracking-wide">
              Navegação
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 font-inter text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#f1ebe2]/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-b border-[#f1ebe2]/30 py-5 font-inter text-sm sm:flex-row sm:items-center sm:justify-between">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#f1ebe2]/85 transition-colors hover:text-white"
            aria-label="Instagram do SIGA Cattle"
          >
            <Image src={instagramIcon} alt="" width={20} height={20} />
            Instagram
          </a>
        </div>

        <div className="flex flex-col gap-2 pt-5 font-inter text-xs text-[#f1ebe2]/75 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} SIGA Cattle. Todos os direitos reservados.</span>
          <a href="#top" className="transition-colors hover:text-white">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
