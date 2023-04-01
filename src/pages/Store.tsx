import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import items from "../data/items.json";
import styles from "../styles/Store.module.css";

export function Store() {
  return (
    <div className="pb-5">
      <h1>Menu</h1>
      <h4 className="pb-4">Shop our selection of coffees and teas</h4>
      <Row lg={3} md={2} xs={1} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
