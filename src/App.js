import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import About from "./components/About/About";
import Stocks from "./components/Stocks/Stocks";
import Cart from "./components/Cart/Cart";
import ProductPage from "./components/Catalog/ProductPage/ProductPage";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/catalog" component={Catalog} exact />
          <Route path="/catalog/:id([0-9]+)?" component={ProductPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/" exact component={MainPage} />
          <Route path="*" component={Page404} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
