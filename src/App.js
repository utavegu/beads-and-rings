import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import CartProvider from './providers/CartProvider'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import About from "./components/About/About";
import Stocks from "./components/Stocks/Stocks";
import Cart from "./components/Cart/Cart";
import ProductPage from "./components/Product/ProductPage";
import Page404 from "./components/Page404/Page404";
import { setCartData } from "./common";

function App() {
  
  if (!localStorage.hasOwnProperty('cart')) setCartData([]);

  return (
    <CartProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/stocks" component={Stocks} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Catalog} exact />
            <Route path="/:id([0-9]+)?" component={ProductPage} exact />
            <Route path="*" component={Page404} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
