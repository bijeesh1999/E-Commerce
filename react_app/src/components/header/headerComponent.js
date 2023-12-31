import React from "react";
import SearchBar from "./searchBar";
import "./header.css";

function Header() {
  return (
    <React.Fragment>
      <header id="header">
        <div id="logo" className="border">
            <img src="" alt="" />
        </div>
        <SearchBar />
        <div id="cartAndSign">
          <div className="sign up border">sing in</div>
          <div className="cart border">
            <i className="material-symbols-outlined">remove_shopping_cart</i>Cart
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
