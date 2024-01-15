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
import "./App.css";
import AllProuct from "./components/superAdmin/allProducts";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
