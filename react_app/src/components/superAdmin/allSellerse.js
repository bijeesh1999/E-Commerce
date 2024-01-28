
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserSeller from "./userSellerModal";
import { getSellers } from "../../redux/sellerAuth/sellerApi";

function AllSellerList(){
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getSellers())
    },[])

    const sellers=useSelector((state)=>state.seller.allSellers)

    return(
        <>
        <UserSeller data={sellers}/>
        </>
    )


}

export default AllSellerList;