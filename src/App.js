import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Products from "./products";
import Verify from "./verify";

export default function App()
{
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="'/products" element={<Products />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  )
}