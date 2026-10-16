import { comparisons } from "@/src/constants/solutions";
import { ArrowDown, ArrowRight } from "lucide-react";
import ComparisonCopy from "./ComparationCopy";
import Reveal from "../ui/reveal";

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#f1ebe2] px-5 py-16 text-[#2c5128] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(91, 76, 56, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(91, 76, 56, 0.055) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-9 xl:gap-12">
          <Reveal className="flex flex-col gap-4 lg:gap-8 max-w-[min(100%,450px)]">
            <div>
              <p className="bg-[#2c5128] w-fit p-2 mb-4 font-bebas text-base uppercase tracking-[0.18em] text-white sm:px-3 sm:py-2 sm:text-sm">
                A solução
              </p>
              <h2 className="max-w-xl font-bebas flex flex-col gap-2 text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.9]">
                Um só lugar para
                <span className="block">o rebanho inteiro</span>
              </h2>
            </div>
            <p className="max-w-2xl font-inter text-sm leading-relaxed text-[#171915] sm:text-base">
              Aquelas perguntas passam a ter resposta em segundos. O Siga Cattle
              é um aplicativo para anotar o manejo no curral, mesmo sem
              internet, e um painel para acompanhar tudo no escritório.
            </p>
          </Reveal>

          <div className="hidden h-full min-h-[34rem] w-1 bg-[#2c5128] lg:block" />
          <div className="h-1 w-full bg-[#2c5128] lg:hidden" />

          <div className="w-full min-w-0 max-w-full lg:flex-1">
            {/* Mobile: swipeable comparison cards */}
            <div
              aria-label="Comparações entre o manejo atual e o Siga Cattle. Deslize para ver os próximos cartões."
              className="flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:thin] lg:hidden"
            >
              {comparisons.map((item, index) => (
                <Reveal
                  key={item.todayTitle}
                  className="w-full min-w-0 flex-[0_0_100%]"
                  delay={index * 0.06}
                  hover
                >
                  <article className="relative box-border min-w-0 w-full max-w-full flex-[0_0_100%] snap-start border border-[#2c5128] bg-white p-5 shadow-[5px_5px_0_0_#2c5128] sm:p-6">
                    <p className="absolute top-0 right-4 mt-3 ml-5 font-inter font-semibold text-sm uppercase tracking-wide text-[#2c5128]">
                      {index + 1} / {comparisons.length}
                    </p>
                    <ComparisonCopy
                      label="Hoje"
                      title={item.todayTitle}
                      text={item.todayText}
                    />
                    <ArrowDown
                      aria-hidden="true"
                      className="my-4 mx-auto size-5 text-[#2c5128]/65"
                      strokeWidth={1.8}
                    />
                    <div className="border-t border-[#2c5128]/20 pt-4">
                      <ComparisonCopy
                        label="Com o Siga Cattle"
                        title={item.sigaTitle}
                        text={item.sigaText}
                        emphasized
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Desktop: static comparison cards */}
            <div className="hidden flex-col gap-3 lg:flex">
              {comparisons.map((item, index) => (
                <Reveal key={item.todayTitle} delay={index * 0.06} hover>
                  <article className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 border border-[#2c5128] bg-white p-4 shadow-[4px_4px_0_0_#2c5128] xl:gap-4 xl:p-5">
                    <ComparisonCopy
                      label="Hoje"
                      title={item.todayTitle}
                      text={item.todayText}
                    />
                    <ArrowRight
                      aria-hidden="true"
                      className="size-5 shrink-0 text-[#2c5128]"
                      strokeWidth={2}
                    />
                    <ComparisonCopy
                      label="Com o Siga Cattle"
                      title={item.sigaTitle}
                      text={item.sigaText}
                      emphasized
                    />
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-1 text-center font-inter text-xs text-[#2c5128]/60 lg:hidden">
              Deslize para comparar os outros pontos
            </p>
          </div>
        </div>

        <Reveal className="flex flex-col items-center mt-24 gap-8 lg:col-span-3 sm:items-center sm:justify-between">
          <p className="font-bebas text-center text-2xl leading-tight sm:text-3xl">
            Cuide do rebanho com os dados na mão, não com a memória.
          </p>
          <a
            href="#contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[#2c5128] px-7 py-3 font-bebas text-lg uppercase text-[#f1ebe2] shadow-[4px_4px_0_0_#4bd12d] transition-colors hover:bg-[#244421]"
          >
            Quero testar grátis
          </a>
        </Reveal>
      </div>
    </section>
  );
}
