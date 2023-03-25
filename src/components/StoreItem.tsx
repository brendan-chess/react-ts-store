import { Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export function StoreItem({ id, name, price, imageUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        height={200}
        src={imageUrl}
        variant="top"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "1rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "1rem" }}
              >
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeItem(id)} variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
