import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./nav";
import Home from "./home";
import Products from "./products";
import Verify from "./verify";

const PAYSTACK_SK=process.env.REACT_APP_PAYSTACK_SK

const BASE_URL = process.env.REACT_APP_PAYSTACK_BASE_URL;
const INITIALIZE_URL = `${BASE_URL}` + process.env.REACT_APP_PAYSTACK_INITIALIZE_URL;
const VERIFY_URL = `${BASE_URL}` + process.env.REACT_APP_PAYSTACK_VERIFY_URL
const CALLBACK_URL = process.env.REACT_APP_PAYSTACK_CALLBACK_URL;

export default function App()
{
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products INITIALIZE_URL={INITIALIZE_URL} CALLBACK_URL={CALLBACK_URL} PAYSTACK_SK={PAYSTACK_SK} />} />
          <Route path="/verify" element={<Verify VERIFY_URL={VERIFY_URL} PAYSTACK_SK={PAYSTACK_SK} />} />
        </Routes>
      </Router>
  )
}