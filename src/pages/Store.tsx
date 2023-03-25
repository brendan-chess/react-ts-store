import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import items from "../data/items.json";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      {/* Display 3 columns for large screens, 2 columns for medium screens, and 1 column for extra small screens */}
      {/* g-3 adds a gap between each item vertically and horizontally */}
      <Row lg={3} md={2} xs={1} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
