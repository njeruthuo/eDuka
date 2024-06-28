import { Route, Routes } from "react-router-dom";
import { Landing, Navbar, Product, ProductList } from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details/:id" element={<Product />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </>
  );
}
