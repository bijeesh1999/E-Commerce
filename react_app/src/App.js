import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/headerComponent";
import SingleProduct from "./components/singleData/singleData";
import ByProduct from "./components/byProductComponent/byProduct";
import SingleCategory from "./components/categoryComponent/singleCategoryData";
import Home from "./homePage";
import Cart from "./components/productComponents/cart";
import SellerPage from "./components/seller/sellerPage";
import SuperAdmin from "./components/superAdmin/superAdminPannel";
import AllProuct from "./components/superAdmin/allProducts";
import OrderSummary from "./components/user/orderSummary";
import SellerProducts from "./components/seller/sellerProducts";
import MyOrder from "./components/user/myOrderHistory";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/success/:id" element={<ByProduct />} />
          <Route path="/singleCategory/:id" element={<SingleCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ByProduct />} />
          <Route path="/adminSelling" element={<SellerPage />} />
          <Route path="/superAdmin" element={<SuperAdmin />} />
          <Route path="/allProduct" element={<AllProuct />} />
          <Route path="/OrderSummary/:id" element={<OrderSummary />} />
          <Route path="/myProducts" element={<SellerProducts/>} />
          <Route path="/MyOrder" element={<MyOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
