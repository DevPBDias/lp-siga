"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { whatsappDisplayNumber, whatsappNumber } from "@/src/constants/contact";
import Reveal from "../ui/reveal";

type FormStatus = "idle" | "invalid-name" | "invalid-phone" | "opened";

const fieldClassName =
  "mt-2 w-full border border-[#2c5128]/50 bg-white px-4 py-3 font-inter text-sm text-[#171915] outline-none transition focus:border-[#2c5128] focus:ring-2 focus:ring-[#2c5128]/15";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const customerPhone = String(form.get("whatsapp") ?? "").replace(/\D/g, "");

    if (!name) {
      setStatus("invalid-name");
      return;
    }

    if (customerPhone.length !== 10 && customerPhone.length !== 11) {
      setStatus("invalid-phone");
      return;
    }

    const message = [
      "Olá! Quero testar o Siga Cattle.",
      `Nome: ${name}`,
      `WhatsApp: ${String(form.get("whatsapp") ?? "").trim()}`,
      `Fazenda: ${String(form.get("farm") ?? "").trim() || "Não informado"}`,
      `Cidade: ${String(form.get("location") ?? "").trim() || "Não informado"}`,
      `Rebanho: ${String(form.get("herdSize") ?? "") || "Não informado"}`,
      `Quero controlar: ${String(form.get("interest") ?? "") || "Não informado"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("opened");
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f1ebe2] px-6 py-20 text-[#2c5128] sm:px-10 lg:px-14 lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(91, 76, 56, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(91, 76, 56, 0.055) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="flex max-w-[min(100%,450px)] flex-col gap-4 lg:gap-8">
          <div>
            <p className="mb-4 w-fit bg-[#2c5128] p-2 font-bebas text-base uppercase tracking-[0.18em] text-white sm:px-3 sm:py-2 sm:text-sm">
              Comece por aqui
            </p>
            <h2 className="flex flex-col gap-2 font-bebas text-[clamp(2.8rem,5vw,4.5rem)] uppercase leading-[0.9]">
              <span>Peça seu acesso</span>
              <span className="text-[#4bd12d]">de teste</span>
            </h2>
          </div>
          <p className="max-w-2xl font-inter text-sm leading-relaxed text-[#171915] sm:text-base">
            Conte um pouco sobre a sua fazenda. Respondemos pelo WhatsApp e
            ajudamos você a começar com o seu próprio rebanho.
          </p>

          <ul className="space-y-4 font-inter text-sm text-[#171915]">
            {[
              "Teste com os seus animais, não com dados de exemplo",
              "Ajuda para colocar o rebanho no aplicativo",
              "Sem compromisso",
            ].map((point, index) => (
              <li key={point}>
                <Reveal
                  delay={index * 0.07}
                  className="flex items-start gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 bg-[#4bd12d]"
                  />
                  {point}
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="h-full">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="h-full border border-[#2c5128] bg-white p-5 shadow-[6px_6px_0_0_#2c5128] sm:p-8"
          >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="font-inter text-sm font-medium text-[#2c5128]">
              Seu nome
              <input
                className={fieldClassName}
                name="name"
                autoComplete="name"
                required
              />
            </label>
            <label className="font-inter text-sm font-medium text-[#2c5128]">
              WhatsApp
              <input
                className={fieldClassName}
                name="whatsapp"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(63) 99999-9999"
                aria-describedby="whatsapp-hint"
                required
              />
              <span
                id="whatsapp-hint"
                className="mt-1 block text-xs font-normal text-[#171915]/65"
              >
                Inclua o DDD.
              </span>
            </label>
            <label className="font-inter text-sm font-medium text-[#2c5128]">
              Cidade e estado
              <input
                className={fieldClassName}
                name="location"
                autoComplete="address-level2"
                placeholder="Ex.: Palmas, TO"
              />
            </label>
            <label className="font-inter text-sm font-medium text-[#2c5128]">
              Nome da fazenda
              <input className={fieldClassName} name="farm" />
            </label>
            <label className="font-inter text-sm font-medium text-[#2c5128] sm:col-span-2">
              Tamanho do rebanho
              <select
                className={fieldClassName}
                name="herdSize"
                defaultValue=""
              >
                <option value="">Selecione uma faixa</option>
                <option>Até 100 cabeças</option>
                <option>101 a 500 cabeças</option>
                <option>501 a 2.000 cabeças</option>
                <option>Mais de 2.000 cabeças</option>
              </select>
            </label>
            <label className="font-inter text-sm font-medium text-[#2c5128] sm:col-span-2">
              O que você mais quer controlar?
              <select
                className={fieldClassName}
                name="interest"
                defaultValue=""
              >
                <option value="">Selecione uma opção</option>
                <option>Reprodução (IATF/FIV)</option>
                <option>Rebanho e genealogia</option>
                <option>Pesagens e vacinas</option>
                <option>Vendas e clientes</option>
                <option>Tudo isso</option>
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-[#2c5128] px-6 py-3 font-bebas text-lg uppercase text-[#f1ebe2] shadow-[4px_4px_0_0_#4bd12d] transition-colors hover:bg-[#244421]"
          >
            Enviar pelo WhatsApp
          </button>

          <p className="mt-4 font-inter text-xs leading-relaxed text-[#171915]/70">
            Usamos seus dados só para falar sobre o Siga Cattle. Veja a{" "}
            {process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL ? (
              <a
                href={process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                política de privacidade
              </a>
            ) : (
              <span>política de privacidade</span>
            )}
            .
          </p>

          {status !== "idle" && (
            <p
              role={status === "opened" ? "status" : "alert"}
              className="mt-4 border-l-2 border-[#2c5128] pl-3 font-inter text-sm text-[#2c5128]"
            >
              {status === "invalid-name" && "Informe seu nome."}
              {status === "invalid-phone" &&
                "Confira o número: digite o DDD e o telefone, com 10 ou 11 dígitos."}
              {status === "opened" && (
                <>
                  Pronto! Abrimos o WhatsApp com a sua mensagem. É só apertar
                  enviar. Se ele não abriu, chame direto em{" "}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline underline-offset-2"
                  >
                    {whatsappDisplayNumber}
                  </a>
                  .
                </>
              )}
            </p>
          )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
