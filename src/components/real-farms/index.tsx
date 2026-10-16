import { ArrowRight } from "lucide-react";
import Image from "next/image";
import pastureImage from "@/src/assets/images/bg-real-farms.png";
import Reveal from "../ui/reveal";

const results = [
  { value: "+780", label: "animais cadastrados" },
  { value: "+250", label: "ciclos reprodutivos registrados" },
  { value: "+30 dias", label: "registrando sem internet" },
];

export default function RealFarmsSection() {
  return (
    <section
      id="real-farms"
      className="relative isolate overflow-hidden bg-[#173318] px-5 py-16 text-[#f1ebe2] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <Image
        src={pastureImage}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#173318]/85"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(241, 235, 226, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(241, 235, 226, 0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto my-8 w-full max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="flex max-w-[min(100%,450px)] flex-col gap-4 lg:gap-8">
            <div>
              <p className="mb-4 w-fit bg-[#f1ebe2] p-2 font-bebas text-base uppercase tracking-[0.18em] text-[#203d1f] sm:px-3 sm:py-2 sm:text-sm">
                Programa de testes
              </p>
              <h2 className="flex flex-col gap-2 font-bebas text-[clamp(2.8rem,5vw,4.5rem)] uppercase leading-[0.9] text-[#f1ebe2]">
                <span>Já funcionando</span>
                <span className="text-[#4bd12d]">em fazenda real</span>
              </h2>
            </div>
            <p className="max-w-2xl font-inter text-sm leading-relaxed text-[#f1ebe2]/90 sm:text-base">
              O Siga Cattle foi validado em uma fazenda parceira, com o rebanho
              e o manejo de verdade. Agora estamos abrindo vagas para mais
              fazendas entrarem no programa de testes.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:gap-5">
            {results.map(({ value, label }, index) => (
              <Reveal key={label} delay={index * 0.1} hover>
                <article
                  className="flex min-h-36 flex-col justify-center border border-[#f1ebe2] bg-[#f1ebe2]/95 p-5 text-center text-[#2c5128] shadow-[4px_4px_0_0_#4bd12d] sm:min-h-40 sm:p-4 lg:min-h-48 lg:p-6"
                >
                  <p className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-none text-[#2c5128]">
                    {value}
                  </p>
                  <p className="mt-3 font-inter text-sm leading-snug text-[#171915] sm:text-xs lg:text-sm">
                    {label}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mx-auto mt-10 w-fit lg:mt-24">
          <a
            href="#contact"
            className="flex min-h-12 items-center justify-center gap-3 bg-[#f1ebe2] px-7 py-3 font-bebas text-lg uppercase text-[#203d1f] shadow-[4px_4px_0_0_#4bd12d] transition-colors hover:bg-white"
          >
            Quero entrar no programa de testes
            <ArrowRight aria-hidden="true" className="size-5" />
          </a>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-2xl text-center sm:mt-10">
          <p className="font-bebas uppercase text-sm leading-relaxed text-[#f1ebe2]/90 sm:text-2xl">
            Quem entra agora ajuda a moldar o aplicativo e recebe acompanhamento
            de perto.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
