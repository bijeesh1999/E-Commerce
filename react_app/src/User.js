import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/headerComponent";
import SingleProduct from "./components/singleData/singleData";
import ByProduct from "./components/byProductComponent/byProduct";
import SingleCategory from "./components/categoryComponent/singleCategoryData";
import Home from "./homePage";
import Cart from "./components/productComponents/cart";
import OrderSummary from "./components/user/orderSummary";
import MyOrder from "./components/user/myOrderHistory";
import Seller from "./Seller";
import "./App.css";

function User() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/success/:id" element={<ByProduct />} />
          <Route path="/singleCategory/:id" element={<SingleCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ByProduct />} />
          <Route path="/OrderSummary/:id" element={<OrderSummary />} />
          <Route path="/MyOrder" element={<MyOrder />} />
          <Route path="/Seller" element={<Seller />} />
        </Routes>
      </BrowserRouter>
  );
}

export default User;
