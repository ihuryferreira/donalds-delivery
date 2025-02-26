import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Donalds Delivery",
  description: "Aproveite a conveniência de receber seu pedido em casa com Donald's Delivery. Saboreie o melhor do Donald's sem sair do conforto do seu lar. Peça seu sanduíche preferido e escolha: comer na loja ou levar para casa. Fácil, rápido e delicioso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
