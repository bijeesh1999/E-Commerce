
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

    const data=sellers?.allSellers?.map((data)=>data);
    const page=sellers.totalPage;

    return(
        <>
        <UserSeller data={data&&data[0]} totalPage={page}/>
        </>
    )


}

export default AllSellerList;