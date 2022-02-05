import Header from "./components/Header";
import Product from './components/Product'
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <ProductProvider>
    <div className="App">
      <Header />
      <Product />
    </div>
    </ProductProvider>
  );
}

export default App;
