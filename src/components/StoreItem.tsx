import { Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import styles from "../styles/StoreItem.module.css";

type StoreItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export function StoreItem({
  id,
  name,
  description,
  price,
  imageUrl,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useCart();
  const quantity = getItemQuantity(id);

  return (
    <Card
      className="h-100"
      style={{ backgroundColor: "var(--black)", borderColor: "var(--gold)" }}
    >
      <Card.Img
        height={200}
        src={imageUrl}
        variant="top"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2" style={{ color: "var(--gold)" }}>
            {formatCurrency(price)}
          </span>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              className={styles.addButton}
              onClick={() => increaseItemQuantity(id)}
            >
              + Add To Cart
            </button>
          ) : (
            <div className="d-flex align-items-center">
              <button
                className={styles.removeButton}
                onClick={() => removeItem(id)}
              >
                Remove
              </button>
              <div
                className="d-flex align-items-center justify-content-center ms-auto"
                style={{ gap: "1rem" }}
              >
                <button
                  className={styles.quantityButton}
                  onClick={() => decreaseItemQuantity(id)}
                >
                  -
                </button>
                <div>
                  <span className="fs-4">{quantity}</span> in cart
                </div>
                <button
                  className={styles.quantityButton}
                  onClick={() => increaseItemQuantity(id)}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
