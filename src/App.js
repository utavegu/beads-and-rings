import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import About from "./components/About/About";
import Stocks from "./components/Stocks/Stocks";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <About />
        <Catalog /> */}
        <Stocks />
      </main>
      <Footer />
    </>
  );
}

export default App;
