"use strict";
exports.__esModule = true;
exports.metadata = void 0;
import "./globals.css";

import { Poppins } from "next/font/google";

import { Toaster as sonner_1 } from "@/components/ui/sonner";

import { CartProvider } from "./[slug]/menu/contexts/cart";
var poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});
exports.metadata = {
    title: "Donalds Delivery",
    description: "Aproveite a conveniência de receber seu pedido em casa com Donald's Delivery. Saboreie o melhor do Donald's sem sair do conforto do seu lar. Peça seu sanduíche preferido e escolha: comer na loja ou levar para casa. Fácil, rápido e delicioso."
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "pt-br" },
        React.createElement("head", null,
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" })),
        React.createElement("body", { className: poppins.className + " antialiased" },
            React.createElement(CartProvider, null, children),
            React.createElement(sonner_1.Toaster, null))));
}
exports["default"] = RootLayout;
