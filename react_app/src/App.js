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
import MyOrder from "./components/user/myOrderHistory";
import EditProduct from "./components/seller/editProduct";
import AllUserList from "./components/superAdmin/allUsers";
import AllCategorieList from "./components/superAdmin/allCategorie";
import AllSellerList from "./components/superAdmin/allSellerse";
import AllOrder from "./components/superAdmin/allOrder";
import AdminLogin from "./components/superAdmin/adminLogin";

import Vanta from "./vanta";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/success/:id" element={<ByProduct />} />
          <Route path="/singleCategory/:id" element={<SingleCategory />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="*" element={< />} /> */}
          <Route path="/OrderSummary/:id" element={<OrderSummary />} />
          <Route path="/MyOrder" element={<MyOrder />} />

          <Route path="/adminSelling" element={<SellerPage />} />
          <Route path="/editOneProduct/:id" element={<EditProduct />} />

          <Route path="/superAdmin" element={<SuperAdmin />} />
          <Route path="/allProduct" element={<AllProuct />} />
          <Route path ="/allUser" element={<AllUserList />} />
          <Route path="/allCategory" element={<AllCategorieList />} />
          <Route path="/allSellers" element={<AllSellerList />} />
          <Route path="/allOrderList" element={<AllOrder />} />
          <Route path="/superAdminLogin" element={<AdminLogin />} />

          <Route path="/vanta" element={<Vanta />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
