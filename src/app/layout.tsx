import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { NavigationLinks } from "../components/layout/Navigation";
import { cn } from "@/lib/utils";
import Footer from "../components/layout/footer";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteTitle = "SIGA Cattle | Gestão de rebanho bovino, mesmo sem internet";
const siteDescription =
  "Organize identificação, genealogia, reprodução, pesagens e vacinas do rebanho em um só lugar. Registre no campo sem sinal e acompanhe tudo pelo painel web.";
const socialImage = "/opengraph-image.jpg";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: siteTitle,
    template: "%s | SIGA Cattle",
  },
  description: siteDescription,
  applicationName: "SIGA Cattle",
  category: "Agronegócio",
  keywords: [
    "gestão pecuária",
    "gestão de rebanho bovino",
    "aplicativo para pecuária",
    "controle de gado",
    "manejo de rebanho",
    "gestão pecuária offline",
    "reprodução bovina IATF e FIV",
    "pesagem de gado",
    "genealogia bovina",
  ],
  alternates: siteUrl ? { canonical: "/" } : undefined,
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
    ...(siteUrl ? { url: siteUrl } : {}),
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "SIGA Cattle — gestão de rebanho bovino no campo e no escritório",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", bebas.variable, inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <NavigationLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
