import { createContext, ReactNode, useContext, useState } from "react";
import { Cart } from "../components/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Item = {
  id: number;
  quantity: number;
};

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartSize: number;
  cartItems: Item[];
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useLocalStorage<Item[]>("cart", []);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const size = items.reduce((quantity, item) => item.quantity + quantity, 0);

  function getItemQuantity(id: number) {
    return items.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id: number) {
    setItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(id: number) {
    setItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
        openCart,
        closeCart,
        cartSize: size,
        cartItems: items,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  );
}
