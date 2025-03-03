import { useContext } from 'react';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';

import { CartContext } from '../contexts/cart';

const CartSheet = () => {
  const { isOpen, toggleCart } = useContext(CartContext);
  return (
    <Sheet onOpenChange={toggleCart} open={isOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Area you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete the
            selected items.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;