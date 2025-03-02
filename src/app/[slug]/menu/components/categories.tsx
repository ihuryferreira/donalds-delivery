"use client";
import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import Products from "./products";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategory: {
        include: { Product: true }
      }
    };
  }>;
}
type MenuCategoryWithProducts = Prisma.MenuCategoryGetPayload<{
  include: { Product: true },
}>;
const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryWithProducts>(restaurant.menuCategory[0]);

  const handleCategoryClick = (category: MenuCategoryWithProducts) => {
    setSelectedCategory(category);
  };

  const getCategoryButtonVariant = (category: MenuCategoryWithProducts) => {
    return selectedCategory.id === category.id ? "default" : "secondary";
  };

  const [status, setStatus] = useState('Fechado!');
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 8 && hours < 21) {
        setStatus('Aberto!');
      } else {
        setStatus('Fechado!');
      }
    };
    // Checa o status ao carregar o componente
    checkStatus();
    // Define um intervalo para atualizar o status a cada minuto
    const interval = setInterval(checkStatus, 60000);
    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);
  const statusColor = (cor: boolean) => {
    return cor ? 'text-green-500' : 'text-red-500';
  }
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white p-5">
      <div className="flex items-center gap-3">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          // fill
          height={45}
          width={45}
          className="object-cover rounded-t-3xl"
        />
        <div>
          <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          <p className="text-xs opacity-55">{restaurant.description}</p>
        </div>
      </div>
      <div className={`mt-3 flex items-center gap-1 text-xs ${statusColor(status === 'Aberto!')}`}>
        <ClockIcon size={12} />
        <p>{status}</p>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-1 pt-2">
          {restaurant.menuCategory.map((category) => (
            <Button
              onClick={() => handleCategoryClick(category)}
              key={category.id}
              variant={getCategoryButtonVariant(category)}
              size="sm"
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <h3 className="px-5 pt-2 font-semibold">{selectedCategory.name}</h3>
      <Products products={selectedCategory.Product} />
    </div>
  );
}

export default RestaurantCategories;