import Header from "./Components/header/Header.js";
import Navbar from "./Components/navbar/Navbar.js";
import Home from "./pages/Home/Home";
import ProductDetales from "./pages/singleproduct/ProductDetales.js";
import Footer from './Components/footer/Footer';
import Cart from "./pages/cart/Cart.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/product/:id">
          <ProductDetales />
        </Route>

        <Route exact path="/cart">
          <Cart/>
        </Route>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
