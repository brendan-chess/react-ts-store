import styles from "../styles/Home.module.css";
import store from "/images/store.jpg";
import cappuccino from "/images/cappuccino.jpg";
import icedCoffee from "/images/iced-coffee.jpg";
import coldBrew from "/images/cold-brew.jpg";
import chaiLatte from "/images/chai-latte.jpg";
import store2 from "/images/store-2.jpg";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img className={styles.storeImage} src={store} />
        <div className={styles.sectionContent}>
          <h2>Welcome to Roast & Toast, your new favorite coffee shop!</h2>
          <div>
            At Roast & Toast, we're passionate about
            <span style={{ color: "var(--gold)" }}> coffee </span> and
            <span style={{ color: "var(--gold)" }}> community</span>. Our
            mission is to provide you with the highest quality coffee in a warm
            and inviting atmosphere that feels like home.
          </div>
          <button
            className={`${styles.button}`}
            onClick={() => navigate("/store")}
          >
            See our menu {"->"}
          </button>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Extraordinary Coffee and Teas</h2>

          <Row xs={2}>
            <Col>
              <Card
                style={{
                  backgroundColor: "var(--black)",
                  borderColor: "var(--gold)",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <Card.Img
                  src={cappuccino}
                  variant="top"
                  className={styles.itemImage}
                />
              </Card>
              <Card
                style={{
                  backgroundColor: "var(--black)",
                  borderColor: "var(--gold)",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  src={coldBrew}
                  variant="top"
                  className={styles.itemImage}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  backgroundColor: "var(--black)",
                  borderColor: "var(--gold)",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <Card.Img
                  src={icedCoffee}
                  variant="top"
                  className={styles.itemImage}
                />
              </Card>
              <Card
                style={{
                  backgroundColor: "var(--black)",
                  borderColor: "var(--gold)",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  src={chaiLatte}
                  variant="top"
                  className={styles.itemImage}
                />
              </Card>
            </Col>
          </Row>

          <div>
            Our coffee is sourced from the best coffee farms around the world
            and carefully roasted in small batches to bring out the unique
            flavors and aromas of each bean. We offer a wide range of drinks,
            including espresso, cappuccino, latte, cold brew, and more, all
            prepared by our skilled baristas with a touch of artistry and care.
          </div>

          <button
            className={`${styles.button}`}
            onClick={() => navigate("/store")}
          >
            Browse our drinks {"->"}
          </button>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>A Community For Everyone</h2>
          <img src={store2} className={styles.storeImage2} />
          <div>
            Roast & Toast is more than just a coffee shop - it's a community hub
            where people come together to relax, work, and socialize. With free
            Wi-Fi, comfortable seating, and friendly service, Roast & Toast is
            the perfect place to catch up with friends, get some work done, or
            simply unwind after a long day.
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.endSection}>
        <h4>
          So come on in, grab a cup of coffee, and join the Roast & Toast
          family. We can't wait to meet you!
        </h4>
      </div>
    </div>
  );
}
