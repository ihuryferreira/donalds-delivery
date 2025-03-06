import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { CartProvider } from "./[slug]/menu/contexts/cart";

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
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
