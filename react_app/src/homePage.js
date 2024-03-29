import React from "react";
import Categorys from "./components/categoryComponent/category";
import Mobiles from "./components/productComponents/mobiles";
import Fasion from "./components/productComponents/fasions";
import Laptops from "./components/productComponents/laptops";
import Electronics from "./components/productComponents/electronics";
import Watches from "./components/productComponents/watches";
import HomeAppliances from "./components/productComponents/homeAppliances";
import Slick from "./slicCorosal/slicCurosel";


function Home(){
    return(
        <>
        <Categorys />
        <div id="homeContainer">
            <Slick />
            <Mobiles />
            <Fasion />
            <Laptops />
            <Electronics />
            <Watches />
            <HomeAppliances />
        </div>
        </>
    )
}

export default Home;