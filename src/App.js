import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import About from "./components/About/About";
import Stocks from "./components/Stocks/Stocks";
import Cart from "./components/Cart/Cart";
import ProductPage from "./components/Catalog/ProductPage/ProductPage";

function App() {
  return (
    <>
      <Header />
      <main>
        {/*
        <About />
        <Catalog /> 
        <Stocks />
        <Cart />
        */}
        <ProductPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
