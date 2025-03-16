"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var google_1 = require("next/font/google");
var cart_1 = require("./[slug]/menu/contexts/cart");
var sonner_1 = require("@/components/ui/sonner");
var poppins = google_1.Poppins({
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
            React.createElement(cart_1.CartProvider, null, children),
            React.createElement(sonner_1.Toaster, null))));
}
exports["default"] = RootLayout;
