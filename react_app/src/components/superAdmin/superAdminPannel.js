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
    const [userData,setUsers]=useState()
    const [sellerData,setSellerData]=useState()

    useEffect(()=>{
        dispatch(getCategories());
        dispatch(getUsers());
        dispatch(getSellers())
    },[dispatch])


    const categoryModal=()=>{
        setCategory(true)
    }
    const allUsers=()=>{
        setUser(true)
        setUsers(users)
    }

    const allSellers=()=>{
        setSeller(true);
        setSellerData(sellers)
    }


    const categorie=useSelector((state)=>state.category.categories)
    const users=useSelector((state)=>state.user.allUser)
    const sellers=useSelector((state)=>state.seller.allSellers)


    return(
        <>
        <header id="superHeader">
            <h1>Header</h1>
        </header>
        <div className="wraper">
            <div className="allDataContaine">
                <div className="dashboard">
                    <div className="allProducts" onClick={()=>navigate("/allProduct")}>
                        allProducts
                    </div>
                    <div className="allCategories" onClick={categoryModal}>
                        allCategories
                        {categoty ? <CategoryModal categorie={categorie}/> : null}
                    </div>
                    <div className="allUsers" onClick={allUsers}>
                        allUsers
                       {user ? <UserSeller users={userData} />:null}
                    </div>
                    <div className="allSellers"onClick={allSellers}>
                        allSellers
                        {seller ? <UserSeller sellers={sellerData} /> : null}
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}


export default SuperAdmin