import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <>
      <div className="flex h-dvh flex-col items-center justify-between px-6 pt-9">
        {/* LOGO E TITULO */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            width={82}
            height={82}
          />
          <h2 className="font-semibold">{restaurant.name}</h2>
        </div>
        {/* BEM VINDO */}
        <div className="space-y-2 pt-8 text-center">
          <h3 className="text-3xl font-semibold">Seja bem-vindo!</h3>
          <p className="opacity-55 text-[1rem] mt-4">
            Escolha como prefere aproveitar sua refeição. Estamos aqui para
            oferecer praticidade e sabor em cada detalhe!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-8">
          <ConsumptionMethodOption
            slug={slug}
            option="DINE_IN"
            buttonText="Para comer aqui"
            imageAlt="Comer aqui"
            imageUrl="/dine_in.png"
          />
          <ConsumptionMethodOption
            slug={slug}
            option="TAKEAWAY"
            buttonText="Para levar"
            imageAlt="Para levar"
            imageUrl="/takeaway.png"
          />
        </div>
        <div className="py-3 text-center">
          <p className="text-xs font-normal text-foreground">
            Feito com ❤️ por Ihury Ferreira.
          </p>
          <div className="flex justify-between text-center gap-3 my-3">
            <a
              href="https://www.instagram.com/ihuryferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900 transition"
            >
              <Image
                src="/instagram-icon.png"
                alt="Instagram"
                width={32}
                height={32}
              />
              <span className="font-medium">Instagram</span>
            </a>
            <a
              href="https://br.linkedin.com/in/ihury-ferreira-de-fran%C3%A7a-10b3121b8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="Linkedin"
                width={18}
                height={18}
              />
              <span className="font-medium">Linkedin</span>
            </a>
            <a
              href="https://github.com/ihuryferreira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition"
            >
              <Image
                src="/github.svg"
                alt="Github"
                width={18}
                height={18}
              />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;