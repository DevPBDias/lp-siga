import { challenges } from "@/src/constants/challenges";
import Reveal from "../ui/reveal";

export default function ChallengeSection() {
  return (
    <section
      id="challenge"
      className="relative flex min-h-[min(100svh,760px)] items-center overflow-hidden bg-[#f1ebe2] px-6 py-20 text-[#2c5128] sm:px-10 lg:px-14"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(91, 76, 56, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(91, 76, 56, 0.055) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 lg:grid-cols-[0.9fr_1px_1.25fr] lg:gap-10 xl:gap-14">
        <Reveal className="flex flex-col gap-4 lg:gap-8 max-w-[min(100%,450px)]">
          <div>
            <p className="bg-[#2c5128] w-fit p-2 mb-4 font-bebas text-base uppercase tracking-[0.18em] text-white sm:px-3 sm:py-2 sm:text-sm">
              O problema
            </p>
            <h2 className="max-w-xl font-bebas flex flex-col gap-2 text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.9]">
              Onde os dados
              <span className="text-green-500 block"> do seu rebanho</span>
              <span className="block">estão hoje?</span>
            </h2>
          </div>
          <p className="max-w-2xl font-inter text-sm leading-relaxed text-[#171915] sm:text-base">
            Caderno, ficha, planilha, grupo de WhatsApp. Cada manejo fica em um
            lugar, e na hora de decidir ninguém acha.
          </p>
        </Reveal>

        <div className="hidden h-full min-h-80 w-1 bg-[#2c5128] lg:block" />
        <div className="h-1 w-full bg-[#2c5128] lg:hidden" />

        <div className="flex flex-col gap-5 sm:gap-6">
          <ol className="flex flex-col gap-4 sm:gap-5">
            {challenges.map(({ title }, index) => (
              <li key={title}>
                <Reveal delay={index * 0.08} hover>
                  <article className="flex flex-col items-start gap-3 lg:gap-6 border border-[#2c5128] bg-white px-4 py-3 shadow-[4px_4px_0_0_#2c5128] w-full xl:w-4/5 sm:px-5 sm:py-4">
                    <div className="flex w-full flex-row items-center justify-start gap-3">
                      <span className="font-bebas text-xl leading-none text-[#2c5128]/70 sm:text-2xl sm:leading-none">
                        0{index + 1}
                      </span>
                      <h3 className="font-bebas text-left text-xl uppercase leading-[0.95] sm:text-center sm:text-[clamp(1.1rem,1.6vw,1.5rem)]">
                        {title}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
