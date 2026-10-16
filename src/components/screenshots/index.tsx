"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import homePage from "@/src/assets/images/home-page.png";
import consultPage from "@/src/assets/images/consult-page.png";
import managePage from "@/src/assets/images/manage-page.png";
import calendarPage from "@/src/assets/images/calendar-page.png";
import reproductionPage from "@/src/assets/images/reproduction-page.png";
import semenPage from "@/src/assets/images/semen-page.png";
import Reveal from "../ui/reveal";

const screens = [
  {
    id: "inicio",
    image: homePage,
    tab: "Tela inicial",
    tabDescription: "Resumo e acesso às funções.",
    title: "Tudo do rebanho em um só lugar",
    caption:
      "Acesse consulta, manejo, medidas, reprodução, vacinas e relatórios.",
  },
  {
    id: "ficha-animal",
    image: consultPage,
    tab: "Ficha do animal",
    tabDescription: "Dados e histórico de cada animal.",
    title: "Cada animal com sua história",
    caption: "RGN, série, pais, avós, fotos e situação em uma ficha só.",
  },
  {
    id: "gestao-rebanho",
    image: managePage,
    tab: "Gestão do rebanho",
    tabDescription: "Animais organizados por fazenda.",
    title: "Rebanho organizado por fazenda",
    caption: "Selecione a fazenda e organize os animais conforme a sua gestão.",
  },
  {
    id: "calendario",
    image: calendarPage,
    tab: "Calendário",
    tabDescription: "Eventos e próximos manejos.",
    title: "Eventos e manejos no calendário",
    caption:
      "Acompanhe vacinas, reprodução, nascimentos e lembretes na agenda.",
  },
  {
    id: "reproducao",
    image: reproductionPage,
    tab: "Reprodução",
    tabDescription: "Protocolos e diagnósticos.",
    title: "Todas as datas do protocolo",
    caption:
      "Informe o D0 e acompanhe manejo, inseminação, diagnóstico e monta.",
  },
  {
    id: "semen",
    image: semenPage,
    tab: "Touros e sêmen",
    tabDescription: "Touros e doses disponíveis.",
    title: "Touros e sêmen organizados",
    caption: "Consulte touros e doses de sêmen organizados por raça.",
  },
];

