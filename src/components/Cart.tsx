import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import items from "../data/items.json";
import styles from "../styles/Cart.module.css";

type CartProps = {
  isOpen: boolean;
};

export function Cart({ isOpen }: CartProps) {
  const { closeCart, cartItems } = useCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement={"end"}>
      <Offcanvas.Header className={styles.header} closeButton>
        <Offcanvas.Title className="fs-3">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.body}>
        <Stack gap={4}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            {"Total: "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = items.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
