import { whatsappNumber } from "@/src/constants/contact";

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export type FAQLink = { href: string; label: string; external?: boolean };

export type FAQQuestion = {
  question: string;
  answer: string;
  link?: FAQLink;
  links?: FAQLink[];
};

export const questions: FAQQuestion[] = [
  {
    question: "O Siga Cattle funciona sem internet?",
    answer:
      "Sim. Os dados ficam no seu aparelho, e você registra e consulta tudo no campo, sem sinal. Quando voltar para uma área com internet, abra o aplicativo para enviar os registros.",
  },
  {
    question: "Quanto custa?",
    answer:
      "O teste é gratuito por 3 meses. Depois, o Siga Cattle será oferecido por assinatura, e você conhece o valor antes de qualquer cobrança. Chame no WhatsApp e conte o tamanho do seu rebanho.",
    link: {
      href: whatsappLink("Olá! Quero saber os valores do Siga Cattle."),
      label: "Pedir valores no WhatsApp",
      external: true,
    },
  },
  {
    question: "Preciso ter animais registrados na ABCZ para usar?",
    answer:
      "Não. Quem tem registro informa o RGN e a série RGD. Quem não tem cadastra o animal do jeito que o identifica hoje, e o aplicativo ajuda a manter o histórico completo de cada animal.",
  },
  {
    question: "Quais informações do rebanho posso acompanhar?",
    answer:
      "Identificação e genealogia, pesagens e ganho de peso, vacinas, eventos de reprodução (IATF e FIV), vendas, trocas e mortes. Também o estoque de sêmen, por touro e raça.",
  },
  {
    question: "O Siga Cattle tem aplicativo e painel web?",
    answer:
      "Sim. O aplicativo é para o dia a dia no campo. O painel web mostra o histórico do rebanho para quem gerencia no escritório.",
  },
  {
    question: "Meus dados ficam seguros? Eles continuam sendo meus?",
    answer:
      "Os dados são seus. Eles ficam guardados na nuvem, e você pode pedir uma cópia a qualquer momento. Para saber como tratamos suas informações, veja a política de privacidade.",
    link: process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL
      ? {
          href: process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL,
          label: "Política de privacidade",
          external: true,
        }
      : undefined,
  },
  {
    question: "Posso trazer meus animais de uma planilha?",
    answer:
      "Sim, se for a planilha de animais da ABCZ. Por enquanto importamos só esse modelo. Se a sua for outra, ajudamos você a cadastrar o rebanho no começo do teste.",
  },
  {
    question: "Funciona em qualquer celular?",
    answer:
      "Foi testado em celulares Android, como Samsung e Xiaomi, e funciona pelo navegador, sem loja de aplicativos. Se você usa outro aparelho, peça o acesso de teste e confirmamos com você.",
    link: { href: "#contact", label: "Pedir acesso de teste" },
  },
  {
    question: "Posso usar com mais de uma fazenda e vários funcionários?",
    answer:
      "Sim. Cada animal fica ligado à sua fazenda, e você escolhe qual ver. Cada fazenda pode ter até 3 usuários.",
  },
  {
    question: "Tenho suporte se tiver dúvida?",
    answer:
      "Sim, pelo WhatsApp, em horário comercial. Quem está no programa de testes recebe acompanhamento de perto.",
    link: {
      href: whatsappLink("Olá! Tenho uma dúvida sobre o Siga Cattle."),
      label: "Chamar no WhatsApp",
      external: true,
    },
  },
  {
    question: "Como posso conhecer o aplicativo?",
    answer:
      "Peça um acesso de teste pelo formulário ou chame no WhatsApp. Você também pode ver no vídeo a ideia do projeto e algumas telas.",
    links: [
      { href: "#contact", label: "Pedir acesso de teste" },
      { href: "#demo", label: "Ver o vídeo" },
    ],
  },
];
