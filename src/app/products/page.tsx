import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-slate-950">
      <div className="flex-auto m-4 py-3 px-4 border border-red-600 rounded-xl bg-gray-100 max-w-full">
        <h1 className="text-red-600 text-center">Products Page</h1>
        <Button className="block mx-auto mt-4 bg-red-600 text-white">FSW 7.0</Button>
        <Input placeholder="Bora fechar esse projeto!" className="block max-auto mt-3" />
      </div>
    </div>
  );
}

export default ProductsPage;