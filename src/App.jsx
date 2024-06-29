import { Route, Routes } from "react-router-dom";
import { Landing, Navbar, Product, ProductList, Cart } from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details/:id/:name" element={<Product />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
