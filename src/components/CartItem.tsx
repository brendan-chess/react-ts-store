import { Button, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import items from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import styles from "../styles/CartItem.module.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem } = useCart();
  const item = items.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.imageUrl} className={styles.image} />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className={styles.accent}>{` (${quantity})`}</span>
          )}
        </div>
        <div>{formatCurrency(item.price)}</div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <button className={styles.remove} onClick={() => removeItem(item.id)}>
        X
      </button>
    </Stack>
  );
}
