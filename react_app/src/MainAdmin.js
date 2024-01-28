import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuperAdmin from "./components/superAdmin/superAdminPannel";
import AllProuct from "./components/superAdmin/allProducts";
import "./App.css";

function MainAdmin() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/superAdmin" element={<SuperAdmin />} />
          <Route path="/allProduct" element={<AllProuct />} />
        </Routes>
      </BrowserRouter>
  );
}

export default MainAdmin;
