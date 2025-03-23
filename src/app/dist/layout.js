"use strict";
import "./globals.css";

import { Poppins } from "next/font/google";

import { Toaster } from "@/components/ui/sonner"; // Ajustado para não usar alias no import

import { CartProvider } from "./[slug]/menu/contexts/cart";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Donalds Delivery",
    description:
        "Aproveite a conveniência de receber seu pedido em casa com Donald's Delivery. Saboreie o melhor do Donald's sem sair do conforto do seu lar. Peça seu sanduíche preferido e escolha: comer na loja ou levar para casa. Fácil, rápido e delicioso.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body className={`${poppins.className} antialiased`}>
                <CartProvider>{children}</CartProvider>
                <Toaster />
            </body>
        </html>
    );
}
