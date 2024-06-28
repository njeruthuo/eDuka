import { Route, Routes } from "react-router-dom";
import { Landing, Navbar, Product, ProductList } from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/x" element={<Landing />} />
        <Route path="/details" element={<Product />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </>
  );
}
