import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getCategories } from "../../redux/category/categoryApi";
import { getUsers } from "../../redux/userAuth/userApi";
import { getSellers } from "../../redux/sellerAuth/sellerApi";
import CategoryModal from "./categoryModal";
import UserSeller from "./userSellerModal";



function SuperAdmin(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [categoty,setCategory]=useState(false);
    const [user,setUser]=useState(false);
    const [seller,setSeller]=useState(false)
    const [overlay,setOverlay]=useState(false)
    const [userData,setUsers]=useState()
    const [sellerData,setSellerData]=useState()

    useEffect(()=>{
        dispatch(getCategories());
        dispatch(getUsers());
        dispatch(getSellers())
    },[dispatch])


    const categoryModal=()=>{
        setCategory(true)
        setOverlay(true)
    }
    const allUsers=()=>{
        setUser(true)
        setUsers(users)
        setOverlay(true)
    }

    const allSellers=()=>{
        setSeller(true);
        setSellerData(sellers)
        setOverlay(true)
    }


    const categorie=useSelector((state)=>state.category.categories)
    const users=useSelector((state)=>state.user.allUser)
    const sellers=useSelector((state)=>state.seller.allSellers)


    return(
        <>
        <div className="wraper">
        <div id="menuBar">
            <h1>Header</h1>
            <div id="menuBarButtons">
            <button className="menuButton">hello</button>
            <button className="menuButton">hello</button>
            <button className="menuButton">topper</button>
            <button className="menuButton">log out</button>
            </div>
                
        </div>
            {/* <div className="allDataContainer"> */}
                <div className="dashboard">
                    <div className="allProducts div" onClick={()=>navigate("/allProduct")}>
                        allProducts
                    </div>
                    <div className="allCategories div" onClick={categoryModal}>
                        allCategories
                        {categoty ? <CategoryModal categorie={categorie} /> : null}
                    </div>
                    <div className="allUsers div" onClick={allUsers}>
                        allUsers
                       {user ? <UserSeller users={userData} />:null}
                    </div>
                    <div className="allSellers div"onClick={allSellers}>
                        allSellers
                        {seller ? <UserSeller sellers={sellerData} /> : null}
                    </div>
                </div>
            {/* </div> */}
            {overlay ? <div id="overlay"></div> : null}
        </div>
        </>
    )

}


export default SuperAdmin