import type { Metadata, Viewport } from "next";
import { Albert_Sans, Gloock } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { site } from "@/lib/site";
import "./globals.css";

const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloock",
  display: "swap",
});

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Onsky Viagens | Agência de viagens em Foz do Iguaçu",
    template: "%s | Onsky Viagens",
  },
  description:
    "Pacotes nacionais e internacionais e passeios na tríplice fronteira, com acompanhamento do primeiro contato até o retorno. Agência em Foz do Iguaçu.",
  // GitHub Pages preview carries placeholder data: keep it out of search engines.
  robots: process.env.NEXT_PUBLIC_BASE_PATH ? { index: false, follow: false } : undefined,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Onsky Viagens",
    images: ["/img/foz.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a3455",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${gloock.variable} ${albert.variable}`}>
      <body>
        <a href="#conteudo" className="skip">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
