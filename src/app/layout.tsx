import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eridan Contabilidade | Tradição e Vanguarda desde 1947",
  description:
    "O escritório de contabilidade mais antigo em funcionamento no Rio de Janeiro. 77 anos de tradição aliados à tecnologia e processos modernos para impulsionar sua empresa.",
  keywords: [
    "contabilidade",
    "Rio de Janeiro",
    "escritório contábil",
    "gestão financeira",
    "consultoria tributária",
    "Eridan",
  ],
  openGraph: {
    title: "Eridan Contabilidade | Tradição e Vanguarda desde 1947",
    description:
      "Há 77 anos construindo o futuro da contabilidade. Tradição, tecnologia e atendimento de excelência.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
