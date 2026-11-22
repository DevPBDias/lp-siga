import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { NavigationLinks } from "../components/layout/Navigation";
import { cn } from "@/lib/utils";
import Footer from "../components/layout/footer";
import { siteUrl } from "@/src/constants/site";
import { JsonLd } from "@/src/components/seo/JsonLd";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteTitle = "SIGA Cattle | Gestão de Rebanho Bovino";
const siteDescription =
  "Sistema Integrado de Gestão Avançada de Bovinos. Controle identificação, genealogia, reprodução (IATF e FIV), pesagens e vacinas do seu rebanho. Funciona sem internet no campo e sincroniza automaticamente.";
const socialImage = "/opengraph-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | SIGA Cattle",
  },
  description: siteDescription,
  applicationName: "SIGA Cattle",
  authors: [{ name: "SIGA Cattle", url: siteUrl }],
  creator: "SIGA Cattle",
  publisher: "SIGA Cattle",
  category: "Agronegócio",
  keywords: [
    "gestão pecuária",
    "gestão pecuária offline",
    "gestão de rebanho bovino",
    "sistema para pecuária",
    "aplicativo para pecuária",
    "controle de gado",
    "manejo de rebanho bovino",
    "gestão pecuária offline",
    "reprodução bovina IATF",
    "reprodução bovina FIV",
    "pesagem de gado",
    "genealogia bovina",
    "rastreabilidade bovina",
    "vacinação de gado",
    "SIGA Cattle",
    "software pecuária Brasil",
    "app fazenda gado",
    "controle zootécnico",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "SIGA Cattle",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: socialImage,
        width: 1024,
        height: 576,
        alt: "SIGA Cattle — Sistema Integrado de Gestão Avançada de Bovinos",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: socialImage, alt: "SIGA Cattle — Gestão de Rebanho Bovino" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", bebas.variable, inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <NavigationLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
