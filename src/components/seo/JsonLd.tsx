import { siteUrl } from "@/src/constants/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "SIGA Cattle",
        description:
          "Sistema Integrado de Gestão Avançada de Bovinos. Controle identificação, genealogia, reprodução (IATF e FIV), pesagens e vacinas do seu rebanho.",
        inLanguage: "pt-BR",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "SIGA Cattle | Gestão de Rebanho Bovino — Offline e Online",
        isPartOf: { "@id": `${siteUrl}/#website` },
        inLanguage: "pt-BR",
        description:
          "Sistema Integrado de Gestão Avançada de Bovinos. Controle identificação, genealogia, reprodução (IATF e FIV), pesagens e vacinas do seu rebanho. Funciona sem internet no campo e sincroniza automaticamente.",
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/opengraph-image.jpg`,
          width: 1024,
          height: 576,
        },
        potentialAction: {
          "@type": "ReadAction",
          target: [siteUrl],
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: "SIGA Cattle",
        url: siteUrl,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "AgricultureApplication",
        operatingSystem: "Web, Android, iOS",
        description:
          "Sistema Integrado de Gestão Avançada de Bovinos. Gerencie identificação animal, genealogia, reprodução bovina (IATF e FIV), pesagens, vacinas e sanidade do rebanho — com suporte offline no campo.",
        inLanguage: "pt-BR",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
        screenshot: `${siteUrl}/opengraph-image.jpg`,
        featureList: [
          "Gestão de rebanho bovino",
          "Controle de reprodução IATF e FIV",
          "Pesagem e ganho de peso",
          "Genealogia bovina",
          "Rastreabilidade",
          "Vacinação e sanidade",
          "Funciona offline no campo",
          "Sincronização automática",
        ],
        keywords:
          "gestão pecuária, controle de gado, manejo bovino, reprodução bovina, pecuária offline",
        publisher: {
          "@type": "Organization",
          name: "SIGA Cattle",
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/opengraph-image.jpg`,
          },
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "SIGA Cattle",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/opengraph-image.jpg`,
          width: 1024,
          height: 576,
        },
        description:
          "Sistema Integrado de Gestão Avançada de Bovinos para produtores rurais brasileiros.",
        sameAs: [],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
