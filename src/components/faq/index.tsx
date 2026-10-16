import { FAQQuestion, questions } from "@/src/constants/questions";
import { Plus } from "lucide-react";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f1ebe2] px-6 py-20 text-[#2c5128] sm:px-10 lg:px-14 lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(91, 76, 56, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(91, 76, 56, 0.055) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex max-w-[min(100%,450px)] flex-col gap-4 lg:sticky lg:top-28 lg:self-start lg:gap-8">
          <div>
            <p className="mb-4 w-fit bg-[#2c5128] p-2 font-bebas text-base uppercase tracking-[0.18em] text-white sm:px-3 sm:py-2 sm:text-sm">
              Dúvidas frequentes
            </p>
            <h2 className="flex flex-col gap-2 font-bebas text-[clamp(2.8rem,5vw,4.5rem)] uppercase leading-[0.9]">
              <span>Perguntas</span>
              <span className="text-[#4bd12d]">e respostas</span>
            </h2>
          </div>
          <p className="max-w-2xl font-inter text-sm leading-relaxed text-[#171915] sm:text-base">
            Saiba mais sobre como o Siga Cattle ajuda a organizar a gestão do
            rebanho, no campo e no escritório.
          </p>
        </div>

        <div className="border-t border-[#2c5128]/45">
          {(questions as FAQQuestion[]).map((item) => {
            const links = [
              ...(item.link ? [item.link] : []),
              ...(item.links ?? []),
            ];

            return (
              <details
                key={item.question}
                className="group border-b border-[#2c5128]/45"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bebas text-xl uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden sm:py-6 sm:text-2xl">
                  <span>{item.question}</span>
                  <Plus className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-45 sm:size-6" />
                </summary>
                <div className="max-w-2xl pb-6 pr-10 font-inter text-sm leading-relaxed text-[#171915]">
                  <p>{item.answer}</p>
                  {links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                      {links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noreferrer" : undefined}
                          className="inline-flex font-semibold text-[#2c5128] underline decoration-[#2c5128]/40 underline-offset-4 transition-colors hover:decoration-[#2c5128]"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