export default function ScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeScreen = screens[activeIndex];
  const reduceMotion = useReducedMotion();

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    let nextIndex = activeIndex;

    if (event.key === "ArrowDown") {
      nextIndex = (activeIndex + 1) % screens.length;
    } else if (event.key === "ArrowUp") {
      nextIndex = (activeIndex - 1 + screens.length) % screens.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = screens.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section
      id="app"
      className="relative overflow-hidden bg-[#f1ebe2] px-5 py-16 text-[#2c5128] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(91, 76, 56, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(91, 76, 56, 0.055) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 lg:grid-cols-[0.72fr_1px_1.28fr] lg:gap-10 xl:gap-14">
        <Reveal className="flex flex-col gap-4 lg:gap-8 max-w-[min(100%,450px)]">
          <div>
            <p className="bg-[#2c5128] w-fit p-2 mb-4 font-bebas text-xs uppercase tracking-[0.18em] text-white sm:px-3 sm:py-2 lg:text-sm">
              Ferramentas para o dia a dia
            </p>
            <h2 className="max-w-xl font-bebas flex flex-col gap-2 text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.9]">
              <span className="block">Conheça o </span>
              <span className="text-green-500 block"> aplicativo</span>
              <span className="block">por dentro</span>
            </h2>
          </div>
          <p className="max-w-2xl lg:pr-8 font-inter text-sm leading-relaxed text-[#171915] sm:text-base">
            Explore as telas do SIGA Cattle e veja como acompanhar o manejo do
            rebanho em cada etapa.
          </p>
        </Reveal>

        <div className="hidden h-full min-h-[34rem] w-1 bg-[#2c5128] lg:block" />
        <div className="h-1 w-full bg-[#2c5128] lg:hidden" />

        <Reveal className="min-w-0">
          {/* Mobile: one swipeable card per app screen */}
          <div className="lg:hidden">
            <div
              aria-label="Telas do aplicativo. Deslize para ver as próximas."
              className="flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:thin]"
            >
              {screens.map((screen, index) => (
                <Reveal
                  key={screen.id}
                  className="box-border w-full min-w-0 flex-[0_0_100%] snap-start"
                  delay={index * 0.05}
                  hover
                >
                  <article className="overflow-hidden border border-[#2c5128] bg-white shadow-[5px_5px_0_0_#2c5128]">
                    <div className="p-4 sm:p-5">
                      <p className="mb-2 font-inter text-xs font-medium uppercase tracking-[0.16em] text-[#2c5128]/65">
                        Tela {index + 1} de {screens.length}
                      </p>
                      <h3 className="font-bebas text-xl uppercase leading-tight sm:text-2xl">
                        {screen.title}
                      </h3>
                      <p className="mt-2 font-inter text-xs leading-relaxed text-[#171915]">
                        {screen.caption}
                      </p>
                    </div>
                    <div className="relative h-[480px] border-t border-[#2c5128]/15 bg-[#e5e9e2]">
                      <Image
                        src={screen.image}
                        alt={`Captura de tela do aplicativo: ${screen.title}`}
                        fill
                        sizes="(min-width: 640px) 80vw, 90vw"
                        className="object-contain p-3 sm:p-5"
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-1 text-center font-inter text-xs text-[#2c5128]/60">
              Deslize para conhecer as outras telas
            </p>
          </div>

          {/* Desktop: vertical tabs beside the selected screenshot */}
          <div className="hidden min-w-0 grid-cols-[minmax(9rem,0.35fr)_minmax(0,0.65fr)] items-stretch gap-6 lg:grid">
            <div
              role="tablist"
              aria-label="Telas do aplicativo"
              aria-orientation="vertical"
              className="flex flex-col gap-2"
            >
              {screens.map((screen, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={screen.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    id={`tab-${screen.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="screenshots-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={handleTabKeyDown}
                    className={`relative flex min-h-12 flex-col items-start justify-center border px-3 py-2.5 text-left transition-all hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-4 sm:py-3 ${
                      isActive
                        ? "border-[#2c5128] bg-[#2c5128] text-[#f1ebe2] shadow-[3px_3px_0_0_#4bd12d]"
                        : "border-[#2c5128]/50 bg-white/70 text-[#2c5128] hover:border-[#2c5128] hover:bg-white"
                    }`}
                  >
                    <span className="font-bebas text-sm uppercase leading-tight sm:text-base lg:text-lg">
                      {screen.tab}
                    </span>
                    <span
                      className={`mt-1 font-inter text-[0.65rem] leading-snug sm:text-xs ${
                        isActive ? "text-[#f1ebe2]/80" : "text-[#171915]/75"
                      }`}
                    >
                      {screen.tabDescription}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id="screenshots-panel"
              role="tabpanel"
              aria-labelledby={`tab-${activeScreen.id}`}
              tabIndex={0}
              className="min-w-0 outline-none focus-visible:ring-2 focus-visible:ring-[#4bd12d]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={activeScreen.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.25 }}
                  className="overflow-hidden border border-[#2c5128] bg-white shadow-[5px_5px_0_0_#2c5128]"
                >
                  <div className="relative h-[clamp(22rem,42vw,34rem)] bg-[#e5e9e2]">
                    <Image
                      key={activeScreen.id}
                      src={activeScreen.image}
                      alt={`Captura de tela do aplicativo: ${activeScreen.title}`}
                      fill
                      sizes="(min-width: 1024px) 42vw, 65vw"
                      className="object-contain p-3 sm:p-5"
                    />
                  </div>
                  <figcaption className="min-h-24 border-t border-[#2c5128]/15 p-4 sm:p-5">
                    <h3 className="font-bebas text-xl uppercase leading-tight sm:text-2xl">
                      {activeScreen.title}
                    </h3>
                    <p className="mt-2 font-inter text-xs leading-relaxed text-[#171915] sm:text-sm">
                      {activeScreen.caption}
                    </p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
