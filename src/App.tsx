import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

import { Navigation } from "./components/Navigation";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
