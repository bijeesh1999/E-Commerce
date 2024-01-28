import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellerPage from "./components/seller/sellerPage";
import SellerProducts from "./components/seller/sellerProducts";
import EditProduct from "./components/seller/editProduct";
import "./App.css";

function Seller() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/adminSelling" element={<SellerPage />} />
          <Route path="/myProducts" element={<SellerProducts/>} />
          <Route path="/editOneProduct/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Seller;
